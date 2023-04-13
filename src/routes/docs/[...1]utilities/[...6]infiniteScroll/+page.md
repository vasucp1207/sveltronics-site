# infiniteScroll

Infinite scrolling of the element.

## Demo

<script>
  import { infiniteScroll } from "sveltronics";

  let items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  const loadMore = () => {
    items = [...items, ...Array.from({ length: 5 }).map((_, i) => items.length + i + 1)];
  }
</script>

<div
  use:infiniteScroll={loadMore}
  style="
    width: 300px;
    height: 200px;
  "
  class="border-2 rounded text-center overflow-scroll"
>
  {#each items as item}
    <div class="border-2 h-[29.6px] bg-[#e5e7eb] rounded m-1">{item}</div>
  {/each}
</div>

## Usage

```svelte
<script>
  import { infiniteScroll } from "sveltronics";

  let items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  const loadMore = () => {
    items = [...items, ...Array.from({ length: 5 }).map((_, i) => items.length + i + 1)];
  }
</script>

<div use:infiniteScroll={loadMore}>
  {#each items as item}
    <div>{item}</div>
  {/each}
</div>
```