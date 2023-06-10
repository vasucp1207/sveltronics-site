<script>
  // @ts-nocheck
  import { cycleList } from "sveltronics";

  let list = [10, 20, 30, 40, 50];

  let { state, next, prev } = cycleList(list);
  console.log($state)
</script>

<div class="flex items-center gap-4">
  <div class="text-lg">
    {$state}
  </div>
  <button on:click={next} class="bg-[#eb4f27] w-28 p-2 text-white rounded-md">Next</button>
  <button on:click={prev} class="bg-[#eb4f27] w-28 p-2 text-white rounded-md">Prev</button>
</div>