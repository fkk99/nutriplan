export type Locale = 'en' | 'fi';

export interface LocalizationContextType {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: (key: string, params?: Record<string, string | number>) => string;
  formatDate: (date: Date | string) => string;
  formatNumber: (num: number, options?: Intl.NumberFormatOptions) => string;
}