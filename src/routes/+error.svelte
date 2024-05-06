<script>
  import { page } from "$app/stores";
</script>

<div class="flex flex-col w-full h-full justify-center items-center gap-4">
  <div class="flex flex-col items-center justify-center w-full h-auto">
    <span
      class="select-none text-center h-auto p-2 text-5xl sm:text-7xl font-black bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 to-cyan-500 transition-all duration-2000 ease-in-out"
      >{$page.status}</span
    >
    <span
      class="h-auto p-2 text-xl sm:text-2xl font-semibold text-text text-opacity-50 select-none transition-all duration-2000 ease-in-out"
      >{$page.error.message}</span
    >
  </div>
</div>
