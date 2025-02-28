export interface UserPreferences {
  duration: number;
  peopleCount: number;
  dietaryRestrictions: string[];
  calorieTarget: number | null;
  cuisinePreferences: string[];
  dislikedFoods: string[];
  cookingSkill: 'beginner' | 'intermediate' | 'advanced';
  maxCookingTime: number;
  budgetConstraint: number | null;
  availableIngredients: string[];
  macroTargets?: {
    protein: number | null;
    carbs: number | null;
    fat: number | null;
    fiber: number | null;
  };
}

export interface Ingredient {
  name: string;
  quantity: string;
  price: number;
}

export interface MacroNutrients {
  protein: number;
  carbs: number;
  fat: number;
  fiber: number;
}

export interface Meal {
  type: string;
  name: string;
  calories: number;
  prepTime: number;
  ingredients: Ingredient[];
  instructions: string[];
  image: string;
  macros: MacroNutrients;
}

export interface DayPlan {
  day: number;
  meals: Meal[];
  dailyMacros?: MacroNutrients;
}

export interface ShoppingItem {
  name: string;
  quantity: string;
  price: number;
}

export interface ShoppingCategory {
  category: string;
  items: ShoppingItem[];
}

export interface MealPlanData {
  preferences: UserPreferences;
  days: DayPlan[];
  shoppingList: ShoppingCategory[];
  totalCost: number;
  savingTips: string[];
}