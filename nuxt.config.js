import morgan from 'morgan'

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'panet',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },
  loading: {
    color: '#ff5722',
    height: '3px',
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    'vue-multiselect/dist/vue-multiselect.min.css',
    '@/assets/scss/all.scss',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '@@/plugins/vee-validate.js',
    { src: '@@/plugins/vuejs-datepicker.js', mode: 'client' },
    { src: '@@/plugins/lazy.js', mode: 'client' },
    { src: '@@/plugins/svg.js' },
    // { src: "@@/plugins/detectWebp.js", mode: "client"}
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules

  buildModules: ['@aceforth/nuxt-optimized-images'],

  optimizedImages: {
    optimizeImages: true,
    handleImages: ['jpeg', 'png', 'webp'],
  },

  serverMiddleware: [
    morgan('tiny'),
    { path: '/api', handler: '@/server/index.js' },
  ],
  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/svg',
    '@nuxtjs/auth',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    baseURL: process.env.BASE_URL || 'http://localhost:3000',
  },

  auth: {
    strategies: {
      local: {
        token: {
          property: 'token',
          // required: true,
          // type: 'Bearer'
        },
        user: {
          property: 'user',
          // autoFetch: true
        },
        endpoints: {
          login: { url: '/api/auth/login', method: 'post' },
          logout: { url: '/api/auth/logout', method: 'post' },
          user: { url: '/api/auth/user', method: 'get' },
        },
      },
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    loaders: {
      scss: {
        additionalData: '@import "~@/assets/scss/env.scss";',
      },
    },
    transpile: ['vee-validate/dist/rules'],
    extend(config, ctx) {
      // console.log(config.plugins);
    },
  },
}
