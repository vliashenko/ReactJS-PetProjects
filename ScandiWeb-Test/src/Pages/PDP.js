import React, { Component } from 'react';
import ProductPage from '../Components/ProductPage';
import styled from "styled-components";

const Container = styled.div``;

class PDP extends Component {
    render() {
        return (
            <Container>
                <ProductPage
                    currentCurrencyValue={this.props.currentCurrencyValue}
                    cartIsOpen={this.props.cartIsOpen}
                    chosenProduct={this.props.chosenProduct}/>
            </Container>
        );
    }
}

export default PDP;