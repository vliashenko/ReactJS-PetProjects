import React, { Component } from 'react';
import MiniCartItem from './MiniCartItem';
import styled from "styled-components";

const Container = styled.div`
   min-height: 78px; 
   display: flex;
   align-items: center;
   justify-content: space-between;
`;
const Left = styled.div`
    display: flex;
`;
const Category = styled.div`
    font-size: 16px;
    font-weight: 600;
    line-height: 48px;
    letter-spacing: 0px;
    text-align: center;
    margin: 0px 16px;
    cursor: pointer;
    color: #1D1F22;

    &:hover {
        color: #5ECE7B;
        border-bottom: 2px solid #5ECE7B;
    }
`;
const Center = styled.div`
    margin-right: 12%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    cursor: pointer;
`;
const BoxImage = styled.img`
    width: 31.18px;
    height: 28.62px;
`;
const LineImage = styled.img`
    position: absolute;
    top: 38%;
    left: 28%;
    width: 14.08px;
    height: 8.99px;
`;
const ArrowImage = styled.img`
    position: absolute;
    top: 30%;
    left: 61%;
    width: 5.41px;
    height: 3.19px;
`;
const Right = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;
const Currency = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
`;

const CurrencySign = styled.div`
    font-size: 18px;
    font-weight: 500;
    line-height: 29px;
    letter-spacing: 0em;
    color: #1D1F22;
    cursor: pointer;
`;
const CurrencyVector = styled.img`
    width: 6px;
    height: 3px;
    margin-left: 10px;
    cursor: pointer;
`;

const CurrencyMenu = styled.div`
    position: absolute;
    top: 30px;
    left: -40px;
    width: 114px;
    height: 169px;
    box-shadow: 0px 4px 35px #a8acb03d;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
`;
const CurrencyItem = styled.div`
    width: 100%;
    text-align: center;
    padding: 14px 0px;
    font-size: 18px;
    font-weight: 500;
    line-height: 29px;
    letter-spacing: 0em;
    cursor: pointer;

    &: hover {
        background: #EEEEEE;
    }
`;

const CartContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    position: relative;
`;
const CartImage = styled.img`
    width: 20px;
    height: 18px;
    margin-left: 22px;
`;

const CartListContainer = styled.div`
    position: absolute;
    top: 30px;
    right: 0;
    width: 325px;
    padding: 32px 16px;
    background: white;
    z-index: 1000;
    box-shadow: 0px 4px 35px #a8acb03d;
    font-size: 16px;
    font-weight: 600;
    color: #1D1F22;
`;

const MiniCartContent = styled.div`
    display: flex;
    flex-direction: column;
`;
const Title = styled.div`
    font-size: 16px;
    font-weight: 700;
    line-height: 26px;
    letter-spacing: 0em;
`;
const ItemCount = styled.span`
    font-size: 16px;
    font-weight: 500;
    line-height: 26px;
    letter-spacing: 0em;
`;
const Total = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 32px;
`;
const TotalText = styled.div`
    font-size: 16px;
    font-weight: 700;
    line-height: 18px;
    letter-spacing: 0em;
`;
const TotalSum = styled.div`
    font-size: 16px;
    font-weight: 700;
    line-height: 26px;
    letter-spacing: 0em;
`;
const ButtonContainer = styled.div`
    margin-top: 32px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;
const ButtonBag = styled.button`
    width: 140px;
    height: 43px;
    border: 1px solid #1D1F22;
    background: none;
    color: #1D1F22;
    font-size: 14px;
    font-weight: 500;
    line-height: 17px;
    letter-spacing: 0em;
    cursor: pointer;
`;
const ButtonCheck = styled.button`
    width: 140px;
    height: 43px;
    border: none;
    background-color: #5ECE7B;
    color: white;
    font-size: 14px;
    font-weight: 500;
    line-height: 17px;
    letter-spacing: 0em;
    cursor: pointer;
`;

class Header extends Component {
    constructor(props) {
        super(props);

        this.state = {
            currencyIsOpen: false,
            cartIsOpen: false
        }
    }

    setCurrencyOpen = () => {
        this.setState(({currencyIsOpen})=> ({
            currencyIsOpen: !currencyIsOpen
        }))
    }

    setCartOpen = () => {
        this.setState(({cartIsOpen})=> ({
            cartIsOpen: !cartIsOpen
        }))
        setTimeout(() => {
            this.props.checkCartState(this.state.cartIsOpen)
        },0)
    }

    render() {
        return (
            <Container>
                <Left>
                    <Category>
                        All
                    </Category>
                    <Category>
                        Tech
                    </Category>
                    <Category>
                        Clothes
                    </Category>
                </Left>
                <Center>
                    <BoxImage src={require ('../Images/logo.png')}/>
                    <LineImage src={require ('../Images/logo-arrow.png')}/>
                    <ArrowImage src={require ('../Images/logo-arrow-vector.png')}/>
                </Center>
                <Right>
                    <Currency >
                        <CurrencySign onClick = {this.setCurrencyOpen}>
                        $   
                        </CurrencySign>
                        
                        <CurrencyVector onClick = {this.setCurrencyOpen} src={require ('../Images/vector-arrow.png')}/>
                        {this.state.currencyIsOpen && 
                            <CurrencyMenu>
                            <CurrencyItem>$ USD</CurrencyItem>
                            <CurrencyItem>€ EUR</CurrencyItem>
                            <CurrencyItem>€ EUR</CurrencyItem>
                            </CurrencyMenu>
                        }
                    </Currency>
                    <CartContainer>
                        <CartImage onClick = {this.setCartOpen} src={require ('../Images/cart.png')}/>
                        {this.state.cartIsOpen && 
                        <CartListContainer>
                            {this.props.ProductsInCart > 0? 
                            <MiniCartContent>
                            <Title>
                                My Bag,
                                <ItemCount>
                                   1 item 
                                </ItemCount>
                                 
                            </Title>
                            <MiniCartItem/>
                            <Total>
                                <TotalText>
                                    Total
                                </TotalText>
                                <TotalSum>
                                    $200.00
                                </TotalSum>
                            </Total>
                            <ButtonContainer>
                               <ButtonBag>
                                VIEW BAG
                            </ButtonBag>
                            <ButtonCheck>
                                CHECKOUT
                            </ButtonCheck> 
                            </ButtonContainer>
                            
                    </MiniCartContent>
                        :   
                            "Cart is empty!"  
                        }
                        </CartListContainer>
                        }
                        
                    </CartContainer>
                </Right> 

            </Container>
        );
    }
}

export default Header;