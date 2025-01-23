import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import LoginPage from './components/LoginPage';
import Dashboard from './components/Dashboard';
import CourseMap from './components/MapComponent';
import WeightGain from './components/WeightGain';
import StayFit from './components/StayFit';
import WeightLoss from './components/WeightLoss';
import GymLocator from "./components/MapComponent";
import TravelFit from './components/TravelFit';

const App1: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/gyms" element={<GymLocator />} />
        {/* Other routes */}
      </Routes>
    </Router>
  );
};

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <Router>
      <Routes>
        {!isLoggedIn ? (
          <Route path="*" element={<LoginPage onLogin={handleLogin} />} />
        ) : (
          <>
            <Route
              path="/"
              element={<Dashboard onLogout={handleLogout} />}
            />
            <Route
              path="/course-map"
              element={<CourseMap />}
            />
            <Route 
            path="*" 
            element={<Navigate to="/" replace />} 
            />
            <Route
            path="/weight-gain"
            element={<WeightGain />}
            />
            <Route
            path="/stay-fit"
            element={<StayFit />}
            />
            <Route
            path="/weight-loss"
            element={<WeightLoss />}
            />
            <Route
            path="/travel-fit"
            element={<TravelFit />}
            />
          </>
        )}
      </Routes>
    </Router>
  );
}

export default App;
