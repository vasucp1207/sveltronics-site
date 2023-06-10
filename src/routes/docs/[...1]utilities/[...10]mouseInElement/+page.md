# mouseInElement

Reactive mouse position related to an element

## Demo

<script>
  import { onMount } from "svelte";
  import { mouseInElement } from "sveltronics";

  let myEle;
  let elementX, elementY;
  onMount(() => {
    ({ elementX, elementY } = mouseInElement(myEle));
  })

</script>

<div
  bind:this={myEle}
  style="width: 150px; height: 150px; color: white; background: #eb4f27;
      cursor: pointer; display: flex; justify-content: center; align-items: center;
      border-radius: 5px;"
>
  Hover me
</div>
<div class="m-7">
  <div>X: {$elementX}</div>
  <div>Y: {$elementY}</div>
</div>

## Usage

```svelte
<script>
  import { onMount } from "svelte";
  import { mouseInElement } from "sveltronics";

  let myEle;
  let elementX, elementY;
  onMount(() => {
    ({ elementX, elementY } = mouseInElement(myEle));
  })

</script>

<div bind:this={myEle}>
  Hover me
</div>
<div>
  <div>X: {$elementX}</div>
  <div>Y: {$elementY}</div>
</div>
```