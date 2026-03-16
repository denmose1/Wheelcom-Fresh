import React, { useState } from 'react';
import { FaArrowLeft, FaCheckCircle } from 'react-icons/fa';
import "../../styles/Auth.scss"; 

const Auth = ({ onBack }) => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="auth-page">
      <div className="auth-container">
        {/* Left Side: Information & Branding */}
        <div className="info-panel">
          <button className="back-btn" onClick={onBack}>
            <FaArrowLeft /> Back to Home
          </button>
          <div className="panel-content">
            <h2>{isLogin ? "Welcome Back!" : "Start Your Journey"}</h2>
            <p>Join Kenya's top-rated training institute and master essential skills for your career.</p>
            <ul className="benefits-list">
              <li><FaCheckCircle /> Professional Instructors</li>
              <li><FaCheckCircle /> Flexible Timings</li>
              <li><FaCheckCircle /> NTSA Approved Training</li>
            </ul>
          </div>
        </div>

        {/* Right Side: The Form */}
        <div className="form-panel">
          <div className="form-wrapper">
            <div className="form-header">
              <h1>{isLogin ? 'Login' : 'Create Account'}</h1>
              <p>{isLogin ? 'Glad to see you again!' : 'Fill in the details below'}</p>
            </div>

            <form className="auth-form" onSubmit={(e) => e.preventDefault()}>
              {!isLogin && (
                <div className="input-box">
                  <label>Full Name</label>
                  <input type="text" placeholder="e.g. John Doe" required />
                </div>
              )}
              <div className="input-box">
                <label>Email Address</label>
                <input type="email" placeholder="name@example.com" required />
              </div>
              <div className="input-box">
                <label>Password</label>
                <input type="password" placeholder="••••••••" required />
              </div>
              
              <button type="submit" className="main-auth-btn">
                {isLogin ? 'Sign In' : 'Register Now'}
              </button>
            </form>

            <div className="switch-mode">
              <span>{isLogin ? "New here?" : "Already have an account?"}</span>
              <button onClick={() => setIsLogin(!isLogin)}>
                {isLogin ? 'Sign Up' : 'Log In'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;