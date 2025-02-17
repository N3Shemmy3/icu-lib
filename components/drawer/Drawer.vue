<script setup>
const items = ref([
  { title: "Home", icon: "lucide:home" },
  { title: "Notices", icon: "lucide:bell" },
  { title: "Courses", icon: "lucide:book" },
  { title: "Donate", icon: "lucide:dollar-sign" },
  { title: "About", icon: "lucide:info" },
]);
</script>

<template>
  <ul class="w-full h-full flex-grow group flex flex-col gap-4 p-2">
    <DrawerItem
      v-for="(item, index) in items"
      :key="index"
      :is-selected="index == 1"
      :icon="item.icon"
      :title="item.title"
    />

    <DrawerHeader class="mt-auto align-bottom bottom-0" />
  </ul>
</template>
