import React, { createContext, useState, useContext, useEffect, ReactNode } from 'react';
import { Locale, LocalizationContextType } from './types';
import { translations } from './translations';

const defaultLocale: Locale = 'en';

const LocalizationContext = createContext<LocalizationContextType>({
  locale: defaultLocale,
  setLocale: () => {},
  t: (key) => key,
  formatDate: (date) => String(date),
  formatNumber: (num) => String(num),
});

interface LocalizationProviderProps {
  children: ReactNode;
}

export const LocalizationProvider: React.FC<LocalizationProviderProps> = ({ children }) => {
  const [locale, setLocale] = useState<Locale>(() => {
    // Try to get the locale from localStorage
    const savedLocale = localStorage.getItem('locale') as Locale;
    if (savedLocale && (savedLocale === 'en' || savedLocale === 'fi')) {
      return savedLocale;
    }
    
    // Try to get the locale from browser settings
    const browserLocale = navigator.language.split('-')[0];
    if (browserLocale === 'fi') {
      return 'fi';
    }
    
    return defaultLocale;
  });

  useEffect(() => {
    // Save the locale to localStorage when it changes
    localStorage.setItem('locale', locale);
    
    // Update the html lang attribute
    document.documentElement.lang = locale;
  }, [locale]);

  const t = (key: string, params?: Record<string, string | number>): string => {
    const translation = translations[locale][key];
    
    if (!translation) {
      console.warn(`Translation key not found: ${key}`);
      return key;
    }
    
    if (Array.isArray(translation)) {
      return translation[0];
    }
    
    if (!params) {
      return translation as string;
    }
    
    // Replace parameters in the translation string
    return Object.entries(params).reduce((result, [param, value]) => {
      return result.replace(new RegExp(`\\{${param}\\}`, 'g'), String(value));
    }, translation as string);
  };

  const formatDate = (date: Date | string): string => {
    const dateObj = typeof date === 'string' ? new Date(date) : date;
    
    const options: Intl.DateTimeFormatOptions = {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    };
    
    return new Intl.DateTimeFormat(locale === 'fi' ? 'fi-FI' : 'en-US', options).format(dateObj);
  };

  const formatNumber = (num: number, options?: Intl.NumberFormatOptions): string => {
    return new Intl.NumberFormat(locale === 'fi' ? 'fi-FI' : 'en-US', options).format(num);
  };

  return (
    <LocalizationContext.Provider value={{ locale, setLocale, t, formatDate, formatNumber }}>
      {children}
    </LocalizationContext.Provider>
  );
};

export const useLocalization = () => useContext(LocalizationContext);