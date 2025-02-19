<script setup lang="ts">
const emit = defineEmits(["onMenuClicked"]);
</script>
<template>
  <!-- TopBar Content Wrapper-->
  <div class="w-full flex items-center h-14 px-2 max-w-7xl justify-between">
    <div id="start" class="flex items-center space-x-2">
      <IconButton
        label="Menu"
        icon="lucide:panel-left-open"
        class="md:hidden"
        @click="emit('onMenuClicked')"
      />
      <h4 class="text-xl md:hidden">Library</h4>
    </div>

    <div id="center" class="hidden md:flex items-center space-x-2">
      <Input placeholder="Search" />
    </div>
    <nav id="end" class="flex items-center space-x-2">
      <IconButton v-for="n in 2" label="test" icon="lucide:settings-2" />
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
