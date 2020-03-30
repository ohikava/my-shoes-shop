import React,{useState,useEffect} from 'react';
import {useParams} from 'react-router-dom';
import {Select,MenuItem} from '@material-ui/core';
import "./styles.scss";

const ProductPage = () => {
  const [size, setSize] = useState("4.5M");
  const handleChange = (e) => {
    setSize(e.target.value);
  }
  const {id} = useParams();
  return (
    <main className="product-page">
      <div className="product-page-wrapper">
        <img className="product-page-img" src="/shoes/CQ2289 400.png" alt="Nike.png"/>
        <div className="product-page-btns">
          <button className="product-page-btns-btn product-page-btns-btn-black">Buy Now</button>
          <button className="product-page-btns-btn product-page-btns-btn-red">Add To Cart</button>
        </div>
      </div>
      <div className="product-page-wrapper">
      <span className="product-page-nickname">Undfeated x Air Max 90 'Pacific Blue'</span>
      <div className="product-page-panel">
        <span className="product-page-panel-span-bold product-page-panel-span">Brand:</span>
        <span className="product-page-panel-span">Nike</span>
        <span className="product-page-panel-span-bold product-page-panel-span">Main Color:</span>
        <span className="product-page-panel-span">Blue</span>
        <span className="product-page-panel-span-bold product-page-panel-span">Designer:</span>
        <span className="product-page-panel-span ">Tinker Hatfield</span>
        <span className="product-page-panel-span-bold product-page-panel-span">Technology:</span>
        <span className="product-page-panel-span">Air</span>
        <span className="product-page-panel-span-bold product-page-panel-span">Silhouette:</span>
        <span className="product-page-panel-span">Air Max 90</span>
        <span className="product-page-panel-span-bold product-page-panel-span">Category:</span>
        <span className="product-page-panel-span">Lifestyle</span>
        <span className="product-page-panel-span-bold product-page-panel-span">SKU:</span>
        <span className="product-page-panel-span">CQ2289 400</span>
        <span className="product-page-panel-span-bold product-page-panel-span">Realise Date:</span>
        <span className="product-page-panel-span">2020-03-26</span>
        <span className="product-page-panel-span-bold product-page-panel-span">Size:</span>
        <Select value="4.5M" onChange={handleChange} className="product-page-panel-sizes">
          <MenuItem className="product-page-panel-sizes-size" value="4.5M">4.5M</MenuItem>
          <MenuItem className="product-page-panel-sizes-size" value="7M">7M</MenuItem>
          <MenuItem className="product-page-panel-sizes-size" value="8M">8M</MenuItem>
          <MenuItem className="product-page-panel-sizes-size" value="8.5M">8.5M</MenuItem>
          <MenuItem className="product-page-panel-sizes-size" value="10M">10M</MenuItem>
        </Select>
      </div>
      </div>
    </main>
  );
};

export default ProductPage;
