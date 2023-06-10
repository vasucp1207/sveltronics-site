# useSessionStorage

Reactive `SessionStorage` it provides an easy way to store and retrieve data from the browser's session storage.

## Demo

<script>
  import { useSessionStorage } from "sveltronics";

  const count = useSessionStorage('count', 0);

</script>

<div class="flex justify-center items-center gap-4">
  <p>{$count}</p>
  <button
    style="width: 100px; height: 50px; background: #eb4f27"
    class="p-1 text-white rounded-md"
    on:click={() => count.update(val => val + 1)}
  >
    Increase
  </button>
  <button
    style="width: 100px; height: 50px; color: #eb4f27"
    class="bg-white rounded-md border border-gray-600"
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