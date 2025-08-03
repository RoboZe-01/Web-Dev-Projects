import React from 'react';
import { useNavigate } from 'react-router-dom';

const LoginSuccess = () => {
  const navigate = useNavigate();

  return (
    <div className="success-container">
      <div className="success-card">
        <div className="success-icon">✓</div>
        <h2>Login Successful!</h2>
        <p>You have successfully accessed your account.</p>
        <button 
          onClick={() => navigate('/')}
          className="back-button"
        >
          Return to Home
        </button>
      </div>
    </div>
  );
};

export default LoginSuccess;