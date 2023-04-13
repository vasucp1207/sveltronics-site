# useCycleList

Cycle through a list of items.

## Demo

<script>
  import { useCycleList } from "sveltronics";

  let list = [1, 2, 3, 4, 5];

  let { state, next, prev } = useCycleList(list);
</script>

<div class="m-5 flex items-center gap-4">
  <div class="text-lg">
    {$state}
  </div>
  <button on:click={next} class="bg-[#f0f] p-2 text-white rounded w-14">Next</button>
  <button on:click={prev} class="bg-[#f0f] p-2 text-white rounded w-14">Prev</button>
</div>

## Usage

```svelte
<script>
  import { useCycleList } from "sveltronics";

  let list = [1, 2, 3, 4, 5];

  let { state, next, prev } = useCycleList(list);
</script>

<div>
  <div>
    {$state}
  </div>
  <button on:click={next}>Next</button>
  <button on:click={prev}>Prev</button>
</div>
```