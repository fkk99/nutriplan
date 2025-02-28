import React from 'react';
import { Settings, Search, Edit, Truck, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const HowItWorksPage: React.FC = () => {
  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base font-semibold text-green-600 tracking-wide uppercase">How It Works</h2>
          <p className="mt-1 text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
            Simple Steps to Better Meals
          </p>
          <p className="max-w-xl mt-5 mx-auto text-xl text-gray-500">
            Create your perfect meal plan in 4 simple steps
          </p>
        </div>

        <div className="mt-20">
          <div className="relative">
            {/* Connection line */}
            <div className="hidden md:block absolute top-0 left-1/2 w-0.5 h-full bg-gray-200 transform -translate-x-1/2" aria-hidden="true"></div>
            
            {/* Step 1 */}
            <div className="relative md:flex md:items-center md:space-x-10 mb-24">
              <div className="md:w-1/2 md:text-right">
                <div className="md:pr-10">
                  <div className="flex md:justify-end">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-green-500 text-white">
                      <Settings className="h-6 w-6" />
                    </div>
                  </div>
                  <h3 className="mt-4 text-2xl font-bold text-gray-900">Tell us your preferences</h3>
                  <ul className="mt-4 text-base text-gray-500 space-y-2">
                    <li className="flex md:justify-end items-center">
                      <span>Dietary restrictions or allergies</span>
                    </li>
                    <li className="flex md:justify-end items-center">
                      <span>Favorite cuisines</span>
                    </li>
                    <li className="flex md:justify-end items-center">
                      <span>Number of people cooking for</span>
                    </li>
                    <li className="flex md:justify-end items-center">
                      <span>Weekly meal frequency</span>
                    </li>
                    <li className="flex md:justify-end items-center">
                      <span>Budget range</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="mt-6 md:mt-0 md:w-1/2 flex justify-center">
                <div className="relative h-64 w-64 rounded-lg shadow-lg overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1615485290382-441e4d049cb5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" 
                    alt="Preferences form" 
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black opacity-60"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="bg-white bg-opacity-90 p-3 rounded-lg">
                      <div className="flex items-center space-x-2 mb-2">
                        <div className="h-4 w-4 rounded-full bg-green-500"></div>
                        <div className="h-4 w-4 rounded-full bg-gray-300"></div>
                        <div className="h-4 w-4 rounded-full bg-gray-300"></div>
                        <div className="h-4 w-4 rounded-full bg-gray-300"></div>
                      </div>
                      <div className="h-4 bg-green-100 rounded-full w-3/4"></div>
                      <div className="h-4 bg-gray-100 rounded-full w-1/2 mt-2"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Step 2 */}
            <div className="relative md:flex md:items-center md:space-x-10 mb-24">
              <div className="md:w-1/2 flex justify-center md:order-last">
                <div className="md:pl-10">
                  <div className="flex">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-green-500 text-white">
                      <Search className="h-6 w-6" />
                    </div>
                  </div>
                  <h3 className="mt-4 text-2xl font-bold text-gray-900">Personalize your recipe collection</h3>
                  <ul className="mt-4 text-base text-gray-500 space-y-2">
                    <li className="flex items-center">
                      <span>Browse our curated recipe suggestions</span>
                    </li>
                    <li className="flex items-center">
                      <span>Save your favorites</span>
                    </li>
                    <li className="flex items-center">
                      <span>Remove recipes that don't appeal to you</span>
                    </li>
                    <li className="flex items-center">
                      <span>Rate recipes you've tried</span>
                    </li>
                    <li className="flex items-center">
                      <span>Add personal notes or modifications</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="mt-6 md:mt-0 md:w-1/2 flex justify-center">
                <div className="relative h-64 w-64 rounded-lg shadow-lg overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1556911220-e15b29be8c8f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" 
                    alt="Recipe collection" 
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black opacity-60"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="bg-white bg-opacity-90 p-3 rounded-lg">
                      <div className="flex items-center space-x-2 mb-2">
                        <div className="h-4 w-4 rounded-full bg-green-500"></div>
                        <div className="h-4 w-4 rounded-full bg-green-500"></div>
                        <div className="h-4 w-4 rounded-full bg-gray-300"></div>
                        <div className="h-4 w-4 rounded-full bg-gray-300"></div>
                      </div>
                      <div className="flex space-x-2 mb-2">
                        <div className="h-8 w-8 bg-green-100 rounded-md flex items-center justify-center">
                          <div className="h-4 w-4 bg-green-500 rounded-sm"></div>
                        </div>
                        <div className="h-8 w-8 bg-green-100 rounded-md flex items-center justify-center">
                          <div className="h-4 w-4 bg-green-500 rounded-sm"></div>
                        </div>
                        <div className="h-8 w-8 bg-gray-100 rounded-md"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Step 3 */}
            <div className="relative md:flex md:items-center md:space-x-10 mb-24">
              <div className="md:w-1/2 md:text-right">
                <div className="md:pr-10">
                  <div className="flex md:justify-end">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-green-500 text-white">
                      <Edit className="h-6 w-6" />
                    </div>
                  </div>
                  <h3 className="mt-4 text-2xl font-bold text-gray-900">Customize your ingredients</h3>
                  <ul className="mt-4 text-base text-gray-500 space-y-2">
                    <li className="flex md:justify-end items-center">
                      <span>Adjust portion sizes</span>
                    </li>
                    <li className="flex md:justify-end items-center">
                      <span>Substitute ingredients based on preferences</span>
                    </li>
                    <li className="flex md:justify-end items-center">
                      <span>Add extra items to your shopping list</span>
                    </li>
                    <li className="flex md:justify-end items-center">
                      <span>Remove unwanted ingredients</span>
                    </li>
                    <li className="flex md:justify-end items-center">
                      <span>Specify brand preferences</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="mt-6 md:mt-0 md:w-1/2 flex justify-center">
                <div className="relative h-64 w-64 rounded-lg shadow-lg overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1543168256-418811576931?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" 
                    alt="Ingredient customization" 
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black opacity-60"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="bg-white bg-opacity-90 p-3 rounded-lg">
                      <div className="flex items-center space-x-2 mb-2">
                        <div className="h-4 w-4 rounded-full bg-green-500"></div>
                        <div className="h-4 w-4 rounded-full bg-green-500"></div>
                        <div className="h-4 w-4 rounded-full bg-green-500"></div>
                        <div className="h-4 w-4 rounded-full bg-gray-300"></div>
                      </div>
                      <div className="flex items-center space-x-2 mb-2">
                        <div className="h-4 w-4 bg-green-500 rounded-sm"></div>
                        <div className="h-4 w-20 bg-gray-200 rounded-full">
                          <div className="h-4 w-12 bg-green-500 rounded-full"></div>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="h-4 w-4 bg-green-500 rounded-sm"></div>
                        <div className="h-4 w-20 bg-gray-200 rounded-full">
                          <div className="h-4 w-8 bg-green-500 rounded-full"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Step 4 */}
            <div className="relative md:flex md:items-center md:space-x-10">
              <div className="md:w-1/2 flex justify-center md:order-last">
                <div className="md:pl-10">
                  <div className="flex">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-green-500 text-white">
                      <Truck className="h-6 w-6" />
                    </div>
                  </div>
                  <h3 className="mt-4 text-2xl font-bold text-gray-900">Schedule convenient delivery</h3>
                  <ul className="mt-4 text-base text-gray-500 space-y-2">
                    <li className="flex items-center">
                      <span>Select your preferred local grocery store</span>
                    </li>
                    <li className="flex items-center">
                      <span>Choose delivery date and time</span>
                    </li>
                    <li className="flex items-center">
                      <span>Specify delivery instructions</span>
                    </li>
                    <li className="flex items-center">
                      <span>Track your order in real-time</span>
                    </li>
                    <li className="flex items-center">
                      <span>Receive notifications when your groceries arrive</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="mt-6 md:mt-0 md:w-1/2 flex justify-center">
                <div className="relative h-64 w-64 rounded-lg shadow-lg overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1584473457409-ce95a9573e86?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" 
                    alt="Delivery scheduling" 
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black opacity-60"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="bg-white bg-opacity-90 p-3 rounded-lg">
                      <div className="flex items-center space-x-2 mb-2">
                        <div className="h-4 w-4 rounded-full bg-green-500"></div>
                        <div className="h-4 w-4 rounded-full bg-green-500"></div>
                        <div className="h-4 w-4 rounded-full bg-green-500"></div>
                        <div className="h-4 w-4 rounded-full bg-green-500"></div>
                      </div>
                      <div className="flex items-center justify-between mb-2">
                        <div className="h-6 w-6 bg-green-500 rounded-full flex items-center justify-center">
                          <div className="h-2 w-2 bg-white rounded-full"></div>
                        </div>
                        <div className="h-0.5 w-12 bg-green-500"></div>
                        <div className="h-6 w-6 bg-green-500 rounded-full flex items-center justify-center">
                          <div className="h-2 w-2 bg-white rounded-full"></div>
                        </div>
                        <div className="h-0.5 w-12 bg-green-500"></div>
                        <div className="h-6 w-6 bg-green-500 rounded-full flex items-center justify-center">
                          <div className="h-2 w-2 bg-white rounded-full"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Final CTA */}
        <div className="mt-24 text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 max-w-3xl mx-auto">
            Get started now to streamline your meal planning and grocery shopping experience!
          </h3>
          
          <Link
            to="/meal-plans"
            className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 shadow-md transition-all duration-200"
          >
            Create Your Meal Plan <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
          
          <p className="mt-4 text-sm text-gray-500">
            No credit card required. Try it free today.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HowItWorksPage;