# windowSize

Reactive window size.

## Demo

<script>
  import { windowSize } from "sveltronics";
  import { onMount } from "svelte";

  let { width, height } = {};
  onMount(() => {
    ({ width, height} = windowSize());
  })

</script>

<div>
  <div>Width: {$width}</div>
  <div>Height: {$height}</div>
</div>

## Usage

```svelte
<script>
  import { windowSize } from "sveltronics";
  import { onMount } from "svelte";

  let { width, height } = {};
  onMount(() => {
    ({ width, height} = windowSize());
  })

</script>

<div>
  <div>Width: {$width}</div>
  <div>Height: {$height}</div>
</div>
```