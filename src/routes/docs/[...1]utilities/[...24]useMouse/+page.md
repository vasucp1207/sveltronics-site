# useMouse

Reactive mouse position.

## Demo

<script>
  import { useMouse } from "sveltronics";

  let { x, y } = useMouse();
</script>

<p>pos: {$x}, {$y}</p>

## Usage

```svelte
<script>
  import { useMouse } from "sveltronics";

  let { x, y } = useMouse();
</script>

<p>pos: {$x}, {$y}</p>
```