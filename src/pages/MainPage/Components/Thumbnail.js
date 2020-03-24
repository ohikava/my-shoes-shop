import React from 'react';
import {Link} from 'react-router-dom';

const Thumbnail = ({product}) => {
  return (
    <Link to={`/${product.id}`} className="thumbnail">
      <img src={`shoes/${product.image}`} className="thumbnail-img" alt={`${product.nickname}.jpeg`} />
      <span className="thumbnail-nickname">{product.nickname}</span>
      <span className="thumbnail-price">{`$${product.price}`}</span>
    </Link>
  );
};

export default Thumbnail;
