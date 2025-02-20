<template>
  <button
    :class="[
      'inline-flex items-center w-full gap-2 text-base text-nowrap justify-center duration-300 transition-all hover:bg-opacity-70 rounded-md px-2 py-2',
      buttonStyleClass,
      textColorClass,
    ]"
  >
    <Icon v-if="icon" :name="icon" />
    <span>
      {{ text }}
    </span>
  </button>
</template>

<script setup>
import { computed } from "vue";

const props = defineProps({
  text: {
    type: String,
    required: true,
  },
  icon: {
    type: String,
    default: "",
  },
  theme: {
    type: String,
    validator: (value) => ["outlined", "filled"].includes(value),
    default: "filled",
  },
});

const buttonStyleClass = computed(() => {
  return props.theme === "outlined"
    ? "border border-opacity-70 border-colorPrimary-light dark:border-colorPrimary-dark bg-transparent hover:bg-colorSurface-light dark:hover:bg-colorSurface-dark"
    : "bg-colorPrimary-light dark:bg-colorPrimary-dark";
});

const textColorClass = computed(() => {
  return props.theme === "outlined"
    ? "text-colorPrimary-light dark:text-colorPrimary-dark"
    : "text-colorOnPrimary-light dark:text-colorOnPrimary-dark";
});
</script>
