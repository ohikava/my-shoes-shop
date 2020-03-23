import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {changeSort} from '../../../services/sortReducer/actions.js';
import {DEFAULT, H_T_L, L_T_H} from "../../../services/sortReducer/actionsTypes.js";


const Sort = () => {
  const sort = useSelector(s => s.sort.sort);
  const dispatch = useDispatch();

  return (
    <div className="sort">
    <span className="sort-logo">Sort:</span>
    <div className="sort-wrapper">
      <div className="sort-wrapper-wrap">
        <span className={`sort-wrapper-wrap-option ${sort === DEFAULT ? "active" : ""}`} onClick={() => {
          dispatch(changeSort(DEFAULT));
        }}>Default</span>
      </div>
      <div className="sort-wrapper-wrap">
        <span className={`sort-wrapper-wrap-option ${sort === H_T_L ? "active" : ""}`} onClick={() => {
          dispatch(changeSort(H_T_L));
        }}>Highest to Lowest</span>
      </div>
      <div className="sort-wrapper-wrap">
        <span className={`sort-wrapper-wrap-option ${sort === L_T_H ? "active" : ""}`} onClick={() => {
          dispatch(changeSort(L_T_H));
        }}>Lowest to Highest</span>
      </div>
    </div>
    </div>
  );
};

export default Sort;
