<script>
  // @ts-nocheck
  import { onMount } from "svelte";
  import { elementSize } from "sveltronics";

  /**
     * @type {HTMLElement}
     */
  let myEle;
  let height, width;
  onMount(() => {
    ({ height, width } = elementSize(myEle));
  })

</script>

<textarea bind:this={myEle} class="border-[1px] border-b-gray-500 resize" />
<div>Height: {$height}</div>
<div>Width: {$width}</div>
