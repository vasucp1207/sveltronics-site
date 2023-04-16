<script>
// @ts-nocheck

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
  class="bg-[#f0f] text-white rounded border-2 p-2"
>
  Press(1000ms)
</button>
