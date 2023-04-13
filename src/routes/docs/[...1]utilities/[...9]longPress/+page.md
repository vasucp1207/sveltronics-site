# longPress

`longPress` is a Svelte custom action that adds long press functionality to an element.

## Demo

<script>
  import { onMount } from "svelte";
  import { longPress } from "sveltronics";

  let tarEle;
  let currVal = false;

  const onLongPressCallback = (e) => {
    currVal = !currVal;
  }

  onMount(() => {
    const hold = longPress(tarEle, onLongPressCallback);
  })
</script>

<div>{currVal}</div>
<button 
  style="width: 150px; height: 50px; color: white; background: #f0f;
      cursor: pointer; display: flex; justify-content: center; align-items: center;
      border-radius: 5px;"
  bind:this={tarEle} 
>
  Press(1000ms)
</button>

## Usage

```js
<script>
  import { onMount } from "svelte";
  import { longPress } from "sveltronics";

  let tarEle;
  let currVal = false;

  const onLongPressCallback = (e) => {
    currVal = !currVal;
  }

  onMount(() => {
    const hold = longPress(tarEle, onLongPressCallback);
  })
</script>

<div>{currVal}</div>
<button bind:this={tarEle}>
  Press(1000ms)
</button>
```