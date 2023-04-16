# elementVisibility

Checks that an element is in viewport or not.

## Demo

<script>
  import { elementVisibility } from "sveltronics";
  import { onMount } from "svelte";

  let myEle;
  let isVisible;

  onMount(() => {
    isVisible = elementVisibility(myEle);
  })
  
</script>

<div class="h-[50vh] flex items-center justify-center">
  <div
    style="width: 120px; height: 50px;"
    class="border-2 rounded flex items-center justify-center bg-[#f0f] text-white"
    bind:this={myEle}
  >
    Scroll
  </div>

  <div 
    style="position: fixed; right: 2%; bottom: 2%;"
  >
    Visible: {$isVisible}
  </div>
</div>

## Usage

```svelte
<script>
  import { useElementVisibility } from "sveltronics";
  import { onMount } from "svelte";

  let myEle;
  let isVisible;

  onMount(() => {
    isVisible = elementVisibility(myEle);
  })
  
</script>

<div>
  <div bind:this={myEle}>
    Visible
  </div>
  <div>Visible: {$isVisible}</div>
</div>
```