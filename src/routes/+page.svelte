<script>
  // @ts-nocheck
  import { setDraggable } from "sveltronics";
  import { Button } from "flowbite-svelte";
</script>

<div class="flex items-center justify-evenly flex-wrap mt-20">
  <div class="flex gap-5 p-2 flex-col">
    <div>
      <div class="flex items-center text-7xl">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="100"
          height="100"
          fill="#eb4f27"
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

    <p class="text-gray-600 dark:text-gray-400 text-3xl text-center">
      Svelte utility functions for your project
    </p>

    <div class="flex gap-2 btn-cont">
      <Button size="lg" href="docs/utilities/draggable">
        Getting Started <svg
          aria-hidden="true"
          class="ml-2 -mr-1 w-5 h-5"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
          ><path
            fill-rule="evenodd"
            d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
            clip-rule="evenodd"
          /></svg
        >
      </Button>
      <Button
        size="lg"
        color="alternative"
        href="https://github.com/vasucp1207/sveltronics"
      >
        Github <svg
          aria-hidden="true"
          class="ml-2 -mr-1 w-5 h-5 -rotate-45"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
          ><path
            fill-rule="evenodd"
            d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
            clip-rule="evenodd"
          /></svg
        >
      </Button>
    </div>
  </div>

  <div
    use:setDraggable
    class="glowing-circle w-[250px] h-[250px] mt-12 mb-10 text-3xl flex justify-center
     cursor-grab items-center rounded-[15px] text-white"
  >
    Drag Me
  </div>
</div>

<style>
  .glowing-circle {
    background-color: #ee9617;
    background-image: linear-gradient(315deg, #ee9617 0%, #fe5858 74%);

    /* box-shadow: 0px -5px 20px 1px #ff61a0, 0px 10px 40px 1px #ff824c; */
    filter: drop-shadow(0 0 35px #ff824c);
    animation-name: glow;
    animation-duration: 4s;
    animation-direction: normal;
    animation-iteration-count: infinite;
  }
  
    @keyframes glow {
      0% { filter: drop-shadow(10px 20px 35px #ff824c) }
      25% { filter: drop-shadow(10px 10px 45px #f3713a) }
      50% { filter: drop-shadow(10px 20px 55px #fe5858) }
      75% { filter: drop-shadow(10px 30px 65px #fe5858) }
      100% { filter: drop-shadow(10px 20px 35px #ff824c) }
    }

  @media only screen and (max-width: 806px) {
    .btn-cont {
      justify-content: center;
    }
  }
</style>
