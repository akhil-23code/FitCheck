import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronDown, ChevronUp } from 'lucide-react';

const WeightGain: React.FC = () => {
    const navigate = useNavigate();
    const [currentDay, setCurrentDay] = useState(1); // Tracks the selected day
    const [showDiet, setShowDiet] = useState(false); // Toggles diet section visibility

    const weeklyPlans = [
        {
            day: 'Monday',
            exercises: [
                { name: 'Push-Ups', sets: '3 sets of 15 reps' },
                { name: 'Squats', sets: '3 sets of 20 reps' },
                { name: 'Lunges', sets: '3 sets of 12 reps (each leg)' },
                { name: 'Pull-Ups', sets: '3 sets of 8-10 reps' },
                { name: 'Plank', sets: 'Hold for 60 seconds, 3 rounds' },
            ],
            dietPlans: [
                { meal: 'Breakfast', items: 'Aloo Paratha with curd, boiled eggs (500 kcal)' },
                { meal: 'Lunch', items: 'Chicken curry, rice, dal, sabzi (700 kcal)' },
                { meal: 'Snacks', items: 'Sprout salad, banana shake (300 kcal)' },
                { meal: 'Dinner', items: 'Paneer bhurji, roti, salad (600 kcal)' },
            ],
        },
        {
            day: 'Tuesday',
            exercises: [
                { name: 'Deadlifts', sets: '3 sets of 12 reps' },
                { name: 'Bench Press', sets: '3 sets of 8-10 reps' },
                { name: 'Burpees', sets: '3 sets of 10 reps' },
                { name: 'Dumbbell Rows', sets: '3 sets of 12 reps (each side)' },
                { name: 'Leg Raises', sets: '3 sets of 15 reps' },
            ],
            dietPlans: [
                { meal: 'Breakfast', items: 'Poha with peanuts, boiled eggs (400 kcal)' },
                { meal: 'Lunch', items: 'Fish curry, rice, spinach sabzi (650 kcal)' },
                { meal: 'Snacks', items: 'Nuts and raisins, mango smoothie (350 kcal)' },
                { meal: 'Dinner', items: 'Rajma curry, roti, salad (600 kcal)' },
            ],
        },
        {
            day: 'Wednesday',
            exercises: [
                { name: 'Overhead Press', sets: '3 sets of 10 reps' },
                { name: 'Step-Ups', sets: '3 sets of 12 reps (each leg)' },
                { name: 'Jumping Jacks', sets: '3 sets of 20 reps' },
                { name: 'Push-Ups', sets: '4 sets of 12 reps' },
                { name: 'Mountain Climbers', sets: '3 sets of 20 reps' },
            ],
            dietPlans: [
                { meal: 'Breakfast', items: 'Idli with sambhar, coconut chutney (400 kcal)' },
                { meal: 'Lunch', items: 'Egg curry, rice, beans sabzi (600 kcal)' },
                { meal: 'Snacks', items: 'Masala dosa, coconut water (300 kcal)' },
                { meal: 'Dinner', items: 'Chicken biryani, cucumber raita (700 kcal)' },
            ],
        },
        // Add more days as needed
        {
            day: 'Thrusday',
            exercises: [
                { name: 'Push-Ups', sets: '3 sets of 12 reps', image: '/images/pushups.png' },
                { name: 'Squats', sets: '3 sets of 15 reps', image: '/images/squats.png' },
                { name: 'Squats', sets: '3 sets of 20 reps' },
                { name: 'Lunges', sets: '3 sets of 12 reps (each leg)' },
                { name: 'Pull-Ups', sets: '3 sets of 8-10 reps' },
                { name: 'Plank', sets: 'Hold for 60 seconds, 3 rounds' },
            ],
            dietPlans: [
                { meal: 'Breakfast', items: 'Oats with milk, banana, boiled eggs (500 kcal)' },
                { meal: 'Lunch', items: 'Grilled chicken, rice, veggies (700 kcal)' },
                { meal: 'Snacks', items: 'Peanut butter sandwich, smoothie (300 kcal)' },
                { meal: 'Dinner', items: 'Salmon, quinoa, salad (600 kcal)' },
            ],
        },
        {
            day: 'Friday',
            exercises: [
                { name: 'Deadlifts', sets: '3 sets of 10 reps', image: '/images/deadlifts.png' },
                { name: 'Lunges', sets: '3 sets of 12 reps', image: '/images/lunges.png' },
                { name: 'Burpees', sets: '3 sets of 10 reps' },
                { name: 'Dumbbell Rows', sets: '3 sets of 12 reps (each side)' },
                { name: 'Leg Raises', sets: '3 sets of 15 reps' },
            ],
            dietPlans: [
                { meal: 'Breakfast', items: 'Avocado toast, scrambled eggs (400 kcal)' },
                { meal: 'Lunch', items: 'Turkey sandwich, sweet potato fries (650 kcal)' },
                { meal: 'Snacks', items: 'Greek yogurt with honey and nuts (250 kcal)' },
                { meal: 'Dinner', items: 'Grilled steak, mashed potatoes, steamed broccoli (700 kcal)' },
            ],
        },
        {
            day: 'Saturday',
            exercises: [
                { name: 'Push-Ups', sets: '3 sets of 12 reps', image: '/images/pushups.png' },
                { name: 'Squats', sets: '3 sets of 15 reps', image: '/images/squats.png' },
                { name: 'Push-Ups', sets: '3 sets of 12 reps', image: '/images/pushups.png' },
                { name: 'Squats', sets: '3 sets of 15 reps', image: '/images/squats.png' },
                { name: 'Squats', sets: '3 sets of 20 reps' },
            ],
            dietPlans: [
                { meal: 'Breakfast', items: 'Oats with milk, banana, boiled eggs (500 kcal)' },
                { meal: 'Lunch', items: 'Grilled chicken, rice, veggies (700 kcal)' },
                { meal: 'Snacks', items: 'Peanut butter sandwich, smoothie (300 kcal)' },
                { meal: 'Dinner', items: 'Salmon, quinoa, salad (600 kcal)' },
            ],
        },
        {
            day: 'Sunday',
            exercises: [
                { name: 'Deadlifts', sets: '3 sets of 10 reps', image: '/images/deadlifts.png' },
                { name: 'Lunges', sets: '3 sets of 12 reps', image: '/images/lunges.png' },
                { name: 'Overhead Press', sets: '3 sets of 10 reps' },
                { name: 'Step-Ups', sets: '3 sets of 12 reps (each leg)' },
                { name: 'Jumping Jacks', sets: '3 sets of 20 reps' },
            ],
            dietPlans: [
                { meal: 'Breakfast', items: 'Avocado toast, scrambled eggs (400 kcal)' },
                { meal: 'Lunch', items: 'Turkey sandwich, sweet potato fries (650 kcal)' },
                { meal: 'Snacks', items: 'Greek yogurt with honey and nuts (250 kcal)' },
                { meal: 'Dinner', items: 'Grilled steak, mashed potatoes, steamed broccoli (700 kcal)' },
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
                <h1 className="text-3xl font-bold text-blue-600 mb-6 text-center">
                    Weight Gain Plan
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
                    Selected Day: <span className="text-blue-600">{currentPlan.day}</span>
                </p>

                {/* Exercises Section */}
                <h2 className="text-2xl font-semibold mt-6 mb-4 text-gray-800">Exercises</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                    {currentPlan.exercises.map((exercise, index) => (
                        <div
                            key={index}
                            className="flex items-center bg-gray-100 rounded-lg p-4 shadow-sm"
                        >
                            <div className="flex items-center justify-center w-12 h-12 bg-blue-200 rounded-full text-blue-600 font-bold mr-4">
                                🏋️
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
                    className="mt-6 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 w-full"
                >
                    Go Back to Dashboard
                </button>
            </div>
        </div>
    );
};

export default WeightGain;
