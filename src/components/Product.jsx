import React, { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";

const Product = (props) => {
  // Note: this id should come from api
  const [count,setCount] = useState(1);
  const [toggle,setToggle] = useState(false);
  const product = { id: props.item.id };

  const {addToCart} = useContext(CartContext);

  const handleAddTOCart = () =>{
    addToCart({productId:props.item.id,count});
    setToggle(true)
  }

  return (
    <div data-cy={`product-${product.id}`} className='product-div'>
      <h3 data-cy="product-name">{props.item.name}</h3>
      <h6 data-cy="product-description">{props.item.description}</h6>
      <button data-cy="product-add-item-to-cart-button" onClick={handleAddTOCart}>Add to Cart</button>
      <div>
        {toggle?<div>
          <button data-cy="product-increment-cart-item-count-button" onClick={()=>setCount(count+1)}>inc</button>
        <span data-cy="product-count">
          {
            count
          }
        </span>
        <button data-cy="product-decrement-cart-item-count-button" onClick={()=>setCount(count-1)}>dec</button>
        <br />
        <button data-cy="product-remove-cart-item-button" onClick={()=>{setToggle(false) ;setCount(1)}}>remove</button>
        </div>:""}
      </div>
    </div>
  );
};

export default Product;
