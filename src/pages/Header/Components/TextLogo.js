import React from 'react';
import {Link} from 'react-router-dom';

const TextLogo = () => {
  return (
    <Link to="/" className='text-logo'>
      <span className="text-logo-span">Shoes Shop</span>
      <img src="shoes.svg" className="text-logo-img" alt="shoes.svg"/>
    </Link>
  )
};

export default TextLogo;
