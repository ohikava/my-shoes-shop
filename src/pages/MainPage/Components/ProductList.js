import React from 'react';
import Thumbnail from './Thumbnail';

const initialDate = [
  {
    nickname: "Supreme x Air Force 1 Low 'Box Logo - White'",
    sku: "CU9225 100",
    price: 200,
    image: "CU9225 100.jpeg"
  },
  {
    nickname: "LeBron 17 GS 'Sprite'",
    sku: "BQ5594 434",
    price: 175,
    image: "BQ5594 434.png"

  },
  {
    nickname: "Dunk Low Retro SP 'Syracuse'",
    sku: "CU1726 101",
    price: 220,
    image: "CU1726 101.jpeg"
  }
];

const ProductList = () => {
  return (
    <div className="product-list">
      {
        initialDate.map(p => <Thumbnail product={p} />)
      }
    </div>
  );
};

export default ProductList;
