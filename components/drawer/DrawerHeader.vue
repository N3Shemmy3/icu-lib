<template>
  <div
    class="flex felx-col items-center whitespace-nowrap text-nowrap justify-between p-2 rounded-md cursor-pointer duration-300 transition-colors hover:bg-colorSurface-light dark:hover:bg-colorSurface-dark border border-colorOutline-light dark:border-colorOutline-dark"
  >
    <img
      src="/public/avatar.jpg"
      class="object-cover rounded-full size-12"
      alt=""
    />
    <div class="space-y-0">
      <h5
        class="text-base text-colorOnSurface-light dark:text-colorOnSurface-dark"
      >
        Shemmy Nyirenda
      </h5>
      <p class="text-sm">@2308822137</p>
    </div>
    <IconButton icon="lucide:user-pen" />
  </div>
</template>
