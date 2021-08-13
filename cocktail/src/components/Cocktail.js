import React from "react";
import { Link } from "react-router-dom";

const Cocktail = ({ cocktail }) => {
  const { id,alcoholic, category, image, name, glass } = cocktail;
  return (
    <div className="cocktail">
      <div className="tail-img">
        <img src={image} alt="" />
      </div>
      <div className="tail-text">
        <h2>{name}</h2>
        <h4>{glass}</h4>
        <h5>{category}</h5>
        <p>{alcoholic}</p>
        <Link to={`/cocktail/${id}`} className='detail-btn'>See details</Link>
      </div>
    </div>
  );
};

export default Cocktail;
