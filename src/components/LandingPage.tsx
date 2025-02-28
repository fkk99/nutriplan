import React, { useState } from 'react';
import { ChefHat, Check, ArrowRight, Shield, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLocalization } from '../localization/LocalizationContext';

const LandingPage: React.FC = () => {
  const { t, formatNumber } = useLocalization();
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    // Validate email
    if (!email.includes('@') || !email.includes('.')) {
      setError(t('invalidEmail'));
      setLoading(false);
      return;
    }

    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      // In a real implementation, you would send this data to your backend
      console.log('Form submitted:', { name, email });
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-white">
      {!submitted ? (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <div className="pt-10 pb-8 md:pt-16 md:pb-12 flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 md:pr-12 mb-10 md:mb-0">
              <div className="flex items-center mb-6">
                <div className="h-10 w-10 rounded-full bg-green-100 flex items-center justify-center mr-3">
                  <ChefHat className="h-6 w-6 text-green-600" />
                </div>
                <h1 className="text-2xl font-bold text-gray-900 tracking-tight">{t('appName')}</h1>
              </div>
              
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
                {t('heroTitle')}
              </h2>
              
              <p className="text-xl text-gray-600 mb-8">
                {t('heroSubtitle')}
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-green-100 flex items-center justify-center mt-1">
                    <Check className="h-4 w-4 text-green-600" />
                  </div>
                  <p className="ml-3 text-lg text-gray-600">
                    <span className="font-medium text-gray-900">{t('saveMoney')}</span> {t('saveMoneyDesc')}
                  </p>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-green-100 flex items-center justify-center mt-1">
                    <Check className="h-4 w-4 text-green-600" />
                  </div>
                  <p className="ml-3 text-lg text-gray-600">
                    <span className="font-medium text-gray-900">{t('personalizedNutrition')}</span> {t('personalizedNutritionDesc')}
                  </p>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-green-100 flex items-center justify-center mt-1">
                    <Check className="h-4 w-4 text-green-600" />
                  </div>
                  <p className="ml-3 text-lg text-gray-600">
                    <span className="font-medium text-gray-900">{t('saveTime')}</span> {t('saveTimeDesc')}
                  </p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4 mb-8">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <img
                      key={i}
                      className="inline-block h-10 w-10 rounded-full ring-2 ring-white"
                      src={`https://randomuser.me/api/portraits/women/${20 + i}.jpg`}
                      alt=""
                    />
                  ))}
                </div>
                <div className="text-sm text-gray-500">
                  <span className="text-green-600 font-semibold">{t('ratings')}</span> {t('ratingsDesc')}
                </div>
              </div>
              
              <div className="flex flex-wrap gap-4">
                <Link
                  to="/how-it-works"
                  className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition-all duration-200"
                >
                  {t('seeHowItWorks')} <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Link
                  to="/meal-plans"
                  className="inline-flex items-center px-6 py-3 border border-gray-300 text-base font-medium rounded-md shadow-sm text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition-all duration-200"
                >
                  {t('tryItFree')}
                </Link>
              </div>
            </div>
            
            <div className="md:w-1/2 w-full">
              <div className="bg-white rounded-xl shadow-xl border border-gray-100 p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  {t('getFreePlan')}
                </h3>
                
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      {t('yourName')}
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder={t('enterName')}
                      className="block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500 sm:text-sm"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      {t('emailAddress')}
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder={t('enterEmail')}
                      className="block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500 sm:text-sm"
                      required
                    />
                  </div>
                  
                  {error && (
                    <div className="text-red-600 text-sm">{error}</div>
                  )}
                  
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full flex justify-center items-center py-3 px-4 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 disabled:bg-green-300 disabled:cursor-not-allowed transition-all duration-200"
                  >
                    {loading ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        {t('processing')}
                      </>
                    ) : (
                      <>
                        {t('claimFreePlan')} <ArrowRight className="ml-2 h-5 w-5" />
                      </>
                    )}
                  </button>
                  
                  <p className="text-xs text-gray-500 text-center mt-2">
                    {t('noCard')}
                  </p>
                </form>
                
                <div className="mt-6 flex items-center justify-center space-x-4 text-sm text-gray-500">
                  <div className="flex items-center">
                    <Shield className="h-4 w-4 text-gray-400 mr-1" />
                    {t('secure')}
                  </div>
                  <div className="flex items-center">
                    <Shield className="h-4 w-4 text-gray-400 mr-1" />
                    {t('gdprCompliant')}
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* How It Works Section */}
          <div className="py-16 border-t border-gray-100">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">{t('howNutriplanWorks')}</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                {t('createPlanSteps')}
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Step 1 */}
              <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100 relative">
                <div className="absolute -top-4 -left-4 h-10 w-10 rounded-full bg-green-500 text-white flex items-center justify-center font-bold text-lg shadow-md">
                  1
                </div>
                <h3 className="text-xl font-bold text-gray-900 mt-4 mb-3">{t('step1Title')}</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>{t('budgetParams')}</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>{t('dietaryNeeds')}</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>{t('cuisineCravings')}</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>{t('profileBuilder')}</span>
                  </li>
                </ul>
              </div>
              
              {/* Step 2 */}
              <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100 relative">
                <div className="absolute -top-4 -left-4 h-10 w-10 rounded-full bg-green-500 text-white flex items-center justify-center font-bold text-lg shadow-md">
                  2
                </div>
                <h3 className="text-xl font-bold text-gray-900 mt-4 mb-3">{t('step2Title')}</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>{t('curatedSelection')}</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>{t('personalization')}</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>{t('inspiration')}</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>{t('shareExperiences')}</span>
                  </li>
                </ul>
              </div>
              
              {/* Step 3 */}
              <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100 relative">
                <div className="absolute -top-4 -left-4 h-10 w-10 rounded-full bg-green-500 text-white flex items-center justify-center font-bold text-lg shadow-md">
                  3
                </div>
                <h3 className="text-xl font-bold text-gray-900 mt-4 mb-3">{t('step3Title')}</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>{t('feelGood')}</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>{t('ingredientSwaps')}</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>{t('shoppingList')}</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>{t('brandLoyalty')}</span>
                  </li>
                </ul>
              </div>
              
              {/* Step 4 */}
              <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100 relative">
                <div className="absolute -top-4 -left-4 h-10 w-10 rounded-full bg-green-500 text-white flex items-center justify-center font-bold text-lg shadow-md">
                  4
                </div>
                <h3 className="text-xl font-bold text-gray-900 mt-4 mb-3">{t('step4Title')}</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>{t('effortlessLogistics')}</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>{t('realTimeTracking')}</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>{t('getNotified')}</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>{t('preferredRetailers')}</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>{t('soEasy')}</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="text-center mt-12">
              <Link
                to="/how-it-works"
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition-all duration-200"
              >
                {t('seeHowItWorks')} <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
          
          {/* Social Proof Section */}
          <div className="py-12 border-t border-gray-100">
            <h3 className="text-center text-lg font-medium text-gray-600 mb-8">
              {t('trustedBy')}
            </h3>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="flex flex-col items-center">
                <div className="text-4xl font-bold text-green-600 mb-2">94%</div>
                <p className="text-sm text-gray-600 text-center">{t('healthierEating')}</p>
              </div>
              
              <div className="flex flex-col items-center">
                <div className="text-4xl font-bold text-green-600 mb-2">€120</div>
                <p className="text-sm text-gray-600 text-center">{t('monthlySavings')}</p>
              </div>
              
              <div className="flex flex-col items-center">
                <div className="text-4xl font-bold text-green-600 mb-2">5.5h</div>
                <p className="text-sm text-gray-600 text-center">{t('timeSaved')}</p>
              </div>
              
              <div className="flex flex-col items-center">
                <div className="text-4xl font-bold text-green-600 mb-2">12k+</div>
                <p className="text-sm text-gray-600 text-center">{t('activeUsers')}</p>
              </div>
            </div>
          </div>
          
          {/* Testimonials */}
          <div className="py-12 border-t border-gray-100">
            <h3 className="text-center text-2xl font-bold text-gray-900 mb-10">
              {t('customersSay')}
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  name: "Sarah Johnson",
                  role: "Busy Mom of 2",
                  image: "https://randomuser.me/api/portraits/women/44.jpg",
                  quote: "Nutriplan has been a game-changer for my family. I save at least 4 hours every week and about $200 monthly on groceries. The kids love the meals too!"
                },
                {
                  name: "Michael Chen",
                  role: "Fitness Enthusiast",
                  image: "https://randomuser.me/api/portraits/men/32.jpg",
                  quote: "As someone who tracks macros, this app is perfect. It gives me personalized meal plans that hit my protein goals while keeping meals interesting and delicious."
                },
                {
                  name: "Emma Rodriguez",
                  role: "Health Coach",
                  image: "https://randomuser.me/api/portraits/women/68.jpg",
                  quote: "I recommend Nutriplan to all my clients. The personalization options are incredible, and it makes healthy eating accessible for everyone regardless of dietary restrictions."
                }
              ].map((testimonial, i) => (
                <div key={i} className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
                  <div className="flex items-center mb-4">
                    <div className="flex-shrink-0">
                      <img
                        className="h-12 w-12 rounded-full"
                        src={testimonial.image}
                        alt={testimonial.name}
                      />
                    </div>
                    <div className="ml-4">
                      <h4 className="text-lg font-medium text-gray-900">{testimonial.name}</h4>
                      <p className="text-sm text-gray-500">{testimonial.role}</p>
                    </div>
                  </div>
                  <div className="flex items-center mb-4">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="h-4 w-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-600">"{testimonial.quote}"</p>
                </div>
              ))}
            </div>
          </div>
          
          {/* Final CTA */}
          <div className="py-12 border-t border-gray-100 text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 max-w-3xl mx-auto">
              {t('readyToSave')}
            </h3>
            
            <a
              href="#top"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 shadow-md transition-all duration-200"
            >
              {t('getFreePlanNow')} <ArrowRight className="ml-2 h-5 w-5" />
            </a>
            
            <p className="mt-4 text-sm text-gray-500">
              {t('noCard')}
            </p>
          </div>
          
          {/* Footer */}
          <footer className="py-8 border-t border-gray-100">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="flex items-center mb-4 md:mb-0">
                <ChefHat className="h-5 w-5 text-green-600 mr-2" />
                <span className="text-sm font-medium text-gray-900">{t('appName')}</span>
              </div>
              <p className="text-sm text-gray-500">
                © {new Date().getFullYear()} {t('appName')}. {t('allRightsReserved')}
              </p>
              <p className="text-xs text-gray-400 mt-2 md:mt-0">
                {t('privacyTerms')}
              </p>
            </div>
          </footer>
        </div>
      ) : (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <div className="h-20 w-20 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6">
            <Check className="h-10 w-10 text-green-600" />
          </div>
          
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            {t('thankYou')}
          </h2>
          
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            {t('checkEmail')}
          </p>
          
          <div className="bg-gray-50 p-6 rounded-lg max-w-md mx-auto">
            <h3 className="text-lg font-medium text-gray-900 mb-4">{t('whatNext')}</h3>
            
            <ol className="text-left space-y-4">
              <li className="flex items-start">
                <div className="flex-shrink-0 h-6 w-6 rounded-full bg-green-100 flex items-center justify-center mt-0.5 mr-3">
                  <span className="text-sm font-medium text-green-600">1</span>
                </div>
                <p className="text-gray-600">
                  {t('step1Check')}
                </p>
              </li>
              
              <li className="flex items-start">
                <div className="flex-shrink-0 h-6 w-6 rounded-full bg-green-100 flex items-center justify-center mt-0.5 mr-3">
                  <span className="text-sm font-medium text-green-600">2</span>
                </div>
                <p className="text-gray-600">
                  {t('step2Review')}
                </p>
              </li>
              
              <li className="flex items-start">
                <div className="flex-shrink-0 h-6 w-6 rounded-full bg-green-100 flex items-center justify-center mt-0.5 mr-3">
                  <span className="text-sm font-medium text-green-600">3</span>
                </div>
                <p className="text-gray-600">
                  {t('step3Enjoy')}
                </p>
              </li>
            </ol>
          </div>
          
          <p className="mt-8 text-sm text-gray-500">
            {t('questions')}
          </p>
        </div>
      )}
    </div>
  );
};

export default LandingPage;