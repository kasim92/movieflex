import colors from "vuetify/es5/util/colors";

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: "%s",
    title: "شاشتي",
    htmlAttrs: {
      lang: "ar",
    },
    meta: [{
        name: 'description',
        content: 'شاشتي هو موقع اونلاين لتحميل و مشاهدة الافلام و المسلسلات العربية و الاجنبية'
      },
      {
        charset: "utf-8"
      },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1"
      },
      {
        hid: "شاشتي",
        name: "شاشتي",
        content: "شاشتي هو موقع اونلاين لتحميل و مشاهدة الافلام و المسلسلات العربية و الاجنبية",
        keywords: "مشاهدة ,شاشتي , شبكتي , مباشر , شبكتي , سنيمانا , سينما,شير,الشير , تنزيل ملفات , افلام, اونلاين , مسلسلات , مشاهدة اونلاين , تحميل افلام,شاشة, اخر الافلام , اخر المسلسلات",
      },
    ],
    link: [{
      rel: "icon",
      type: "image/x-icon",
      href: "/favicon.ico"
    }],
  },

  // target: 'static',

  //  { hid: 'Shashety Cinema', name: 'Shashety Cinema is online streaming service , latest movies and series', content: 'watch , movies, online, series, streaming, latest' },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    // '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/vuetify
    "@nuxtjs/vuetify",
    "@nuxt/image"
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    "@nuxtjs/axios",
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ["~/assets/variables.scss"],
    theme: {
      options: {
        customProperties: true,
      },
      dark: true,
      themes: {
        dark: {
          background: "#000000",
          warning: "#CE1212",
        },
        light: {
          background: "#d0f0c0",
          warning: "#CE1212",
        },
      },
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
};
