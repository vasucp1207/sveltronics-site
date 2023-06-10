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
  class="bg-[#eb4f27] text-white rounded-md p-2"
>
  Press(1000ms)
</button>
