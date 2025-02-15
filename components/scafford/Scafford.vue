<script setup>
import { ref, onMounted, onUnmounted } from "vue";
</script>

<template>
  <div ref="content" class="w-full h-dvh select-none flex flex-col">
    <!-- TopBar Wrpper-->
    <header
      class="fixed z-50 top-0 left-0 right-0 flex w-full h-14 bg-colorBackground-light dark:bg-colorBackground-dark border-b border-b-colorOutline-light dark:border-b-colorOutline-dark items-center"
    >
      <slot name="topbar"></slot>
    </header>

    <main
      class="w-full h-full xl:max-h-[1080px] max-w-6xl mx-auto overflow-y-auto *:pt-14"
    >
      <slot></slot>
    </main>

    <footer>
      <slot name="footer"></slot>
    </footer>
  </div>
</template>

<style>
html,
body {
  @apply bg-colorBackground-light dark:bg-colorBackground-dark text-colorOnSurface-light dark:text-colorOnSurface-dark;
  margin: 0;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
}
h1,
h2,
h3,
h4,
h5,
h6 {
  @apply text-colorOnSurface-light dark:text-colorOnSurface-dark;
}
p {
  @apply text-colorOnBackground-light dark:text-colorOnBackground-dark;
}
</style>
