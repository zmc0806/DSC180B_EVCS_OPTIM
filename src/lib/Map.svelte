<script>
  let base = "/ev_charge_station";
  let mapUrl = "/Map_of_parking_lots_with_demand_scores.html";
</script>

<div class="map-container">
  <iframe title="EV Charging Demand Map" src={mapUrl}></iframe>
</div>

<style>
  .map-container {
    width: 100%;
    height: 600px;
    border: 1px solid #ddd;
  }

  iframe {
    width: 100%;
    height: 100%;
    border: none;
  }
</style>
