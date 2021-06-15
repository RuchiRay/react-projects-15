import React, { useState } from "react";
import data from "./myComponents/data";
function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState([]);

  const handleSubmit = (e) => {
    let newText = data.slice(0, count);
    if (count <= 0) newText = data.slice(0, 1);
    setText(newText);
    e.preventDefault();
    console.log("hello world");
  };
  return (
    <main>
      <h2>TIRED OF BORING LOREM IPSUM?</h2>
      <form onSubmit={handleSubmit} className="lorem-form">
        <label htmlFor="amount">Paragraphs:</label>
        <input
          type="number"
          className="number"
          name="amount"
          id="amount"
          value={count}
          onChange={(e) => setCount(e.target.value)}
        />
        <button className="gen-btn" type="submit">
          Generate
        </button>
      </form>
      <div className="paragraph-box">
        {text.map((para, index) => {
          return (
            <p key={index} className="single-para">
              {para}
            </p>
          );
        })}
      </div>
    </main>
  );
}

export default App;
