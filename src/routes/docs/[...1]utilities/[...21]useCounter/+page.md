# counter

Basic counter with utility functions.

## Demo

<Counter />

## Usage
```svelte
<script>
  import { counter } from "sveltronics";

  let { count, inc, dec, set, reset } = counter(1);

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