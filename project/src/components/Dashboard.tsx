import React from 'react';
import { LogOut } from 'lucide-react';
import { DashboardProps } from '../types';
import { activities } from '../data/activities';
import ActivityCard from './ActivityCard';
import BMICalculator from './BMICalculator'; // Import the BMI Calculator

const Dashboard: React.FC<DashboardProps> = ({ onLogout }) => {
  const handleButtonClick = () => {
    window.location.href = 'https://fastidious-selkie-83bafe.netlify.app/'; // Change to the desired URL
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6 relative">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl md:text-6xl font-mono text-blue-600">
            YOUR ACTIVITIES...
          </h1>
          <button
            onClick={onLogout}
            className="bg-indigo-900 hover:bg-indigo-800 text-white py-2 px-6 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 flex items-center"
          >
            <LogOut size={20} className="mr-2" />
            LogOut
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {activities.map((activity, index) => (
            <div key={index}>
              {/* Conditionally Render BMI Calculator */}
              {activity.title === 'BMI CALCI' ? (
                <BMICalculator />
              ) : (
                <ActivityCard activity={activity} />
              )}
            </div>
          ))}
        </div>
      </div>
      {/* Stylish Button in Bottom-Right Corner */}
      <button
        onClick={handleButtonClick}
        className="fixed bottom-6 right-6 bg-blue-600 hover:bg-blue-900 text-white font-bold py-3 px-8 rounded-full shadow-lg transition-transform transform hover:scale-105"
        style={{ fontSize: '1.2rem' }} // Customize size here
      >
        ChatBot {/* Customize content here */}
      </button>
    </div>
  );
};

export default Dashboard;
