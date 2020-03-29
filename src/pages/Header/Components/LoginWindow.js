import React,{useState} from 'react';
import {Link} from 'react-router-dom';
import {useDispatch} from 'react-redux';
import {login} from '../../../services/userReducer/actions';

const LoginWindow = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(login(email,password));
    setEmail('');
    setPassword('');
  }
  return (
    <form className="login-window" action="" onSubmit={handleSubmit}>
      <label className="login-window-label">Email:
      <input type="email" className="login-window-inp" value={email} onChange={(e) => {
        setEmail(e.target.value);
      }}/>
      </label>
      <label className="login-window-label">Password:
      <input type="password" className="login-window-inp" value={password} onChange={(e) => {
        setPassword(e.target.value);
      }}/>
      </label>
      <button type="submit" className="login-window-btn">Log In</button>
      <div className="login-window-extra">
        <Link to="/register" className="login-window-extra-span">Create account</Link>
      </div>
    </form>
  );
};

export default LoginWindow;
