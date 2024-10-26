// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  modules: ["@nuxt/eslint", "@nuxtjs/tailwindcss"],
  typescript: {
    typeCheck: true,
    strict: false,
  },
  devtools: { enabled: true },
});
