import React, { useState } from 'react';
import { Calendar, Users, Utensils, Heart, Sparkles } from 'lucide-react';
import { UserPreferences } from '../types';
import { useLocalization } from '../localization/LocalizationContext';

interface QuickPlanFormProps {
  onSubmit: (preferences: UserPreferences) => void;
  isLoading: boolean;
}

const QuickPlanForm: React.FC<QuickPlanFormProps> = ({ onSubmit, isLoading }) => {
  const { t } = useLocalization();
  
  const [preferences, setPreferences] = useState<UserPreferences>({
    duration: 7,
    peopleCount: 1,
    dietaryRestrictions: [],
    calorieTarget: 2000,
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
    } else if (name === 'calorieTarget') {
      setPreferences(prev => ({
        ...prev,
        [name]: value ? Number(value) : 2000
      }));
    } else if (name === 'duration' || name === 'peopleCount') {
      setPreferences(prev => ({
        ...prev,
        [name]: Number(value)
      }));
    } else {
      setPreferences(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(preferences);
  };

  const durationOptions = t('durationOptions') as string[];
  const peopleOptions = t('peopleOptions') as string[];
  const calorieOptions = t('calorieOptions') as string[];

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      <div className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <label htmlFor="duration" className="premium-label flex items-center">
              <Calendar className="h-4 w-4 mr-2 text-green-600" />
              {t('duration')}
            </label>
            <select
              id="duration"
              name="duration"
              value={preferences.duration}
              onChange={handleChange}
              className="premium-input"
              required
            >
              <option value="3">{durationOptions[0]}</option>
              <option value="5">{durationOptions[1]}</option>
              <option value="7">{durationOptions[2]}</option>
              <option value="14">{durationOptions[3]}</option>
            </select>
          </div>
          
          <div className="space-y-4">
            <label htmlFor="peopleCount" className="premium-label flex items-center">
              <Users className="h-4 w-4 mr-2 text-green-600" />
              {t('peopleCount')}
            </label>
            <select
              id="peopleCount"
              name="peopleCount"
              value={preferences.peopleCount}
              onChange={handleChange}
              className="premium-input"
              required
            >
              <option value="1">{peopleOptions[0]}</option>
              <option value="2">{peopleOptions[1]}</option>
              <option value="4">{peopleOptions[2]}</option>
              <option value="6">{peopleOptions[3]}</option>
            </select>
          </div>
        </div>

        <div className="space-y-4">
          <label className="premium-label flex items-center">
            <Utensils className="h-4 w-4 mr-2 text-green-600" />
            {t('dietaryRestrictions')}
          </label>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
            {['Vegetarian', 'Vegan', 'Gluten-free', 'Dairy-free'].map(restriction => (
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
            {t('calorieTarget')}
          </label>
          <select
            id="calorieTarget"
            name="calorieTarget"
            value={preferences.calorieTarget || 2000}
            onChange={handleChange}
            className="premium-input"
            required
          >
            <option value="1500">{calorieOptions[0]}</option>
            <option value="2000">{calorieOptions[1]}</option>
            <option value="2500">{calorieOptions[2]}</option>
            <option value="3000">{calorieOptions[3]}</option>
          </select>
        </div>
      </div>

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
              {t('creatingPlan')}
            </>
          ) : (
            <>
              <Sparkles className="h-5 w-5 mr-2" />
              {t('generateMagicMealPlan')}
            </>
          )}
        </button>
      </div>
    </form>
  );
};

export default QuickPlanForm;