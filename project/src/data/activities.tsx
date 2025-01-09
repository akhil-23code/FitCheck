import { Calendar, FileText, Flag } from 'lucide-react';
import { Activity } from '../types';
import { LogOut, MapPin } from 'lucide-react';

export const activities: Activity[] = [
  {
    title: 'STAY FIT',
    description: 'Hype up your body',
    icon: <Calendar size={32} />,
    action: 'Get Fit',
    route: '/stay-fit',  // Added route
  },
  {
    title: 'WEIGHT GAIN',
    description: 'Take on a leap for gaining muscles',
    icon: <FileText size={32} />,
    action: 'LEARN MORE',
    route: '/weight-gain',  // Added route
  },
  {
    title: 'WEIGHT LOSS',
    description: "Let's get you in shape",
    icon: <FileText size={32} />,
    action: 'Lets Reduce',
    route: '/weight-loss',  // Added route
  },
  {
    title: 'The Course',
    description: 'Track your jogging routes.',
    action: 'Explore',
    icon: <MapPin />,  // Replace with the actual icon
    route: '/course-map',  // Route to navigate
  },
  {
    title: 'TRAVEL-FIT',
    description: 'Exercise during your travel',
    icon: <Flag size={32} />,
    action: 'EXPLORE COURSE',
    route: '/travel-fit',  // Added route
  },
  {
    title: 'BMI CALCI',
    description: 'Know your BMI',
    icon: <Calendar size={32} />,
    action: 'LEARN MORE',
    route: '/bmi-calci',  // Added route
  },
];
