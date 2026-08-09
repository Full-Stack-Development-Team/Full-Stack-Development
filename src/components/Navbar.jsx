import React from 'react';

export default function Navbar({ activePage, setActivePage, onLogout }) {
  return (
    <nav className="dashboard-navbar">
      <div className="nav-brand">
        <h3>🚀 Team Dashboard</h3>
      </div>
      <div className="nav-links">
        <button 
          className={activePage === 'board' ? 'nav-btn active' : 'nav-btn'} 
          onClick={() => setActivePage('board')}
        >
          Kanban Board
        </button>
        <button 
          className={activePage === 'analytics' ? 'nav-btn active' : 'nav-btn'} 
          onClick={() => setActivePage('analytics')}
        >
          Project Analytics
        </button>
        <button 
          className={activePage === 'team' ? 'nav-btn active' : 'nav-btn'} 
          onClick={() => setActivePage('team')}
        >
          Team Members
        </button>
      </div>
      <button className="btn-cancel logout-nav-btn" onClick={onLogout}>
        Sign Out
      </button>
    </nav>
  );
}