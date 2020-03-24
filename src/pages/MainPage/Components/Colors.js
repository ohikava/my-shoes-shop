import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {changeColor} from '../../../services/colorsReducer/actions.js';

const colorsList = [
  "black",
  "red",
  "blue",
  "yellow",
  "green",
  "grey",
  "turquoise",
  "purple",
  "orange",
  "white"
];

const Colors = () => {
  const dispatch = useDispatch();
  const colors = useSelector(s => s.colors.colors);
  return (
    <div className="colors">
      <span className="colors-title">Color:</span>
      <div className="colors-wrapper">
        {
          colorsList.map(c => <div className={`colors-wrapper-color colors-wrapper-color-${c} ${colors[c] ? "active" : ""}`} onClick={() => {
            dispatch(changeColor(c))
          }}></div>)
        }
      </div>
    </div>
  );
};

export default Colors;
