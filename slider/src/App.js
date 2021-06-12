import React, { useState,useEffect } from "react";
import data from "./myComponents/data";
import { FaQuoteRight } from "react-icons/fa";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { cleanup } from "@testing-library/react";
function App() {
  const [people, setPeople] = useState(data);
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const lastIndex = people.length-1;
    if(index<0)
    setIndex(lastIndex)
    if(index>lastIndex)
    setIndex(0)
  }, [index,people])
  useEffect(() => {
   let slider = setInterval(() => {
      setIndex(index+1)
    }, 3000);
    return()=>clearInterval(slider)
  }, [index])
  return (
    <main>
      <h2>/ Reviews</h2>
      <div className="review-center">
        {people.map((peps, indexPep) => {
          const { id, image, name, title, quote } = peps;
          let position = "next-slide";
          if (index === indexPep) {
            position = "active-slide";
          }
          if (
            indexPep === index - 1 ||
            (index === 0 && indexPep === people.length - 1)
          ) {
            position = "last-slide";
          }
          return (
            <div className={`review ${position}`} key={id}>
              <img src={image} alt={name} />
              <h4 className="name">{name}</h4>
              <p className="title">{title}</p>
              <p className="quote">{quote}</p>
              <FaQuoteRight className="icon" />
            </div>
          );
        })}
        <button className="prev" onClick={()=>setIndex(index-1)}>
          <FiChevronLeft />
        </button>
        <button className="next" onClick={()=>setIndex(index+1)}>
          <FiChevronRight />
        </button>
      </div>
    </main>
  );
}

export default App;
