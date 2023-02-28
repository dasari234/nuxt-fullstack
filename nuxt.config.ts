import { resolve } from "path"
export default defineNuxtConfig({
    alias: {
      "@": resolve(__dirname, "/"),
    },
    css: ["~/assets/styles/main.scss"],
    postcss: {
        plugins: {
          tailwindcss: {},
          autoprefixer: {},
        },
     },
     modules: [
      '@vueuse/nuxt',
      '@pinia/nuxt',
    ],
    ssr: false,
})
