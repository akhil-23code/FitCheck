import { Calendar, FileText, Flag } from 'lucide-react';
import { Activity } from '../types';

export const activities: Activity[] = [
  {
    title: 'STAY FIT',
    description: 'Hype up your body',
    icon: <Calendar size={32} />,
    action: 'GO TO CALENDAR',
  },
  {
    title: 'WEIGHT GAIN',
    description: 'Take on a leap for gaining muscles',
    icon: <FileText size={32} />,
    action: 'LEARN MORE',
  },
  {
    title: 'WEIGHT LOSS',
    description: "Let's get you in shape",
    icon: <FileText size={32} />,
    action: 'LEARN MORE',
  },
  {
    title: 'THE COURSE',
    description: 'Running/Jogging',
    icon: <Flag size={32} />,
    action: 'EXPLORE COURSE',
  },
  {
    title: 'TRAVEL-FIT',
    description: 'Exercise during your travel',
    icon: <Flag size={32} />,
    action: 'EXPLORE COURSE',
  },
  {
    title: 'BMI CALCI',
    description: 'Know your BMI',
    icon: <Calendar size={32} />,
    action: 'LEARN MORE',
  },
];