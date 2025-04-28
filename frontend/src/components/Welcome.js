import React from 'react';
import { useNavigate } from 'react-router-dom';
import './styles.css';

function Welcome() {
  const navigate = useNavigate();

  return (
    <div className="welcome-container">
      <div className="welcome-content">
        <h1>Welcome to PopX</h1>
        <p className="welcome-subtitle">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <button 
          className="btn-primary"
          onClick={() => navigate('/register')}
        >
          Create Account
        </button>
        <button 
          className="btn-secondary"
          onClick={() => navigate('/login')}
        >
          Already Registered? Login
        </button>
      </div>
    </div>
  );
}

export default Welcome;
