<script>
  let showMoreIntro = false;
  let showMoreMethods = false;
  import Map from "$lib/Map.svelte";
  import Map1 from "$lib/Map1.svelte";
  import Map2 from "$lib/Map2.svelte";

  import { onMount } from "svelte";
  let base = "/DSC180B_EVCS_OPTIM";
  import EVChargingChart from '$lib/EVChargingChart.svelte';


</script>

<main class="container">

  <div class="corner-images">
    <img src="/hdsi-blue-gold.png" alt="Left Decoration" class="corner left" />
    <img src="/sdge-logo.png" alt="Right Decoration" class="corner right" />
  </div>

  <div class="floating-icons">
    <img src="/ev-icon.svg" alt="EV Icon" class="icon icon-1" />
    <img src="/ev-icon.svg" alt="EV Icon" class="icon icon-2" />
    <img src="/ev-icon.svg" alt="EV Icon" class="icon icon-3" />
  </div>

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


  <!-- ✅ New Summary Section Before Literature Review -->
  <section id="ev-summary">
    <h2>Electric Vehicle Growth & Charging Infrastructure</h2>
    <p>
      The electric vehicle (EV) industry is expanding rapidly due to technological advancements and increasing environmental awareness. 
      By 2030, EVs are projected to make up over <strong>30% of new vehicle sales</strong> in the U.S. 
      California leads this transition, targeting <strong>100% zero-emission vehicle sales by 2035</strong>.
    </p>
    <p>
      However, insufficient charging infrastructure presents a major challenge. In San Diego, where EV registrations have doubled since 2022, 
      a well-distributed charging network is essential to combat "charging deserts" and range anxiety.
    </p>

    <EVChargingChart />



    <p>
      Our study aims to optimize EV charger placement by analyzing key factors such as cost, network proximity, and demand incentives. 
      Understanding these relationships allows us to strategically position new EV charging stations where they are most needed.
    </p>
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
    <h2>public parking lots</h2>
    <p>The interactive map below shows public parking lots.</p>
    <Map1 />

    <h2>Map of Public Parking Lots Overlaid by City Zoning</h2>
    <p>The interactive map below shows public parking lots overlaid by city zoning.</p>
    <Map2 />
  </section>

  <!-- Results -->
  <section id="results">
    <h2>Results</h2>
    <p>The following map highlights the recommended parking lots for EV charging station placement.</p>
    <!-- Placeholder for an interactive map -->

    <Map />
  
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
    <p><a href="https://github.com/ericstratford/charger-optimization">Project GitHub Repository</a></p>
    <p><a href="https://github.com/zmc0806/DSC180B_EVCS_OPTIM">Website GitHub Repository</a></p>
    <p><a href="report.pdf">Full Project Report</a></p>
  </section>
</main>

<style>
  .corner-images {
    position: fixed;
    width: 100%;
    top: 0;
    left: 0;
    pointer-events: none; /* Prevents blocking clicks */
  }

  .corner {
    position: absolute;
    width: 80px; /* Adjust size as needed */
    height: auto;
    opacity: 0.8; /* Slight transparency */
  }

  .left {
    top: 10px;
    left: 10px;
  }

  .right {
    top: 10px;
    right: 10px;
  }

  .floating-icons {
    position: fixed;
    top: 10%;
    right: 5%;
    opacity: 0.5;
    z-index: -1; /* Keeps icons in the background */
  }

  .icon {
    width: 40px;
    position: absolute;
    animation: float 4s infinite alternate ease-in-out;
  }

  .icon-1 {
    top: 50px;
    left: 10%;
    animation-duration: 3s;
  }

  .icon-2 {
    top: 150px;
    left: 50%;
    animation-duration: 4s;
  }

  .icon-3 {
    top: 250px;
    left: 80%;
    animation-duration: 5s;
  }

  @keyframes float {
    from {
      transform: translateY(0);
    }
    to {
      transform: translateY(-20px);
    }
  }

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
