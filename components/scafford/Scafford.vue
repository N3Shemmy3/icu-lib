<script setup>
import { ref, onMounted, onUnmounted } from "vue";
</script>

<template>
  <div ref="content" class="w-full h-dvh select-none flex">
    <div
      class="fixed w-64 border-e border-e-colorOutline-light dark:border-e-colorOutline-dark h-full flex"
    >
      <slot name="sidebar"></slot>
    </div>

    <div class="fixed left-[16rem] h-full flex flex-grow-0 flex-col">
      <!-- TopBar Wrpper-->
      <header
        class="z-50 flex w-full h-14 items-center justify-center border-b bg-colorBackground-light dark:bg-colorBackground-dark border-b-colorOutline-light dark:border-b-colorOutline-dark"
      >
        <slot name="topbar"></slot>
      </header>

      <main class="w-full h-full max-w-6xl mx-auto overflow-y-auto *:pt-14">
        <slot></slot>
      </main>

      <footer
        class="flex items-center border-t bg-colorBackground-light dark:bg-colorBackground-dark border-t-colorOutline-light dark:border-t-colorOutline-dark"
      >
        <slot name="footer"></slot>
      </footer>
    </div>
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
