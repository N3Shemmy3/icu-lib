<script setup>
const value = ref("");
</script>
<template>
  <div class="flex flex-col-reverse md:flex-row md:h-full w-full md:max-h-fit">
    <!--Left hero text-->
    <div id="left" class="md:w-full flex flex-col items-center justify-center">
      <div
        class="w-full flex flex-col px-4 py-2 mt-14 md:mt-0 space-y-8 md:space-y-12"
      >
        <div class="space-y-1">
          <h3 class="text-3xl md:text-5xl">Welcome back</h3>
          <p class="text-base mt-0.5">
            Lets get you back on track. Sign in to access all features
          </p>
        </div>
        <div class="flex flex-col space-y-4 md:w-80">
          <Input placeholder="Student number" inputmode="numeric" />
          <Input placeholder="Password" inputmode="password" />
          <button
            class="inline-flex gap-2 text-base text-nowrap justify-center duration-300 transition-all hover:bg-opacity-70 bg-colorPrimary-light dark:bg-colorPrimary-dark text-colorOnPrimary-light dark:text-colorOnPrimary-dark rounded-lg px-4 py-2"
          >
            Sign in
          </button>
        </div>
        <div>
          <p class="inline-flex gap-2 text-sm text-nowrap">
            Don't have an account?
            <NuxtLink
              to="/auth/signup"
              class="text-colorPrimary-light dark:text-colorPrimary-dark font-bold hover:text-opacity-70"
              >Sign up</NuxtLink
            >
          </p>
        </div>
      </div>
    </div>
    <!--Right hero text-->
    <div
      id="right"
      class="md:w-full select-text flex flex-col items-center justify-center"
    >
      <UndrawSignUpZ2ku class="max-w-80 h-fit md:max-w-full p-8 md:p-16" />
    </div>
  </div>
</template>
