import { useRouter } from 'next/router';
import ptBRTranslations from '../public/locales/pt-BR/common.json';
import enTranslations from '../public/locales/en/common.json';

const translations: Record<string, Record<string, string>> = {
  'pt-BR': ptBRTranslations,
  'en': enTranslations,
};

export function useTranslation() {
  const { locale = 'pt-BR' } = useRouter();
  
  const t = (key: string): string => {
    const localeTranslations = translations[locale] || translations['pt-BR'];
    return localeTranslations[key] || key;
  };
  
  return { t, locale };
}