import React,{useState} from 'react';
import {useSelector} from 'react-redux';
import CartThumbnail from './Components/CartThumbnail.js';
import Login from './Components/Login.js';
import TextLogo from './Components/TextLogo.js';
import LoginWindow from './Components/LoginWindow.js';
import UserThumbnail from './Components/UserThumbnail.js';
import "./styles.scss";

const Header = () => {
  const [isLoginWindow, setLoginWindow] = useState(false);
  const user = useSelector(s => s.user.user);

  return (
    <header className="header">
      <div className="header-wrapper">
        {user !== null ? <UserThumbnail username={user.username} />  : <Login handleClick={setLoginWindow} isActive={isLoginWindow} />}
          {
            isLoginWindow && user === null ? <LoginWindow /> : ""
          }
          <TextLogo />
          <CartThumbnail />
      </div>
    </header>);
}

export default Header;
