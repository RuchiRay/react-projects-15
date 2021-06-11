import React,{useState} from "react";

export const Tour = ({ id, image, info, price, name,removeTour }) => {
    const [readMore, setReadMore] = useState(false)
  return (
    <div className="single-tour">
      <img src={image} alt="name" />
      <div className="tour-price">
        <h4>{name}</h4>
        <h4 className="price">${price}</h4>
      </div>
      <div className="info-button">
        <div className="info">
          <p>{readMore?info:`${info.substring(0,300)}`}...
          <button onClick={()=>setReadMore(!readMore)}>{readMore?'Show Less':'Read More'}</button></p>
        </div>
        <div className="button">
          <button className="delete-btn" onClick={()=>removeTour(id)}>Not Interested</button>
        </div>
      </div>
    </div>
  );
};
