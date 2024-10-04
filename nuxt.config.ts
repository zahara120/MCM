// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxt/image",
    "@nuxtjs/google-fonts",
    "@nuxt/icon",
  ],
  googleFonts: {
    families: {
      Poppins: [400, 500, 700],
    },
    display: "swap",
  },
});
