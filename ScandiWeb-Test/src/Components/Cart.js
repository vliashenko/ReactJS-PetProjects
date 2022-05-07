import React, { Component } from 'react';
import CartItem from './CartItem';
import styled from "styled-components";

const Container = styled.div`
    padding-bottom: 274px;
`;

const Title = styled.h3`
    font-size: 32px;
    font-weight: 700;
    line-height: 40px;
    letter-spacing: 0em;
`;

const CartContainer = styled.div``;

const HR = styled.hr`
    border: 1px solid #E5E5E5;
`;

const Tax = styled.div`
    margin-top: 32px;
    font-size: 24px;
    font-weight: 400;
    line-height: 28px;
    letter-spacing: 0em;
`;
const TaxContent = styled.span`
    margin-left: 10px;
    font-size: 24px;
    font-weight: 700;
    line-height: 28px;
    letter-spacing: 0em;
`;
const Quantity = styled.div`
    margin-top: 8px;
    font-size: 24px;
    font-weight: 400;
    line-height: 28px;
    letter-spacing: 0em;
`;
const QuantityContent = styled.span`
    margin-left: 10px;
    font-size: 24px;
    font-weight: 700;
    line-height: 28px;
    letter-spacing: 0em;
`;
const Total = styled.div`
    margin-top: 8px;
    font-size: 24px;
    font-weight: 400;
    line-height: 28px;
    letter-spacing: 0em;
`;
const TotalContent = styled.span`
    margin-left: 10px;
    font-size: 24px;
    font-weight: 700;
    line-height: 28px;
    letter-spacing: 0em;
`;
const Button = styled.button`
    margin-top: 20px;
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 279px;
    height: 43px;
    background: #5ECE7B;
    color: white;
    font-family: Raleway;
    font-size: 14px;
    font-weight: 600;
    line-height: 17px;
    letter-spacing: 0em;
    cursor: pointer;
`;

class Cart extends Component {
    render() {
        return (
            <Container>
                <Title>
                    CART
                </Title>
                <CartContainer>
                    <CartItem/>
                    <CartItem/>
                </CartContainer>
                <HR/>
                <Tax>
                    Tax 21%:
                    <TaxContent>
                        $42
                    </TaxContent>
                </Tax>
                <Quantity>
                    Quantity:
                    <QuantityContent>
                        3
                    </QuantityContent>
                </Quantity>
                <Total>
                    Total:
                    <TotalContent>
                        $200.00
                    </TotalContent>
                </Total>
                <Button>
                    ORDER
                </Button>
            </Container>
        );
    }
}

export default Cart;