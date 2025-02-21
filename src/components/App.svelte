<script>
  let showMoreIntro = false;
  let showMoreMethods = false;
  import Map from "$lib/Map.svelte";
</script>

<main class="container">
  <!-- Navigation -->
  <nav>
    <ul>
      <li><a href="#introduction">Introduction</a></li>
      <li><a href="#methods">Methods</a></li>
      <li><a href="#results">Results</a></li>
      <li><a href="#future-work">Future Work</a></li>
      <li><a href="#resources">Resources</a></li>
    </ul>
  </nav>

  <!-- Introduction -->
  <section id="introduction">
    <h1>EVCS-OPTIM: Optimizing EV Charging Station Placement</h1>
    <p>Electric vehicle adoption is growing rapidly, but charging station placement remains a challenge. This project provides a data-driven tool to strategically determine optimal locations for new EV charging stations.</p>
    <button on:click={() => showMoreIntro = !showMoreIntro}>
      {showMoreIntro ? "Show Less" : "Read More"}
    </button>
    {#if showMoreIntro}
      <p>By analyzing traffic patterns, population density, energy grid constraints, and proximity to existing infrastructure, we create a model that recommends the best locations for new EV charging stations.</p>
    {/if}
  </section>

  <!-- Literature Review -->
  <section id="literature-review">
    <h2>Literature Review</h2>
    <p>Our approach was inspired by various studies that used optimization and machine learning to determine EV charging station locations. Initially, we considered ML models but found optimization scoring to be a more effective strategy.</p>
  </section>

  <!-- Data Sources -->
  <section id="data">
    <h2>Data Sources</h2>
    <ul>
      <li><strong>AFDC:</strong> Public charging station locations and specifications</li>
      <li><strong>SDG&E:</strong> Energy usage data and grid constraints</li>
      <li><strong>SANDAG:</strong> Demographic and income data</li>
      <li><strong>CA DMV:</strong> Vehicle registration data</li>
    </ul>
  </section>

  <!-- Methods -->
  <section id="methods">
    <h2>Methodology</h2>
    <p>Each parking lot is evaluated based on multiple factors, including:</p>
    <ul>
      <li>Traffic volume and proximity to major roads</li>
      <li>Population density and demographics</li>
      <li>Existing EV charging infrastructure</li>
      <li>Energy grid capacity</li>
    </ul>
    <button on:click={() => showMoreMethods = !showMoreMethods}>
      {showMoreMethods ? "Show Less" : "Read More"}
    </button>
    {#if showMoreMethods}
      <p>Data is normalized using Min-Max scaling, and weighted using feature importance analysis. The final score ranks parking lots for optimal EV charger placement.</p>
    {/if}
  </section>

  <!-- Interactive Map -->
  <section id="map-section">
    <h2>Interactive EV Charging Demand Map</h2>
    <p>The interactive map below shows parking lots with their corresponding demand scores for optimal EV charging station placement.</p>
    <Map />
  </section>

  <!-- Results -->
  <section id="results">
    <h2>Results</h2>
    <p>The following map highlights the recommended parking lots for EV charging station placement.</p>
    <!-- Placeholder for an interactive map -->
    <div id="map-container">
      <p>(Interactive map coming soon!)</p>
    </div>
  </section>

  <!-- Future Work -->
  <section id="future-work">
    <h2>Future Work</h2>
    <ul>
      <li>Incorporate real-time charging station usage data</li>
      <li>Develop AI-driven optimization algorithms</li>
      <li>Expand model to include private parking facilities</li>
    </ul>
  </section>

  <!-- Resources -->
  <section id="resources">
    <h2>Resources</h2>
    <p><a href="https://github.com/your-repo">GitHub Repository</a></p>
    <p><a href="report.pdf">Full Project Report</a></p>
  </section>
</main>

<style>
  .container {
    max-width: 800px;
    margin: auto;
    padding: 20px;
  }
  nav {
    position: sticky;
    top: 0;
    background: white;
    padding: 10px;
    border-bottom: 2px solid #ddd;
  }
  nav ul {
    list-style: none;
    display: flex;
    gap: 20px;
  }
  h1, h2 {
    color: #0077cc;
  }
  button {
    background-color: #0077cc;
    color: white;
    border: none;
    padding: 10px;
    cursor: pointer;
  }
  #map-container {
    width: 100%;
    height: 400px;
    background: #eee;
    text-align: center;
    line-height: 400px;
  }
</style>
