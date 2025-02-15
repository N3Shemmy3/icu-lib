<template>
  <!-- TopBar Content Wrapper-->
  <div class="w-full flex items-center px-4 mx-auto max-w-7xl justify-between">
    <div id="start" class="flex items-center space-x-2">
      <Icon name="ic:outline-keyboard-command-key" size="24" />
      <h4 class="text-xl">Library</h4>
    </div>

    <nav id="end" class="flex items-center space-x-2">
      <NuxtLink v-for="n in 4" to="/" class="text-sm">Home</NuxtLink>
    </nav>
  </div>
</template>
