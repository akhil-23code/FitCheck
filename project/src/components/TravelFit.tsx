import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const TravelFit: React.FC = () => {
  const [selectedMode, setSelectedMode] = useState<string | null>(null);
  const navigate = useNavigate(); // For navigation functionality

  const travelExercises = {
    Bus: [
      { name: 'Seated Knee Lifts', description: 'Lift one knee at a time while sitting, hold for 5 seconds, and repeat.' },
      { name: 'Ankle Rolls', description: 'Roll your ankles clockwise and counterclockwise to improve circulation.' },
      { name: 'Seated Twists', description: 'Twist your torso gently from side to side while seated.' },
      { name: 'Calf Raises', description: 'Raise your heels off the ground and lower them while standing in the aisle.' },
    ],
    Train: [
      { name: 'Wrist Rolls', description: 'Roll your wrists clockwise and counterclockwise to reduce stiffness.' },
      { name: 'Neck Stretches', description: 'Tilt your head to each side and hold for 10 seconds to relieve tension.' },
      { name: 'Toe Taps', description: 'Tap your toes while seated to keep blood flowing in your legs.' },
      { name: 'Standing Leg Stretches', description: 'Stand and stretch your legs by reaching for your toes.' },
    ],
    Flight: [
      { name: 'Seated Marches', description: 'Simulate a marching motion by lifting your knees alternately while seated.' },
      { name: 'Shoulder Rolls', description: 'Roll your shoulders forward and backward to relax upper body muscles.' },
      { name: 'Heel Raises', description: 'Lift your heels off the floor while keeping your toes grounded.' },
      { name: 'Arm Stretches', description: 'Extend your arms in front and above you to stretch shoulder muscles.' },
    ],
    Car: [
      { name: 'Seat Wiggles', description: 'Shift your weight from side to side while seated to relieve stiffness.' },
      { name: 'Deep Breathing', description: 'Practice deep breathing exercises to relax your body and mind.' },
      { name: 'Shoulder Shrugs', description: 'Lift and lower your shoulders to ease tension in the neck and shoulders.' },
      { name: 'Leg Stretches', description: 'Stretch your legs fully during stops to prevent cramps.' },
    ],
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-100 to-blue-200 p-6">
      <div className="max-w-3xl mx-auto bg-white p-6 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold text-blue-600 mb-6">TravelFit: Stay Active While Traveling</h1>

        <div className="mb-6">
          <label htmlFor="travelMode" className="block text-lg font-semibold text-gray-700 mb-2">
            Select Travel Mode:
          </label>
          <select
            id="travelMode"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            value={selectedMode || ''}
            onChange={(e) => setSelectedMode(e.target.value)}
          >
            <option value="" disabled>
              -- Choose a Mode --
            </option>
            {Object.keys(travelExercises).map((mode) => (
              <option key={mode} value={mode}>
                {mode}
              </option>
            ))}
          </select>
        </div>

        {selectedMode && (
          <div className="bg-blue-50 p-4 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold text-blue-500 mb-4">{selectedMode} Exercises</h2>
            <ul className="space-y-4">
              {travelExercises[selectedMode as keyof typeof travelExercises].map((exercise, index) => (
                <li key={index} className="flex items-start space-x-4">
                  <div className="flex-none w-12 h-12 bg-blue-300 text-white flex items-center justify-center rounded-full">
                    {index + 1}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-800">{exercise.name}</h3>
                    <p className="text-gray-600">{exercise.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        )}

        <button
          onClick={() => navigate('/')} // Button redirects to Dashboard
          className="mt-6 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700"
        >
          Go Back to Dashboard
        </button>
      </div>
    </div>
  );
};

export default TravelFit;