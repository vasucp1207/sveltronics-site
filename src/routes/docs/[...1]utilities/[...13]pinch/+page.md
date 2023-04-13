# pinch

Resizing an element on pinching.

## Demo

<script>
  import { pinch } from 'sveltronics';
</script>

<div style="
  height: 200px;
  border-radius: 5px;
  border: 2px solid #444e5e;
  display: flex;
  justify-content: center;
  align-items: center;
  "
>
  <div
    use:pinch
    style="
      cursor: grab;
      height: 150px;
      width: 150px;
      color: white;
      background: #f0f;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 5px;
    "
  >
    Pinch
  </div>
</div>

## Usage

```svelte
<script>
  import { pinch } from "sveltronics";

</script>

<div>
  <div use:pinch>
    Pinch Me
  </div>
</div>
```