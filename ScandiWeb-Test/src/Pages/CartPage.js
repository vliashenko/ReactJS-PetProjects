import React, { Component } from 'react';
import Cart from '../Components/Cart';
import styled from "styled-components";

const Container = styled.div``;

class CartPage extends Component {
    render() {
        return (
            <Container>
                <Cart/>
            </Container>
        );
    }
}

export default CartPage;