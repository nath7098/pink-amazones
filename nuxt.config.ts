// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxt/ui", "@nuxtjs/google-fonts", '@pinia/nuxt'],
  compatibilityDate: "2025-02-20",
  future: {
    compatibilityVersion: 4
  },
  googleFonts: {
    families: {
      "Molle": true,
    },
    display: 'swap'
  },
  css: ['~/assets/css/main.css'],
  colorMode: {
    preference: 'light'
  },
  app: {
    pageTransition: {name: 'page', mode: 'out-in'},
    layoutTransition: {name: 'page', mode: 'out-in'},
  }
})