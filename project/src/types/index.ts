// src/types/index.ts
export interface Activity {
  title: string;
  description: string;
  icon: JSX.Element;
  action: string;
  route: string; // Added the route property for navigation
}

export interface LoginPageProps {
  onLogin: () => void;
}

export interface DashboardProps {
  onLogout: () => void;
}
