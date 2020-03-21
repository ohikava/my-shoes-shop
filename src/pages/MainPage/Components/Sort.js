import React from 'react';

const Sort = () => {
  return (
    <div className="sort">
    <span className="sort-logo">Sort:</span>
    <div className="sort-wrapper">
      <div className="sort-wrapper-wrap">
        <span className="sort-wrapper-wrap-option">Default</span>
      </div>
      <div className="sort-wrapper-wrap">
        <span className="sort-wrapper-wrap-option">Highest to Lowest</span>
      </div>
      <div className="sort-wrapper-wrap">
        <span className="sort-wrapper-wrap-option">Lowest to Highest</span>
      </div>
    </div>
    </div>
  );
};

export default Sort;
