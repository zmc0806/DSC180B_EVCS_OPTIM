<script>
  import { onMount } from 'svelte';
  import * as d3 from 'd3';


  let data = [
    { year: 2011, ports: 5070,   stations: 2100 },
    { year: 2012, ports: 14982,  stations: 6200 },
    { year: 2013, ports: 19472,  stations: 8100 },
    { year: 2014, ports: 25944,  stations: 10977 },
    { year: 2015, ports: 34333,  stations: 14138 },
    { year: 2016, ports: 45441,  stations: 17810 },
    { year: 2017, ports: 52450,  stations: 19965 },
    { year: 2018, ports: 64249,  stations: 23517 },
    { year: 2019, ports: 85339,  stations: 27031 },
    { year: 2020, ports: 107561, stations: 30172 },
    { year: 2021, ports: 128904, stations: 40774 },
    { year: 2022, ports: 151273, stations: 57482 },
    { year: 2023, ports: 184098, stations: 68475 }
  ];

  // ======= 2. Chart dimensions and margins =======
  let chartWidth = 700;
  let chartHeight = 450;
  let margin = { top: 40, right: 160, bottom: 50, left: 60 };

  // Variables to control the visibility of the two lines
  let showPorts = true;
  let showStations = true;

  // Variables to store key selectors and lengths for replaying the animation
  let pathPorts, pathStations;
  let circlesPorts, circlesStations;
  let totalLengthPorts = 0;
  let totalLengthStations = 0;

  onMount(() => {
    drawChart();
  });

  /**
   * Main draw function: Initializes the SVG, axes, legend, and plays the initial animation.
   */
  function drawChart() {
    // 1) Create the SVG element
    const svg = d3.select('#chart')
      .append('svg')
      .attr('width', chartWidth)
      .attr('height', chartHeight);

    const width = chartWidth - margin.left - margin.right;
    const height = chartHeight - margin.top - margin.bottom;

    // 2) Define the scales
    const xScale = d3.scaleLinear()
      .domain(d3.extent(data, d => d.year))
      .range([0, width]);

    const yScale = d3.scaleLinear()
      .domain([0, d3.max(data, d => Math.max(d.ports, d.stations))])
      .range([height, 0])
      .nice();

    // 3) Create the main group element ('g')
    const g = svg.append('g')
      .attr('transform', `translate(${margin.left}, ${margin.top})`);

    // 4) Create the axes
    const xAxis = d3.axisBottom(xScale).tickFormat(d3.format('d'));
    const yAxis = d3.axisLeft(yScale);

    g.append('g')
      .attr('transform', `translate(0, ${height})`)
      .call(xAxis);

    g.append('g')
      .call(yAxis);

    // 5) Create the line generators
    const linePorts = d3.line()
      .x(d => xScale(d.year))
      .y(d => yScale(d.ports))
      .curve(d3.curveMonotoneX);

    const lineStations = d3.line()
      .x(d => xScale(d.year))
      .y(d => yScale(d.stations))
      .curve(d3.curveMonotoneX);

    // 6) Draw the two lines and store them in global variables for replaying the animation
    pathPorts = g.append('path')
      .datum(data)
      .attr('fill', 'none')
      .attr('stroke', 'steelblue')
      .attr('stroke-width', 2)
      .attr('d', linePorts);

    pathStations = g.append('path')
      .datum(data)
      .attr('fill', 'none')
      .attr('stroke', 'orange')
      .attr('stroke-width', 2)
      .attr('d', lineStations);

    // Calculate the total length of both lines
    totalLengthPorts = pathPorts.node().getTotalLength();
    totalLengthStations = pathStations.node().getTotalLength();

    // 7) Draw circles for each data point and store them as well
    circlesPorts = g.selectAll('.circlePorts')
      .data(data)
      .enter()
      .append('circle')
      .attr('class', 'circlePorts')
      .attr('cx', d => xScale(d.year))
      .attr('cy', d => yScale(d.ports))
      .attr('r', 3)
      .attr('fill', 'steelblue');

    circlesStations = g.selectAll('.circleStations')
      .data(data)
      .enter()
      .append('circle')
      .attr('class', 'circleStations')
      .attr('cx', d => xScale(d.year))
      .attr('cy', d => yScale(d.stations))
      .attr('r', 3)
      .attr('fill', 'orange');

    // 8) Create a legend group (placed in the top right)
    const legend = svg.append('g')
      .attr('transform', `translate(${margin.left + width + 10}, ${margin.top})`)
      .style('font-size', '14px');

    // Function to update visibility of lines and circles based on showPorts/showStations flags
    function updateVisibility() {
      pathPorts.style('display', showPorts ? null : 'none');
      circlesPorts.style('display', showPorts ? null : 'none');

      pathStations.style('display', showStations ? null : 'none');
      circlesStations.style('display', showStations ? null : 'none');
    }

    // Legend item 1: EV Charging Ports
    const legendPorts = legend.append('g')
      .attr('transform', 'translate(0, 0)')
      .style('cursor', 'pointer')
      .on('click', () => {
        showPorts = !showPorts;
        updateVisibility();
      });

    legendPorts.append('rect')
      .attr('width', 10)
      .attr('height', 10)
      .attr('fill', 'steelblue');

    legendPorts.append('text')
      .attr('x', 20)
      .attr('y', 10)
      .text('EV Charging Ports')
      .attr('alignment-baseline', 'middle');

    // Legend item 2: Station Locations
    const legendStations = legend.append('g')
      .attr('transform', 'translate(0, 20)')
      .style('cursor', 'pointer')
      .on('click', () => {
        showStations = !showStations;
        updateVisibility();
      });

    legendStations.append('rect')
      .attr('width', 10)
      .attr('height', 10)
      .attr('fill', 'orange');

    legendStations.append('text')
      .attr('x', 20)
      .attr('y', 10)
      .text('Station Locations')
      .attr('alignment-baseline', 'middle');

    // 9) Create a tooltip
    const tooltip = d3.select('#chart')
      .append('div')
      .style('position', 'absolute')
      .style('background', '#fff')
      .style('padding', '6px')
      .style('border', '1px solid #ccc')
      .style('border-radius', '4px')
      .style('visibility', 'hidden')
      .style('pointer-events', 'none');

    function showTooltip(event, d, key) {
      const [x, y] = d3.pointer(event);
      tooltip
        .style('top', (y + 20) + 'px')
        .style('left', (x + 20) + 'px')
        .style('visibility', 'visible')
        .html(`
          <strong>Year:</strong> ${d.year}<br>
          <strong>${key}:</strong> ${d[key].toLocaleString()}
        `);
    }

    function moveTooltip(event, d) {
      const [x, y] = d3.pointer(event);
      tooltip
        .style('top', (y + 20) + 'px')
        .style('left', (x + 20) + 'px');
    }

    function hideTooltip() {
      tooltip.style('visibility', 'hidden');
    }

    circlesPorts
      .on('mouseover', (event, d) => showTooltip(event, d, 'ports'))
      .on('mousemove', moveTooltip)
      .on('mouseout', hideTooltip);

    circlesStations
      .on('mouseover', (event, d) => showTooltip(event, d, 'stations'))
      .on('mousemove', moveTooltip)
      .on('mouseout', hideTooltip);

    // On initial render, update visibility (default shows both) and then play the animation
    updateVisibility();
    animateChart();
  }

  /**
   * Function to play (or replay) the animation:
   * - Lines are drawn from left to right using stroke-dasharray and stroke-dashoffset.
   * - Circles appear by transitioning from radius 0 to 3.
   */
  function animateChart() {
    // Animate the lines using stroke-dasharray and stroke-dashoffset
    pathPorts
      .attr('stroke-dasharray', totalLengthPorts)
      .attr('stroke-dashoffset', totalLengthPorts)
      .transition()
      .duration(2000)
      .ease(d3.easeLinear)
      .attr('stroke-dashoffset', 0);

    pathStations
      .attr('stroke-dasharray', totalLengthStations)
      .attr('stroke-dashoffset', totalLengthStations)
      .transition()
      .duration(2000)
      .ease(d3.easeLinear)
      .attr('stroke-dashoffset', 0);

    // Animate the circles by transitioning from radius 0 to 3
    circlesPorts
      .attr('r', 0)
      .transition()
      .delay((d, i) => i * 100) // Appear sequentially; adjust as needed
      .duration(500)
      .attr('r', 3);

    circlesStations
      .attr('r', 0)
      .transition()
      .delay((d, i) => i * 100)
      .duration(500)
      .attr('r', 3);
  }

  /**
   * Function called when the "Replay" button is clicked:
   * Interrupts any ongoing animations, resets states, and replays the animation.
   */
  function replayAnimation() {
    // 1) Interrupt any ongoing animations to avoid stacking
    pathPorts.interrupt();
    pathStations.interrupt();
    circlesPorts.interrupt();
    circlesStations.interrupt();

    // 2) Reset elements to their initial state
    pathPorts
      .attr('stroke-dasharray', totalLengthPorts)
      .attr('stroke-dashoffset', totalLengthPorts);
    pathStations
      .attr('stroke-dasharray', totalLengthStations)
      .attr('stroke-dashoffset', totalLengthStations);

    circlesPorts.attr('r', 0);
    circlesStations.attr('r', 0);

    // 3) Replay the animation
    animateChart();
  }
</script>

<style>
  #chart {
    position: relative; /* So the tooltip can be absolutely positioned */
    margin: 0 auto;
    max-width: 900px;
  }

  /* Simple example button styling; adjust as needed */
  button {
    margin: 16px 0;
    padding: 6px 12px;
    font-size: 14px;
    cursor: pointer;
  }
</style>

<!-- "Replay" button: click to replay the animation -->
<button on:click={replayAnimation}>
  Replay Animation
</button>

<div id="chart"></div>
