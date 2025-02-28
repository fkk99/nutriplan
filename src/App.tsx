import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ChefHat, Sparkles } from 'lucide-react';
import MealPlanForm from './components/MealPlanForm';
import MealPlan from './components/MealPlan';
import SavedPlans from './components/SavedPlans';
import QuickPlanForm from './components/QuickPlanForm';
import Navbar from './components/Navbar';
import LandingPage from './components/LandingPage';
import AboutPage from './components/AboutPage';
import PricingPage from './components/PricingPage';
import HowItWorksPage from './components/HowItWorksPage';
import { MealPlanData, UserPreferences, Meal, MacroNutrients, DayPlan, ShoppingCategory } from './types';
import { generateSampleMeal, generateSampleMealPlan } from './utils/sampleData';
import { useLocalization } from './localization/LocalizationContext';

function App() {
  const { t } = useLocalization();
  const [mealPlan, setMealPlan] = React.useState<MealPlanData | null>(null);
  const [isLoading, setIsLoading] = React.useState(false);
  const [showWelcome, setShowWelcome] = React.useState(true);
  const [showSavedPlans, setShowSavedPlans] = React.useState(false);
  const [planMode, setPlanMode] = React.useState<'quick' | 'custom' | null>(null);

  React.useEffect(() => {
    // Hide welcome message after 5 seconds
    const timer = setTimeout(() => {
      setShowWelcome(false);
    }, 5000);
    
    return () => clearTimeout(timer);
  }, []);

  const generateMealPlan = (preferences: UserPreferences) => {
    setIsLoading(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
    
    // Simulate API call with setTimeout
    setTimeout(() => {
      const generatedPlan = generateSampleMealPlan(preferences);
      setMealPlan(generatedPlan);
      setIsLoading(false);
    }, 1500);
  };

  const regenerateMeal = (dayIndex: number, mealType: string) => {
    if (!mealPlan) return;
    
    setIsLoading(true);
    
    // Simulate API call with setTimeout
    setTimeout(() => {
      const updatedMealPlan = { ...mealPlan };
      const day = updatedMealPlan.days[dayIndex];
      
      const mealIndex = day.meals.findIndex(meal => meal.type === mealType);
      if (mealIndex !== -1) {
        // Replace the meal with a new one
        day.meals[mealIndex] = generateSampleMeal(mealType, mealPlan.preferences);
      }
      
      setMealPlan(updatedMealPlan);
      setIsLoading(false);
    }, 1000);
  };

  const resetMealPlan = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setTimeout(() => {
      setMealPlan(null);
      setShowSavedPlans(false);
      setPlanMode(null);
    }, 300);
  };

  const loadSavedPlan = (plan: any) => {
    setMealPlan(plan.plan);
    setShowSavedPlans(false);
  };

  const MealPlannerApp = () => (
    <div className="min-h-screen bg-gray-50 pb-12">
      <header className="bg-white shadow-sm sticky top-0 z-10 transition-all duration-300">
        <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <div className="flex items-center">
            <div className="h-10 w-10 rounded-full bg-green-100 flex items-center justify-center mr-3 animate-pulse-subtle">
              <ChefHat className="h-6 w-6 text-green-600" />
            </div>
            <h1 className="text-2xl font-bold text-gray-900 tracking-tight">{t('appName')}</h1>
          </div>
          
          <div className="flex space-x-2">
            {!showSavedPlans && (
              <button
                onClick={() => setShowSavedPlans(true)}
                className="premium-button bg-white border border-gray-200 text-gray-700 hover:bg-gray-50"
              >
                {t('savedMealPlans')}
              </button>
            )}
            
            {(mealPlan || showSavedPlans || planMode) && (
              <button
                onClick={resetMealPlan}
                className="premium-button bg-white border border-gray-200 text-gray-700 hover:bg-gray-50"
              >
                {t('startOver')}
              </button>
            )}
          </div>
        </div>
      </header>
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {showWelcome && !mealPlan && !showSavedPlans && !planMode && (
          <div className="mt-8 mb-6 premium-card p-6 border-l-4 border-green-500 animate-fade-in">
            <div className="flex">
              <div className="flex-shrink-0">
                <Sparkles className="h-5 w-5 text-green-500" />
              </div>
              <div className="ml-3">
                <h3 className="text-sm font-medium text-green-800">{t('welcome', { appName: t('appName') })}</h3>
                <div className="mt-2 text-sm text-green-700">
                  <p>{t('welcomeDesc')}</p>
                </div>
              </div>
            </div>
          </div>
        )}
        
        {isLoading && !mealPlan && (
          <div className="mt-12 flex flex-col items-center justify-center animate-fade-in">
            <div className="w-16 h-16 border-4 border-green-200 border-t-green-600 rounded-full animate-spin"></div>
            <p className="mt-4 text-lg font-medium text-gray-600">{t('creatingPlan')}</p>
            <p className="mt-2 text-sm text-gray-500">{t('thisMayTake')}</p>
          </div>
        )}
        
        {!isLoading && showSavedPlans && (
          <div className="py-8 animate-fade-in">
            <SavedPlans onLoadPlan={loadSavedPlan} onBack={resetMealPlan} />
          </div>
        )}
        
        {!isLoading && mealPlan && !showSavedPlans ? (
          <div className="py-8 animate-fade-in">
            <MealPlan 
              mealPlan={mealPlan} 
              onReset={resetMealPlan} 
              onRegenerateMeal={regenerateMeal}
              isLoading={isLoading}
            />
          </div>
        ) : !isLoading && !showSavedPlans && !planMode && (
          <div className="py-8">
            <div className="premium-card p-8 animate-slide-up">
              <div className="mb-8 text-center">
                <h2 className="text-2xl font-bold text-gray-800 mb-3">{t('createPlanQuestion')}</h2>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  {t('createPlanDesc')}
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                <div 
                  onClick={() => setPlanMode('quick')}
                  className="premium-card p-6 border-2 border-transparent hover:border-green-200 cursor-pointer transition-all duration-200 flex flex-col items-center text-center"
                >
                  <div className="h-16 w-16 rounded-full bg-green-100 flex items-center justify-center mb-4">
                    <Sparkles className="h-8 w-8 text-green-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">{t('magicPlan')}</h3>
                  <p className="text-gray-600">
                    {t('magicPlanDesc')}
                  </p>
                  <span className="mt-4 inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                    {t('quickEasy')}
                  </span>
                </div>
                
                <div 
                  onClick={() => setPlanMode('custom')}
                  className="premium-card p-6 border-2 border-transparent hover:border-green-200 cursor-pointer transition-all duration-200 flex flex-col items-center text-center"
                >
                  <div className="h-16 w-16 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                    <ChefHat className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">{t('customPlan')}</h3>
                  <p className="text-gray-600">
                    {t('customPlanDesc')}
                  </p>
                  <span className="mt-4 inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                    {t('highlyPersonalized')}
                  </span>
                </div>
              </div>
            </div>
          </div>
        )}
        
        {!isLoading && !showSavedPlans && planMode === 'quick' && (
          <div className="py-8">
            <div className="premium-card p-8 animate-slide-up">
              <div className="mb-8">
                <button 
                  onClick={() => setPlanMode(null)} 
                  className="text-sm text-gray-500 hover:text-gray-700 mb-4 flex items-center"
                >
                  {t('backToOptions')}
                </button>
                <h2 className="text-2xl font-bold text-gray-800 mb-3 text-center">{t('createMagicPlan')}</h2>
                <p className="text-gray-600 max-w-2xl mx-auto text-center">
                  {t('createMagicPlanDesc')}
                </p>
              </div>
              <QuickPlanForm onSubmit={generateMealPlan} isLoading={isLoading} />
            </div>
          </div>
        )}
        
        {!isLoading && !showSavedPlans && planMode === 'custom' && (
          <div className="py-8">
            <div className="premium-card p-8 animate-slide-up">
              <div className="mb-8">
                <button 
                  onClick={() => setPlanMode(null)} 
                  className="text-sm text-gray-500 hover:text-gray-700 mb-4 flex items-center"
                >
                  {t('backToOptions')}
                </button>
                <h2 className="text-2xl font-bold text-gray-800 mb-3 text-center">{t('createPersonalizedPlan')}</h2>
                <p className="text-gray-600 max-w-2xl mx-auto text-center">
                  {t('createPersonalizedPlanDesc')}
                </p>
              </div>
              <MealPlanForm onSubmit={generateMealPlan} isLoading={isLoading} />
            </div>
          </div>
        )}
      </main>
      
      <footer className="mt-12 bg-white border-t border-gray-200 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center mb-4 md:mb-0">
              <ChefHat className="h-5 w-5 text-green-600 mr-2" />
              <span className="text-sm font-medium text-gray-900">{t('appName')}</span>
            </div>
            <p className="text-sm text-gray-500">
              © {new Date().getFullYear()} {t('appName')}. {t('allRightsReserved')}
            </p>
          </div>
        </div>
      </footer>
    </div>
  );

  return (
    <Router>
      <Routes>
        <Route path="/" element={<><Navbar /><LandingPage /></>} />
        <Route path="/meal-plans" element={<><Navbar /><MealPlannerApp /></>} />
        <Route path="/about" element={<><Navbar /><AboutPage /></>} />
        <Route path="/pricing" element={<><Navbar /><PricingPage /></>} />
        <Route path="/how-it-works" element={<><Navbar /><HowItWorksPage /></>} />
      </Routes>
    </Router>
  );
}

export default App;