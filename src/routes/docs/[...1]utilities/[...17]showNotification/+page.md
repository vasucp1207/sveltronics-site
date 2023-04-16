# showNotification

The Web Notification interface that display desktop notifications to the user.

## Demo

<script>
  import { showNotification } from "sveltronics";

  let title = "Svelte-use";
  let body = "Learn by doing";

  function show() {
    showNotification(title, body)
  }
</script>

<div
  on:click={show}
  style="width: 100px; height: 50px; cursor: pointer;"
  class="bg-[#f0f] text-white rounded border-2 flex justify-center items-center"
>
  Notified
</div>

## Usage

```svelte
<script>
  import { showNotification } from "sveltronics";

  let title = "Svelte-use";
  let body = "Learn by doing";
</script>

<button
  on:click={() => showNotification(title, body)}
>
  notified
</button>
```