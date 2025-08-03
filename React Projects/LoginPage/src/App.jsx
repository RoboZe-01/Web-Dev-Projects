import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AuthForm from './components/AuthForm';
import LoginSuccess from './components/AfterLogin/LoginSuccess';
import SignupSuccess from './components/AfterSignup/SignUp';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app-container">
        <Routes>
          <Route path="/" element={<AuthForm />} />
          <Route path="/login-success" element={<LoginSuccess />} />
          <Route path="/signup-success" element={<SignupSuccess />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;