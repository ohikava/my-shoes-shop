import React,{useState} from 'react';
import {Slider} from "@material-ui/core";


const PriceLimit = () => {
  const [value, setValue] = useState([100, 1000]);
  const handleChangeSlider = (event, newValue) => {
    setValue(newValue.map((i) => i * 10));
  }
  const handleChangeInputLeft = (e) => {
    if(e.target.value > 1000) {
      setValue([1000, value[1]]);
      return;
    }
    if(e.target.value >= 0) {
      setValue([e.target.value, value[1]]);
      return;
    }
  };
  const handleChangeInputRight = (e) => {
    if(e.target.value > 1000) {
      setValue([value[0], 1000]);
      return;
    }
    if(e.target.value >= 0) {
      setValue([value[0], e.target.value]);
      return;
    }
  }

  return (
    <div className="price-limit">
      <Slider
        value={value.map((i) => i / 10)}
        aria-labelledby="range-slider"
        className="price-limit-inp"
        onChange={handleChangeSlider}
      />
      <div className="price-limit-wrapper">
        <span className="price-limit-wrapper-range">$<input type="number" onChange={handleChangeInputLeft} value={value[0]} min={100} max={1000} className="price-limit-wrapper-range-inp" /></span>
        <span className="price-limit-wrapper-span"></span>
        <span className="price-limit-wrapper-range">$<input type="number" onChange={handleChangeInputRight} min={100}  value={value[1]} max={1000} className="price-limit-wrapper-range-inp" /></span>
      </div>
    </div>
  );
};

export default PriceLimit;
