import React,{useState,useEffect} from 'react';
import {useParams,useHistory} from 'react-router-dom';
import {useDispatch} from 'react-redux';
import {addToCart} from '../../services/cartReducer/actions';
import {Select,MenuItem,CircularProgress} from '@material-ui/core';
import "./styles.scss";

const ProductPage = () => {
  const [size, setSize] = useState("4.5M");
  const [product,setProduct] = useState(null);
  const dispatch = useDispatch();
  const history = useHistory();
  const {id} = useParams();
  const handleChange = (e) => {
    setSize(e.target.value);
  };
  const handleBuy = () => {
    dispatch(addToCart(product));
    history.replace('/cart');
  };
  const handleAddToCart = () => {
    dispatch(addToCart(product));
    history.replace('/');
  };
  useEffect(async () => {
    try {
      const productJson = await fetch('http://localhost:5000/graphql', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
            query: `{
              getProduct(id: "${id}") {
                id
                sizes
                sku
                brand
                upperMaterial
                price
                technology
                silhoute
                designer
                nickname
                category
                mainColor
                image
                realiseDate
            }
          }`,
        },
      ),
      });
      const productFromJson = await productJson.json();
      setProduct(productFromJson.data.getProduct);

    } catch (error) {
      throw error
    }
  },[id]);

  return (
    <>
    {
      product ?  <main className="product-page">
        <div className="product-page-wrapper">
          <img className="product-page-img" src={`/shoes/${product.image}`} alt={`${product.nickname}`}/>
          <div className="product-page-btns">
            <button className="product-page-btns-btn product-page-btns-btn-black" onClick={handleBuy}>Buy Now</button>
            <button className="product-page-btns-btn product-page-btns-btn-red" onClick={handleAddToCart}>Add To Cart</button>
          </div>
        </div>
        <div className="product-page-wrapper">
        <span className="product-page-nickname">{product.nickname}</span>
        <div className="product-page-panel">
          <span className="product-page-panel-span-bold product-page-panel-span">Brand:</span>
          <span className="product-page-panel-span">{product.brand}</span>
          <span className="product-page-panel-span-bold product-page-panel-span">Main Color:</span>
          <span className="product-page-panel-span">{product.mainColor}</span>
          <span className="product-page-panel-span-bold product-page-panel-span">Designer:</span>
          <span className="product-page-panel-span ">{product.designer}</span>
          <span className="product-page-panel-span-bold product-page-panel-span">Technology:</span>
          <span className="product-page-panel-span">{product.technology}</span>
          <span className="product-page-panel-span-bold product-page-panel-span">Silhouette:</span>
          <span className="product-page-panel-span">{product.silhoute}</span>
          <span className="product-page-panel-span-bold product-page-panel-span">Category:</span>
          <span className="product-page-panel-span">{product.category}</span>
          <span className="product-page-panel-span-bold product-page-panel-span">SKU:</span>
          <span className="product-page-panel-span">{product.sku}</span>
          <span className="product-page-panel-span-bold product-page-panel-span">Realise Date:</span>
          <span className="product-page-panel-span">{`${new Date(product.realiseDate).getFullYear()}-${new Date(product.realiseDate).getMonth()}-${new Date(product.realiseDate).getDate()}`}</span>
          <span className="product-page-panel-span-bold product-page-panel-span">Price:</span>
          <span className="product-page-panel-span">{product.price}$</span>
          <span className="product-page-panel-span-bold product-page-panel-span">Size:</span>
          <Select value={size} onChange={handleChange} className="product-page-panel-sizes">
            <MenuItem className="product-page-panel-sizes-size" value="4.5M">4.5M</MenuItem>
            <MenuItem className="product-page-panel-sizes-size" value="7M">7M</MenuItem>
            <MenuItem className="product-page-panel-sizes-size" value="8M">8M</MenuItem>
            <MenuItem className="product-page-panel-sizes-size" value="8.5M">8.5M</MenuItem>
            <MenuItem className="product-page-panel-sizes-size" value="10M">10M</MenuItem>
          </Select>
        </div>
        </div>
      </main>
      :
      <CircularProgress className="loading-p" color="secondary" />
    }
    </>
  );
};

export default ProductPage;
