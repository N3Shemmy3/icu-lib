<template>
  <div
    class="w-full grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-4 md:px-4 my-4"
  >
    <div
      v-for="n in 20"
      class="h-14 flex px-4 cursor-pointer space-x-2 items-center w-full md:border border-colorOutline-light dark:border-colorOutline-dark"
    >
      <Icon name="lucide:graduation-cap" size="24" />
      <div class="flex flex-col -space-y-1">
        <h5 class="test-base">Item title</h5>
        <p>Item description</p>
      </div>
    </div>
  </div>
</template>
