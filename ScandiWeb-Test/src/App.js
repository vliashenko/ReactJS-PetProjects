import React, { Component } from 'react';
import { BrowserRouter, Routes, Route, Navigate, Redirect } from "react-router-dom";
import { gql } from "@apollo/client"
import { client } from '.';
import Header from "./Components/Header";
import PLP from './Pages/PLP';
import PDP from './Pages/PDP';
import CartPage from './Pages/CartPage';

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      allProducts: null,
      tech: null,
      clothes: null,
      cartIsOpen: null,
      currentCurrencyValue: "USD",
      category: 'allProducts',
      chosenProduct: [],
      productsInCart: []
    }
  }

  getProductToCartPLP = (product) => {
    let isInArray = false;
    this.state.productsInCart.forEach((el,i)=>{
      if(el.id === product.id)
      isInArray = true;
    })
    if(!isInArray)
    this.setState(({productsInCart}) => ({
      productsInCart: [...productsInCart,product]
    }))
      
  }

  getChosenProduct = (prod,id) => {
    this.setState(() => ({
      chosenProduct: prod
    }))
  }

  getCategory = (category) => {
    this.setState(() => ({
        category: category
    }))
}

checkCartState = (state) => {
    this.setState(() => {
        return {
            cartIsOpen: state  
        }
    })
}

getCurrentCurrencyValue = (value) => {
  this.setState(() => ({
    currentCurrencyValue: value
  }))
}



  UNSAFE_componentWillMount() {

    client.query({
      query:gql`
      query {
          categories {
             products{
              id
              name
              brand
              gallery
              inStock
              attributes{
                type
                name
                items{
                  value
                }
              }
              prices{
                currency{
                  symbol
                  label
                }
                amount
              }
            }
          }
        }
      `
    }).then(res => {

      const all = res.data.categories[0].products;
      const cloth = res.data.categories[1].products;
      const tech = res.data.categories[2].products;

      this.setState(() => ({
        allProducts: all,
        tech: tech,
        clothes: cloth,
      }))
      
    })
  }
  render() {
    return (
      <BrowserRouter>
        <Header 
          checkCartState={this.checkCartState}
          getCategory={this.getCategory}
          getCurrentCurrencyValue={this.getCurrentCurrencyValue}
          productsInCart={this.state.productsInCart}
          currentCurrencyValue={this.state.currentCurrencyValue}/>
        <Routes>
          <Route path="/" exact element={<PLP 
            allProducts={this.state.allProducts}
            tech={this.state.tech}
            clothes={this.state.clothes}
            cartIsOpen={this.state.cartIsOpen}
            currentCurrencyValue={this.state.currentCurrencyValue}
            category={this.state.category}
            getChosenProduct={this.getChosenProduct}
            getProductToCartPLP={this.getProductToCartPLP}
          />}/>
          <Route path="/productPage" exact 
            element={
              <PDP 
                currentCurrencyValue={this.state.currentCurrencyValue}
                cartIsOpen={this.state.cartIsOpen}
                chosenProduct={this.state.chosenProduct}/>
              }/>
          <Route path="/cartPage" exact element={
            <CartPage 
              productsInCart={this.state.productsInCart}/>
            }/>
          <Route path="*" element={<Navigate to="/" replace />}/>
        </Routes>
        
      </BrowserRouter>
    );
  }
}

export default App;

