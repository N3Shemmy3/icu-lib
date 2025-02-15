<template>
  <div class="w-full h-dvh select-none flex flex-col">
    <!-- TopBar Wrpper-->
    <header
      class="z-50 flex w-full h-14 border-b border-b-colorSurface-dark items-center"
    >
      <slot name="topbar"></slot>
    </header>

    <main class="w-full h-full *:pt-14">
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
  @apply bg-colorBackground-light dark:bg-colorBackground-dark text-colorOnBackground-light dark:text-colorOnBackground-dark;
  margin: 0;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
}
</style>
