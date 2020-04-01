import React from 'react';
import {useSelector} from 'react-redux';
import "./styles.scss";
import Thumbnail from './Components/Thumbnail';
import Panel from './Components/Panel';

const CartPage = () => {
  const cart = useSelector(s => s.cart.cart);
  return (
    <main className="cart-page">
      {cart.map(p => <Thumbnail product={p} />)}
      <Panel />
    </main>
  );
};

export default CartPage;
