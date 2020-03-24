import React from 'react';
import {Checkbox, FormControlLabel} from "@material-ui/core";
import {useSelector, useDispatch} from 'react-redux';
import {changeBrand} from '../../../services/brandsReducer/actions';

const brandsList = [
  "Nike",
  "Adidas",
  "Air Jordan",
  "New Balance",
  "Sacai",
  "Comme des Garçons",
  "Converse"
];

const Brands = () => {
  const dispatch = useDispatch();
  const brands = useSelector(s => s.brands.brands);

  const handleChangeCheckboxis = (event) => {
    dispatch(changeBrand(event.target.name));
  };

  return (
    <div className="brands">
      <span className="brands-title">Brands:</span>
      <div className="brands-wrapper">
        {
          brandsList.map((b) => (
            <FormControlLabel
              control={<Checkbox />}
              checked={brands[`${b}`]}
              onChange={handleChangeCheckboxis}
              label={`${b}`}
              name={`${b}`}
              className="brands-wrapper-brand"
            />
          ))
        }
      </div>
    </div>
  );
};

export default Brands;
