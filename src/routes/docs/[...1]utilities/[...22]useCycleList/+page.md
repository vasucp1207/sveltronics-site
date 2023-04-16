# cycleList

Cycle through a list of items.

## Demo

<CycleList />

## Usage

```svelte
<script>
  import { cycleList } from "sveltronics";

  let list = [10, 20, 30, 40, 50];

  let { state, next, prev } = cycleList(list);
</script>

<div>
  <div>
    {$state}
  </div>
  <button on:click={next}>Next</button>
  <button on:click={prev}>Prev</button>
</div>
```