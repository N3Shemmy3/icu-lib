<script setup>
const props = defineProps({
  icon: {
    type: String,
    default: "",
  },
  label: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <div
    class="rounded text-xs md:text-sm px-2 py-1 gap-2 cursor-pointer transition-colors duration-300 hover:bg-opacity-80 min-w-12 min-h-6 border text-colorOnPrimary-light dark:text-colorOnPrimary-dark border-colorOutline-light dark:border-colorOutline-dark bg-colorPrimary-light dark:bg-colorPrimary-dark"
  >
    <Icon :name="props.icon" size="16" />
    {{ props.label }}
  </div>
</template>
