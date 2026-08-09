import React, { useState } from 'react';
import Board from './components/Board';
import Login from './components/Login';
import Register from './components/Register';
import './index.css';

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [currentView, setCurrentView] = useState('login');

  if (!isAuthenticated) {
    return currentView === 'login' ? (
      <Login 
        onSwitchToRegister={() => setCurrentView('register')} 
        onLoginSuccess={() => setIsAuthenticated(true)} 
      />
    ) : (
      <Register 
        onSwitchToLogin={() => setCurrentView('login')} 
        onRegisterSuccess={() => setIsAuthenticated(true)} 
      />
    );
  }

  return <Board onLogout={() => setIsAuthenticated(false)} />;
}