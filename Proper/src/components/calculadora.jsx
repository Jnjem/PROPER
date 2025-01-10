import { useState } from 'react';

const categories = {
  fruits: [
    { name: 'Apple', calories: 52, protein: 0.3, sugars: 10.4, saturatedFat: 0.0 },
    { name: 'Banana', calories: 89, protein: 1.1, sugars: 12.2, saturatedFat: 0.3 },
    { name: 'Grapes', calories: 69, protein: 0.7, sugars: 16.3, saturatedFat: 0.1 },
    { name: 'Orange', calories: 47, protein: 0.9, sugars: 9.4, saturatedFat: 0.1 },
    { name: 'Pear', calories: 57, protein: 0.4, sugars: 9.8, saturatedFat: 0.1 },
    { name: 'Strawberry', calories: 32, protein: 0.7, sugars: 4.9, saturatedFat: 0.0 },
    { name: 'Kiwi', calories: 61, protein: 1.1, sugars: 9.2, saturatedFat: 0.1 },
    { name: 'Mango', calories: 60, protein: 0.8, sugars: 14.0, saturatedFat: 0.1 },
    { name: 'Peach', calories: 39, protein: 0.9, sugars: 8.4, saturatedFat: 0.0 },
    { name: 'Watermelon', calories: 30, protein: 0.6, sugars: 6.2, saturatedFat: 0.0 }
  ],
  vegetables: [
    { name: 'Spinach', calories: 23, protein: 2.9, sugars: 0.4, saturatedFat: 0.1 },
    { name: 'Tomato', calories: 18, protein: 0.9, sugars: 3.0, saturatedFat: 0.0 },
    { name: 'Carrot', calories: 41, protein: 0.9, sugars: 4.7, saturatedFat: 0.0 },
    { name: 'Broccoli', calories: 55, protein: 3.7, sugars: 1.7, saturatedFat: 0.1 },
    { name: 'Lettuce', calories: 15, protein: 1.0, sugars: 0.5, saturatedFat: 0.0 },
    { name: 'Cucumber', calories: 16, protein: 0.7, sugars: 1.7, saturatedFat: 0.0 },
    { name: 'Bell Pepper', calories: 20, protein: 0.9, sugars: 3.2, saturatedFat: 0.0 },
    { name: 'Celery', calories: 16, protein: 0.7, sugars: 1.3, saturatedFat: 0.0 },
    { name: 'Chard', calories: 19, protein: 1.8, sugars: 1.1, saturatedFat: 0.0 },
    { name: 'Zucchini', calories: 17, protein: 1.2, sugars: 2.5, saturatedFat: 0.0 }
  ],
  carbohydrates: [
    { name: 'Brown Rice', calories: 111, protein: 2.6, sugars: 0.1, saturatedFat: 0.4 },
    { name: 'Whole Wheat Pasta', calories: 124, protein: 5.0, sugars: 0.7, saturatedFat: 0.5 },
    { name: 'Potato', calories: 77, protein: 2.0, sugars: 0.8, saturatedFat: 0.1 },
    { name: 'Quinoa', calories: 120, protein: 4.1, sugars: 0.9, saturatedFat: 0.2 },
    { name: 'Whole Wheat Bread', calories: 79, protein: 3.6, sugars: 1.4, saturatedFat: 0.4 },
    { name: 'Oats', calories: 68, protein: 2.5, sugars: 0.4, saturatedFat: 0.7 },
    { name: 'Corn', calories: 96, protein: 3.4, sugars: 6.3, saturatedFat: 1.0 },
    { name: 'Lentils', calories: 116, protein: 9.0, sugars: 1.9, saturatedFat: 0.4 },
    { name: 'Chickpeas', calories: 164, protein: 8.9, sugars: 4.8, saturatedFat: 0.4 },
    { name: 'Beans', calories: 127, protein: 8.7, sugars: 0.6, saturatedFat: 0.2 }
  ],
  proteins: [
    { name: 'Chicken Breast', calories: 165, protein: 31.0, sugars: 0.0, saturatedFat: 3.6 },
    { name: 'Tofu', calories: 76, protein: 8.0, sugars: 0.0, saturatedFat: 0.7 },
    { name: 'Lean Beef', calories: 250, protein: 26.0, sugars: 0.0, saturatedFat: 10.0 },
    { name: 'Fish', calories: 202, protein: 22.0, sugars: 0.0, saturatedFat: 4.0 },
    { name: 'Egg', calories: 68, protein: 5.5, sugars: 0.0, saturatedFat: 1.6 },
    { name: 'Lentils', calories: 116, protein: 9.0, sugars: 1.9, saturatedFat: 0.4 },
    { name: 'Greek Yogurt', calories: 59, protein: 10.0, sugars: 3.6, saturatedFat: 0.7 },
    { name: 'Cottage Cheese', calories: 98, protein: 11.1, sugars: 3.4, saturatedFat: 4.0 },
    { name: 'Almonds', calories: 579, protein: 21.2, sugars: 3.9, saturatedFat: 3.7 },
    { name: 'Turkey', calories: 135, protein: 29.0, sugars: 0.0, saturatedFat: 1.0 }
  ],
  sweets: [
    { name: 'Dark Chocolate', calories: 546, protein: 4.9, sugars: 47.0, saturatedFat: 29.0 },
    { name: 'Whole Wheat Cookies', calories: 460, protein: 6.5, sugars: 30.0, saturatedFat: 5.0 },
    { name: 'Honey', calories: 304, protein: 0.3, sugars: 82.0, saturatedFat: 0.0 },
    { name: 'Jam', calories: 250, protein: 0.3, sugars: 60.0, saturatedFat: 0.1 },
    { name: 'Yogurt with Fruit', calories: 120, protein: 3.0, sugars: 15.0, saturatedFat: 3.0 },
    { name: 'Ice Cream', calories: 207, protein: 3.0, sugars: 21.0, saturatedFat: 6.5 },
    { name: 'Apple Pie', calories: 270, protein: 2.0, sugars: 36.0, saturatedFat: 12.0 },
    { name: 'Brownie', calories: 400, protein: 4.0, sugars: 35.0, saturatedFat: 16.0 },
    { name: 'Donuts', calories: 452, protein: 5.0, sugars: 23.0, saturatedFat: 23.0 },
    { name: 'Strawberry Tart', calories: 330, protein: 3.5, sugars: 45.0, saturatedFat: 14.0 }
  ]
};

