<script setup>
const coureses = ref([
  { name: "Math", code: "MTH101" },
  { name: "Biology", code: "BIO101" },
  { name: "Economics", code: "ECO101" },
]);
</script>

<template>
  <div
    class="flex flex-col-reverse lg:flex-row lg:columns-2 md:m-auto md:h-fit xl:my-0"
  >
    <div
      id="left"
      class="lg:w-full select-text flex flex-col items-center justify-center"
    >
      <div
        class="w-full flex flex-col px-4 py-2 mt-14 md:mt-0 space-y-8 md:space-y-12"
      >
        <div class="space-y-1">
          <h3 class="text-3xl md:text-5xl">Study Buddy</h3>
          <p class="text-base mt-0.5">
            Empowering ICU students to achieve academic excellence. Your journey
            to success starts here
          </p>
        </div>
        <div class="space-y-4">
          <div
            class="flex w-fit items-center rounded border bg-opacity-10 focus-within:bg-opacity-100 bg-colorSurface-light dark:bg-colorSurface-dark text-colorOnSurface-light dark:text-colorOnSurface-dark border-colorOutline-light dark:border-colorOutline-dark"
          >
            <input
              type="text"
              placeholder="Search for materials"
              class="w-full md:w-80 ps-4 py-2 border-none outline-none bg-transparent"
            />
            <div class="flex items-center justify-center p-2 cursor-pointer">
              <Icon name="ic:outline-search" size="24" />
            </div>
          </div>
          <ul class="w-full flex items-center space-x-2">
            <Chip v-for="course in coureses" :label="course.name" />
          </ul>
        </div>
      </div>
    </div>
    <!--Right hero text-->
    <div
      id="right"
      class="flex lg:w-full flex-grow-0 items-center justify-center"
    >
      <UndrawReadingTimeGcvc class="max-w-120 md:max-w-lg w-full h-fit p-4" />
    </div>
  </div>
</template>
