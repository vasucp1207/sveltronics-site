# windowScroll

Scrolling position of window.

## Usage

## Demo

<script>
  import { onMount } from "svelte";
  import { windowScroll } from "sveltronics";

  let { x, y } = {};
  
  onMount(() => {
    ({ x, y } = windowScroll());
  })
</script>

<div  style="position: fixed; right: 2%; bottom: 2%;">
  <div>ScrollX: {$x}</div>
  <div>ScrollY: {$y}</div>
</div>

```svelte
<script>
  import { onMount } from "svelte";
  import { windowScroll } from "sveltronics";

  let { x, y } = {};
  
  onMount(() => {
    ({ x, y } = windowScroll());
  })
</script>

<div>
  <div>ScrollX: {$x}</div>
  <div>ScrollY: {$y}</div>
</div>
```