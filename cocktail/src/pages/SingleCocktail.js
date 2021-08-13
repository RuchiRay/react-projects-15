import React, { useState, useEffect } from "react";
import Loading from "../components/Loading";
import { useParams, Link } from "react-router-dom";
const url = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=";

const SingleCocktail = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const [cocktail, setCocktail] = useState(null);
  useEffect(() => {
    setLoading(true);
    async function getCocktail() {
      try {
        setLoading(true);
        const response = await fetch(`${url}${id}`);
        const data = await response.json();
        console.log(data);
        if (data.drinks) {
          const {
            strDrink: name,
            strAlcoholic: alcoholic,
            strCategory: category,
            strDrinkThumb: image,
            strGlass: glass,
            strInstructions: instruction,
            strIngredient1,
            strIngredient2,
            strIngredient3,
            strIngredient4,
            strIngredient5,
          } = data.drinks[0];
          const ingredients = [
            strIngredient1,
            strIngredient2,
            strIngredient3,
            strIngredient4,
            strIngredient5,
          ];
          const newCocktail = {name,alcoholic,category,image,glass,instruction,ingredients};
          setCocktail(newCocktail)
        } else {
          setCocktail(null);
        }
        setLoading(false);
      } catch (error) {
        console.log("error");
        setLoading(false);
      }
    }
    getCocktail();
  }, [id]);
  if(loading)
  {
    return <Loading/>
  }
  if(!cocktail)
  {
    return <h2 className='no-match'>No cocktail to display</h2>
  }
  const {name,alcoholic,category,image,glass,instruction,ingredients} = cocktail;
  return (
    
    <div>
      <Link to='/' className='detail-btn'>Back home</Link>
      <h2 className='name'>{name}</h2>
      <div className="single">
        <div className="single-img">
          <img src={image} alt="" />
        </div>
        <div className="single-info">
          <p>alcoholic:{alcoholic}</p>
          <p>category: {category}</p>
          <p>glass:{glass}</p>
          <p>instruction:{instruction}</p>
          <p>ingredients:
            {
              ingredients.map((ing,index)=>{
               return <span key={index}>{ing}</span>
              })
            }
          </p>
        </div>
      </div>
    </div>
  );
};

export default SingleCocktail;
