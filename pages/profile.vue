<script setup>
import avatar from "@/public/avatar.jpg";
</script>

<template>
  <div class="flex flex-col lg:flex-row w-full lg:max-h-fit">
    <!--Left hero text-->
    <div id="left" class="w-full flex flex-col items-center justify-center">
      <div
        class="w-full flex flex-col px-4 py-2 mt-4 lg:mt-0 space-y-8 lg:space-y-12"
      >
        <div class="mb-8">
          <h3 class="text-3xl lg:text-5xl">Profile Settings</h3>
        </div>
        <div class="relative flex justify-between">
          <img
            :src="avatar"
            class="size-44 rounded-full object-cover overflow-hidden border-2 border-colorPrimary-light dark:border-colorPrimary-dark"
          />
          <div class="absolute bottom-0 start-2">
            <IconButton icon="lucide:camera" class="" theme="filled" />
          </div>
        </div>
        <div class="flex flex-col space-y-4">
          <Input placeholder="First name" inputmode="text" />
          <Input placeholder="Last name" inputmode="text" />
          <Input placeholder="Program" inputmode="text" />
        </div>
        <div class="flex gap-4">
          <Button text="Cancel" theme="outlined" />
          <Button text="Update" theme="filled" />
        </div>
        <div class="h-[400px]"></div>
      </div>
    </div>
    <!--Right hero text-->
    <div
      id="right"
      class="lg:w-full select-text flex flex-col items-center justify-center"
    ></div>
  </div>
</template>
