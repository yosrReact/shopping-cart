import React from 'react'

const CartItem = ({ quantity, price, text,onAddCartItemToCartClick }) => (
  <div>
    {text} - {price} * {quantity}
    

  </div>
);


export default CartItem;
