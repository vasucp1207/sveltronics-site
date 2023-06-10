# setDraggable

`setDraggable` utility function sets the element back to its original position on leaving the element.

## Demo

<script>
  import { setDraggable } from 'sveltronics';
</script>

<div style="
  height: 200px;
  border-radius: 5px;
  border: 2px solid lightgray;
  display: flex;
  justify-content: center;
  align-items: center;
  "
>
  <div
    use:setDraggable
    style="
      cursor: grab;
      height: 150px;
      width: 150px;
      color: white;
      background: #eb4f27;
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
  import { setDraggable } from 'sveltronics';
</script>

<div use:setDraggable>
  Drag Me
</div>
```