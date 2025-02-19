// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  components: [
    {
      path: "~/components",
      pathPrefix: false,
    },
  ],
  imports: {
    autoImport: true,
  },
  ssr: false,
  devtools: { enabled: true },
  modules: [
    "@nuxt/icon",
    "@nuxtjs/supabase",
    "@nuxtjs/tailwindcss",
    "@vueuse/nuxt",
  ],
  runtimeConfig: {
    public: {
      // Publicly accessible variables
      supabaseUrl: process.env.SUPABASE_URL,
      supabaseKey: process.env.SUPABASE_KEY,
    },
  },
  supabase: {
    redirectOptions: {
      login: "/auth/login",
      callback: "/auth/confirm",
      include: undefined,
      exclude: ["*"],
      cookieRedirect: false,
    },
  },
});
