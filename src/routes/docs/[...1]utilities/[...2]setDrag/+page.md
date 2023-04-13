# setDrag

`setDrag` utility function sets the element back to its original position on leaving the element.

## Demo

<script>
  import { setDrag } from 'sveltronics';
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
    use:setDrag
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
    Drag Me
  </div>
</div>

## Usage

```svelte
<script>
  import { setDrag } from 'sveltronics';
</script>

<div use:setDrag>
  Drag Me
</div>
```