import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from "styled-components";

const CartButton = styled.button`
    z-index: 1;
    position: absolute;
    top: 75%;
    left: 80%;
    width: 52px;
    height: 52px;
    border: none;
    border-radius: 50%;
    background: #5ECE7B;
    display: flex;
    justify-content: center;
    align-items: center;
    opacity: 0;
    cursor: pointer;
    transition: all 300ms ease;
`;

const OutOfStock = styled.div`
    position: absolute;
    top: 45%;
    left: 30%;
    font-size: 24px;
    font-weight: 400;
    line-height: 38px;
    letter-spacing: 0px;
    color: black;
    opacity: 0;
    opacity: ${props => props.inStock === false && 1};
`;

const Container = styled.div`
    width: 386px;
    height: 434px;
    position: relative;
    &:hover {
        box-shadow: 0px 4px 35px #a8acb03d;
    }
    &:hover ${CartButton} {
        opacity: 1;
    }
    
    opacity: ${props => props.inStock === false &&  '0.5'};

    @media (max-width: 1200px) {
        margin: 20px 0px;
    }
`;
const ImageContainer = styled.div`
    max-width: 356px;
    max-height: 338px;
    margin: 16px auto 0px;
    cursor: pointer;
`;

const Image = styled.img`
    width: 354px;
    height: 330px;
    object-fit: cover;
`;



const Cart = styled.img`
    margin-right: 3px;
    width: 24px;
    height: 21.6px;
`;

const Info = styled.div`
    width: 354px;
    margin: 14px auto;
`;

const Brand = styled.span`
    font-size: 18px;
    font-weight: 300;
    line-height: 29px;
    letter-spacing: 0px;
    text-align: left;
    color: #8D8F9A;
`;

const Name = styled.span`
    margin-left: 6px;
    font-size: 18px;
    font-weight: 300;
    line-height: 29px;
    letter-spacing: 0px;
    text-align: left;
    color: #8D8F9A;
`;

const Price = styled.div`
    font-size: 18px;
    font-weight: 500;
    line-height: 29px;
    letter-spacing: 0em;
    color: #8D8F9A;
`;


class Product extends Component {
    render() {

        const {cartIsOpen,brand, gallery, inStock, name, prices, currentCurrencyValue, attributes,getChosenProduct, id, getProductToCartPLP} = this.props;

        const price = prices.map(item => {
            if(item.currency.label === currentCurrencyValue) {
                return `${item.currency.symbol} ${item.amount}`
            }
        })

        return (
            <Container inStock={inStock} onClick={() =>getChosenProduct(this.props)}>
                <Link to="/productPage">
                <ImageContainer >
                    <Image src={name==="Jacket"? gallery[5] : gallery}/>
                    <OutOfStock inStock={inStock}>
                        OUT OF STOCK
                    </OutOfStock>
                </ImageContainer>
                </Link>
                    <CartButton onClick={()=> getProductToCartPLP(this.props)}  disabled={inStock === false? true : false || cartIsOpen === true? true: false}>
                        <Cart src={require ('../Images/product-cart.png')}/>
                    </CartButton>
                <Info>
                    <Brand>
                        {brand}
                    </Brand>
                    <Name>
                        {name}
                    </Name>
                    <Price>
                        {price}
                    </Price>
                </Info>
                    
            </Container>
        );
    }
}

export default Product;