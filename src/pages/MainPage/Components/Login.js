import React from 'react';
import {Link} from 'react-router-dom';

const Login = () => {
  return (
    <Link to="/login" className="login">
      <span className="login-span">Login</span>
      <img src="enter.svg" className="login-img" alt="login.svg"/>
    </Link>
  );
};

export default Login;
