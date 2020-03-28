import React from 'react';

import "./styles.scss";

const Register = () => {
  return (
    <article className="register">
      <div className="register-header">
        <img src="internet.svg" className="register-header-img" alt="register.svg"/>
        <span className="register-header-text">REGISTRATION</span>
      </div>
      <form className="register-body">
        <div className="register-body-wrapper">
          <label className="register-body-wrapper-label">
            Name:
            <div className="register-body-wrapper-label-input">
              <input type="text" className="register-body-wrapper-label-input-i" />
              <img src="name.svg" alt="name.svg" className="register-body-wrapper-label-input-img" />
            </div>
          </label>
          <label className="register-body-wrapper-label">
            Surname:
            <div className="register-body-wrapper-label-input">
              <input type="text" className="register-body-wrapper-label-input-i" />
              <img src="name.svg" alt="name.svg" className="register-body-wrapper-label-input-img" />
            </div>
          </label>
          <label className="register-body-wrapper-label">
            Password:
            <div className="register-body-wrapper-label-input">
              <input type="password" className="register-body-wrapper-label-input-i" />
              <img src="lock.svg" alt="lock.svg" className="register-body-wrapper-label-input-img" />
            </div>
          </label>
          <label className="register-body-wrapper-label">
            Confirm Password:
            <div className="register-body-wrapper-label-input">
              <input type="password" className="register-body-wrapper-label-input-i" />
              <img src="lock.svg" alt="lock.svg" className="register-body-wrapper-label-input-img" />
            </div>
          </label>
          <label className="register-body-wrapper-label">
            Email:
            <div className="register-body-wrapper-label-input">
              <input type="email" className="register-body-wrapper-label-input-i" />
              <img src="email.svg" alt="email.svg" className="register-body-wrapper-label-input-img" />
            </div>
          </label>
        </div>
        <button type="submit" className="register-body-btn">Continue</button>
      </form>
    </article>
  );
};

export default Register;
