
module.exports = {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
    'element-ui/lib/theme-chalk/index.css',
    'quill/dist/quill.core.css',
    // for snow theme
    'quill/dist/quill.snow.css',
    // for bubble theme
    'quill/dist/quill.bubble.css',
    // '@/static/tinymce/tinymce.min.css',
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '@/plugins/element-ui',
    '@/plugins/svgicon',
    {src:'@/plugins/quill-editor',ssr:false},
    {src:'@/plugins/prism',ssr:false},
    {src:'@/plugins/message',ssr:false},
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    [
      'nuxt-i18n',
      {
        locales: [
          { code: 'en', iso: 'en-US', file: 'en-US.yml' },
          { code: 'zh', iso: 'zh-CN', file: 'zh-CN.yml' },
        ],
        defaultLocale: 'zh',
        lazy: true,
        langDir: 'i18n/',
        strategy: 'no_prefix',
        detectBrowserLanguage: {
          fallbackLocale: 'zh',
          useCookie: true,
          alwaysRedirect: true,
        },
      }
    ],
  ],
  /*
  ** Build configuration
  */
  build: {
    transpile: [/^element-ui/],
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
      config.module.rules.push({
        test: /\.ya?ml?$/,
        loader: ['json-loader', 'yaml-loader', ]
      })
    }
  }
}
