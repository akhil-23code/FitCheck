import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import LoginPage from './components/LoginPage';
import Dashboard from './components/Dashboard';
import CourseMap from './components/CourseMap';
import WeightGain from './components/WeightGain';
import StayFit from './components/StayFit';
import WeightLoss from './components/WeightLoss';

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
          </>
        )}
      </Routes>
    </Router>
  );
}

export default App;
