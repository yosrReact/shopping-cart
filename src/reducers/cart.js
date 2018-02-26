const cart = (state = [], action) => {
  console.log("mon state",state);
  switch (action.type) {
    case "DISPLAY_PRODUCTS_FROM_CART":
      return state;
    case "ADD_PRODUCT_TO_CART":
      let {productToUpdate,pos} = getProduct(state, action)
      const doesProductExist = Boolean(productToUpdate)
      if(!doesProductExist){
        return addProductToCart(state,cart, action)
      }
      else {
        return incrementProductInCart(state,cart, productToUpdate,pos)
      }
    default:
      return state;
  }
};

let getProduct=(state, action) =>{
    let productToUpdate= state.find(elem => elem.id === action.product.id);
    let pos=state.findIndex(elem => elem.id === action.product.id);
    return{productToUpdate,pos}
}
let addProductToCart=(state,cart, action) => {
  return [
    ...state,
    {
      id: action.product.id,
      text: action.product.text,
      price: action.product.price,
      quantity: 1
    }
  ];
}

let incrementProductInCart=(state,cart, productToUpdate,pos) => {
  productToUpdate.quantity+=1
  return [...state.slice(0,pos),
    productToUpdate,
    ...state.slice(pos+1)
  ]
}

export default cart;
