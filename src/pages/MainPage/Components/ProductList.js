import React,{useEffect} from 'react';
import Thumbnail from './Thumbnail';
import {CircularProgress} from "@material-ui/core"
import {fetchProducts} from "../../../services/productReducer/actions";
import {useSelector, useDispatch} from 'react-redux';
import {DEFAULT, H_T_L} from "../../../services/sortReducer/actionsTypes.js";

const ProductList = () => {
  const dispatch = useDispatch();
  const products = useSelector(s => s.products.products);
  const sort = useSelector(s => s.sort.sort);
  const priceLimit = useSelector(s => s.priceLimit.priceLimit);

  useEffect(() => {
    dispatch(fetchProducts());
    console.log(products)
  });

  const config = () => {
    let result = products.slice();

    if (sort !== DEFAULT) {
      const compare = (a, b) => {
        return a.price - b.price;
      };
      result = result.sort(compare);
      if (sort === H_T_L) {
        result = result.reverse();
      }
    };

    result = result.filter((p) => {
      return ((p.price >= priceLimit[0]) && (p.price <= priceLimit[1]));
    });

    return result;
  }
  console.log(products)
  return (
    <div className="product-list">
      {
        products.length === 0 ? <CircularProgress color="secondary" className="loading" /> : config().map(p => <Thumbnail product={p} />)
      }
    </div>
  );
};

export default ProductList;
