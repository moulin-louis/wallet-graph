import Aura from '@primevue/themes/aura';

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxt/eslint', '@nuxtjs/tailwindcss', '@primevue/nuxt-module'],
  imports: {
    dirs: ['./types', './types/**'],
  },
  devtools: {
    enabled: true,
    timeline: {
      enabled: true,
    },
  },
  // NOTE: import primeicons css
  css: ['primeicons/primeicons.css'],
  /// NOTE : define heliusApi var, defined in a separate .env
  runtimeConfig: {
    heliusApi: '',
  },
  compatibilityDate: '2024-04-03',
  nitro: {
    experimental: {
      /// NOTE: enable openAPI endpoints
      openAPI: true,
    },
  },
  /// NOTE: use eslint for style check and format
  eslint: {
    config: {
      stylistic: {
        indent: 2,
        semi: true,
        quotes: 'single',
        arrowParens: true,
      },
    },
  },
  /// NOTE: config default theme for primeVue
  primevue: {
    options: {
      theme: {
        preset: Aura,
      },
    },
  },
});
