import { UserPreferences, Meal, DayPlan, MealPlanData, ShoppingCategory } from '../types';

// Sample meal options
export const breakfastOptions = [
  {
    name: "Oatmeal with Berries and Nuts",
    image: "https://images.unsplash.com/photo-1517673132405-a56a62b18caf?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    prepTime: 15,
    vegan: true,
    glutenFree: true,
    dairyFree: true
  },
  {
    name: "Greek Yogurt with Honey and Granola",
    image: "https://images.unsplash.com/photo-1488477181946-6428a0291777?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    prepTime: 5,
    vegan: false,
    glutenFree: false,
    dairyFree: false
  },
  {
    name: "Avocado Toast with Poached Eggs",
    image: "https://images.unsplash.com/photo-1525351484163-7529414344d8?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    prepTime: 20,
    vegan: false,
    glutenFree: false,
    dairyFree: true
  },
  {
    name: "Protein Smoothie Bowl",
    image: "https://images.unsplash.com/photo-1511690656952-34342bb7c2f2?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    prepTime: 10,
    vegan: true,
    glutenFree: true,
    dairyFree: true
  }
];

export const lunchOptions = [
  {
    name: "Quinoa Salad with Roasted Vegetables",
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    prepTime: 25,
    vegan: true,
    glutenFree: true,
    dairyFree: true
  },
  {
    name: "Grilled Chicken Wrap with Hummus",
    image: "https://images.unsplash.com/photo-1509722747041-616f39b57569?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    prepTime: 20,
    vegan: false,
    glutenFree: false,
    dairyFree: true
  },
  {
    name: "Lentil Soup with Crusty Bread",
    image: "https://images.unsplash.com/photo-1547592166-23ac45744acd?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    prepTime: 30,
    vegan: true,
    glutenFree: false,
    dairyFree: true
  },
  {
    name: "Tuna Niçoise Salad",
    image: "https://images.unsplash.com/photo-1511357840105-cde01bdc7be8?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    prepTime: 15,
    vegan: false,
    glutenFree: true,
    dairyFree: true
  }
];

export const dinnerOptions = [
  {
    name: "Baked Salmon with Roasted Vegetables",
    image: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    prepTime: 35,
    vegan: false,
    glutenFree: true,
    dairyFree: true
  },
  {
    name: "Vegetable Stir-Fry with Tofu",
    image: "https://images.unsplash.com/photo-1512058564366-18510be2db19?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    prepTime: 25,
    vegan: true,
    glutenFree: true,
    dairyFree: true
  },
  {
    name: "Spaghetti Bolognese",
    image: "https://images.unsplash.com/photo-1551892374-ecf8754cf8b0?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    prepTime: 40,
    vegan: false,
    glutenFree: false,
    dairyFree: false
  },
  {
    name: "Chickpea and Vegetable Curry",
    image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    prepTime: 30,
    vegan: true,
    glutenFree: true,
    dairyFree: true
  }
];

