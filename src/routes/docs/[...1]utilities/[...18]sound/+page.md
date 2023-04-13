# playSound

Poping sound on an element.

## Demo

<script>
  import { playSound } from "sveltronics";

</script>

<div
  on:click={playSound}
  style="width: 100px; height: 50px;"
  class="bg-[#f0f] text-white flex justify-center items-center rounded border-2 w-14 h-8"
>
  Play
</div>

## Usage

```js
<script>
  import { playSound } from "sveltronics";

</script>

<button on:click={playSound}>Pop</button>
```