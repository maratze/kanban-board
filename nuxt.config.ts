// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    'nuxt-icon',
    '@vee-validate/nuxt'
  ],
  imports: {
    dirs: [
      'types/*.ts',
      'types/**/*.ts'
    ]
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {}
    }
  },
  css: [
    '@/assets/scss/main.scss'
  ],
  app: {
    head: {
      title: 'Worker'
    }
  }
})
