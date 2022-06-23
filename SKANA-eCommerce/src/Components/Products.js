import React, { Component } from 'react';
import styled from 'styled-components'
import Product from './Product';
import axios from "axios"

const Container = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-contetn: space-between
`


class Products extends Component {
    constructor(props) {
        super(props)

        this.state = {
            products: [],
            filteredProducts: []
        }
    }

    getProducts = async () => {
        try {
            const res = await axios.get( 
                this.props.category 
                ? `http://localhost:5000/api/products?category=${this.props.category}`
                : `http://localhost:5000/api/products`)
                this.setState({products: res.data})
                this.setFilteredProducts()
                this.setSortedProducts()
        } catch(err) {
            console.log(err);
        }
    } 

    setSortedProducts = () => {
        if(this.props.sort === "newest") {
            this.props.sort && this.setState(({filteredProducts}) => ({
                filteredProducts: filteredProducts.sort((a,b) =>a.createdAt - b.createdAt)
            }))
        } else  if(this.props.sort === "asc") {
            this.props.sort && this.setState(({filteredProducts}) => ({
                filteredProducts: filteredProducts.sort((a,b) =>a.price - b.price)
            }))
        } else {
            this.props.sort && this.setState(({filteredProducts}) => ({
                filteredProducts: filteredProducts.sort((a,b) =>b.price - a.price)
            }))
        }
    }

    setFilteredProducts = () => {
            this.props.category && this.setState({filteredProducts: 
                this.state.products.filter(item => Object.entries(this.props.filters).every(([key,value]) =>
                item[key].includes(value)
            ))
        })
    }

    componentDidMount() {
        this.getProducts()
    }

    componentDidUpdate(prev, cur) {
        if(this.props.category !== cur.category) {
            this.getProducts()
        } else if(this.props.filters !== cur.filters) {
            this.getProducts()
        } else if(this.props.sort !== cur.sort) {
            this.getProducts()
        }
    }


    render() {
        return (
            <Container>   
                {this.props.category ? this.state.filteredProducts.map((item) => (
                    <Product item={item} key={item._id}/>
                ))
                : this.state.products
                .slice(0, 8)
                .map((item) => (
                    <Product item={item} key={item._id}/>
                ))}
            </Container>
        );
    }
}

export default Products;
