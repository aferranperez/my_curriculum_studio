// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    pageTransition: { name: 'page', mode: 'out-in' }
  },

  devtools: { enabled: true },

  modules: [
    '@nuxt/content',
    '@nuxthq/studio',
    '@nuxtjs/tailwindcss',
    '@nuxt/image',
    '@nuxt/icon',
    '@vueuse/nuxt'
  ],

  routeRules: {
    '/': { prerender: true }
  },

  compatibilityDate: '2024-12-27'
})