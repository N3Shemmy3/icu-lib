<script setup lang="ts">
const items = ref([
  { title: "Home", icon: "lucide:home", page: "/" },
  { title: "Notices", icon: "lucide:bell", page: "/notices" },
  { title: "Courses", icon: "lucide:book", page: "/courses" },
  { title: "Donate", icon: "lucide:dollar-sign", page: "/donate" },
  { title: "About", icon: "lucide:info", page: "/about" },
]);
const emit = defineEmits(["onItemClicked"]);
function onItemCLick(item: any) {
  emit("onItemClicked", item);
}
</script>

<template>
  <ul class="w-full h-full overflow-y-auto flex-grow group flex flex-col gap-4">
    <div
      class="w-full flex items-center min-h-14 h-14 px-4 gap-1 text-lg border-b border-b-colorOutline-light dark:border-b-colorOutline-dark"
    >
      <IconButton icon="lucide:notebook-text" label="Home" size="24" />
      <h4>Study Buddy</h4>
    </div>
    <DrawerItem
      v-for="(item, index) in items"
      :key="index"
      :is-selected="index == 0"
      :icon="item.icon"
      :title="item.title"
      class="mx-2"
      @click="onItemCLick(item)"
    />

    <DrawerHeader class="mt-auto m-2" @click="$router.push('/profile')" />
  </ul>
</template>
