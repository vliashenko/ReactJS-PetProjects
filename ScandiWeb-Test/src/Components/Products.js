import React, { Component } from 'react';
import Product from './Product';
import styled from 'styled-components';

const Container = styled.div`
    opacity: ${props => props.cartIsOpen && '0.3'}
`;

const Title = styled.h3`
    margin: 44px 0px 84px 0px;
    font-size: 42px;
    font-weight: 400;
    line-height: 67px;
    letter-spacing: 0px;
`;

const ProductsContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
`;

class Products extends Component {
    render() {
        return (
            <Container cartIsOpen={this.props.cartIsOpen}>
                <Title>
                    Category name
                </Title>
                <ProductsContainer >
                    <Product/>
                    <Product/>
                    <Product/>
                </ProductsContainer>
            </Container>
        );
    }
}

export default Products;