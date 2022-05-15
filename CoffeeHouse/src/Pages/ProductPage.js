import React, { Component } from 'react';
import OurCoffeeHeader from '../Components/OurCoffeeHeader';
import Product from '../Components/Product';
import Footer from '../Components/Footer';
import history from "history/browser";
import styled from "styled-components";

const Container = styled.div``;

class ProductPage extends Component {
    componentDidMount() {
        if(history.location.state === null)
            history.go("/pageProduct")
    }
    render() {
        return (
            <Container>
                <OurCoffeeHeader/>
                <Product props={history.location.state}/>
                <Footer/>
            </Container>
        );
    }
}

export default ProductPage;