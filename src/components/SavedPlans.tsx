import React, { useState, useEffect } from 'react';
import { Trash2, Calendar, Clock, Heart, ChevronLeft } from 'lucide-react';

interface SavedPlan {
  id: number;
  name: string;
  date: string;
  plan: any;
}

interface SavedPlansProps {
  onLoadPlan: (plan: SavedPlan) => void;
  onBack: () => void;
}

const SavedPlans: React.FC<SavedPlansProps> = ({ onLoadPlan, onBack }) => {
  const [savedPlans, setSavedPlans] = useState<SavedPlan[]>([]);
  const [confirmDelete, setConfirmDelete] = useState<number | null>(null);

  useEffect(() => {
    // Load saved plans from localStorage
    const plans = JSON.parse(localStorage.getItem('savedMealPlans') || '[]');
    setSavedPlans(plans);
  }, []);

  const handleDelete = (id: number) => {
    if (confirmDelete === id) {
      // Confirmed delete
      const updatedPlans = savedPlans.filter(plan => plan.id !== id);
      setSavedPlans(updatedPlans);
      localStorage.setItem('savedMealPlans', JSON.stringify(updatedPlans));
      setConfirmDelete(null);
    } else {
      // First click - ask for confirmation
      setConfirmDelete(id);
      
      // Auto-reset confirmation after 3 seconds
      setTimeout(() => {
        setConfirmDelete(null);
      }, 3000);
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    }).format(date);
  };

  return (
    <div className="premium-card p-6 md:p-8 animate-fade-in">
      <div className="flex items-center mb-6">
        <button
          onClick={onBack}
          className="mr-3 inline-flex items-center justify-center p-2 rounded-full text-gray-500 hover:text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition-all duration-200"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        <h2 className="text-2xl font-bold text-gray-800">Your Saved Meal Plans</h2>
      </div>

      {savedPlans.length === 0 ? (
        <div className="text-center py-12">
          <div className="mx-auto h-12 w-12 rounded-full bg-gray-100 flex items-center justify-center mb-4">
            <Calendar className="h-6 w-6 text-gray-400" />
          </div>
          <h3 className="text-lg font-medium text-gray-900 mb-2">No saved meal plans</h3>
          <p className="text-gray-500 max-w-sm mx-auto">
            When you save a meal plan, it will appear here for easy access.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {savedPlans.map((plan) => (
            <div key={plan.id} className="border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-200">
              <div className="p-5 border-b border-gray-100">
                <div className="flex justify-between items-start">
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">{plan.name}</h3>
                  <button
                    onClick={() => handleDelete(plan.id)}
                    className={`p-1.5 rounded-full ${
                      confirmDelete === plan.id 
                        ? 'bg-red-100 text-red-600' 
                        : 'text-gray-400 hover:text-red-500 hover:bg-gray-100'
                    } transition-all duration-200`}
                    aria-label="Delete plan"
                  >
                    <Trash2 className="h-4 w-4" />
                  </button>
                </div>
                <p className="text-sm text-gray-500 flex items-center">
                  <Calendar className="h-3.5 w-3.5 mr-1.5" />
                  {formatDate(plan.date)}
                </p>
              </div>
              
              <div className="p-5 bg-gray-50">
                <div className="flex flex-wrap gap-2 mb-4">
                  {plan.plan.preferences.dietaryRestrictions.map((restriction: string) => (
                    <span key={restriction} className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                      {restriction}
                    </span>
                  ))}
                </div>
                
                <div className="flex items-center justify-between text-sm text-gray-600 mb-4">
                  <div className="flex items-center">
                    <Clock className="h-3.5 w-3.5 mr-1" />
                    <span>{plan.plan.days.length} days</span>
                  </div>
                  {plan.plan.preferences.calorieTarget && (
                    <div className="flex items-center">
                      <Heart className="h-3.5 w-3.5 mr-1 text-green-500" />
                      <span>{plan.plan.preferences.calorieTarget} cal</span>
                    </div>
                  )}
                </div>
                
                <button
                  onClick={() => onLoadPlan(plan)}
                  className="w-full inline-flex justify-center items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition-all duration-200"
                >
                  Load Plan
                </button>
                
                {confirmDelete === plan.id && (
                  <p className="mt-2 text-xs text-center text-red-600">
                    Click delete again to confirm
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SavedPlans;