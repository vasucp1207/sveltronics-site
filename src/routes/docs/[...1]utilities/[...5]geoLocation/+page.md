# geoLocation

It allows the user to provide their location to web applications if they so desire. The user is asked for permission to report location information.

## Demo

<GeoLocation />

## Usage

```svelte
<script>
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

  <div>
    <button
      on:click={watch}
    >
      watch
    </button>
    <button
      on:click={stop}
    >
      stop
    </button>
  </div>
</div>

```

- `watch`: Control function to resume updating geolocation.
- `stop`: Control function to pause updating geolocation.