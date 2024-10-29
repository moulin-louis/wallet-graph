import Aura from "@primevue/themes/aura";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  modules: ["@nuxt/eslint", "@nuxtjs/tailwindcss", "@primevue/nuxt-module"],
  primevue: {
    options: {
      theme: {
        preset: Aura,
      },
    },
  },
  eslint: {
    config: {
      stylistic: {
        indent: 2,
        semi: true,
        quotes: "single",
        arrowParens: true,
      },
    },
  },
  runtimeConfig: {
    heliusApi: "",
  },
  devtools: {
    enabled: true,
    timeline: {
      enabled: true,
    },
  },
});
