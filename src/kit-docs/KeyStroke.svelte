<script>
  // @ts-nocheck
  import { keyStroke } from "sveltronics";

</script>

<div>Use keys to move this ball</div>
<div class="relative w-[600px] h-60 border-2">
  <div use:keyStroke={20} class="m-10 text-white h-12 w-12 bg-[#eb4f27] rounded-[100%]">
</div>
</div>