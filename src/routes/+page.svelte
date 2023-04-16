<script>
  // @ts-nocheck
  import { setDraggable } from "sveltronics";

</script>

<div class="flex items-center justify-evenly flex-wrap mt-20">
  <div class="flex gap-5 p-2 flex-col">
    <div>
      <div class="flex items-center text-7xl">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="100"
          height="100"
          fill="#f0f"
          class="bi bi-lightning"
          viewBox="0 0 16 16"
        >
          <path
            d="M5.52.359A.5.5 0 0 1 6 0h4a.5.5 0 0 1 .474.658L8.694 6H12.5a.5.5 0 0 1 .395.807l-7 9a.5.5 0 0 1-.873-.454L6.823 9.5H3.5a.5.5 0 0 1-.48-.641l2.5-8.5zM6.374 1 4.168 8.5H7.5a.5.5 0 0 1 .478.647L6.78 13.04 11.478 7H8a.5.5 0 0 1-.474-.658L9.306 1H6.374z"
          />
        </svg>
        Sveltronics
      </div>
    </div>

    <p class="text-[#444e5e] text-3xl text-center">
      Svelte utility functions for your project
    </p>

    <div class="flex gap-2 btn-cont">
      <a href="docs/utilities/draggable"
        ><button
          class="w-40 bg-[#f0f] text-white text-lg h-12 rounded-lg border-2"
          >Getting Started</button
        ></a
      >
      <a href="https://github.com/vasucp1207/sveltronics"
        ><button
          class="w-40 bg-[#f0f] text-white text-lg h-12 rounded-lg border-2"
          >Github</button
        ></a
      >
    </div>
  </div>

  <div
    use:setDraggable
    class="glowing-circle w-[250px] h-[250px] mt-12 mb-10 text-3xl flex justify-center
     cursor-grab items-center rounded-[15px] text-[#f0f]"
  >
    Drag Me
  </div>
</div>

<style>
  .glowing-circle {
    box-shadow: inset 0 0 50px #fff, inset 20px 0 80px #f0f,
      inset -20px 0 80px #0ff, inset 20px 0 300px #f0f, inset -20px 0 300px #0ff,
      0 0 50px #fff, -10px 0 80px #f0f, 10px 0 80px #0ff;
  }
  @media only screen and (max-width: 806px) {
    .btn-cont {
      justify-content: center;
    }
}
</style>
