import React, { createContext } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {

  const addToCart = (item) =>{
    const dataToPost = JSON.stringify(item);

    fetch(`http://localhost:8080/cartItems`,{
      method:"POST",
      body:dataToPost,
      headers: {
        "Content-Type":"application/json"
      }
    }).then(()=>{
      console.log('data Posted')
    })
  }
  const value = {
    addToCart
  }


  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
