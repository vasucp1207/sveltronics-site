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
  style="width: 100px; height: 50px; cursor: pointer; background: #eb4f27"
  class="text-white rounded-md flex justify-center items-center"
>
  Notified
</div>

## Usage

```svelte
<script>
  import { showNotification } from "sveltronics";

  let title = "Svelte-Hack";
  let body = "Learn by doing";
</script>

<button
  on:click={() => showNotification(title, body)}
>
  notified
</button>
```