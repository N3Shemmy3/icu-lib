<script setup lang="ts">
const props = defineProps({
  isSelected: {
    type: Boolean,
    required: true,
  },
  icon: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <li
    class="flex-grow-0 inline-flex transition-all duration-300 state cursor-pointer items-center gap-3 whitespace-nowrap text-base min-h-9 rounded-md justify-start px-4 py-2"
    :class="{ isSelected: props.isSelected }"
  >
    <Icon :name="props.icon" />
    {{ props.title }}
  </li>
</template>
<style scoped>
.state:hover {
  @apply bg-colorSurface-light dark:bg-colorSurface-dark text-colorOnSurface-light dark:text-colorOnSurface-dark;
}
.isSelected {
  @apply bg-colorPrimary-light dark:bg-colorPrimary-dark text-colorOnPrimary-light dark:text-colorOnPrimary-dark hover:bg-opacity-80;
}
</style>
