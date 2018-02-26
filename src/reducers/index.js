import { combineReducers } from "redux";

import {products, isFetching} from './products'
import cart from './cart'

// const products = (state = [], action) => {
//   switch (action.type) {
//     case "FETCH_PRODUCTS_SUCCESS":
//       return action.response;
//     default:
//       return state;
//   }
// };
//
// const isFetching = (state = false, action) => {
//   switch (action.type) {
//     case "FETCH_PRODUCTS_REQUEST":
//       return true;
//     case "FETCH_PRODUCTS_SUCCESS":
//     case "FETCH_PRODUCTS_FAILURE":
//       return false;
//     default:
//       return state;
//   }
// };
//
// const cart = (state = [], action) => {
//     switch (action.type) {
//     case "DISPLAY_PRODUCTS_FROM_CART":
//       return state;
//     case "ADD_PRODUCT_TO_CART":
//       let pos = state.findIndex(elem => {
//         return elem.id === action.id
//       });
//       let item = state.find(elem => {
//         return elem.id === action.id
//       });
//       if (pos === -1) {
//         return [
//           ...state,
//           {
//             id: action.id,
//             text: action.text,
//             price: action.price,
//             quantity: 1
//           }
//         ];
//       }
//       else{
//         item.quantity+=1
//         return [...state.slice(0,pos),
//           item,
//           ...state.slice(pos+1)
//         ]
//         }
//     default:
//       return state;
//   }
// };
const shoppingApp = combineReducers({
  isFetching,
  products,
  cart
});

export default shoppingApp;
