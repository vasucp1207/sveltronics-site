<script>
  import { clickOutside } from "sveltronics";

  let show = false;

  function toogle() {
    show = !show;
  }
</script>

<button
  on:click={() => show = true}
  class="bg-[#f0f] text-white p-2 rounded border-2"
>
  Show Modal
</button>

{#if show}
  <div
    use:clickOutside
    on:clickOutsideDispatch={toogle}
    class="border-2 w-48 h-40 flex justify-center 
    border-[#363535] rounded items-center"
  >
    Modal
  </div>
{/if}
