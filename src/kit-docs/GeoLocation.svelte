<script>
// @ts-nocheck
  import { geoLocation } from "sveltronics";
  import { onMount } from "svelte";
  
  let coords, watch, stop;

  onMount(() => {
    ({ coords, watch, stop } = geoLocation());
  })
</script>

<div>
  <div>Accuracy: {$coords?.accuracy}</div>
  <div>Latitude: {$coords?.latitude}</div>
  <div>Longitude: {$coords?.longitude}</div>
  <div>Altitude: {$coords?.altitude}</div>
  <div>AltitudeAccuracy: {$coords?.altitudeAccuracy}</div>
  <div>Heading: {$coords?.heading}</div>
  <div>Speed: {$coords?.speed}</div>

  <div class="mt-3 -ml-1">
    <button
      on:click={watch}
      class="bg-[#eb4f27] p-1 text-white rounded-md w-20"
    >
      watch
    </button>
    <button
      on:click={stop}
      class="bg-[#eb4f27] p-1 text-white rounded-md w-20"
    >
      stop
    </button>
  </div>
</div>
