<script>
  import Home from './Home.svelte';
  import Introduction from './Introduction.svelte';
  import Methods from './Methods.svelte';
  import Results from './Results.svelte';
  import Conclusion from './Conclusion.svelte';
  import Resources from './Resources.svelte';

  let sections = ["Home", "Introduction", "Methods", "Results", "Conclusion", "Resources"];
</script>

<nav class="nav-bar">
  {#each sections as section}
    <a href={"#" + section.toLowerCase()}>{section}</a>
  {/each}
</nav>

<main>
  <section id="home"><Home /></section>
  <section id="introduction"><Introduction /></section>
  <section id="methods"><Methods /></section>
  <section id="results"><Results /></section>
  <section id="conclusion"><Conclusion /></section>
  <section id="resources"><Resources /></section>
</main>

<style>
  .nav-bar {
    position: fixed;
    top: 0;
    width: 100%;
    background: #333;
    color: white;
    display: flex;
    justify-content: space-around;
    padding: 10px;
  }
  .nav-bar a {
    color: white;
    text-decoration: none;
    padding: 8px 16px;
  }
  main {
    scroll-behavior: smooth;
  }
  section {
    padding: 50px;
    min-height: 100vh;
  }
</style>
