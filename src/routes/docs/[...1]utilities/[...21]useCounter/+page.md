# useCounter

Basic counter with utility functions.

## Demo

<script>
  import { useCounter } from "sveltronics";

  let { count, inc, dec, set, reset } = useCounter(1);

</script>

<div class="flex gap-4 items-center">
  <div class="text-2xl">{$count}</div>
  <button
    on:click={inc}
    class="cursor-pointer bg-[#f0f] p-2 text-white rounded border-2 w-28"
  >
    Increase
  </button>
  <button
    on:click={dec}
    class="cursor-pointer bg-[#f0f] p-2 text-white rounded border-2 w-28"
  >
    Decrease
  </button>
  <button
    on:click={() => set(10)}
    class="cursor-pointer bg-[#f0f] p-2 text-white rounded border-2 w-28"
  >
    Set(10)
  </button>
  <button
    on:click={reset}
    class="cursor-pointer bg-[#f0f] p-2 text-white rounded border-2 w-28"
  >
    Reset
  </button>
</div>

## Usage
```svelte
<script>
  import { useCounter } from "sveltronics";

  let { count, inc, dec, set, reset } = useCounter(1);

</script>

<div>
  <div>{$count}</div>
  <button  on:click={inc}>
    Increase
  </button>
  <button on:click={dec}>
    Decrease
  </button>
  <button on:click={() => set(10)}>
    Set(10)
  </button>
  <button on:click={reset}>
    Reset
  </button>
</div>

```