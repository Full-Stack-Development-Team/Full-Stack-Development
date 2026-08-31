import React, { useState } from 'react';
import Login from './components/Login';
import Register from './components/Register';
import Navbar from './components/Navbar';
import Board from './components/Board';
import AnalyticsPage from './components/AnalyticsPage';
import TeamPage from './components/TeamPage';
import './index.css';

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [currentAuthView, setCurrentAuthView] = useState('login');
  const [activePage, setActivePage] = useState('board');

  if (!isAuthenticated) {
    return currentAuthView === 'login' ? (
      <Login 
        onSwitchToRegister={() => setCurrentAuthView('register')} 
        onLoginSuccess={() => setIsAuthenticated(true)} 
      />
    ) : (
      <Register 
        onSwitchToLogin={() => setCurrentAuthView('login')} 
        onRegisterSuccess={() => setIsAuthenticated(true)} 
      />
    );
  }

  return (
    <div className="app-layout">
      <Navbar 
        activePage={activePage} 
        setActivePage={setActivePage} 
        onLogout={() => setIsAuthenticated(false)} 
      />
      <main className="main-content">
        {activePage === 'board' && <Board />}
        {activePage === 'analytics' && <AnalyticsPage />}
        {activePage === 'team' && <TeamPage />}
      </main>
    </div>
  );
}