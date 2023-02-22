export default {
  target:'static',
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'AMCG_fyp',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', type: 'text/css', href: '/css/app.min.css'}
    ],
    script: [
      { src: '/js/vendors.min.js', body: true },
      { src: '/js/app.min.js', body: true }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules

  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/auth'
  ],
  axios:{
    baseURL:'http://localhost:3001/customer',
    // header:{
    //   'x-api-key':'m60lm2BbT8fTHtKQQQ1bKqvbQ2BackdDtlAiCts0eK2ddQ0KTOY5jIcwOJViPSVrnuL4ReJ2T3YiLEDAOBKLwQqhPLV4Zwj9DvW7RvdNXI5nQPURNltCjX7apVWni59d'
    // }
  },
  // auth: {
  //   strategies: {
  //     local: {
  //       endpoints: {
  //         login: { url: 'login', method: 'post', propertyName: 'data.token' },
  //         // user: { url: 'me', method: 'get', propertyName: 'data' },
  //         user: false,
  //         logout: false
  //       }
  //     }
  //   },
  //   redirect:{
  //     login:'/login',
  //     logout:'/login',
  //   }
  // },
  // router:{
  //   middleware: ['auth']
  // },

  build: {
  }
}
