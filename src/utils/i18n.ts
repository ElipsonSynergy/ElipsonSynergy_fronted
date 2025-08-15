import es from '../i18n/es.json';
import en from '../i18n/en.json';
import por from '../i18n/por.json';

const translations = {
  es,
  en,
  por
};

export function getLangFromUrl(url: URL) {
  const pathname = url.pathname;
  
  // Split the pathname and get the first segment
  const segments = pathname.split('/').filter(segment => segment !== '');
  
  if (segments.length > 0) {
    const firstSegment = segments[0];
    if (firstSegment in translations) {
      return firstSegment as keyof typeof translations;
    }
  }
  
  return 'es';
}

export function getLangFromParams(params: Record<string, string | undefined>) {
  const { locate } = params;
  if (locate && locate in translations) return locate as keyof typeof translations;
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
  // Always include language prefix to ensure consistency with middleware
  return `/${lang}${path}`;
}

export function cleanPathFromLanguage(path: string): string {
  // Remove any language prefixes from the path
  let cleanPath = path;
  
  // Remove language prefixes at the beginning
  cleanPath = cleanPath.replace(/^\/(es|en|por)/, '');
  cleanPath = cleanPath.replace(/^\/(es|en|por)\//, '/');
  
  // Ensure we have a valid path
  if (!cleanPath || cleanPath === '') {
    cleanPath = '/';
  }
  
  return cleanPath;
}

export const languages = {
  es: 'Español',
  en: 'English', 
  por: 'Português'
}; 