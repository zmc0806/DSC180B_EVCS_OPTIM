<script>
  let base = "/DSC180B_EVCS_OPTIM";
  let mapUrl = "https://zmc0806.github.io/DSC180B_EVCS_OPTIM/public_parking.html";
  
</script>

<div class="map-container">
  <iframe title="Public Parking Map" src={mapUrl}></iframe>
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
