# useTooltip

Provide tooltip text to an element.

## Demo

<script>
  import { useTooltip } from "sveltronics";

</script>

<button
  use:useTooltip={"tooltip"}
  class="cursor-pointer bg-[#f0f] p-2 text-white rounded border-2 w-28">
  Hover Me
</button>

## Usage

```svelte
<script>
  import { useTooltip } from "./index";

</script>

<button  use:useTooltip={'Tooltip'}>
  Hover Me
</button>
```