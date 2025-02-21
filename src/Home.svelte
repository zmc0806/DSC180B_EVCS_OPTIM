<script>
  export let scrollToSection;
</script>

<section id="home">
  <h1>Electric Vehicle Charging Station Optimization</h1>
  <p>Using data-driven modeling to strategically place EV charging stations.</p>
  <button on:click={() => scrollToSection('introduction')}>Learn More</button>
</section>

<style>
  section {
    text-align: center;
    padding: 80px 20px;
    background: #2E3B4E;
    color: white;
  }
  button {
    padding: 10px 20px;
    border: none;
    background: #ffcc00;
    cursor: pointer;
  }
</style>
