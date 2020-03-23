import React from 'react';
import {Slider} from "@material-ui/core";
import {changePriceLimit} from '../../../services/priceLimitReducer/actions';
import {useSelector, useDispatch} from 'react-redux';

const PriceLimit = () => {
  const value = useSelector(s => s.priceLimit.priceLimit);
  const dispatch = useDispatch();

  const handleChangeSlider = (event, newValue) => {
    dispatch(changePriceLimit(newValue.map((i) => i * 10)));
  }
  const handleChangeInputLeft = (e) => {
    if(e.target.value > 1000) {
      dispatch(changePriceLimit([1000, value[1]]));
      return;
    }
    if(e.target.value >= 0) {
      dispatch(changePriceLimit([e.target.value, value[1]]));
      return;
    }
  };
  const handleChangeInputRight = (e) => {
    if(e.target.value > 1000) {
      dispatch(changePriceLimit([value[0], 1000]));
      return;
    }
    if(e.target.value >= 0) {
      dispatch(changePriceLimit([value[0], e.target.value]));
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
