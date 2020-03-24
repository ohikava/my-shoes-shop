import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {changeSizes} from '../../../services/sizesReducer/actions';

const sizesList = [
  "4M",
  "4.5M",
  "5M",
  "5.5M",
  "6M",
  "6.5M",
  "7M",
  "8.5M",
  "9M",
  "10M",
  "10.5M",
  "11M",
  "11.5M",
  "12M"
];

const Sizes = () => {
  const sizes = useSelector(s => s.sizes.sizes);
  const dispatch = useDispatch();

  return (
    <div className="sizes">
      <span className="sizes-logo">Sizes:</span>
      <div className="sizes-wrapper">
        {sizesList.map(s => <span className={`sizes-wrapper-item ${sizes[s] ? "active" : ""}`} onClick={() => {
          dispatch(changeSizes(s));
        }}>{s}</span> )}
      </div>
    </div>
  );
};

export default Sizes;
