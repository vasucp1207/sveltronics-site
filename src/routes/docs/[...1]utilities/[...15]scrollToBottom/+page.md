# scrollToBottom

`scrollToBottom` is a custom Svelte function that helps to scroll to the bottom of a container element.

## Demo

<ScrollToBottom />

## Usage

```svelte
<script>
  import { scrollToBottom } from "sveltronics";

</script>

<div>
  <div use:scrollToBottom>
    {#each todos as todo (todo.id)}
      <div>{todo.text}</div>
    {/each}
  </div>
</div>

```