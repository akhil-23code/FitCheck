import React from 'react';
import { LogOut } from 'lucide-react';
import { DashboardProps } from '../types';
import { activities } from '../data/activities';
import ActivityCard from './ActivityCard';

const Dashboard: React.FC<DashboardProps> = ({ onLogout }) => {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl md:text-6xl font-mono text-blue-600">
            YOUR ACTIVITIES...
          </h1>
          <button
            onClick={onLogout}
            className="bg-indigo-900 hover:bg-indigo-800 text-white py-2 px-6 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300"
          >
            <LogOut size={20} />
            LogOut
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {activities.map((activity, index) => (
            <ActivityCard key={index} activity={activity} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
