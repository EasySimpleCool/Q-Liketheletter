const pkg = require('./package');
const axios = require('axios');

module.exports = {
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    title: 'Q-Liketheletter',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: "Q blog - Really long description about random shiet in this page" },
    ],
    link: [
      { rel: 'icon', type: 'image/png', href: '/favicon2.png' },
      { rel: "stylesheet", href: "https://use.fontawesome.com/releases/v5.1.0/css/all.css"},
      {rel: "stylesheet", href:"https://fonts.googleapis.com/css?family=Open+Sans:400,700,800"}
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#FFFFFF' },

  /*
  ** Global CSS
  */
  css: [
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: ['~/plugins/components.js'],
  
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://github.com/nuxt-community/axios-module#usage
    [
      "storyblok-nuxt", 
      {
        accessToken: 
          process.env.NODE_ENV == 'production'
            ? 'rpzuVJthihV4KDRvhp6Pewtt'
            : 'J9k213Ax7xdnZrygMBLZgQtt', 
        cacheProvider: 'memory'
      }
    ]
  ],

  generate: {
    routes: function() {
      return axios.get(
        'https://api.storyblok.com/v1/cdn/stories?version=published&token=rpzuVJthihV4KDRvhp6Pewtt&starts_with-blog&cv=' + Math.floor(Date.now() / 1e3)
      )
      .then(res => {
        const blogPosts = res.data.stories.map(bp => bp.slug);
        return [
          '/',
          ...blogPosts
        ]
      });
    }
  },
  /*
  ** Axios module configuration
  */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
  },

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
