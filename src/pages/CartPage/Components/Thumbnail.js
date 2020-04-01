import React from 'react';
import {Link} from 'react-router-dom';
import {useDispatch} from 'react-redux';
import {deleteFromCart,increaseQuantity, decreaseQuantity} from '../../../services/cartReducer/actions';
const Thumbnail = ({product}) => {
  const dispatch = useDispatch();
  return (
    <div className="thumbnail">
    <img className="thumbnail-delete" src="cancel.svg" alt="delete.svg" onClick={() => {
      dispatch(deleteFromCart(product.id));
    }}/>
    <Link to={`/products/${product.id}`}><img src={`/shoes/${product.image}`} alt={`${product.nickname}.jpeg`} className="thumbnail-img" /></Link>
    <span className="thumbnail-nickname">{product.nickname}</span>
    <span className="thumbnail-price">${product.price}</span>
    <div className="thumbnail-quantity">
      <img src="plus.svg" className="thumbnail-quantity-btn" alt="plusOne.svg"  onClick={() => {
        dispatch(increaseQuantity(product.id));
      }}/>
      <span className="thumbnail-quantity-span">{product.quantity || 0}</span>
      <img src="minus.svg" className="thumbnail-quantity-btn"  alt="minusOne.svg" onClick={() => {
        if(product.quantity > 1) {
          dispatch(decreaseQuantity(product.id));
        }
      }} />
    </div>
    </div>
  );
};

export default Thumbnail;
