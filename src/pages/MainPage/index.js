import React from 'react';
import ProductList from './Components/ProductList.js';
import CartThumbnail from './Components/CartThumbnail.js';
import Colors from './Components/Colors.js';
import Login from './Components/Login.js';
import PriceLimit from './Components/PriceLimit.js';
import Sizes from './Components/Sizes.js';
import Sort from './Components/Sort.js';
import Brands from './Components/Brands.js';
import TextLogo from './Components/TextLogo.js';

import "./styles.scss";

const MainPage = () => {
  return (
    <div className="mainpage">
      <header className="mainpage-header">
        <div className="mainpage-header-wrapper">
            <Login />
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
