# flip

Flip an element on hovering over it.

## Demo

<Flip />

## Usage

```svelte
<script>
  import { flip } from "sveltronics";
  
</script>

<div
  use:flip
  class="flip"
>
  <div class="content">
    <div class="front">
      <img
        src=""
        alt="img"
      />
    </div>
    <div class="back">
      <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui placeat ex
        officia illum aspernatur id impedit labore quos vitae. Cumque ea fugit
        harum, aliquid dolores voluptatem pariatur odit obcaecati non!
      </div>
    </div>
  </div>
</div>
```

Make sure to provide the same classes name as the example.