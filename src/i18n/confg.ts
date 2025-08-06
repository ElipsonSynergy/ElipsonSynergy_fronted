import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import es from "./es.json";
import en from "./en.json";
import pt from "./por.json";

export function initI18n(locale: string) {
  i18n
    .use(initReactI18next)
    .init({
      lng: locale,
      fallbackLng: "es",
      resources: {
        es: { translation: es },
        en: { translation: en },
        pt: { translation: pt }
      },
      interpolation: {
        escapeValue: false
      }
    });
}

export default i18n;
