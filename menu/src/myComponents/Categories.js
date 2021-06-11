import React from "react";

export const Categories = ({ filterItems, categories }) => {
  return (
    <div className="cat-btn">
      {categories.map((category, index) => {
        return (
          <button
            key={index}
            className="category-btn"
            onClick={() => filterItems(category)}
          >
            {category}{" "}
          </button>
        );
      })}
    </div>
  );
};
