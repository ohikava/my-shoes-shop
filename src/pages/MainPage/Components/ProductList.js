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
  const colors = useSelector(s => s.colors.colors);
  const brands = useSelector(s => s.brands.brands);
  const sizes = useSelector(s => s.sizes.sizes);

  useEffect(() => {
    dispatch(fetchProducts());
  },[products, dispatch]);

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

    if(Object.values(colors).some(v => v)) {
      result = result.filter(p => colors[p.mainColor]);
    }

    if(Object.values(brands).some(v => v)) {
      result = result.filter(p => brands[p.brand]);
    }
    if(Object.values(sizes).some(v => v)) {
      result = result.filter(p => p.sizes.some(e => sizes[e]));
    }
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
