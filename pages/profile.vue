<script setup>
import avatar from "@/public/avatar.jpg";
</script>

<template>
  <div class="flex flex-col md:flex-row md:h-full w-full md:max-h-fit">
    <!--Left hero text-->
    <div id="left" class="w-full flex flex-col items-center justify-center">
      <div
        class="w-full flex flex-col px-4 py-2 mt-4 md:mt-0 space-y-8 md:space-y-12"
      >
        <div class="mb-8">
          <h3 class="text-3xl md:text-5xl">Profile Settings</h3>
        </div>
        <div class="flex justify-between">
          <Img
            :src="avatar"
            class="size-44 rounded-full object-cover overflow-hidden border border-colorOutline-light dark:border-colorOutline-dark"
          />
          <div class="my-auto flex flex-col space-y-4">
            <Button icon="lucide:pencil" text="Edit" theme="filled" />
            <Button icon="lucide:trash-2" text="Remove" theme="outlined" />
          </div>
        </div>
        <div class="flex flex-col space-y-4 md:w-80">
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
      class="md:w-full select-text flex flex-col items-center justify-center"
    ></div>
  </div>
</template>
