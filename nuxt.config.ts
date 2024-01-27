// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: [
    '~/assets/css/main.css',
  ],
  modules: [
    '@nuxt/ui',
    //'@pinia/nuxt',
    '@nuxt/image',
    "@tresjs/nuxt",
    //'@tresjs/nuxt',
    //'@nuxtjs/i18n',
    //'@nuxt/content',
    //'@nuxtjs/supabase',
    //'@formkit/auto-animate/nuxt',
  ],
  plugins: ["~/plugins/preline.client.ts"],
  tres: {
    glsl: true,
    devtools: true,
  },
  ui: {
    notifications: {
      position: 'top-0 right-0'
    }
  },
  colorMode: {
    preference: 'system',
    fallback: 'dark',
    hid: 'nuxt-color-mode-script',
    globalName: '__NUXT_COLOR_MODE__',
    componentName: 'ColorScheme',
    classPrefix: '',
    classSuffix: '',
    storageKey: 'nuxt-color-mode'
  },
})
