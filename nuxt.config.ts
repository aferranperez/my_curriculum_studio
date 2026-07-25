// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
    head: {
      title: 'Alejandro Ferran — Cloud Architect & Full-Stack Developer',
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      ]
    }
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
    '/': { redirect: '/feed' },
  },

  compatibilityDate: '2024-12-27'
})