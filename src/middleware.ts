// src/middleware.ts
import { defineMiddleware } from 'astro/middleware';

export const onRequest = defineMiddleware((context, next) => {
  const supported = new Set(['es', 'en', 'por']);
  const defaultLocale = 'es';

  const { pathname } = context.url;

  // 1) Deja pasar archivos estáticos y APIs
  //    - extensiones /.*\.[\w]+$/ (ej: .css, .js, .png)
  //    - prefijos: _astro, assets, images, api, favicon, robots, sitemap
  if (
    /\.[\w]+$/.test(pathname) ||                       // tiene extensión
    pathname.startsWith('/_astro') ||
    pathname.startsWith('/assets') ||
    pathname.startsWith('/images') ||
    pathname.startsWith('/api') ||
    pathname === '/favicon.ico' ||
    pathname === '/robots.txt' ||
    pathname === '/sitemap.xml'
  ) {
    return next();
  }

  // 2) Si ya tiene locale, sigue
  const seg = pathname.split('/').filter(Boolean)[0]; // primer segmento
  if (seg && supported.has(seg)) return next();

  // 3) Si no tiene locale, antepón el default
  return context.redirect(`/${defaultLocale}${pathname}`, 302);
});
