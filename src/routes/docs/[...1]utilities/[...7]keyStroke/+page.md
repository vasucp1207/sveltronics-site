# keyStroke

Move an element with the arrow keys.

## Demo

<script>
  import { keyStroke } from "sveltronics";

</script>

<div style="
  height: 200px;
  border-radius: 5px;
  border: 2px solid #444e5e;
  display: flex;
  justify-content: center;
  align-items: center;
">
  <div 
    style="
      height: 50px;
      width: 50px;
      border-radius: 50%;
      background: #f0f;
    "
    use:keyStroke
  >
  </div>
</div>

## Usage

```svelte
<script>
  import { keyStroke } from "sveltronics";

</script>

<div use:keyStroke></div>

<style>
  div {
    width: 50px;
    height: 50px;
    border: 1px solid black;
  }
</style>
```