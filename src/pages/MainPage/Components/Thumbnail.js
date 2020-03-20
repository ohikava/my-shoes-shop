import React from 'react';

const Thumbnail = ({product}) => {
  return (
    <div className="thumbnail">
      <img src={`shoes/${product.image}`} className="thumbnail-img" />
      <span className="thumbnail-nickname">{product.nickname}</span>
      <span className="thumbnail-price">{`$${product.price}`}</span>
    </div>
  );
};

export default Thumbnail;
