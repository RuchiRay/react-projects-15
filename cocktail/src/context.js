import React, { useState, useContext, useEffect } from "react";
import { useCallback } from "react";

const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";
const AppContext = React.createContext();
const AppProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("a");
  const [cocktails, setCocktails] = useState([]);

  const fetchDrinks = useCallback(async () => {
    setLoading(true);
    try {
      const response = await fetch(`${url}${searchTerm}`);
      const data = await response.json();
      const { drinks } = data;
      console.log(data);

      if (drinks) {
        const drinkBox = drinks.map((item) => {
          const {
            idDrink,
            strAlcoholic,
            strCategory,
            strDrink,
            strDrinkThumb,
            strGlass,
          } = item;
          const drink = {
            id: idDrink,
            alcoholic: strAlcoholic,
            category: strCategory,
            image: strDrinkThumb,
            name: strDrink,
            glass: strGlass,
          };
          return drink;
        });
        setCocktails(drinkBox);
      } else {
         setCocktails([])
      }
      setLoading(false);
    } catch (error) {
      console.log("error");
      setLoading(false);
    }
  },[searchTerm]);

  useEffect(() => {
    fetchDrinks();
  }, [searchTerm,fetchDrinks]);

  return (
    <AppContext.Provider value={{ loading, setSearchTerm, cocktails }}>
      {children}
    </AppContext.Provider>
  );
};
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
