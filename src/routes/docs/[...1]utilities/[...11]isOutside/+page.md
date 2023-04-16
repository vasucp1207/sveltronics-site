# isOutside

Reactive function for telling that mouse is inside or outside of an element.

## Demo

<script>
  import { onMount } from "svelte";
  import { isOutside } from "sveltronics";

  let myEle;
  let outside;

  onMount(() => {
    outside = isOutside(myEle);
  })
</script>

<div>{$outside}</div>
<div
  bind:this={myEle}
  style="width: 150px; height: 50px; color: white; background: #f0f;
      cursor: pointer; display: flex; justify-content: center; align-items: center;
      border-radius: 5px;"
>
Hover Me
</div>

## Usage

```svelte
<script>
  import { onMount } from "svelte";
  import { isOutside } from "sveltronics";

  let myEle;
  let outside;

  onMount(() => {
    outside = isOutside(myEle);
  })
</script>

<div bind:this={myEle}>
  Hover Me
</div>
<div>{$outside}</div>
```