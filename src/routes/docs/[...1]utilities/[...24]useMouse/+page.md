# mousePos

Reactive mouse position.

## Demo

<MousePos />

## Usage

```svelte
<script>
  import { mousePos } from "sveltronics";

  let { x, y } = useMouse();
</script>

<p>pos: {$x}, {$y}</p>
```