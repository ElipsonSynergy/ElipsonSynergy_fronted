import { defineMiddleware } from "astro/middleware";

export const onRequest = defineMiddleware((context, next) => {
  const supportedLocales = ["es", "en", "por"];
  const defaultLocale = 'es';

  const [, maybeLocale] = context.url.pathname.split("/");

  // Si la ruta no tiene idioma (ej: "/")
  if (!maybeLocale || !supportedLocales.includes(maybeLocale)) {
    return Response.redirect(
      new URL(`/${defaultLocale}${context.url.pathname}`, context.url),
      302
    );
  }
return next();

});
