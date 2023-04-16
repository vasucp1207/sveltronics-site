<script>
  import { keyStroke } from "sveltronics";

</script>

<div>Use keys to move this ball</div>
<div class="relative w-[600px] h-60 border-2">
  <div use:keyStroke={20} class="m-10 text-white h-10 w-10 bg-[#f0f] border-2 rounded-[100%]">
</div>
</div>