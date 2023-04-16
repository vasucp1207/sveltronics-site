<script>
  // @ts-nocheck
  import { mousePos } from "sveltronics";

  let { x, y } = mousePos();
</script>

<p>pos: {$x}, {$y}</p>