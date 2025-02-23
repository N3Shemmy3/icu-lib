<template>
  <section
    class="flex-grow-0 flex flex-grow-0 flex-col space-y-2 border rounded border-colorOutline-light dark:border-colorOutline-dark"
  >
    <div
      id="section-header"
      class="w-full flex-grow-0 flex p-4 items-center justify-between"
    >
      <div class="flex flex-col">
        <h4 class="text-lg">School of Engineering</h4>
        <p class="text-base">Popular Courses</p>
      </div>
      <div class="flex items-center space-x-2">
        <Button text="View All" />
      </div>
    </div>
    <div class="p-4 grid gap-4 grid-responsive">
      <div
        v-for="n in 5"
        class="w-full aspect-square border rounded border-colorOutline-light dark:border-colorOutline-dark"
      ></div>
    </div>
  </section>
</template>
<style scoped>
.grid-responsive {
  grid-area: span;
  grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
}
</style>
