import React from 'react';
import { Check, X } from 'lucide-react';

const PricingPage: React.FC = () => {
  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base font-semibold text-green-600 tracking-wide uppercase">Pricing</h2>
          <p className="mt-1 text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
            Simple, transparent pricing
          </p>
          <p className="max-w-xl mt-5 mx-auto text-xl text-gray-500">
            Choose the plan that's right for you and start eating healthier today.
          </p>
        </div>

        <div className="mt-12 space-y-12 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-x-8">
          <div className="relative p-8 bg-white border border-gray-200 rounded-2xl shadow-sm flex flex-col">
            <div className="flex-1">
              <h3 className="text-xl font-semibold text-gray-900">Basic</h3>
              <p className="mt-4 flex items-baseline text-gray-900">
                <span className="text-5xl font-extrabold tracking-tight">$0</span>
                <span className="ml-1 text-xl font-semibold">/month</span>
              </p>
              <p className="mt-6 text-gray-500">
                Perfect for individuals who want to try our service.
              </p>

              <ul role="list" className="mt-6 space-y-6">
                <li className="flex">
                  <Check className="flex-shrink-0 w-6 h-6 text-green-500" />
                  <span className="ml-3 text-gray-500">1 meal plan per month</span>
                </li>
                <li className="flex">
                  <Check className="flex-shrink-0 w-6 h-6 text-green-500" />
                  <span className="ml-3 text-gray-500">Basic nutritional information</span>
                </li>
                <li className="flex">
                  <Check className="flex-shrink-0 w-6 h-6 text-green-500" />
                  <span className="ml-3 text-gray-500">Shopping list</span>
                </li>
                <li className="flex">
                  <X className="flex-shrink-0 w-6 h-6 text-gray-400" />
                  <span className="ml-3 text-gray-500">Customization options</span>
                </li>
                <li className="flex">
                  <X className="flex-shrink-0 w-6 h-6 text-gray-400" />
                  <span className="ml-3 text-gray-500">Save meal plans</span>
                </li>
              </ul>
            </div>

            <a
              href="/signup"
              className="mt-8 block w-full bg-gray-50 border border-gray-200 rounded-md py-2 text-sm font-semibold text-gray-700 text-center hover:bg-gray-100"
            >
              Get started for free
            </a>
          </div>

          <div className="relative p-8 bg-white border border-gray-200 rounded-2xl shadow-sm flex flex-col">
            <div className="flex-1">
              <h3 className="text-xl font-semibold text-gray-900">Premium</h3>
              <p className="absolute top-0 py-1.5 px-4 bg-green-500 rounded-full text-xs font-semibold uppercase tracking-wide text-white transform -translate-y-1/2">
                Most Popular
              </p>
              <p className="mt-4 flex items-baseline text-gray-900">
                <span className="text-5xl font-extrabold tracking-tight">$9.99</span>
                <span className="ml-1 text-xl font-semibold">/month</span>
              </p>
              <p className="mt-6 text-gray-500">
                Great for individuals and families who want more customization.
              </p>

              <ul role="list" className="mt-6 space-y-6">
                <li className="flex">
                  <Check className="flex-shrink-0 w-6 h-6 text-green-500" />
                  <span className="ml-3 text-gray-500">Unlimited meal plans</span>
                </li>
                <li className="flex">
                  <Check className="flex-shrink-0 w-6 h-6 text-green-500" />
                  <span className="ml-3 text-gray-500">Detailed nutritional information</span>
                </li>
                <li className="flex">
                  <Check className="flex-shrink-0 w-6 h-6 text-green-500" />
                  <span className="ml-3 text-gray-500">Smart shopping list with cost optimization</span>
                </li>
                <li className="flex">
                  <Check className="flex-shrink-0 w-6 h-6 text-green-500" />
                  <span className="ml-3 text-gray-500">Full customization options</span>
                </li>
                <li className="flex">
                  <Check className="flex-shrink-0 w-6 h-6 text-green-500" />
                  <span className="ml-3 text-gray-500">Save up to 10 meal plans</span>
                </li>
              </ul>
            </div>

            <a
              href="/signup"
              className="mt-8 block w-full bg-green-500 border border-transparent rounded-md py-2 text-sm font-semibold text-white text-center hover:bg-green-600"
            >
              Get Premium
            </a>
          </div>

          <div className="relative p-8 bg-white border border-gray-200 rounded-2xl shadow-sm flex flex-col">
            <div className="flex-1">
              <h3 className="text-xl font-semibold text-gray-900">Family</h3>
              <p className="mt-4 flex items-baseline text-gray-900">
                <span className="text-5xl font-extrabold tracking-tight">$19.99</span>
                <span className="ml-1 text-xl font-semibold">/month</span>
              </p>
              <p className="mt-6 text-gray-500">
                Perfect for families and meal prep enthusiasts.
              </p>

              <ul role="list" className="mt-6 space-y-6">
                <li className="flex">
                  <Check className="flex-shrink-0 w-6 h-6 text-green-500" />
                  <span className="ml-3 text-gray-500">Everything in Premium</span>
                </li>
                <li className="flex">
                  <Check className="flex-shrink-0 w-6 h-6 text-green-500" />
                  <span className="ml-3 text-gray-500">Family-friendly recipes</span>
                </li>
                <li className="flex">
                  <Check className="flex-shrink-0 w-6 h-6 text-green-500" />
                  <span className="ml-3 text-gray-500">Individual meal plans for up to 6 family members</span>
                </li>
                <li className="flex">
                  <Check className="flex-shrink-0 w-6 h-6 text-green-500" />
                  <span className="ml-3 text-gray-500">Batch cooking options</span>
                </li>
                <li className="flex">
                  <Check className="flex-shrink-0 w-6 h-6 text-green-500" />
                  <span className="ml-3 text-gray-500">Unlimited saved meal plans</span>
                </li>
              </ul>
            </div>

            <a
              href="/signup"
              className="mt-8 block w-full bg-gray-50 border border-gray-200 rounded-md py-2 text-sm font-semibold text-gray-700 text-center hover:bg-gray-100"
            >
              Get Family Plan
            </a>
          </div>
        </div>

        <div className="mt-16 bg-gray-50 rounded-lg px-6 py-8 sm:p-10 lg:flex lg:items-center">
          <div className="lg:w-0 lg:flex-1">
            <h3 className="text-lg font-medium text-gray-900">Annual discount</h3>
            <p className="mt-2 max-w-3xl text-sm text-gray-500">
              Save 20% when you choose annual billing for any of our plans. That's two months free!
            </p>
          </div>
          <div className="mt-4 lg:mt-0 lg:ml-8">
            <a
              href="/signup"
              className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-600 hover:bg-green-700"
            >
              Get annual discount
            </a>
          </div>
        </div>

        <div className="mt-16">
          <h2 className="text-2xl font-extrabold text-gray-900">Frequently asked questions</h2>
          <div className="mt-6 border-t border-gray-200 pt-10">
            <dl className="space-y-10">
              <div>
                <dt className="text-lg font-medium text-gray-900">Can I cancel my subscription at any time?</dt>
                <dd className="mt-2 text-base text-gray-500">
                  Yes, you can cancel your subscription at any time. If you cancel, you'll continue to have access to your plan until the end of your current billing period.
                </dd>
              </div>

              <div>
                <dt className="text-lg font-medium text-gray-900">How do the meal plans work?</dt>
                <dd className="mt-2 text-base text-gray-500">
                  Our AI-powered platform creates personalized meal plans based on your dietary preferences, restrictions, and goals. Each plan includes recipes, nutritional information, and a shopping list.
                </dd>
              </div>

              <div>
                <dt className="text-lg font-medium text-gray-900">Can I customize my meal plans?</dt>
                <dd className="mt-2 text-base text-gray-500">
                  Yes, Premium and Family plan subscribers can fully customize their meal plans, including dietary restrictions, calorie targets, and specific ingredients to include or exclude.
                </dd>
              </div>

              <div>
                <dt className="text-lg font-medium text-gray-900">Is there a mobile app?</dt>
                <dd className="mt-2 text-base text-gray-500">
                  Yes, we have mobile apps for both iOS and Android, allowing you to access your meal plans, recipes, and shopping lists on the go.
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingPage;