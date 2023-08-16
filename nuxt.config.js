export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: "static",
  colorMode: {
    classSuffix: "",
  },

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "Fico Pangestu - Portfolio",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content:
          "Full-Stack Developer & Design Enthusiast with a passion for creating beautiful and functional web applications. Explore my portfolio to see my work and let’s collaborate to bring your ideas to life.",
      },
      { name: "format-detection", content: "telephone=no" },
    ],
    // link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.png" }],
    link: [
      {
        rel: "apple-touch-icon",
        sizes: "180x180",
        href: "/apple-touch-icon.png",
      },
    ],
    link: [
      {
        rel: "icon",
        type: "image/png",
        sizes: "32x32",
        href: "/favicon-32x32.png",
      },
    ],
    link: [
      {
        rel: "icon",
        type: "image/png",
        sizes: "16x16",
        href: "/favicon-32x32.png",
      },
    ],
    link: [{ rel: "manifest", href: "/site.webmanifest" }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ["~/assets/app.css"],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    // "~/plugins/back-to-top.js"
    { src: "@/plugins/enlarge", mode: "client", ssr: false },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    "@nuxtjs/tailwindcss",
    "@nuxtjs/color-mode",
    "@nuxt/image",
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    [
      "nuxt-social-meta",
      {
        url: "https://ficopang.github.io",
        title: "Fico Pangestu - Portfolio",
        site_name: "Fico Pangestu",
        description:
          "Full-Stack Developer & Design Enthusiast with a passion for creating beautiful and functional web applications. Explore my portfolio to see my work and let’s collaborate to bring your ideas to life.",
        img: "/banner.png",
        img_size: { width: "1200", height: "630" },
        locale: "en_US",
        twitter: "@fico_pangestu",
        twitter_card: "/banner.png",
        theme_color: "#4f46e5",
      },
      "@nuxtjs/sitemap",
      "@nuxtclub/feathericons",
    ],
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
};
