<template>
  <!-- TopBar Content Wrapper-->
  <div class="w-full flex items-center px-2 max-w-7xl justify-between">
    <div id="start" class="flex items-center space-x-2">
      <button
        class="md:hidden size-12 flex rounded-full transition-all duration-300 hover:opacity-50"
      >
        <Icon name="ic:outline-menu" size="24" class="m-auto" />
      </button>
      <h4 class="text-xl">Library</h4>
    </div>

    <nav id="end" class="flex items-center space-x-2">
      <IconButton v-for="n in 4" label="test" icon="lucide:settings" />
      <NuxtLink
        to="/profile"
        class="duration-300 transition-opacity hover:opacity-50"
      >
        <img
          src="/public/avatar.jpg"
          class="size-8 rounded-full object-cover overflow-hidden border border-colorOutline-light dark:border-colorOutline-dark"
      /></NuxtLink>
    </nav>
  </div>
</template>
