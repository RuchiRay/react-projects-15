// import { act } from "react-dom/cjs/react-dom-test-utils.production.min";

export const reducer = (state, action) => {
  if (action.type === "LOADING") {
    return { ...state, loading: true };
  }
  if (action.type === "DISPLAY DATA") {
    console.log(action.payLoad);
    
    return { ...state, cart: action.payLoad, loading: false };
  }
  if (action.type === "CALC AMT") {
    let finalAmount = 0;
    let totalItems = 0;
    console.log('calc amount');
    for (const item of state.cart) {
      finalAmount = finalAmount + item.amount * parseFloat(item.price);
      totalItems = totalItems + parseInt(item.amount)
    }
    finalAmount = finalAmount.toFixed(2);
    return { ...state, amount: finalAmount,total:totalItems };
  }
  
  if (action.type === "INCREASE") {
    let tempCart = state.cart.map((item) => {
      if (item.id === action.payLoad) {
        return { ...item, amount: item.amount + 1 };
      }
      return item;
    });
    return { ...state, cart: tempCart };
  }
  if(action.type==='DECREASE'){
      let tempCart = state.cart.map((item)=>{
        if (item.id === action.payLoad) {
            return { ...item, amount: item.amount - 1 };
          }
          return item; 
      }).filter((item)=>{
          return item.amount>0
      })

      return { ...state, cart: tempCart };
  }
  if(action.type==='REMOVE'){
      let tempCart = state.cart.filter((item)=>{
          return item.id!==action.payLoad
      })
      return {...state,cart:tempCart}
  }
  if(action.type==='CLEAR'){
      return {...state,cart:[]}
  }
  throw new Error("no matching type");
};
