<script>
  // @ts-nocheck
  import { scrollToBottom } from "sveltronics";

  let id = 0;
  let todos = [
    { id: id++, text: "svelte is love 1" },
    { id: id++, text: "svelte is love 2" },
    { id: id++, text: "svelte is love 3" },
    { id: id++, text: "svelte is love 4" },
    { id: id++, text: "svelte is love 5" },
    { id: id++, text: "svelte is love 6" },
    { id: id++, text: "svelte is love 7" },
  ];
  let text = "";

  function addTodo() {
    todos.push({ id: id++, text: text });
    todos = todos;
    text = "";
  }
</script>

<div class="flex justify-center">
  <div class="flex flex-col items-center gap-6">
    <div>
      <input
        class="border-2 p-2 rounded border-gray-400 focus:outline-[#eb4f27]"
        bind:value={text}
      />
      <button
        class="p-2 bg-[#eb4f27] text-white rounded-md"
        on:click={addTodo}>Add Todo</button
      >
    </div>

    <div
      use:scrollToBottom
      class="border-2 w-[100%] h-44 overflow-scroll flex flex-col gap-1">
      {#each todos as todo (todo.id)}
        <div class="bg-[#e5e7eb] p-1 h-8 w-full">{todo.text}</div>
      {/each}
    </div>
  </div>
</div>
