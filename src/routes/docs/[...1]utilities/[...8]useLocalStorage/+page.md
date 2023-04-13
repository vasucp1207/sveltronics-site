# useLocalStorage

Reactive `LocalStorage` it provides an easy way to store and retrieve data from the browser's local storage.

## Demo

<script>
  import { useLocalStorage } from "sveltronics";

  let count = useLocalStorage('count', 0);

</script>

<div class="flex justify-center items-center h-96 gap-4">
  <p class="text-3xl">{$count}</p>
  <button
    on:click={() => count.update(val => val + 1)}
    style="width: 100px; height: 50px; color: white; background: #f0f;
      cursor: pointer; display: flex; justify-content: center; align-items: center;
      border-radius: 5px;"
  >
    Increase
  </button>
  <button
    on:click={() => count.set(0)}
    style="width: 100px; height: 50px; color: white; background: #f0f;
      cursor: pointer; display: flex; justify-content: center; align-items: center;
      border-radius: 5px;"
  >
    Reset
  </button>
</div>

## Usage

```svelte
<script>
  import { useLocalStorage } from "sveltronics";

  let count = useLocalStorage('count', 0);

</script>

<div>
  <p>{$count}</p>
  <button on:click={() => count.update(val => val + 1)}>
    Increase
  </button>
  <button on:click={() => count.set(0)}>
    Reset
  </button>
</div>

```