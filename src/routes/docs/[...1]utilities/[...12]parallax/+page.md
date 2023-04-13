# parallax

Create parallax effect easily.

## Demo

<script>
  import { parallax } from "sveltronics";

</script>

<div 
  use:parallax
  style="width: 200px; height: 250px; color: white; background: #f0f;
      cursor: pointer; display: flex; justify-content: center; align-items: center;
      border-radius: 5px;"
  >
  Hover Me
</div>

## Usage

```svelte
<script>
  import { parallax } from "sveltronics";

</script>

<div use:parallax>
  Hover Me
</div>
```