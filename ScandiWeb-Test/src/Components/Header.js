import React, { Component } from 'react';
import { Link } from 'react-router-dom';
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

    color: ${props=> props.category  === 'true' ?'#5ECE7B ':'#1D1F22'};
    border-bottom: ${props => props.category  === 'true' ? "2px solid #5ECE7B" : "none"};

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

    background: ${props => props.activeCurrency === 'true'? " #EEEEEE" : "white"};

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
    position: relative;
`;

const CartQuantity = styled.div`
    position: absolute;
    width: 20px;
    height: 20px;
    background: #1D1F22;
    border-radius:50%;
    color: white;
    font-size: 14px;
    top: -10px;
    left: 35px;
    text-align: center;
    line-height: 20px;
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
            cartIsOpen: false,
            activeCategory: "allProducts",
            activeCurrencyValue: "USD"
        }
    }

    getCurrencySign = () => {
        if(this.state.activeCurrencyValue === "USD"){
            return "$"
        } else if (this.state.activeCurrencyValue === "GBP"){
            return "£"
        } else {
            return "¥"
        }
    }

    getActiveCurrencyValue = (value) => {
        this.setState(() => ({
            activeCurrencyValue: value
        }))
    }

    onClickCurrency = (value) => {
        this.getActiveCurrencyValue(value)
        this.props.getCurrentCurrencyValue(value)
    }

    

    getActiveCategory = (category) => {
        this.setState(() => ({
            activeCategory: category
        }))
    }

    onClickCategory = (category) => {
        this.getActiveCategory(category)
        this.props.getCategory(category)
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
        const { productsInCart, currentCurrencyValue } = this.props;
        
        return (
            <Container>
                <Left>
                    <Link to="/" style={{textDecoration: "none"}}>
                    <Category 
                    category={this.state.activeCategory === "allProducts" ? 'true' : 'false'} 
                    onClick={() => this.onClickCategory('allProducts')}>
                        All
                    </Category>
                    </Link>
                    <Link to="/" style={{textDecoration: "none"}}>
                    <Category 
                     category={this.state.activeCategory === "tech" ? 'true' : 'false'}
                    onClick={() => this.onClickCategory('tech')}>
                        Tech
                    </Category>
                    </Link>
                    <Link to="/" style={{textDecoration: "none"}}>
                    <Category 
                     category={this.state.activeCategory === "clothes" ? 'true' : 'false'}
                    onClick={() =>this.onClickCategory('clothes')}>
                        Clothes
                    </Category>
                    </Link>
                </Left>
                <Center>
                <Link to="/" style={{textDecoration: "none"}}>
                    <BoxImage src={require ('../Images/logo.png')}/>
                    <LineImage src={require ('../Images/logo-arrow.png')}/>
                    <ArrowImage src={require ('../Images/logo-arrow-vector.png')}/>
                </Link>
                </Center>
                <Right>
                    <Currency >
                        <CurrencySign onClick = {this.setCurrencyOpen}>
                        {this.getCurrencySign()}   
                        </CurrencySign>
                        
                        <CurrencyVector onClick = {this.setCurrencyOpen} src={require ('../Images/vector-arrow.png')}/>
                        {this.state.currencyIsOpen && 
                            <CurrencyMenu>
                            <CurrencyItem 
                            activeCurrency={this.state.activeCurrencyValue === "USD"? 'true' : 'false'} 
                            onClick={() => this.onClickCurrency('USD')}>$ USD</CurrencyItem>
                            <CurrencyItem 
                            activeCurrency={this.state.activeCurrencyValue === "GBP"? 'true' : 'false'} 
                            onClick={() => this.onClickCurrency('GBP')}>£ GBP</CurrencyItem>
                            <CurrencyItem 
                            activeCurrency={this.state.activeCurrencyValue === "JPY" ? 'true' : 'false'} 
                            onClick={() => this.onClickCurrency('JPY')}>¥ JPY</CurrencyItem>
                            </CurrencyMenu>
                        }
                    </Currency>
                    <CartContainer>
                        <CartImage onClick = {this.setCartOpen} src={require ('../Images/cart.png')}/>
                        {productsInCart.length > 0 && <CartQuantity>{productsInCart.length}</CartQuantity>}
                        {this.state.cartIsOpen && 
                        <CartListContainer>
                            {productsInCart.length > 0? 
                            <MiniCartContent>
                            <Title>
                                My Bag,
                                <ItemCount>
                                   {productsInCart.length} {productsInCart.length > 1 ? "items" : "item"} 
                                </ItemCount>
                                 
                            </Title>
                            <MiniCartItem 
                                currentCurrencyValue={currentCurrencyValue}
                                productsInCart={productsInCart}/>
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