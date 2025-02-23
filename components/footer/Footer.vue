<template>
  <div
    class="flex items-center w-full px-4 py-2 max-w-6xl mx-auto justify-between"
  >
    <div class="flex items-center space-x-2">
      <Icon name="ic:outline-keyboard-command-key" size="24" />
      <h4 class="text-xl">Library</h4>
    </div>
    <div class="flex">
      <Icon v-for="n in 5" name="ic:outline-card-giftcard" />
    </div>
  </div>
</template>
