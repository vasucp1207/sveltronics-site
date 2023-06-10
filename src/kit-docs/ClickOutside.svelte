<script>
// @ts-nocheck
  import { clickOutside } from "sveltronics";

  let show = false;

  function toogle() {
    show = !show;
  }
</script>

<button
  on:click={() => show = true}
  class="bg-[#eb4f27] text-white p-2 rounded-md"
>
  Show Modal
</button>

{#if show}
  <div
    use:clickOutside
    on:clickOutsideDispatch={toogle}
    class="border-2 w-48 h-40 flex justify-center 
    border-gray-500 rounded-md items-center"
  >
    Modal
  </div>
{/if}
