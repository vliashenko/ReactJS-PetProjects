import React, { Component } from 'react';
import Products from '../Components/Products';
import styled from 'styled-components';

const Container = styled.div``;

class PLP extends Component {

    render() {
        return (
            <Container>           
                <Products 
                cartIsOpen={this.props.cartIsOpen}
                allProducts={this.props.allProducts}
                tech={this.props.tech}
                clothes={this.props.clothes}
                currentCurrencyValue={this.props.currentCurrencyValue}
                category={this.props.category}
                getChosenProduct={this.props.getChosenProduct}
                getProductToCartPLP={this.props.getProductToCartPLP}/>
            </Container>
        );
    }
}

export default PLP;