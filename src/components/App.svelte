<!-- App.svelte -->
<script>
  import { Car, MapPin, Zap, LineChart } from 'lucide-svelte';
</script>

<div class="min-h-screen bg-white">
  <!-- Hero Section -->
  <header class="bg-blue-600 text-white py-20">
    <div class="max-w-4xl mx-auto px-6">
      <h1 class="text-4xl font-bold mb-4">
        Optimizing EV Charging Station Placement in San Diego
      </h1>
      <p class="text-xl opacity-90">
        Using data-driven methods to strategically expand electric vehicle infrastructure
      </p>
    </div>
  </header>

  <!-- Main Content -->
  <main class="max-w-4xl mx-auto px-6 py-12">
    <!-- Impact Section -->
    <section class="mb-16">
      <h2 class="text-3xl font-bold mb-8 text-gray-800">Why This Matters</h2>
      <div class="grid md:grid-cols-3 gap-8">
        <div class="p-6 bg-gray-50 rounded-lg">
          <Car class="w-12 h-12 text-blue-600 mb-4" />
          <h3 class="text-xl font-semibold mb-2">Growing EV Adoption</h3>
          <p class="text-gray-600">
            EV sales are projected to exceed 30% of all new vehicle sales by 2030 in the US
          </p>
        </div>
        <div class="p-6 bg-gray-50 rounded-lg">
          <MapPin class="w-12 h-12 text-blue-600 mb-4" />
          <h3 class="text-xl font-semibold mb-2">Strategic Placement</h3>
          <p class="text-gray-600">
            Well-distributed charging infrastructure is crucial for supporting widespread EV adoption
          </p>
        </div>
        <div class="p-6 bg-gray-50 rounded-lg">
          <Zap class="w-12 h-12 text-blue-600 mb-4" />
          <h3 class="text-xl font-semibold mb-2">Infrastructure Challenge</h3>
          <p class="text-gray-600">
            San Diego's EV registrations have doubled since 2022, requiring rapid infrastructure growth
          </p>
        </div>
      </div>
    </section>

    <!-- Our Approach -->
    <section class="mb-16">
      <h2 class="text-3xl font-bold mb-8 text-gray-800">Our Approach</h2>
      <div class="prose max-w-none">
        <p class="text-gray-600 text-lg mb-6">
          We developed EVCS-OPTIM (Electric Vehicle Charging Station - Optimizing Placement Tool) to identify the most effective locations for new charging stations. Our approach combines:
        </p>
        <div class="grid md:grid-cols-2 gap-8">
          <div class="bg-gray-50 p-6 rounded-lg">
            <h3 class="text-xl font-semibold mb-4">Data Analysis</h3>
            <ul class="list-disc pl-6 space-y-2 text-gray-600">
              <li>Traffic patterns and volume</li>
              <li>Demographic and income data</li>
              <li>Existing charging infrastructure</li>
              <li>Power grid capacity</li>
            </ul>
          </div>
          <div class="bg-gray-50 p-6 rounded-lg">
            <h3 class="text-xl font-semibold mb-4">Key Features</h3>
            <ul class="list-disc pl-6 space-y-2 text-gray-600">
              <li>Interactive visualization tools</li>
              <li>Multi-factor scoring system</li>
              <li>Equity considerations</li>
              <li>Future growth projections</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- Results Section -->
    <section class="mb-16">
      <h2 class="text-3xl font-bold mb-8 text-gray-800">Results</h2>
      <div class="bg-gray-100 p-8 rounded-lg text-center">
        <LineChart class="w-16 h-16 mx-auto mb-4 text-blue-600" />
        <p class="text-gray-600">Interactive visualization coming soon</p>
      </div>
    </section>

    <!-- Impact & Conclusions -->
    <section class="mb-16">
      <h2 class="text-3xl font-bold mb-8 text-gray-800">Impact</h2>
      <div class="prose max-w-none text-gray-600">
        <p class="mb-4">
          Our research provides valuable insights for multiple stakeholders:
        </p>
        <ul class="space-y-4">
          <li>
            <strong class="text-gray-800">Urban Planners:</strong> Data-driven framework for infrastructure investment decisions
          </li>
          <li>
            <strong class="text-gray-800">Utility Companies:</strong> Identification of areas requiring grid capacity enhancement
          </li>
          <li>
            <strong class="text-gray-800">Community Advocates:</strong> Equity-focused planning to prevent charging deserts
          </li>
        </ul>
      </div>
    </section>

    <!-- Call to Action -->
    <section>
      <div class="bg-blue-50 p-8 rounded-lg text-center">
        <h2 class="text-2xl font-bold mb-4 text-gray-800">Learn More</h2>
        <p class="text-gray-600 mb-6">
          Interested in the technical details? Check out our full research report and code.
        </p>
        <div class="space-x-4">
          <button class="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700">
            View Report
          </button>
          <button class="bg-gray-800 text-white px-6 py-2 rounded-lg hover:bg-gray-900">
            GitHub
          </button>
        </div>
      </div>
    </section>
  </main>

  <!-- Footer -->
  <footer class="bg-gray-100 py-8">
    <div class="max-w-4xl mx-auto px-6 text-center text-gray-600">
      <p>© 2024 EVCS-OPTIM Project</p>
    </div>
  </footer>
</div>

<style>

</style>