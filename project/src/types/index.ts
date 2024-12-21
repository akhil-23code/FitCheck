export interface Activity {
  title: string;
  description: string;
  icon: JSX.Element;
  action: string;
}

export interface LoginPageProps {
  onLogin: () => void;
}

export interface DashboardProps {
  onLogout: () => void;
}