function FoodCalculator() {
  const [plate, setPlate] = useState([]);

  const addFood = (food) => {
    setPlate([...plate, food]);
  };

  const calculateTotals = () => {
    return plate.reduce(
      (totals, food) => {
        totals.calories += food.calories;
        totals.protein += food.protein;
        totals.sugars += food.sugars;
        totals.saturatedFat += food.saturatedFat;
        return totals;
      },
      { calories: 0, protein: 0, sugars: 0, saturatedFat: 0 }
    );
  };

  const totals = calculateTotals();

  return (
    <div className="min-h-screen bg-white p-6">
      <h1 className="text-4xl font-bold text-center text-green-600 mb-6">Food Calculator</h1>
      <div className="flex justify-center mb-6">
        <div className="bg-white p-4 shadow-lg rounded-lg w-full max-w-3xl">
          <h2 className="text-2xl font-medium text-green-500 mb-4">My Plate</h2>
          {plate.length === 0 ? (
            <p className="text-center text-gray-500">No food items in your plate yet</p>
          ) : (
            <div className="bg-white p-4 shadow-lg rounded-lg border border-green-200">
              <ul className="space-y-2">
                {plate.map((food, index) => (
                  <li key={index} className="flex justify-between text-green-700">
                    <span>{food.name}</span>
                    <button
                      onClick={() => setPlate(plate.filter((_, i) => i !== index))}
                      className="text-red-500"
                    >
                      Remove
                    </button>
                  </li>
                ))}
              </ul>
              <div className="mt-4">
                <p className="text-green-600"><strong>Calories:</strong> {totals.calories} kcal</p>
                <p className="text-green-600"><strong>Protein:</strong> {totals.protein} g</p>
                <p className="text-green-600"><strong>Sugars:</strong> {totals.sugars} g</p>
                <p className="text-green-600"><strong>Saturated Fat:</strong> {totals.saturatedFat} g</p>
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
        {Object.entries(categories).map(([category, foods], index) => (
          <div key={index} className="space-y-4">
            <h2 className="text-xl font-medium text-green-500">{category.charAt(0).toUpperCase() + category.slice(1)}</h2>
            <ul className="space-y-2 text-sm">
              {foods.map((food, i) => (
                <li key={i} className="bg-green-50 p-3 shadow-md rounded-lg">
                  <h3 className="font-semibold text-green-700">{food.name}</h3>
                  <button
                    onClick={() => addFood(food)}
                    className="mt-2 bg-green-600 text-white p-2 rounded-lg hover:bg-green-700"
                  >
                    Add to Plate
                  </button>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FoodCalculator;

