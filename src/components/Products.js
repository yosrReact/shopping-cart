import React from "react";

import * as actions from "../actions";
import { connect } from "react-redux";
import Product from "./Product";



class Products extends React.Component {
  componentDidMount(){
    this.fetchData();
  }

  fetchData(){
    const {fetchProducts }=this.props
    fetchProducts()
  }
  render() {
    const {isFetching, products,addProductToCart}=this.props

    if(isFetching && !products.length){
      return <p>Loading ...</p>
    }
    return (<ul>
      {products.map(product => (
        <li key={product.id} >
          <Product {...product} onAddProductToCartClick={() => addProductToCart(product)} />
        </li>
      ))}
    </ul>
      )
  }
}

const mapStateToProductsProps = (state) => {
  return {
    products: state.products,
    isFetching:state.isFetching
  };
};

Products = connect(mapStateToProductsProps, actions)(Products)


export default Products;
