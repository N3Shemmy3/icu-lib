<script setup lang="ts">
const router = useRouter();
const isDrawerOpen = ref(false);

const onItemClicked = (item: any) => {
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
