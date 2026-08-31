import React, { useState } from 'react';

export default function Login({ onSwitchToRegister, onLoginSuccess }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username && password) {
      onLoginSuccess();
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <h2>Team Login</h2>
        <p className="auth-subtitle">Sign in to access your collaboration board</p>
        
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Username</label>
            <input 
              type="text" 
              value={username} 
              onChange={(e) => setUsername(e.target.value)} 
              placeholder="e.g., nimuthu" 
              required 
            />
          </div>

          <div className="form-group">
            <label>Password</label>
            <input 
              type="password" 
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
              placeholder="••••••••" 
              required 
            />
          </div>

          <button type="submit" className="btn-primary auth-btn">Sign In</button>
        </form>

        <p className="auth-switch">
          Don't have an account?{' '}
          <button type="button" className="link-btn" onClick={onSwitchToRegister}>
            Register here
          </button>
        </p>
      </div>
    </div>
  );
}