// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    "@nuxt/ui",
    "@nuxtjs/google-fonts",
    '@pinia/nuxt',
    '@nuxtjs/supabase'
  ],
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
    head: {
      title: 'Pink Amazones',
      htmlAttrs: {lang: 'fr'},
      link: [
        {rel: 'icon', href: '/favicon.ico', type: 'image/x-icon'},
      ]
    }
  },
  supabase: {
    url: process.env.NUXT_PUBLIC_SUPABASE_URL || 'https://hsrgsofjhimsxsglmmqx.supabase.co',
    key: process.env.NUXT_PUBLIC_SUPABASE_KEY || '',
    redirectOptions: {
      login: '/',
      callback: '/',
      exclude: ['/**']
    }
  },
  runtimeConfig: {
    public: {
      apiBaseUrl: 'http://localhost:3033',
      helloAsso: {
        don: '',
        adhesion: ''
      }
    }
  }
})