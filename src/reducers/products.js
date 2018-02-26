import { combineReducers } from "redux";

export const products = (state = [], action) => {
  switch (action.type) {
    case "FETCH_PRODUCTS_SUCCESS":
      return action.products;
    case "UPDATE_PRODUCTS_SUCCESS":
    default:
      return state;
  }
};

export const isFetching = (state = false, action) => {
  switch (action.type) {
    case "FETCH_PRODUCTS_REQUEST":
      return true;
    case "FETCH_PRODUCTS_SUCCESS":
    case "FETCH_PRODUCTS_FAILURE":
      return false;
    default:
      return state;
  }
};
