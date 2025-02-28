import React, { useState } from 'react';
import { ChefHat, Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { useLocalization } from '../localization/LocalizationContext';
import LanguageSwitcher from './LanguageSwitcher';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const { t } = useLocalization();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center">
              <ChefHat className="h-8 w-8 text-green-600" />
              <span className="ml-2 text-xl font-bold text-gray-900">{t('appName')}</span>
            </div>
            <div className="hidden sm:ml-10 sm:flex sm:space-x-8">
              <Link to="/" className={`${isActive('/') ? 'border-green-500 text-gray-900' : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'} inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium`}>
                {t('home')}
              </Link>
              <Link to="/how-it-works" className={`${isActive('/how-it-works') ? 'border-green-500 text-gray-900' : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'} inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium`}>
                {t('howItWorks')}
              </Link>
              <Link to="/meal-plans" className={`${isActive('/meal-plans') ? 'border-green-500 text-gray-900' : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'} inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium`}>
                {t('mealPlans')}
              </Link>
              <Link to="/about" className={`${isActive('/about') ? 'border-green-500 text-gray-900' : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'} inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium`}>
                {t('about')}
              </Link>
              <Link to="/pricing" className={`${isActive('/pricing') ? 'border-green-500 text-gray-900' : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'} inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium`}>
                {t('pricing')}
              </Link>
            </div>
          </div>
          <div className="hidden sm:ml-6 sm:flex sm:items-center">
            <LanguageSwitcher className="mr-4 text-gray-500 hover:text-gray-700" />
            <Link to="/login" className="text-gray-500 hover:text-gray-700 px-3 py-2 rounded-md text-sm font-medium">
              {t('login')}
            </Link>
            <Link to="/signup" className="ml-4 inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500">
              {t('signup')}
            </Link>
          </div>
          <div className="-mr-2 flex items-center sm:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-green-500"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu, show/hide based on menu state */}
      <div className={`sm:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
        <div className="pt-2 pb-3 space-y-1">
          <Link to="/" className={`${isActive('/') ? 'bg-green-50 border-green-500 text-green-700' : 'border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700'} block pl-3 pr-4 py-2 border-l-4 text-base font-medium`}>
            {t('home')}
          </Link>
          <Link to="/how-it-works" className={`${isActive('/how-it-works') ? 'bg-green-50 border-green-500 text-green-700' : 'border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700'} block pl-3 pr-4 py-2 border-l-4 text-base font-medium`}>
            {t('howItWorks')}
          </Link>
          <Link to="/meal-plans" className={`${isActive('/meal-plans') ? 'bg-green-50 border-green-500 text-green-700' : 'border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700'} block pl-3 pr-4 py-2 border-l-4 text-base font-medium`}>
            {t('mealPlans')}
          </Link>
          <Link to="/about" className={`${isActive('/about') ? 'bg-green-50 border-green-500 text-green-700' : 'border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700'} block pl-3 pr-4 py-2 border-l-4 text-base font-medium`}>
            {t('about')}
          </Link>
          <Link to="/pricing" className={`${isActive('/pricing') ? 'bg-green-50 border-green-500 text-green-700' : 'border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700'} block pl-3 pr-4 py-2 border-l-4 text-base font-medium`}>
            {t('pricing')}
          </Link>
        </div>
        <div className="pt-4 pb-3 border-t border-gray-200">
          <div className="flex items-center px-4">
            <div className="flex-shrink-0">
              <div className="h-10 w-10 rounded-full bg-green-100 flex items-center justify-center">
                <ChefHat className="h-6 w-6 text-green-600" />
              </div>
            </div>
            <div className="ml-3">
              <div className="text-base font-medium text-gray-800">Guest User</div>
              <div className="text-sm font-medium text-gray-500">{t('login')}</div>
            </div>
            <LanguageSwitcher className="ml-auto text-gray-500" />
          </div>
          <div className="mt-3 space-y-1">
            <Link to="/login" className="block px-4 py-2 text-base font-medium text-gray-500 hover:text-gray-800 hover:bg-gray-100">
              {t('login')}
            </Link>
            <Link to="/signup" className="block px-4 py-2 text-base font-medium text-gray-500 hover:text-gray-800 hover:bg-gray-100">
              {t('signup')}
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;