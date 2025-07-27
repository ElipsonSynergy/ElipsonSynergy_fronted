import es from '../i18n/es.json';
import en from '../i18n/en.json';
import por from '../i18n/por.json';

const translations = {
  es,
  en,
  por
};

export function getLangFromUrl(url: URL) {
  const [, lang] = url.pathname.split('/');
  if (lang in translations) return lang as keyof typeof translations;
  return 'es';
}

export function useTranslations(lang: keyof typeof translations) {
  return function t(key: string) {
    const keys = key.split('.');
    let value: any = translations[lang];
    
    for (const k of keys) {
      value = value?.[k];
    }
    
    return value || key;
  }
}

export function getLocalizedPath(path: string, lang: string) {
  if (lang === 'es') return path;
  return `/${lang}${path}`;
}

export const languages = {
  es: 'Español',
  en: 'English', 
  por: 'Português'
}; 