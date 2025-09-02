
export default {
  /*
  ** Nuxt rendering mode
  ** See https://nuxtjs.org/api/configuration-mode
  */
  mode: 'spa',
  /*
  ** Nuxt target
  ** See https://nuxtjs.org/api/configuration-target
  */
  target: 'static',
  /*
  ** Headers of the page
  ** See https://nuxtjs.org/api/configuration-head
  */
  router: {
    base: '/nuxtjs-spa-portfolio/'
  },
  head: {
    title: '原網頁前端作品集 | yuan-webFrontend-portfolios', // title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
    script: [
      {src : "/nuxtjs-spa-portfolio/js/jquery.min.js" , body: true},
      {src : "/nuxtjs-spa-portfolio/js/browser.min.js", body: true},
      {src : "/nuxtjs-spa-portfolio/js/breakpoints.min.js", body: true},
      {src : "/nuxtjs-spa-portfolio/js/util.js", body: true},
      {src : "/nuxtjs-spa-portfolio/js/main.js", body: true}
    ],
  },
  /*
  ** Global CSS
  */
  css: [
    "~/assets/sass/main.scss",
  ],
  /*
  ** Plugins to load before mounting the App
  ** https://nuxtjs.org/guide/plugins
  */
  plugins: [
  ],
  /*
  ** Auto import components
  ** See https://nuxtjs.org/api/configuration-components
  */
  components: true,
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
  ],
  /*
  ** Build configuration
  ** See https://nuxtjs.org/api/configuration-build/
  */
  build: {
  },
  /*
  ** Generate configuration
  ** See https://nuxtjs.org/api/configuration-generate/
  */
  generate: {
    dir: 'docs'
  }
}
