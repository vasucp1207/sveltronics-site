# longPress

`longPress` is a Svelte custom action that adds long press functionality to an element.

## Demo

<LongPress />

## Usage

```svelte
<script>
  import { longPress } from "sveltronics";

  let currVal = false;

  const toogle = () => {
    currVal = !currVal;
  }

</script>

<div>{currVal}</div>
<button 
  use:longPress={1000}
  on:longPressCallback={toogle}
>
  Press(1000ms default)
</button>

```