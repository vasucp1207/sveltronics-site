# clickOutside

It is a utility function that listens for clicks outside of a designated element.

## Usage

## Demo

<ClickOutside />

```svelte
<script>
  import { clickOutside } from "sveltronics";

  let show = false;

  function toogle() {
    show = !show;
  }
</script>

<button
  on:click={() => show = true}
>
  Show Modal
</button>

{#if show}
  <div
    use:clickOutside
    on:clickOutsideDispatch={toogle}
  >
    Modal
  </div>
{/if}
```
