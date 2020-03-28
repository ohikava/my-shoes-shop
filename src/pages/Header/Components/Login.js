import React from 'react';


const Login = ({handleClick, isActive}) => {
  return (
    <div className={`login ${isActive ? "login-active" : ""}`} onClick={() => {
      handleClick(!isActive);
    }}>
      <span className="login-span">Login</span>
      <img src="enter.svg" className="login-img" alt="login.svg"/>
    </div>
  );
};

export default Login;
