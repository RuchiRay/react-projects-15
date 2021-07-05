import React, { useState, useEffect, useReducer, useContext } from "react";
import { reducer } from "./reducer";
const url = "https://course-api.com/react-useReducer-cart-project";

const AppContext = React.createContext();
const initialState = {
    loading: false,
    cart: [],
    total: 0,
    amount: 0,
  };
const AppProvider = ({ children }) => {
  
  const [state, dispatch] = useReducer(reducer,initialState);
  const fetchData = async () => {
    dispatch({ type: "LOADING" });
    const response = await fetch(url);
    const cartData = await response.json();
        dispatch({ type: "DISPLAY DATA", payLoad: cartData });
  };
  const calcAmount = ()=>{
      dispatch({type:'CALC AMT'})
  }
  const increase = (id)=>{
      dispatch({type:'INCREASE',payLoad:id})
  }
  const decrease = (id)=>{
      dispatch({type:'DECREASE',payLoad:id})
  }
  const remove = (id)=>{
      dispatch({type:'REMOVE',payLoad:id})
  }
  const clear = ()=>{
      dispatch({type:'CLEAR'})
  }
   useEffect(() => {
    fetchData();
  },[]);
  useEffect(() => {
     calcAmount();
  }, [state.cart])
  return (
    <AppContext.Provider value={{...state,increase,decrease,remove,clear}}   >{children}</AppContext.Provider>
  );
};
export const useGlobalContext = () => {
  return useContext(AppContext);
};
export { AppContext, AppProvider };
