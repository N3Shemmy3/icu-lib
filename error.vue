<script setup lang="ts">
import type { NuxtError } from "#app";

const props = defineProps({
  error: Object as () => NuxtError,
});
</script>

<template>
  <div
    class="space-y-8 bg-colorBackground-light dark:bg-colorBackground-dark text-colorOnBackground-light dark:text-colorOnBackground-dark flex flex-col items-center justify-center h-screen"
  >
    <h1 class="text-9xl">{{ error?.statusCode }}</h1>
    <div>
      <Button text="Reload" class="text-sm" @click="$router.push('/')" />
    </div>
  </div>
</template>
