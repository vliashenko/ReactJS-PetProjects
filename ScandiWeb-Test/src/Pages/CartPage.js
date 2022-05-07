import React, { Component } from 'react';
import Header from '../Components/Header';
import Cart from '../Components/Cart';
import styled from "styled-components";

const Container = styled.div``;

class CartPage extends Component {
    render() {
        return (
            <Container>
                <Header/>
                <Cart/>
            </Container>
        );
    }
}

export default CartPage;