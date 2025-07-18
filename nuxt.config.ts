// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },

  modules: [
    "@nuxt/content",
    "@nuxt/eslint",
    "@nuxt/fonts",
    "@nuxt/icon",
    "@nuxt/image",
  ],

  ssr: true,

  eslint: {
    config: {
      stylistic: true,
    },
  },

  css: ["normalize.css", "assets/css/global.css"],

  content: {
    build: {
      markdown: {
        highlight: {
          theme: "github-light",
          langs: ["python"],
        },
      },
    },
  },
});
