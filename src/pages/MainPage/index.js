import React,{useState} from 'react';
import ProductList from './Components/ProductList.js';
import CartThumbnail from './Components/CartThumbnail.js';
import Colors from './Components/Colors.js';
import Login from './Components/Login.js';
import PriceLimit from './Components/PriceLimit.js';
import Sizes from './Components/Sizes.js';
import Sort from './Components/Sort.js';
import Brands from './Components/Brands.js';
import TextLogo from './Components/TextLogo.js';
import LoginWindow from './Components/LoginWindow.js';
import UserThumbnail from './Components/UserThumbnail.js';

import {useSelector} from 'react-redux';

import "./styles.scss";

const MainPage = () => {
  const [isLoginWindow, setLoginWindow] = useState(false);
  const user = useSelector(s => s.user.user);

  return (
    <div className="mainpage">
      <header className="mainpage-header">
        <div className="mainpage-header-wrapper">
            {user !== null ? <UserThumbnail username={user.username} />  : <Login handleClick={setLoginWindow} isActive={isLoginWindow} />}
            {
              isLoginWindow && user === null ? <LoginWindow /> : ""
            }
            <TextLogo />
            <CartThumbnail />
        </div>
      </header>
      <div className="mainpage-body">
        <aside >
          <Sort />
          <PriceLimit />
          <Colors />
        </aside>
        <main >
          <ProductList />
        </main>
        <aside>
          <Sizes />
          <Brands />
        </aside>
      </div>
    </div>
  );
};

export default MainPage;
