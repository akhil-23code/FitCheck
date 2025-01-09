import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronDown, ChevronUp } from 'lucide-react';

const StayFit: React.FC = () => {
  const navigate = useNavigate();
  const [currentDay, setCurrentDay] = useState(1); // Tracks the selected day
  const [showDiet, setShowDiet] = useState(false); // Toggles diet section visibility

  const weeklyPlans = [
    {
      day: 'Monday',
      exercises: [
        { name: 'Jogging', sets: '30 minutes' },
        { name: 'Bodyweight Squats', sets: '3 sets of 20 reps' },
        { name: 'Push-Ups', sets: '3 sets of 12 reps' },
        { name: 'Plank', sets: 'Hold for 60 seconds, 3 rounds' },
        { name: 'Mountain Climbers', sets: '3 sets of 20 reps' },
      ],
      dietPlans: [
        { meal: 'Breakfast', items: 'Vegetable upma, coconut chutney (300 kcal)' },
        { meal: 'Lunch', items: 'Dal, rice, sabzi, salad (500 kcal)' },
        { meal: 'Snacks', items: 'Fruit salad, green tea (200 kcal)' },
        { meal: 'Dinner', items: 'Chapati, sabzi, paneer curry (400 kcal)' },
      ],
    },
    {
      day: 'Tuesday',
      exercises: [
        { name: 'Cycling', sets: '30 minutes' },
        { name: 'Lunges', sets: '3 sets of 12 reps (each leg)' },
        { name: 'Push-Ups', sets: '4 sets of 12 reps' },
        { name: 'Side Plank', sets: 'Hold for 45 seconds, 3 rounds' },
        { name: 'Burpees', sets: '3 sets of 10 reps' },
      ],
      dietPlans: [
        { meal: 'Breakfast', items: 'Idli with sambhar, coconut chutney (300 kcal)' },
        { meal: 'Lunch', items: 'Fish curry, rice, spinach sabzi (500 kcal)' },
        { meal: 'Snacks', items: 'Masala dosa, buttermilk (250 kcal)' },
        { meal: 'Dinner', items: 'Mixed veg curry, roti, salad (400 kcal)' },
      ],
    },
    {
      day: 'Wednesday',
      exercises: [
        { name: 'Skipping', sets: '3 sets of 100 jumps' },
        { name: 'Push-Ups', sets: '3 sets of 15 reps' },
        { name: 'Leg Raises', sets: '3 sets of 15 reps' },
        { name: 'Bodyweight Squats', sets: '3 sets of 20 reps' },
        { name: 'High Knees', sets: '3 sets of 30 seconds' },
      ],
      dietPlans: [
        { meal: 'Breakfast', items: 'Poha with peanuts, boiled eggs (300 kcal)' },
        { meal: 'Lunch', items: 'Egg curry, rice, beans sabzi (500 kcal)' },
        { meal: 'Snacks', items: 'Sprouts, lemon juice (200 kcal)' },
        { meal: 'Dinner', items: 'Grilled chicken, salad, chapati (400 kcal)' },
      ],
    },
    // Add more days as needed
    {
        day: 'Thursday',
        exercises: [
          { name: 'Running', sets: '5 km or 30 minutes' },
          { name: 'Push-Ups', sets: '3 sets of 20 reps' },
          { name: 'Plank-to-Shoulder Taps', sets: '3 sets of 15 reps' },
          { name: 'Leg Raises', sets: '3 sets of 12 reps' },
          { name: 'Jump Squats', sets: '3 sets of 15 reps' },
        ],
        dietPlans: [
          { meal: 'Breakfast', items: 'Aloo paratha with curd, pickle (400 kcal)' },
          { meal: 'Lunch', items: 'Rajma, rice, salad (600 kcal)' },
          { meal: 'Snacks', items: 'Chana chaat, coconut water (250 kcal)' },
          { meal: 'Dinner', items: 'Palak paneer, roti, dal soup (500 kcal)' },
        ],
      },
      {
        day: 'Friday',
        exercises: [
          { name: 'Walking', sets: '45 minutes' },
          { name: 'Lunges', sets: '3 sets of 15 reps (each leg)' },
          { name: 'Push-Ups', sets: '4 sets of 12 reps' },
          { name: 'Dead Bugs', sets: '3 sets of 12 reps' },
          { name: 'Burpees', sets: '3 sets of 12 reps' },
        ],
        dietPlans: [
          { meal: 'Breakfast', items: 'Dhokla, green chutney (300 kcal)' },
          { meal: 'Lunch', items: 'Paneer bhurji, chapati, salad (500 kcal)' },
          { meal: 'Snacks', items: 'Roasted peanuts, tea (200 kcal)' },
          { meal: 'Dinner', items: 'Vegetable pulao, raita, mixed veg curry (450 kcal)' },
        ],
      },
      {
        day: 'Saturday',
        exercises: [
          { name: 'HIIT Workout', sets: '20 minutes (e.g., 45s on/15s rest)' },
          { name: 'Bodyweight Squats', sets: '3 sets of 20 reps' },
          { name: 'Side Planks', sets: 'Hold for 30 seconds each side, 3 rounds' },
          { name: 'Push-Ups', sets: '4 sets of 12 reps' },
          { name: 'Jumping Jacks', sets: '3 sets of 30 reps' },
        ],
        dietPlans: [
          { meal: 'Breakfast', items: 'Vegetable sandwich, milk (350 kcal)' },
          { meal: 'Lunch', items: 'Chicken curry, rice, salad (550 kcal)' },
          { meal: 'Snacks', items: 'Fruit chaat, lemonade (200 kcal)' },
          { meal: 'Dinner', items: 'Vegetable khichdi, curd, salad (450 kcal)' },
        ],
      },
      {
        day: 'Sunday',
        exercises: [
          { name: 'Yoga', sets: '45 minutes (e.g., sun salutations)' },
          { name: 'Push-Ups', sets: '3 sets of 15 reps' },
          { name: 'Leg Raises', sets: '3 sets of 12 reps' },
          { name: 'Bodyweight Squats', sets: '3 sets of 20 reps' },
          { name: 'Mountain Climbers', sets: '3 sets of 20 reps' },
        ],
        dietPlans: [
          { meal: 'Breakfast', items: 'Pesarattu dosa with chutney, coconut water (300 kcal)' },
          { meal: 'Lunch', items: 'Mutton curry, rice, raita (600 kcal)' },
          { meal: 'Snacks', items: 'Corn bhel, buttermilk (200 kcal)' },
          { meal: 'Dinner', items: 'Vegetable stew, appam, salad (450 kcal)' },
        ],
      },
  ];

  const handleDayChange = (day: number) => {
    setCurrentDay(day);
    setShowDiet(false); // Collapse diet section when day changes
  };

  const currentPlan = weeklyPlans[currentDay - 1];

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold text-green-600 mb-6 text-center">
          Stay Fit Plan
        </h1>

        {/* Day Selector Slider */}
        <div className="flex items-center justify-center mb-6">
          <input
            type="range"
            min="1"
            max="7"
            value={currentDay}
            onChange={(e) => handleDayChange(Number(e.target.value))}
            className="w-full h-2 bg-gray-300 rounded-lg appearance-none cursor-pointer"
          />
        </div>
        <p className="text-center text-lg font-medium text-gray-700">
          Selected Day: <span className="text-green-600">{currentPlan.day}</span>
        </p>

        {/* Exercises Section */}
        <h2 className="text-2xl font-semibold mt-6 mb-4 text-gray-800">Exercises</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          {currentPlan.exercises.map((exercise, index) => (
            <div
              key={index}
              className="flex items-center bg-gray-100 rounded-lg p-4 shadow-sm"
            >
              <div className="flex items-center justify-center w-12 h-12 bg-green-200 rounded-full text-green-600 font-bold mr-4">
                🏃
              </div>
              <div>
                <p className="font-medium text-gray-800">{exercise.name}</p>
                <p className="text-gray-600">{exercise.sets}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Collapsible Diet Plan Section */}
        <div
          onClick={() => setShowDiet(!showDiet)}
          className="flex items-center justify-between cursor-pointer bg-gray-200 px-4 py-2 rounded-lg mb-4 hover:bg-gray-300 transition"
        >
          <h2 className="text-xl font-semibold text-gray-800">Nutritional Diet Plan</h2>
          {showDiet ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
        </div>
        {showDiet && (
          <ul className="space-y-4">
            {currentPlan.dietPlans.map((plan, index) => (
              <li key={index} className="p-4 bg-gray-100 rounded-lg shadow-sm">
                <p className="font-medium text-gray-800">{plan.meal}:</p>
                <p className="text-gray-600">{plan.items}</p>
              </li>
            ))}
          </ul>
        )}

        <button
          onClick={() => navigate('/')}
          className="mt-6 bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 w-full"
        >
          Go Back to Dashboard
        </button>
      </div>
    </div>
  );
};

export default StayFit;
