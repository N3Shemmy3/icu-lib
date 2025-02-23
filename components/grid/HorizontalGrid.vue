<template>
  <section class="h-fit flex flex-col space-y-2">
    <div
      id="section-header"
      class="flex-grow-0 flex p-4 items-center justify-between"
    >
      <div class="flex flex-col">
        <h4 class="text-lg">School of Engineering</h4>
        <p class="text-base">Popular Courses</p>
      </div>
      <div class="flex items-center space-x-2">
        <Button text="View All" />
      </div>
    </div>
    <div
      class="w-full px-4 py-2 md:p-4 grid grid-flow-col gap-4 overflow-hidden overflow-x-scroll"
    >
      <div
        v-for="n in 10"
        class="size-40 border rounded border-colorOutline-light dark:border-colorOutline-dark"
      ></div>
    </div>
  </section>
</template>
