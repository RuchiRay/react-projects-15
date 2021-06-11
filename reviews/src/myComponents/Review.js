import React, { useState } from "react";
import people from "./data";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";

const Review = () => {
  const [index, setIndex] = useState(0);
  let { name, job, image, text } = people[index];
  function checkNumber(num){
      if(num>people.length)
      return 0;
      else if(num<0)
      return people.length-1;
      else
      return num
  }
  function nextPerson(){
    setIndex((index)=>{
       let newIndex = index+1;
       if(newIndex>3)
       newIndex = 0;
       return newIndex
    })
  }
  function prevPerson(){
    setIndex((index)=>{
      let newIndex = index-1;
      if(newIndex<0)
      newIndex=3;
      return newIndex
   })
  }
  function randomPerson(){
  let randomNum = Math.floor( Math.random()*people.length);
  console.log(randomNum);
  if(randomNum===index)
  randomNum = index+1;
  setIndex(checkNumber(randomNum))
  }
  return (
    <div className="review">
      <div className="img-container">
        <img src={image} alt="" />
        <span className="quote-icon">
          <FaQuoteRight />
        </span>
      </div>
      <div className="author-job-info">
        <h4 className="author">{name}</h4>
        <p className="job">{job}</p>
        <p className="info">{text}</p>
      </div>
      <div className="prev-next">
        <button className="prev-btn" onClick={prevPerson}>
          <FaChevronLeft />
        </button>
        <button className="next-btn"onClick={nextPerson}>
          <FaChevronRight />
        </button>
      </div>
       <div className="surprise">
       <button className='prev-btn' onClick={randomPerson}>
          Surprise Me
        </button>
       </div>
    </div>
  );
};

export default Review;
