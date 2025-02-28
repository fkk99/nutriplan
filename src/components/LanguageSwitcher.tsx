import React from 'react';
import { useLocalization } from '../localization/LocalizationContext';
import { Locale } from '../localization/types';

interface LanguageSwitcherProps {
  className?: string;
}

const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({ className = '' }) => {
  const { locale, setLocale } = useLocalization();

  const toggleLanguage = () => {
    setLocale(locale === 'en' ? 'fi' : 'en');
  };

  return (
    <button
      onClick={toggleLanguage}
      className={`flex items-center px-3 py-1 rounded-md text-sm font-medium transition-colors ${className}`}
      aria-label={locale === 'en' ? 'Switch to Finnish' : 'Vaihda englantiin'}
    >
      <span className="mr-2">{locale === 'en' ? 'FI' : 'EN'}</span>
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        width="16" 
        height="16" 
        viewBox="0 0 24 24" 
        fill="none" 
        stroke="currentColor" 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      >
        <path d="m5 8 6 6 6-6"/>
      </svg>
    </button>
  );
};

export default LanguageSwitcher;