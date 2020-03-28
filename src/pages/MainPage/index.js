import React,{useState} from 'react';
import ProductList from './Components/ProductList.js';
import Colors from './Components/Colors.js';
import PriceLimit from './Components/PriceLimit.js';
import Sizes from './Components/Sizes.js';
import Sort from './Components/Sort.js';
import Brands from './Components/Brands.js';

import {useSelector} from 'react-redux';

import "./styles.scss";

const MainPage = () => {

  return (
    <div className="mainpage">
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
