import React, { Component } from 'react';
import PLP from './Pages/PLP';
import PDP from './Pages/PDP';
import CartPage from './Pages/CartPage';
import { gql } from "@apollo/client"
import { client } from '.';

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      allProducts: null,
      tech: null,
      clothes: null
    }
  }
  render() {

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

      const all = res.data.categories[0];
      const cloth = res.data.categories[1];
      const tech = res.data.categories[2];

      this.setState(() => ({
        allProducts: all,
        tech: tech,
        clothes: cloth
      }))
      
    })

    return (
      <div>
        <PLP 
        allProducts={this.state.allProducts}
        tech={this.state.tech}
        clotes={this.state.clothes}
        />
      </div>
    );
  }
}

export default App;

