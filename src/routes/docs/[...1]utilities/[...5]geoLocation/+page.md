# geoLocation

It allows the user to provide their location to web applications if they so desire. The user is asked for permission to report location information.

## Demo

<script>
  import { geoLocation } from "sveltronics";
  import { onMount } from "svelte";
  
  let { latitude, longitude, watch, stop } = {};

  onMount(() => {
    ({ latitude, longitude, watch, stop } = geoLocation())
  })

</script>

<div class="m-5">
  <div>Latitude: {$latitude}</div>
  <div>Longitude: {$longitude}</div>

  <div style="display: flex; gap: 10px;">
    <button
      on:click={watch}
      style="width: 100px; height: 50px; color: white; background: #f0f;
      cursor: pointer; display: flex; justify-content: center; align-items: center;
      border-radius: 5px;"
    >
      watch
    </button>
    <button
      on:click={stop}
      style="width: 100px; height: 50px; color: white; background: #f0f;
      cursor: pointer; display: flex; justify-content: center; align-items: center;
      border-radius: 5px;"
    >
      stop
    </button>
  </div>
</div>

## Usage

```svelte
<script>
  import { geoLocation } from "sveltronics";
  import { onMount } from "svelte";
  
  let { latitude, longitude, watch, stop } = {};

  onMount(() => {
    ({ latitude, longitude, watch, stop } = geoLocation())
  })

</script>

<div>
  <div>Latitude: {$latitude}</div>
  <div>Longitude: {$longitude}</div>

  <div>
    <button on:click={watch}>
      watch
    </button>
    <button on:click={stop}>
      stop
    </button>
  </div>
</div>
```

- `watch`: Control function to resume updating geolocation.
- `stop`: Control function to pause updating geolocation.