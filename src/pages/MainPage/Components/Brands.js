import React,{useState} from 'react';
import {Checkbox, FormControlLabel} from "@material-ui/core";

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
  const [activeBrands, setActiveBrands] = useState({
    "Nike": false,
    "Adidas": false,
    "Air Jordan": false,
    "New Balance": false,
    "Sacai": false,
    "Comme des Garçons": false,
    "Converse": false
  });

  const handleChangeCheckboxis = (event) => {
    setActiveBrands({ ...activeBrands, [event.target.name]: event.target.checked});
  };
  
  return (
    <div className="brands">
      <span className="brands-title">Brands:</span>
      <div className="brands-wrapper">
        {
          brandsList.map((b) => (
            <FormControlLabel
              control={<Checkbox />}
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
