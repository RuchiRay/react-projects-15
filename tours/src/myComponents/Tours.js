import React from "react";
import { Tour } from './Tour'

export const Tours = ({ tours , removeTour}) => {
  return (
    <div className="container">
      <div className="title">
        <h2>Our Tours</h2>
      </div>
      <div className="tours-main">
        {tours.map((tour) => {
          return (
              <Tour key={tour.id} {...tour} removeTour={removeTour}/>
          )
        })}
      </div>
    </div>
  );
};
