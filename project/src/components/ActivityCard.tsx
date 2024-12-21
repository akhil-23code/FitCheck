import React from 'react';
import { Activity } from '../types';

interface ActivityCardProps {
  activity: Activity;
}

const ActivityCard: React.FC<ActivityCardProps> = ({ activity }) => {
  return (
    <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
      <div className="flex flex-col items-center text-center">
        <div className="mb-4">{activity.icon}</div>
        <h2 className="text-xl font-mono font-bold mb-2">{activity.title}</h2>
        <p className="text-gray-600 mb-4">{activity.description}</p>
        <button className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg transition-colors">
          {activity.action}
        </button>
      </div>
    </div>
  );
};

export default ActivityCard;