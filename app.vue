<script setup lang="ts">
const router = useRouter();
const isDrawerOpen = ref(false);

const onItemClicked = (item: any) => {
  isDrawerOpen.value = false;
  router.push(item.page);
};
const onOverlayClicked = () => {
  isDrawerOpen.value = false;
};
const onMenuClicked = () => {
  isDrawerOpen.value = !isDrawerOpen.value;
};
</script>

<template>
  <Scafford :isDrawerOpen="isDrawerOpen" @onOverlayClicked="onOverlayClicked">
    <template #sidebar>
      <Drawer @onItemClicked="onItemClicked" />
    </template>

    <template #topbar>
      <TopAppBar @onMenuClicked="onMenuClicked" />
    </template>

    <template #default>
      <NuxtPage />
    </template>

    <template #footer>
      <Footer />
    </template>
  </Scafford>
</template>
<style>
/* Scrollbar for WebKit browsers (Chrome, Edge, Safari) */

/* Sets the width and height of the scrollbar */
::-webkit-scrollbar {
  width: 4px; /* Width of vertical scrollbar */
  height: 10px; /* Height of horizontal scrollbar */
}

/* Styles the scrollbar track (the background area behind the thumb) */
::-webkit-scrollbar-track {
  @apply bg-colorBackground-light dark:bg-colorBackground-dark;
}

/* Styles the scrollbar thumb (the draggable part) */
::-webkit-scrollbar-thumb {
  @apply bg-opacity-30 bg-colorPrimary-light dark:bg-colorPrimary-dark rounded-full;
}

/* Changes the scrollbar thumb color when hovered */
::-webkit-scrollbar-thumb:hover {
  @apply bg-opacity-70;
}
</style>
