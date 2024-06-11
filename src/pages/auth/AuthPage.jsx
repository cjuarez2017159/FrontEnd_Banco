import React, { useState } from 'react';
import { Login } from '../../components/Login';
import './authPage.css';

export const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true);

  const handleAuthPageToggle = () => {
    setIsLogin(prev => !prev);
  };

  return (
    <div className="auth-page">
      {isLogin ? (
        <Login switchAuthHandler={handleAuthPageToggle} />
      ) : null}
    </div>
  );
};