// Sample data generation functions
export const generateSampleMeal = (type: string, preferences: UserPreferences): Meal => {
  // Calculate macros based on preferences
  const calorieTarget = preferences.calorieTarget || 2000;
  let protein = preferences.macroTargets?.protein || Math.round(calorieTarget * 0.3 / 4); // 30% protein
  let carbs = preferences.macroTargets?.carbs || Math.round(calorieTarget * 0.4 / 4); // 40% carbs
  let fat = preferences.macroTargets?.fat || Math.round(calorieTarget * 0.3 / 9); // 30% fat
  let fiber = preferences.macroTargets?.fiber || 30;
  
  // Adjust based on meal type
  let mealRatio = 0.3; // Default for lunch/dinner
  if (type === 'Breakfast') mealRatio = 0.25;
  if (type === 'Lunch') mealRatio = 0.35;
  if (type === 'Dinner') mealRatio = 0.4;
  
  const mealCalories = Math.round(calorieTarget * mealRatio);
  const mealProtein = Math.round(protein * mealRatio);
  const mealCarbs = Math.round(carbs * mealRatio);
  const mealFat = Math.round(fat * mealRatio);
  const mealFiber = Math.round(fiber * mealRatio);
  
  // Sample meals based on dietary restrictions
  const isVegetarian = preferences.dietaryRestrictions.includes('Vegetarian');
  const isVegan = preferences.dietaryRestrictions.includes('Vegan');
  const isGlutenFree = preferences.dietaryRestrictions.includes('Gluten-free');
  const isDairyFree = preferences.dietaryRestrictions.includes('Dairy-free');
  
  // Select appropriate options based on dietary restrictions
  let options;
  if (type === 'Breakfast') options = breakfastOptions;
  else if (type === 'Lunch') options = lunchOptions;
  else options = dinnerOptions;
  
  // Filter based on dietary restrictions
  let filteredOptions = options.filter(option => {
    if (isVegan && !option.vegan) return false;
    if (isVegetarian && !option.vegan && type !== 'Breakfast') return false;
    if (isGlutenFree && !option.glutenFree) return false;
    if (isDairyFree && !option.dairyFree) return false;
    if (option.prepTime > preferences.maxCookingTime) return false;
    return true;
  });
  
  // If no options match, use the first one anyway
  if (filteredOptions.length === 0) filteredOptions = options;
  
  // Select a random option
  const selectedOption = filteredOptions[Math.floor(Math.random() * filteredOptions.length)];
  
  // Generate sample ingredients
  const ingredients = [
    { name: "Main Ingredient", quantity: "200g", price: 2.5 },
    { name: "Secondary Ingredient", quantity: "100g", price: 1.5 },
    { name: "Spice/Herb", quantity: "1 tsp", price: 0.5 },
    { name: "Oil/Sauce", quantity: "2 tbsp", price: 0.75 }
  ];
  
  // Generate sample instructions
  const instructions = [
    "Prepare all ingredients by washing and chopping as needed.",
    "Heat a pan over medium heat and add oil.",
    "Cook the main ingredients until done.",
    "Add seasonings and secondary ingredients.",
    "Serve hot and enjoy!"
  ];
  
  return {
    type,
    name: selectedOption.name,
    calories: mealCalories,
    prepTime: selectedOption.prepTime,
    ingredients: ingredients,
    instructions: instructions,
    image: selectedOption.image,
    macros: {
      protein: mealProtein,
      carbs: mealCarbs,
      fat: mealFat,
      fiber: mealFiber
    }
  };
};

export const generateSampleMealPlan = (preferences: UserPreferences): MealPlanData => {
  const days: DayPlan[] = [];
  
  // Generate meals for each day
  for (let i = 1; i <= preferences.duration; i++) {
    const breakfast = generateSampleMeal('Breakfast', preferences);
    const lunch = generateSampleMeal('Lunch', preferences);
    const dinner = generateSampleMeal('Dinner', preferences);
    
    days.push({
      day: i,
      meals: [breakfast, lunch, dinner]
    });
  }
  
  // Generate shopping list
  const shoppingList: ShoppingCategory[] = [
    {
      category: "Proteins",
      items: [
        { name: "Chicken Breast", quantity: "1kg", price: 9.99 },
        { name: "Eggs", quantity: "12", price: 3.49 },
        { name: "Tofu", quantity: "500g", price: 2.99 }
      ]
    },
    {
      category: "Vegetables",
      items: [
        { name: "Spinach", quantity: "200g", price: 1.99 },
        { name: "Bell Peppers", quantity: "3", price: 2.49 },
        { name: "Carrots", quantity: "500g", price: 1.29 }
      ]
    },
    {
      category: "Grains",
      items: [
        { name: "Brown Rice", quantity: "1kg", price: 2.99 },
        { name: "Quinoa", quantity: "500g", price: 4.49 },
        { name: "Oats", quantity: "1kg", price: 1.99 }
      ]
    },
    {
      category: "Dairy & Alternatives",
      items: [
        { name: "Greek Yogurt", quantity: "500g", price: 2.99 },
        { name: "Almond Milk", quantity: "1L", price: 1.79 },
        { name: "Cheese", quantity: "200g", price: 3.49 }
      ]
    }
  ];
  
  // Calculate total cost
  const totalCost = shoppingList.reduce((total, category) => {
    return total + category.items.reduce((catTotal, item) => catTotal + item.price, 0);
  }, 0);
  
  // Generate saving tips
  const savingTips = [
    "Buy seasonal produce to save money and get the freshest ingredients.",
    "Purchase items in bulk when on sale and freeze what you won't use immediately.",
    "Compare prices between different stores and consider store brands for staple items.",
    "Plan meals that use similar ingredients to reduce waste and save money.",
    "Use leftovers creatively for lunches or transform them into new meals."
  ];
  
  return {
    preferences,
    days,
    shoppingList,
    totalCost,
    savingTips
  };
};