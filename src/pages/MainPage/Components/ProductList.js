import React,{useEffect} from 'react';
import Thumbnail from './Thumbnail';
import {CircularProgress} from "@material-ui/core"
import {fetchProducts} from "../../../services/productReducer/actions";
import {useSelector, useDispatch} from 'react-redux';

const ProductList = () => {
  const dispatch = useDispatch();
  const products = useSelector(s => s.products.products);

  useEffect(() => {
    dispatch(fetchProducts());
    console.log(products)
  });

  console.log(products)
  return (
    <div className="product-list">
      {
        products.length === 0 ? <CircularProgress color="secondary" className="loading" /> : products.map(p => <Thumbnail product={p} />)
      }
    </div>
  );
};

export default ProductList;
