<script>
  // @ts-nocheck
  import { counter } from "sveltronics";

  let { count, inc, dec, set, reset } = counter(1);

</script>

<div class="flex gap-2 items-center">
  <div class="text-2xl">{$count}</div>
  <button
    on:click={inc}
    class="cursor-pointer bg-[#eb4f27] p-2 text-white rounded-md w-28"
  >
    Increase
  </button>
  <button
    on:click={dec}
    class="cursor-pointer bg-[#eb4f27] p-2 text-white rounded-md w-28"
  >
    Decrease
  </button>
  <button
    on:click={() => set(10)}
    class="cursor-pointer bg-[#eb4f27] p-2 text-white rounded-md w-28"
  >
    Set(10)
  </button>
  <button
    on:click={reset}
    class="cursor-pointer bg-[#eb4f27] p-2 text-white rounded-md w-28"
  >
    Reset
  </button>
</div>
