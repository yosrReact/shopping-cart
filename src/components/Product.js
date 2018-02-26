import React from 'react'

const Product = ({ quantity, price, text,onAddProductToCartClick }) => (
  <div>
    {text} - {price} * {quantity}
    <br/>
    <button onClick={onAddProductToCartClick}>
      Add to Cart
    </button>

  </div>
);


export default Product;
