import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronDown, ChevronUp } from 'lucide-react';

const WeightLoss: React.FC = () => {
  const navigate = useNavigate();
  const [currentDay, setCurrentDay] = useState(1); // Tracks the selected day
  const [showDiet, setShowDiet] = useState(false);

  const weeklyPlans = [
    {
      day: 'Monday',
      exercises: [
        { name: 'Walking', sets: '45 minutes brisk walk', image: 'walking.jpg' },
        { name: 'Jumping Jacks', sets: '3 sets of 30 reps', image: 'jumping-jacks.jpg' },
        { name: 'Mountain Climbers', sets: '3 sets of 20 reps', image: 'mountain-climbers.jpg' },
        { name: 'Plank', sets: 'Hold for 60 seconds, 3 rounds', image: 'plank.jpg' },
        { name: 'High Knees', sets: '3 sets of 20 seconds', image: 'high-knees.jpg' },
      ],
      dietPlans: [
        { meal: 'Breakfast', items: 'Ragi porridge, banana (250 kcal)', image: 'breakfast.jpg' },
        { meal: 'Lunch', items: 'Mixed veg curry, chapati, salad (400 kcal)', image: 'lunch.jpg' },
        { meal: 'Snacks', items: 'Buttermilk, roasted chana (150 kcal)', image: 'snacks.jpg' },
        { meal: 'Dinner', items: 'Grilled fish, stir-fried veggies (300 kcal)', image: 'dinner.jpg' },
      ],
    },
    {
      day: 'Tuesday',
      exercises: [
        { name: 'Cycling', sets: '30 minutes moderate speed', image: 'cycling.jpg' },
        { name: 'Bodyweight Squats', sets: '3 sets of 15 reps', image: 'bodyweight-squats.jpg' },
        { name: 'Push-Ups', sets: '3 sets of 12 reps', image: 'push-ups.jpg' },
        { name: 'Burpees', sets: '3 sets of 12 reps', image: 'burpees.jpg' },
        { name: 'Plank-to-Shoulder Taps', sets: '3 sets of 15 reps', image: 'plank-to-shoulder-taps.jpg' },
      ],
      dietPlans: [
        { meal: 'Breakfast', items: 'Vegetable poha, green tea (300 kcal)', image: 'poha.jpg' },
        { meal: 'Lunch', items: 'Dal, rice, spinach sabzi, curd (450 kcal)', image: 'dal-rice.jpg' },
        { meal: 'Snacks', items: 'Cucumber sticks, hummus (100 kcal)', image: 'cucumber-hummus.jpg' },
        { meal: 'Dinner', items: 'Grilled chicken, salad (350 kcal)', image: 'grilled-chicken.jpg' },
      ],
    },
    {
      day: 'Wednesday',
      exercises: [
        { name: 'Running', sets: '5 km or 30 minutes', image: 'running.jpg' },
        { name: 'Push-Ups', sets: '3 sets of 10 reps', image: 'push-ups.jpg' },
        { name: 'Jump Squats', sets: '3 sets of 15 reps', image: 'jump-squats.jpg' },
        { name: 'Plank', sets: 'Hold for 45 seconds, 3 rounds', image: 'plank.jpg' },
        { name: 'Skipping', sets: '3 sets of 100 jumps', image: 'skipping.jpg' },
      ],
      dietPlans: [
        { meal: 'Breakfast', items: 'Oats with almond milk, apple (250 kcal)', image: 'oats-apple.jpg' },
        { meal: 'Lunch', items: 'Chickpea curry, roti, steamed broccoli (400 kcal)', image: 'chickpea-curry.jpg' },
        { meal: 'Snacks', items: 'Fruit salad, green tea (150 kcal)', image: 'fruit-salad.jpg' },
        { meal: 'Dinner', items: 'Lentil soup, grilled paneer (300 kcal)', image: 'lentil-soup.jpg' },
      ],
    },
    {
      day: 'Thursday',
      exercises: [
        { name: 'Yoga', sets: '45 minutes (e.g., sun salutations)', image: 'yoga.jpg' },
        { name: 'Leg Raises', sets: '3 sets of 15 reps', image: 'leg-raises.jpg' },
        { name: 'Push-Ups', sets: '3 sets of 12 reps', image: 'push-ups.jpg' },
        { name: 'Lunges', sets: '3 sets of 12 reps (each leg)', image: 'lunges.jpg' },
        { name: 'High Knees', sets: '3 sets of 20 seconds', image: 'high-knees.jpg' },
      ],
      dietPlans: [
        { meal: 'Breakfast', items: 'Idli with sambhar, coconut chutney (250 kcal)', image: 'idli.jpg' },
        { meal: 'Lunch', items: 'Egg curry, rice, spinach sabzi (400 kcal)', image: 'egg-curry.jpg' },
        { meal: 'Snacks', items: 'Sprouts, lemon juice (150 kcal)', image: 'sprouts.jpg' },
        { meal: 'Dinner', items: 'Paneer tikka, roti, cucumber salad (300 kcal)', image: 'paneer-tikka.jpg' },
      ],
    },
    {
      day: 'Friday',
      exercises: [
        { name: 'Cycling', sets: '45 minutes', image: 'cycling.jpg' },
        { name: 'Plank-to-Shoulder Taps', sets: '3 sets of 12 reps', image: 'plank-to-shoulder-taps.jpg' },
        { name: 'Jumping Jacks', sets: '3 sets of 30 reps', image: 'jumping-jacks.jpg' },
        { name: 'Dead Bugs', sets: '3 sets of 12 reps', image: 'dead-bugs.jpg' },
        { name: 'Skipping', sets: '3 sets of 150 jumps', image: 'skipping.jpg' },
      ],
      dietPlans: [
        { meal: 'Breakfast', items: 'Masala dosa, sambhar, chutney (300 kcal)', image: 'masala-dosa.jpg' },
        { meal: 'Lunch', items: 'Rajma, rice, salad (450 kcal)', image: 'rajma.jpg' },
        { meal: 'Snacks', items: 'Roasted peanuts, tea (150 kcal)', image: 'roasted-peanuts.jpg' },
        { meal: 'Dinner', items: 'Vegetable soup, multigrain bread (300 kcal)', image: 'vegetable-soup.jpg' },
      ],
    },
    {
      day: 'Saturday',
      exercises: [
        { name: 'HIIT Workout', sets: '20 minutes (e.g., 45s on/15s rest)', image: 'hiit.jpg' },
        { name: 'Bodyweight Squats', sets: '3 sets of 20 reps', image: 'bodyweight-squats.jpg' },
        { name: 'Push-Ups', sets: '3 sets of 12 reps', image: 'push-ups.jpg' },
        { name: 'Jump Squats', sets: '3 sets of 15 reps', image: 'jump-squats.jpg' },
        { name: 'Burpees', sets: '3 sets of 12 reps', image: 'burpees.jpg' },
      ],
      dietPlans: [
        { meal: 'Breakfast', items: 'Upma with coconut chutney (300 kcal)', image: 'upma.jpg' },
        { meal: 'Lunch', items: 'Chicken curry, quinoa, salad (450 kcal)', image: 'chicken-curry.jpg' },
        { meal: 'Snacks', items: 'Fruit smoothie, almonds (200 kcal)', image: 'fruit-smoothie.jpg' },
        { meal: 'Dinner', items: 'Vegetable stir-fry, chapati (350 kcal)', image: 'vegetable-stir-fry.jpg' },
      ],
    },
    {
      day: 'Sunday',
      exercises: [
        { name: 'Jogging', sets: '5 km or 45 minutes', image: 'jogging.jpg' },
        { name: 'Push-Ups', sets: '3 sets of 10 reps', image: 'push-ups.jpg' },
        { name: 'Mountain Climbers', sets: '3 sets of 20 reps', image: 'mountain-climbers.jpg' },
        { name: 'Side Planks', sets: 'Hold for 30 seconds each side, 3 rounds', image: 'side-planks.jpg' },
        { name: 'Skipping', sets: '3 sets of 100 jumps', image: 'skipping.jpg' },
      ],
      dietPlans: [
        { meal: 'Breakfast', items: 'Pesarattu dosa, coconut chutney (250 kcal)', image: 'pesarattu.jpg' },
        { meal: 'Lunch', items: 'Fish curry, rice, spinach sabzi (400 kcal)', image: 'fish-curry.jpg' },
        { meal: 'Snacks', items: 'Chana chaat, buttermilk (150 kcal)', image: 'chana-chaat.jpg' },
        { meal: 'Dinner', items: 'Vegetable stew, chapati (300 kcal)', image: 'vegetable-stew.jpg' },
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
        <h1 className="text-3xl font-bold text-red-600 mb-6 text-center">
           Weight Loss Plan
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
          Selected Day: <span className="text-red-600">{currentPlan.day}</span>
        </p>

        {/* Exercises Section */}
        <h2 className="text-2xl font-semibold mt-6 mb-4 text-gray-800">Exercises</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          {currentPlan.exercises.map((exercise, index) => (
            <div
              key={index}
              className="flex items-center bg-gray-100 rounded-lg p-4 shadow-sm"
            >
              <div className="flex items-center justify-center w-12 h-12 bg-red-200 rounded-full text-red-600 font-bold mr-4">
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
          className="mt-6 bg-red-600 text-white py-2 px-4 rounded-lg hover:bg-red-700 w-full"
        >
          Go Back to Dashboard
        </button>
      </div>
    </div>
  );
};

export default WeightLoss;


