<script setup>
const props = defineProps({
  icon: {
    type: String,
    required: true,
  },
  label: {
    type: String,
    required: false,
  },
  theme: {
    type: String,
    validator: (value) => ["default", "filled"].includes(value),
    default: "default",
  },
});
const styles = computed(() => {
  return props.theme === "default"
    ? "bg-tansparent hover:bg-colorSurface-light dark:hover:bg-colorSurface-dark"
    : "bg-colorPrimary-light dark:bg-colorPrimary-dark text-colorOnPrimary-light dark:text-colorOnPrimary-dark hover:bg-opacity-70";
});
</script>

<template>
  <button
    :class="[
      'inline-flex items-center size-12 p-2 justify-center whitespace-nowrap shrink-0 rounded-md duration-300 transition-all ',
      styles,
    ]"
    @click=""
  >
    <Icon :name="props.icon" :aria-label="props.label" class="size-4" />
  </button>
</template>
