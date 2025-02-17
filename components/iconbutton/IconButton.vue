<script setup lang="ts">
const props = defineProps({
  icon: {
    type: String,
    required: true,
  },
  label: {
    type: String,
    required: false,
  },
});
</script>

<template>
  <button
    class="inline-flex items-center p-2 justify-center whitespace-nowrap shrink-0 rounded-md duration-300 transition-all hover:opacity-30 hover:bg-colorPrimary-light dark:hover:bg-colorPrimary-dark"
    @click=""
  >
    <Icon :name="props.icon" :aria-label="props.label" size="16" />
  </button>
</template>
