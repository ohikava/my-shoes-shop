import React from 'react';
import {Link} from 'react-router-dom';

const CartThumbnail = () => {
  return (
    <Link to="/cart" className="cart-thumbnail">
      <span className="cart-thumbnail-span">Cart</span>
      <img src="shopping-cart.svg" className="cart-thumbnail-img" alt="cart.svg" />
    </Link>
  );
};

export default CartThumbnail;
