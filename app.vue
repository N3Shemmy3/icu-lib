<script setup lang="ts">
const isDrawerOpen = ref(false);

const onItemClicked = (item: any) => {
  console.log("item clicked");
};
const onOverlayClicked = () => {
  isDrawerOpen.value = false;
  console.log("overlay clicked");
};
const onMenuClicked = () => {
  isDrawerOpen.value = !isDrawerOpen.value;
  console.log("menu clicked");
};
</script>

<template>
  <Scafford :isDrawerOpen="isDrawerOpen" @onOverlayClicked="onOverlayClicked">
    <template #sidebar>
      <Drawer @onItemClicked="(item: any)=> onItemClicked(item)" />
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
