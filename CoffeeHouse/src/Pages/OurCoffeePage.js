import React, { Component } from 'react';
import OurCoffeeHeader from "../Components/OurCoffeeHeader";
import AboutOurBeans from "../Components/AboutOurBeans";
import Products from "../Components/Products";
import Footer from "../Components/Footer";
import styled from "styled-components";

const Container = styled.div`

`;

class OurCoffeePage extends Component {
    render() {
        return (
            <Container>
                <OurCoffeeHeader/>
                <AboutOurBeans/>
                <Products/>
                <Footer/>
            </Container>
        );
    }
}

export default OurCoffeePage;