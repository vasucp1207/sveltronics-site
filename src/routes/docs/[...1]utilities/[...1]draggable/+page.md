# draggable

Makes an element draggable.

## Demo

<script>
  import { draggable } from 'sveltronics';
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
    use:draggable
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
  import { draggable } from 'sveltronics';
</script>

<div use:draggable>Drag Me</div>
```