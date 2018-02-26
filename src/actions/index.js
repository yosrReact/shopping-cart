
import * as api from "../api";


export const fetchProducts= ()=> (dispatch  ) => {
  dispatch({
    type: "FETCH_PRODUCTS_REQUEST"
  });
  return api.fetchProducts().then(
    products => dispatch({
      type: "FETCH_PRODUCTS_SUCCESS",
      products
    })
  )

};

export const addProductToCart = (product) => (dispatch ) => {
  return api.updateProduct(product.id).then(
    response => {
      dispatch({
        type: "FETCH_PRODUCTS_SUCCESS",
        products:response.products
      })
      if(response.isUpdated){
        dispatch({
        type:'ADD_PRODUCT_TO_CART',
        product
      })
    }

  }
  )


  }
