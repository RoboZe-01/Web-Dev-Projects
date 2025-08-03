import React from 'react';
import { useNavigate } from 'react-router-dom';

const SignupSuccess = () => {
  const navigate = useNavigate();

  return (
    <div className="success-container">
      <div className="success-card">
        <div className="success-icon">✓</div>
        <h2>Welcome Aboard!</h2>
        <p>Your account has been created successfully.</p>
        <div className="success-actions">
          <button 
            onClick={() => navigate('/')}
            className="back-button"
          >
            Go to Login
          </button>
          <button 
            onClick={() => navigate('/')}
            className="home-button"
          >
            Return to Home
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignupSuccess;