// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import react from "@astrojs/react";
import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  output: "server",
  integrations: [react()],

  i18n: {
    defaultLocale: "es",
    locales: ["es", "en", "por"],
    routing: {
      prefixDefaultLocale: false
    }
  },

  vite: {
    plugins: [tailwindcss()],
    server: {
      proxy: {
        '/uploads': {
          target: 'http://localhost:3000',
          changeOrigin: true
        }
      }
    }
  },

  adapter: vercel({}), 
  build: {
    client: "client",
    server: "server",
  }
});