# useSessionStorage

Reactive `SessionStorage` it provides an easy way to store and retrieve data from the browser's session storage.

## Demo

<script>
  import { useSessionStorage } from "sveltronics";

  const count = useSessionStorage('count', 0);

</script>

<div class="flex justify-center items-center h-96 gap-4">
  <p>{$count}</p>
  <button
    style="width: 100px; height: 50px;"
    class="bg-[#f0f] p-1 text-white rounded border-2"
    on:click={() => count.update(val => val + 1)}
  >
    Increase
  </button>
  <button
    style="width: 100px; height: 50px;"
    class="text-[#f0f] bg-white rounded border-2"
    on:click={() => count.set(0)}
  >
    Reset
  </button>
</div>

## Usage

```svelte
<script>
  import { useSessionStorage } from "./index";

  const count = useSessionStorage('count', 0);

</script>

<div>
  <p>{$count}</p>
  <button
    on:click={() => count.update(val => val + 1)}
  >
    Increase
  </button>
  <button
    on:click={() => count.set(0)}
  >
    Reset
  </button>
</div>
```