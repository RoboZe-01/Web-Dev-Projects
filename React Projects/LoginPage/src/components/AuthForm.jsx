import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AuthForm = () => {
  const [isLogin, setIsLogin] = useState(true);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      if (isLogin) {
        // In real app, verify credentials here
        navigate('/login-success');
      } else {
        // In real app, create user account here
        navigate('/signup-success');
      }
    } catch (error) {
      console.error('Authentication error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className='auth-container'>
      <div className="form-container">
        <div className="form-toggle">
          <button 
            className={isLogin ? 'active' : ''} 
            onClick={() => setIsLogin(true)}
            disabled={isSubmitting}
          >
            Login
          </button>
          <button 
            className={!isLogin ? 'active' : ''} 
            onClick={() => setIsLogin(false)}
            disabled={isSubmitting}
          >
            SignUp
          </button>
        </div>
        
        <form onSubmit={handleSubmit}>
          {isLogin ? (
            <>
              <h2>Login Form</h2>
              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
              </div>
              <a href="#" className="forgot-password">Forgot password?</a>
              <button type="submit" disabled={isSubmitting}>
                {isSubmitting ? 'Logging in...' : 'Login'}
              </button>
              <p className="toggle-message">
                Not member yet?{' '}
                <a href="#" onClick={(e) => { e.preventDefault(); setIsLogin(false); }}>
                  SignUp Now
                </a>
              </p>
            </>
          ) : (
            <>
              <h2>SignUp Form</h2>
              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="password"
                  name="confirmPassword"
                  placeholder="Confirm Password"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  required
                />
              </div>
              <button type="submit" disabled={isSubmitting}>
                {isSubmitting ? 'Creating account...' : 'SignUp'}
              </button>
            </>
          )}
        </form>
      </div>
    </div>
  );
};

export default AuthForm;