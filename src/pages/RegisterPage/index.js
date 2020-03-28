import React,{useState,useEffect} from 'react';
import {useSelector,useDispatch} from 'react-redux';
import {register} from '../../services/userReducer/actions';
import "./styles.scss";
import {useHistory} from 'react-router-dom';
const Register = () => {
  const user = useSelector(s => s.user.user);
  const history = useHistory();
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [password, setPassword] = useState('');
  const [password2, setPassword2] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(register(password, password2, name, surname, email));
  };
  useEffect(() => {
    if(user !== null) {
      history.push('/');
    }
  },[user,history]);

  return (
    <article className="register">
      <div className="register-header">
        <img src="internet.svg" className="register-header-img" alt="register.svg"/>
        <span className="register-header-text">REGISTRATION</span>
      </div>
      <form className="register-body" onSubmit={handleSubmit}>
        <div className="register-body-wrapper">
          <label className="register-body-wrapper-label">
            Name:
            <div className="register-body-wrapper-label-input">
              <input type="text" className="register-body-wrapper-label-input-i"  required value={name} onChange={(e) => {
                setName(e.target.value)
              }}/>
              <img src="name.svg" alt="name.svg" className="register-body-wrapper-label-input-img" />
            </div>
          </label>
          <label className="register-body-wrapper-label">
            Surname:
            <div className="register-body-wrapper-label-input">
              <input type="text" className="register-body-wrapper-label-input-i"  required value={surname} onChange={(e) => {
                setSurname(e.target.value)
              }}/>
              <img src="name.svg" alt="name.svg" className="register-body-wrapper-label-input-img" />
            </div>
          </label>
          <label className="register-body-wrapper-label">
            Password:
            <div className="register-body-wrapper-label-input">
              <input type="password" className="register-body-wrapper-label-input-i"  required value={password} onChange={(e) => {
                setPassword(e.target.value)
              }} />
              <img src="lock.svg" alt="lock.svg" className="register-body-wrapper-label-input-img" />
            </div>
          </label>
          <label className="register-body-wrapper-label">
            Confirm Password:
            <div className="register-body-wrapper-label-input">
              <input type="password" className="register-body-wrapper-label-input-i"  required value={password2} onChange={(e) => {
                setPassword2(e.target.value)
              }} />
              <img src="lock.svg" alt="lock.svg" className="register-body-wrapper-label-input-img"  />
            </div>
          </label>
          <label className="register-body-wrapper-label">
            Email:
            <div className="register-body-wrapper-label-input">
              <input type="email" className="register-body-wrapper-label-input-i"  required value={email} onChange={(e) => {
                setEmail(e.target.value)
              }} />
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
