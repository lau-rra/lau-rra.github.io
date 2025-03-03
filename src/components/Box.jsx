import React from 'react';
import './Box.css';

const Box = ({ imgSrc, altText, onClick }) => {
  return (
    <div className="box" onClick={onClick}>
      <img src={imgSrc} alt={altText} />
    </div>
  );
};

export default Box;