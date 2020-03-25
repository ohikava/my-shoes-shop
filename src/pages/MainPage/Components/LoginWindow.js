import React from 'react';
import {Link} from 'react-router-dom';
const LoginWindow = () => {
  return (
    <form className="login-window" action="">
      <label className="login-window-label">Email:
      <input type="email" className="login-window-inp" />
      </label>
      <label className="login-window-label">Password:
      <input type="password" className="login-window-inp" />
      </label>
      <button type="submit" className="login-window-btn">Log In</button>
      <div className="login-window-extra">
        <Link to="/register" className="login-window-extra-span">Create account</Link>
        <Link to="/create_password" className="login-window-extra-span">Forgot password?</Link>
      </div>
    </form>
  );
};

export default LoginWindow;
