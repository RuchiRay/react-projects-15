import React from "react";
import { MdKeyboardArrowUp, MdKeyboardArrowDown } from "react-icons/md";
import { useGlobalContext } from "../Context";
export const CartContainer = () => {
  const { cart, amount, increase, decrease, remove, clear } =
    useGlobalContext();
  console.log(cart);

  return (
    <div className="cartContainer">
      <h3>Your Bag</h3>
      {cart.length > 0 ? (
        <div className="cart-wrapper">
          {cart.map((item) => {
            const { id, title, price, img, amount } = item;
            return (
              <div key={id} className="item-wrapper">
                <img src={img} alt="" />
                <div className="item">
                  <div className="item-dsc">
                    <p className="item-name">{title}</p>
                    <p className="item-price">{price}</p>
                    <button className="remove-btn" onClick={() => remove(id)}>
                      remove
                    </button>
                  </div>
                  <div className="counter">
                    <button className="key" onClick={() => increase(id)}>
                      <MdKeyboardArrowUp />
                    </button>
                    <p className="item-amount">{amount}</p>
                    <button className="key" onClick={() => decrease(id)}>
                      <MdKeyboardArrowDown />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
          <div className="cart-footer">
            <p>total</p>
            <p>{amount}</p>
          </div>
          <button onClick={() => clear()}>Clear cart</button>
        </div>
      ) : (
        <h4>is currently empty</h4>
      )}
    </div>
  );
};
