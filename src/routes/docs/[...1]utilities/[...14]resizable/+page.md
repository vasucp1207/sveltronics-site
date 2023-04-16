# resize

Makes an element resizable.

## Demo

<script>
  import { resizable } from 'sveltronics';
</script>

<div
  use:resizable
  style="
    height: 150px;
    width: 150px;
    color: white;
    background: #f0f;
    display: flex;
    justify-content: center;
    align-items: center;
  "
>
   Resize Me
</div>

## Usage

```svelte
<script>
  import { resizable } from "sveltronics";

</script>

<div use:resizable>
  Resizeable
</div>
```