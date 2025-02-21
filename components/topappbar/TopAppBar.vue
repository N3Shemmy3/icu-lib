<script setup lang="ts">
import { ref, watch } from "vue";
import { useRoute } from "vue-router";

const isSignedIn = ref(false);
const route = useRoute();

watch(
  () => route.path,
  (newPath) => {
    isSignedIn.value = !newPath.includes("auth");
  },
  { immediate: true }
);
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
      <div
        class="flex w-full items-center rounded border bg-opacity-10 focus-within:bg-opacity-100 text-colorOnSurface-light dark:text-colorOnSurface-dark border-colorOutline-light dark:border-colorOutline-dark"
      >
        <input
          type="text"
          placeholder="Search"
          class="w-full md:w-80 text-sm ps-4 py-2 border-none outline-none bg-transparent"
        />
      </div>
    </div>
    <div>
      <nav v-if="isSignedIn" id="end" class="flex items-center space-x-2">
        <IconButton label="Search" icon="lucide:search" class="md:hidden" />
        <IconButton label="test" icon="lucide:settings-2" />
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
  </div>
</template>
