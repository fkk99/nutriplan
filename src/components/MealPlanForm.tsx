import React, { useState } from 'react';
import { Calendar, Users, Utensils, Heart, Clock, DollarSign, ShoppingBag, Dumbbell } from 'lucide-react';
import { UserPreferences } from '../types';

interface MealPlanFormProps {
  onSubmit: (preferences: UserPreferences) => void;
  isLoading: boolean;
}

const MealPlanForm: React.FC<MealPlanFormProps> = ({ onSubmit, isLoading }) => {
  const [preferences, setPreferences] = useState<UserPreferences>({
    duration: 7,
    peopleCount: 1,
    dietaryRestrictions: [],
    calorieTarget: null,
    cuisinePreferences: [],
    dislikedFoods: [],
    cookingSkill: 'intermediate',
    maxCookingTime: 30,
    budgetConstraint: null,
    availableIngredients: [],
    macroTargets: {
      protein: null,
      carbs: null,
      fat: null,
      fiber: null
    }
  });

  const [newIngredient, setNewIngredient] = useState('');
  const [newDislikedFood, setNewDislikedFood] = useState('');
  const [newCuisine, setNewCuisine] = useState('');
  const [activeSection, setActiveSection] = useState<string>('basic');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target as HTMLInputElement;
    
    if (type === 'checkbox') {
      const checkbox = e.target as HTMLInputElement;
      const isChecked = checkbox.checked;
      
      setPreferences(prev => {
        const updatedRestrictions = isChecked 
          ? [...prev.dietaryRestrictions, value]
          : prev.dietaryRestrictions.filter(item => item !== value);
        
        return {
          ...prev,
          dietaryRestrictions: updatedRestrictions
        };
      });
    } else if (name === 'calorieTarget' || name === 'budgetConstraint') {
      setPreferences(prev => ({
        ...prev,
        [name]: value ? Number(value) : null
      }));
    } else if (name === 'duration' || name === 'peopleCount' || name === 'maxCookingTime') {
      setPreferences(prev => ({
        ...prev,
        [name]: Number(value)
      }));
    } else if (name.startsWith('macro_')) {
      const macroName = name.split('_')[1] as 'protein' | 'carbs' | 'fat' | 'fiber';
      setPreferences(prev => ({
        ...prev,
        macroTargets: {
          ...prev.macroTargets,
          [macroName]: value ? Number(value) : null
        }
      }));
    } else {
      setPreferences(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };

  const addIngredient = () => {
    if (newIngredient.trim()) {
      setPreferences(prev => ({
        ...prev,
        availableIngredients: [...prev.availableIngredients, newIngredient.trim()]
      }));
      setNewIngredient('');
    }
  };

  const removeIngredient = (ingredient: string) => {
    setPreferences(prev => ({
      ...prev,
      availableIngredients: prev.availableIngredients.filter(item => item !== ingredient)
    }));
  };

  const addDislikedFood = () => {
    if (newDislikedFood.trim()) {
      setPreferences(prev => ({
        ...prev,
        dislikedFoods: [...prev.dislikedFoods, newDislikedFood.trim()]
      }));
      setNewDislikedFood('');
    }
  };

  const removeDislikedFood = (food: string) => {
    setPreferences(prev => ({
      ...prev,
      dislikedFoods: prev.dislikedFoods.filter(item => item !== food)
    }));
  };

  const addCuisine = () => {
    if (newCuisine.trim()) {
      setPreferences(prev => ({
        ...prev,
        cuisinePreferences: [...prev.cuisinePreferences, newCuisine.trim()]
      }));
      setNewCuisine('');
    }
  };

  const removeCuisine = (cuisine: string) => {
    setPreferences(prev => ({
      ...prev,
      cuisinePreferences: prev.cuisinePreferences.filter(item => item !== cuisine)
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(preferences);
  };

  const sections = [
    { id: 'basic', label: 'Basic Info', icon: <Calendar className="h-4 w-4" /> },
    { id: 'dietary', label: 'Dietary Needs', icon: <Heart className="h-4 w-4" /> },
    { id: 'preferences', label: 'Preferences', icon: <Utensils className="h-4 w-4" /> },
    { id: 'advanced', label: 'Advanced', icon: <Dumbbell className="h-4 w-4" /> }
  ];

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      {/* Form Navigation */}
      <div className="mb-8">
        <div className="border-b border-gray-200">
          <nav className="-mb-px flex space-x-8" aria-label="Form sections">
            {sections.map((section) => (
              <button
                key={section.id}
                type="button"
                onClick={() => setActiveSection(section.id)}
                className={`
                  whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm transition-all duration-200
                  ${activeSection === section.id
                    ? 'border-green-500 text-green-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}
                `}
              >
                <div className="flex items-center">
                  <span className={`mr-2 ${activeSection === section.id ? 'text-green-500' : 'text-gray-400'}`}>
                    {section.icon}
                  </span>
                  {section.label}
                </div>
              </button>
            ))}
          </nav>
        </div>
      </div>

      {/* Basic Info Section */}
      <div className={`space-y-6 transition-all duration-300 ${activeSection === 'basic' ? 'block animate-fade-in' : 'hidden'}`}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <label htmlFor="duration" className="premium-label flex items-center">
              <Calendar className="h-4 w-4 mr-2 text-green-600" />
              Duration of meal plan (days)
            </label>
            <input
              type="number"
              id="duration"
              name="duration"
              min="1"
              max="30"
              value={preferences.duration}
              onChange={handleChange}
              className="premium-input"
              required
            />
            <div className="mt-1 flex justify-between px-2">
              <span className="text-xs text-gray-500">1 day</span>
              <span className="text-xs text-gray-500">30 days</span>
            </div>
          </div>
          
          <div className="space-y-4">
            <label htmlFor="peopleCount" className="premium-label flex items-center">
              <Users className="h-4 w-4 mr-2 text-green-600" />
              Number of people to feed
            </label>
            <input
              type="number"
              id="peopleCount"
              name="peopleCount"
              min="1"
              max="10"
              value={preferences.peopleCount}
              onChange={handleChange}
              className="premium-input"
              required
            />
            <div className="mt-1 flex justify-between px-2">
              <span className="text-xs text-gray-500">1 person</span>
              <span className="text-xs text-gray-500">10 people</span>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <label htmlFor="cookingSkill" className="premium-label flex items-center">
            <Utensils className="h-4 w-4 mr-2 text-green-600" />
            Cooking skill level
          </label>
          <div className="grid grid-cols-3 gap-4">
            {['beginner', 'intermediate', 'advanced'].map((skill) => (
              <div 
                key={skill}
                onClick={() => setPreferences(prev => ({ ...prev, cookingSkill: skill as any }))}
                className={`
                  cursor-pointer rounded-lg border p-4 text-center transition-all duration-200
                  ${preferences.cookingSkill === skill 
                    ? 'border-green-500 bg-green-50 shadow-sm' 
                    : 'border-gray-200 hover:border-gray-300'}
                `}
              >
                <p className={`font-medium ${preferences.cookingSkill === skill ? 'text-green-700' : 'text-gray-700'}`}>
                  {skill.charAt(0).toUpperCase() + skill.slice(1)}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-4">
          <label htmlFor="maxCookingTime" className="premium-label flex items-center">
            <Clock className="h-4 w-4 mr-2 text-green-600" />
            Maximum cooking time per meal (minutes)
          </label>
          <input
            type="range"
            id="maxCookingTime"
            name="maxCookingTime"
            min="10"
            max="120"
            step="5"
            value={preferences.maxCookingTime}
            onChange={handleChange}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-green-600"
            required
          />
          <div className="mt-1 flex justify-between px-2">
            <span className="text-xs text-gray-500">10 min</span>
            <span className="text-sm font-medium text-green-700">{preferences.maxCookingTime} min</span>
            <span className="text-xs text-gray-500">120 min</span>
          </div>
        </div>
      </div>

      {/* Dietary Needs Section */}
      <div className={`space-y-6 transition-all duration-300 ${activeSection === 'dietary' ? 'block animate-fade-in' : 'hidden'}`}>
        <div>
          <label className="premium-label flex items-center mb-4">
            <Utensils className="h-4 w-4 mr-2 text-green-600" />
            Dietary preferences/restrictions
          </label>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
            {['Vegetarian', 'Vegan', 'Gluten-free', 'Dairy-free', 'Low-carb', 'Keto', 'Paleo'].map(restriction => (
              <div 
                key={restriction}
                className={`
                  relative rounded-lg border p-4 flex items-center space-x-3 cursor-pointer transition-all duration-200
                  ${preferences.dietaryRestrictions.includes(restriction) 
                    ? 'border-green-500 bg-green-50' 
                    : 'border-gray-200 hover:border-gray-300'}
                `}
                onClick={() => {
                  const isSelected = preferences.dietaryRestrictions.includes(restriction);
                  setPreferences(prev => ({
                    ...prev,
                    dietaryRestrictions: isSelected
                      ? prev.dietaryRestrictions.filter(item => item !== restriction)
                      : [...prev.dietaryRestrictions, restriction]
                  }));
                }}
              >
                <input
                  type="checkbox"
                  id={restriction}
                  name="dietaryRestrictions"
                  value={restriction}
                  checked={preferences.dietaryRestrictions.includes(restriction)}
                  onChange={handleChange}
                  className="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded"
                />
                <label htmlFor={restriction} className="text-sm font-medium text-gray-700 cursor-pointer">
                  {restriction}
                </label>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-4">
          <label htmlFor="calorieTarget" className="premium-label flex items-center">
            <Heart className="h-4 w-4 mr-2 text-green-600" />
            Daily caloric target (optional)
          </label>
          <input
            type="number"
            id="calorieTarget"
            name="calorieTarget"
            min="1000"
            max="5000"
            value={preferences.calorieTarget || ''}
            onChange={handleChange}
            placeholder="e.g., 2000"
            className="premium-input"
          />
          <div className="mt-1 flex justify-between px-2">
            <span className="text-xs text-gray-500">1000 kcal</span>
            <span className="text-xs text-gray-500">5000 kcal</span>
          </div>
        </div>

        <div className="space-y-4">
          <label className="premium-label flex items-center">
            <Dumbbell className="h-4 w-4 mr-2 text-green-600" />
            Macronutrient targets (g/day, optional)
          </label>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            <div className="space-y-2">
              <label htmlFor="macro_protein" className="block text-xs font-medium text-gray-700">
                Protein (g)
              </label>
              <input
                type="number"
                id="macro_protein"
                name="macro_protein"
                min="0"
                max="300"
                value={preferences.macroTargets?.protein || ''}
                onChange={handleChange}
                placeholder="e.g., 120"
                className="premium-input"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="macro_carbs" className="block text-xs font-medium text-gray-700">
                Carbs (g)
              </label>
              <input
                type="number"
                id="macro_carbs"
                name="macro_carbs"
                min="0"
                max="500"
                value={preferences.macroTargets?.carbs || ''}
                onChange={handleChange}
                placeholder="e.g., 200"
                className="premium-input"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="macro_fat" className="block text-xs font-medium text-gray-700">
                Fat (g)
              </label>
              <input
                type="number"
                id="macro_fat"
                name="macro_fat"
                min="0"
                max="200"
                value={preferences.macroTargets?.fat || ''}
                onChange={handleChange}
                placeholder="e.g., 65"
                className="premium-input"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="macro_fiber" className="block text-xs font-medium text-gray-700">
                Fiber (g)
              </label>
              <input
                type="number"
                id="macro_fiber"
                name="macro_fiber"
                min="0"
                max="100"
                value={preferences.macroTargets?.fiber || ''}
                onChange={handleChange}
                placeholder="e.g., 30"
                className="premium-input"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Preferences Section */}
      <div className={`space-y-6 transition-all duration-300 ${activeSection === 'preferences' ? 'block animate-fade-in' : 'hidden'}`}>
        <div className="space-y-4">
          <label className="premium-label flex items-center">
            <Utensils className="h-4 w-4 mr-2 text-green-600" />
            Cuisines you enjoy
          </label>
          <div className="flex items-center">
            <input
              type="text"
              value={newCuisine}
              onChange={(e) => setNewCuisine(e.target.value)}
              placeholder="e.g., Finnish, Italian"
              className="premium-input"
            />
            <button
              type="button"
              onClick={addCuisine}
              className="ml-2 inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition-all duration-200"
            >
              Add
            </button>
          </div>
          {preferences.cuisinePreferences.length > 0 && (
            <div className="mt-3 flex flex-wrap gap-2">
              {preferences.cuisinePreferences.map(cuisine => (
                <span key={cuisine} className="premium-badge premium-badge-green group">
                  {cuisine}
                  <button
                    type="button"
                    onClick={() => removeCuisine(cuisine)}
                    className="ml-1.5 inline-flex text-green-500 hover:text-green-600 focus:outline-none transition-all duration-200"
                  >
                    &times;
                  </button>
                </span>
              ))}
            </div>
          )}
        </div>

        <div className="space-y-4">
          <label className="premium-label flex items-center">
            <Utensils className="h-4 w-4 mr-2 text-green-600" />
            Foods you dislike
          </label>
          <div className="flex items-center">
            <input
              type="text"
              value={newDislikedFood}
              onChange={(e) => setNewDislikedFood(e.target.value)}
              placeholder="e.g., Mushrooms"
              className="premium-input"
            />
            <button
              type="button"
              onClick={addDislikedFood}
              className="ml-2 inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition-all duration-200"
            >
              Add
            </button>
          </div>
          {preferences.dislikedFoods.length > 0 && (
            <div className="mt-3 flex flex-wrap gap-2">
              {preferences.dislikedFoods.map(food => (
                <span key={food} className="premium-badge premium-badge-red group">
                  {food}
                  <button
                    type="button"
                    onClick={() => removeDislikedFood(food)}
                    className="ml-1.5 inline-flex text-red-500 hover:text-red-600 focus:outline-none transition-all duration-200"
                  >
                    &times;
                  </button>
                </span>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Advanced Section */}
      <div className={`space-y-6 transition-all duration-300 ${activeSection === 'advanced' ? 'block animate-fade-in' : 'hidden'}`}>
        <div className="space-y-4">
          <label htmlFor="budgetConstraint" className="premium-label flex items-center">
            <DollarSign className="h-4 w-4 mr-2 text-green-600" />
            Budget constraint per day (€, optional)
          </label>
          <input
            type="number"
            id="budgetConstraint"
            name="budgetConstraint"
            min="1"
            value={preferences.budgetConstraint || ''}
            onChange={handleChange}
            placeholder="e.g., 15"
            className="premium-input"
          />
        </div>

        <div className="space-y-4">
          <label className="premium-label flex items-center">
            <ShoppingBag className="h-4 w-4 mr-2 text-green-600" />
            Ingredients you already have at home
          </label>
          <div className="flex items-center">
            <input
              type="text"
              value={newIngredient}
              onChange={(e) => setNewIngredient(e.target.value)}
              placeholder="e.g., Rice"
              className="premium-input"
            />
            <button
              type="button"
              onClick={addIngredient}
              className="ml-2 inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition-all duration-200"
            >
              Add
            </button>
          </div>
          {preferences.availableIngredients.length > 0 && (
            <div className="mt-3 flex flex-wrap gap-2">
              {preferences.availableIngredients.map(ingredient => (
                <span key={ingredient} className="premium-badge premium-badge-blue group">
                  {ingredient}
                  <button
                    type="button"
                    onClick={() => removeIngredient(ingredient)}
                    className="ml-1.5 inline-flex text-blue-500 hover:text-blue-600 focus:outline-none transition-all duration-200"
                  >
                    &times;
                  </button>
                </span>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Submit Button */}
      <div className="pt-6 border-t border-gray-200">
        <button
          type="submit"
          disabled={isLoading}
          className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 disabled:bg-green-300 disabled:cursor-not-allowed transition-all duration-200"
        >
          {isLoading ? (
            <>
              <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Generating your meal plan...
            </>
          ) : (
            'Generate Meal Plan'
          )}
        </button>
      </div>
    </form>
  );
};

export default MealPlanForm;