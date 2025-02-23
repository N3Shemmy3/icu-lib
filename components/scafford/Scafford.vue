<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";
const props = defineProps({
  isDrawerOpen: {
    type: Boolean,
    required: true,
  },
});
const emit = defineEmits(["onOverlayClicked"]);
const overlay = ref<HTMLDivElement>();
const drawer = ref<HTMLDivElement>();

function onOverlayClicked(e: MouseEvent) {
  if (e.target == overlay.value) emit("onOverlayClicked");
}
</script>

<template>
  <div ref="root" class="w-full h-dvh overflow-x-hidden select-none flex">
    <!--Mobile Sidebar-->
    <Transition name="slide-fade" :duration="300">
      <div
        v-show="props.isDrawerOpen"
        ref="overlay"
        @click="onOverlayClicked($event)"
        class="fixed z-50 md:hidden outer left-0 top-0 right-0 bottom-0 h-full flex-col bg-black bg-opacity-70"
      >
        <div
          ref="drawer"
          class="fixed inner h-full z-[80] w-64 bg-colorBackground-light dark:bg-colorBackground-dark border-e border-e-colorOutline-light dark:border-e-colorOutline-dark"
        >
          <slot name="sidebar"> </slot>
        </div>
      </div>
    </Transition>

    <!--Destop Sidebar-->
    <div
      ref="drawer"
      class="fixed inner hidden md:flex h-full z-[80] w-64 bg-colorBackground-light dark:bg-colorBackground-dark border-e border-e-colorOutline-light dark:border-e-colorOutline-dark"
    >
      <slot name="sidebar"> </slot>
    </div>

    <!--Main Content-->
    <div
      class="md:fixed left-64 top-0 right-0 w-full md:w-[unset] md:overflow-y-auto h-full flex flex-col"
    >
      <!-- TopBar Wrpper-->
      <header
        class="fixed md:left-[16rem] left-0 top-0 right-0 z-40 flex h-14 items-center justify-center border-b bg-colorBackground-light dark:bg-colorBackground-dark border-b-colorOutline-light dark:border-b-colorOutline-dark"
      >
        <slot name="topbar"></slot>
      </header>

      <main class="w-full min-h-fit box-border mx-auto flex flex-col *:pt-14">
        <slot></slot>
      </main>

      <footer
        class="flex items-center mt-auto border-t bg-colorBackground-light dark:bg-colorBackground-dark border-t-colorOutline-light dark:border-t-colorOutline-dark"
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
.slide-fade-enter-active .inner {
  transition-delay: 0.1s;
  transition: all 0.3s;
}
.slide-fade-leave-active .inner {
  transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter-from .inner,
.slide-fade-leave-to .inner {
  transform: translatex(-100%);
  opacity: 0;
}
</style>
