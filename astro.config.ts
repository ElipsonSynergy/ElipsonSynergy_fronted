// astro.config.ts
import { defineConfig } from 'astro/config'
import react from '@astrojs/react'
import vercel from '@astrojs/vercel'
import tailwind from '@tailwindcss/vite'
import type { PluginOption } from 'vite'

export default defineConfig({
  output: 'server',
  adapter: vercel(),
  integrations: [react()],

  i18n: {
    defaultLocale: 'es',
    locales: ['es','en','por'],
    routing: { prefixDefaultLocale: false }
  },

  vite: {
    // 👇 Cast para contentar a TS (no afecta el runtime)
    plugins: [tailwind() as PluginOption] as PluginOption[],
    server: {
      proxy: { '/uploads': { target: 'http://localhost:3000', changeOrigin: true } }
    }
  },

  // Si no lo necesitas, puedes borrar este bloque build
  build: { client: 'client', server: 'server' }
})
