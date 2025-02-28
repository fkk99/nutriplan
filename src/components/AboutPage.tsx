import React from 'react';
import { ChefHat, Heart, Clock, DollarSign, Users } from 'lucide-react';

const AboutPage: React.FC = () => {
  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base font-semibold text-green-600 tracking-wide uppercase">About Us</h2>
          <p className="mt-1 text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
            Our Mission
          </p>
          <p className="max-w-xl mt-5 mx-auto text-xl text-gray-500">
            We're on a mission to make healthy eating accessible, affordable, and enjoyable for everyone.
          </p>
        </div>

        <div className="mt-20">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <div className="pt-6">
              <div className="flow-root bg-gray-50 rounded-lg px-6 pb-8">
                <div className="-mt-6">
                  <div>
                    <span className="inline-flex items-center justify-center p-3 bg-green-500 rounded-md shadow-lg">
                      <Heart className="h-6 w-6 text-white" />
                    </span>
                  </div>
                  <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">Our Story</h3>
                  <p className="mt-5 text-base text-gray-500">
                    Nutriplan was founded in 2023 by a team of nutritionists, chefs, and tech enthusiasts who were frustrated with the complexity and cost of eating healthy. We believe that good nutrition shouldn't be complicated or expensive, and that everyone deserves access to personalized meal plans that fit their lifestyle.
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-6">
              <div className="flow-root bg-gray-50 rounded-lg px-6 pb-8">
                <div className="-mt-6">
                  <div>
                    <span className="inline-flex items-center justify-center p-3 bg-green-500 rounded-md shadow-lg">
                      <Users className="h-6 w-6 text-white" />
                    </span>
                  </div>
                  <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">Our Team</h3>
                  <p className="mt-5 text-base text-gray-500">
                    Our diverse team includes registered dietitians, professional chefs, software engineers, and data scientists. Together, we've created a platform that combines nutritional science with culinary expertise and cutting-edge technology to deliver meal plans that are both healthy and delicious.
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-6">
              <div className="flow-root bg-gray-50 rounded-lg px-6 pb-8">
                <div className="-mt-6">
                  <div>
                    <span className="inline-flex items-center justify-center p-3 bg-green-500 rounded-md shadow-lg">
                      <Clock className="h-6 w-6 text-white" />
                    </span>
                  </div>
                  <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">Our Approach</h3>
                  <p className="mt-5 text-base text-gray-500">
                    We take a holistic approach to meal planning, considering not just nutritional needs but also taste preferences, cooking skills, time constraints, and budget limitations. Our AI-powered platform creates truly personalized meal plans that adapt to your lifestyle, not the other way around.
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-6">
              <div className="flow-root bg-gray-50 rounded-lg px-6 pb-8">
                <div className="-mt-6">
                  <div>
                    <span className="inline-flex items-center justify-center p-3 bg-green-500 rounded-md shadow-lg">
                      <DollarSign className="h-6 w-6 text-white" />
                    </span>
                  </div>
                  <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">Our Impact</h3>
                  <p className="mt-5 text-base text-gray-500">
                    Since our launch, we've helped thousands of people improve their eating habits, save money on groceries, and reduce food waste. Our users report an average savings of $120 per month on groceries and 5.5 hours per week on meal planning and preparation.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-20">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900">
              Our Values
            </h2>
          </div>
          <div className="mt-10 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
            <div className="text-center">
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-green-500 text-white mx-auto">
                <ChefHat className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-lg font-medium text-gray-900">Quality</h3>
              <p className="mt-2 text-base text-gray-500">
                We're committed to providing high-quality, nutritionally balanced meal plans with delicious recipes that use fresh, wholesome ingredients.
              </p>
            </div>

            <div className="text-center">
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-green-500 text-white mx-auto">
                <Heart className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-lg font-medium text-gray-900">Inclusivity</h3>
              <p className="mt-2 text-base text-gray-500">
                We believe healthy eating should be accessible to everyone, regardless of dietary restrictions, cooking skills, or budget constraints.
              </p>
            </div>

            <div className="text-center">
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-green-500 text-white mx-auto">
                <DollarSign className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-lg font-medium text-gray-900">Sustainability</h3>
              <p className="mt-2 text-base text-gray-500">
                We're dedicated to promoting sustainable food practices by reducing food waste and encouraging the use of seasonal, locally sourced ingredients.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-20 text-center">
          <h2 className="text-3xl font-extrabold text-gray-900">
            Join Us on Our Mission
          </h2>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Ready to transform your approach to meal planning and healthy eating?
          </p>
          <div className="mt-8 flex justify-center">
            <div className="inline-flex rounded-md shadow">
              <a
                href="/signup"
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-600 hover:bg-green-700"
              >
                Get Started
              </a>
            </div>
            <div className="ml-3 inline-flex">
              <a
                href="/contact"
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-green-700 bg-green-100 hover:bg-green-200"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;