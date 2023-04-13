# resize

Makes an element resizable.

## Demo

<script>
  import { resizeable } from 'sveltronics';
</script>

<div
  use:resizeable
  style="
    height: 150px;
    width: 150px;
    color: white;
    background: #f0f;
    display: flex;
    justify-content: center;
    align-items: center;
  "
>
   Resize Me
</div>

## Usage

```svelte
<script>
  import { resizeable } from "sveltronics";
  import { onMount } from "svelte";

  let myEle;
  let { height, width } = {};
  onMount(() => {
    ({ height, width } = elementSize(myEle));
  })

</script>

<div 
  bind:this={myEle}
  use:resizeable
>
  Resizeable
</div>
```