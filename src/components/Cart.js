import React from 'react';
import CartItem from './CartItem'

import * as actions from "../actions";
import { connect } from "react-redux";

let Cart = ({cart}) => {
    console.log(cart);
    return (<ul>
      {cart.map(cartItem => (
        <li key={cartItem.id} >
          <CartItem {...cartItem} />
        </li>
      ))}
    </ul>
      )
}

const mapStateToCartProps = (state) => {
  // errorMessage:getErrorMessage(state,filter),
  // isFetching:getIsFetching(state,filter),

  return {

    cart: state.cart
  };
};

Cart = connect(mapStateToCartProps, actions)(Cart)


export default Cart;
