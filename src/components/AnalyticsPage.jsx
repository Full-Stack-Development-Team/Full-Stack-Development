import React from 'react';

export default function AnalyticsPage() {
  return (
    <div className="page-content">
      <h2>Project Analytics & Summary</h2>
      <p className="auth-subtitle">Overview of your team's project progress.</p>
      
      <div className="analytics-grid">
        <div className="analytics-card">
          <h4>Total Tasks</h4>
          <p className="stat-number">3</p>
        </div>
        <div className="analytics-card">
          <h4>Completed Tasks</h4>
          <p className="stat-number">1</p>
        </div>
        <div className="analytics-card">
          <h4>Pending Tasks</h4>
          <p className="stat-number">2</p>
        </div>
      </div>

      {/* Visual Progress Bar Chart */}
      <div className="chart-container">
        <h3>Task Status Distribution</h3>
        <div className="chart-bar-wrapper">
          <div className="chart-label-row">
            <span>Completed (33%)</span>
            <span>1 / 3 Tasks</span>
          </div>
          <div className="progress-bar-bg">
            <div className="progress-bar-fill" style={{ width: '33%' }}></div>
          </div>
        </div>

        <div className="chart-bar-wrapper">
          <div className="chart-label-row">
            <span>In Progress / To Do (67%)</span>
            <span>2 / 3 Tasks</span>
          </div>
          <div className="progress-bar-bg">
            <div className="progress-bar-fill todo-fill" style={{ width: '67%' }}></div>
          </div>
        </div>
      </div>
    </div>
  );
}