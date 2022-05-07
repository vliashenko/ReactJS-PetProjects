import React, { Component } from 'react';
import CartSlider from '../Components/CartSlider';
import styled from "styled-components";

const Container = styled.div`
    margin: 24px 0px;
    display: flex;
    justify-content: space-between;
`;

const Left = styled.div``;

const Title = styled.h3`
    margin-top: 0px;
    margin-bottom: 0px;
    font-size: 30px;
    font-weight: 600;
    line-height: 27px;
    letter-spacing: 0em;
`;
const SubTitle = styled.p`
    margin: 16px 0px 0px;
    font-size: 30px;
    font-weight: 400;
    line-height: 27px;
    letter-spacing: 0em;
`;
const Price = styled.div`
    margin: 20px 0px 0px;
    font-size: 24px;
    font-weight: 700;
    line-height: 24px;
    letter-spacing: 0em;
`;
const Size = styled.div`
    margin: 20px 0px 0px;
`;

const SmallTitle = styled.p`
    font-size: 18px;
    font-weight: 700;
    line-height: 18px;
    letter-spacing: 0em;
`;
const SizeContainer = styled.div`
    display: flex;
`;
const SizeItem = styled.div`
    margin-right: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid black;
    width: 53px;
    height: 45px;
    font-size: 16px;
    font-weight: 400;
    line-height: 18px;
    letter-spacing: 0.05em;

    background: ${props => props.chosen === "true" && '#1D1F22'};
    color: ${props => props.chosen === "true" && 'white'};
`;
const Color = styled.div`
    margin: 20px 0px 0px;
`;
const ColorContainer = styled.div`
    display: flex;
`;
const ColorItem = styled.div`
    width: 36px;
    height: 36px;
    margin-right: 10px;

    background: ${props => props.bg};
    border: ${props => props.chosen === "true" && '2px solid #5ECE7B'};
    height: ${props => props.chosen === "true" && '34px'};
`;

const Right = styled.div`
    display: flex;
`;

const AmountContainer = styled.div`
    height: 310px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-right: 24px;
`;
const Button = styled.button`
    width: 45px;
    height: 45px;
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
`;

const Plus = styled.div`
    display:inline-block;
        width:30px;
        height:30px;
    background:
    linear-gradient(#000 0 0),
    linear-gradient(#000 0 0);
    background-position:center;
    background-size: 50% 2px,2px 50%; /*thickness = 2px, length = 50% (25px)*/
    background-repeat:no-repeat;
`;

const Minus = styled.div`
    display:inline-block;
    width:30px;
    height:30px;
    background:
        linear-gradient(#000 0 0);
    background-position:center;
    background-size: 50% 1.3px; 
    background-repeat:no-repeat;
`;
const Amount = styled.span`
    text-align: center;
    font-size: 24px;
    font-weight: 500;
    line-height: 38px;
    letter-spacing: 0em;
`;
const SliderContainer = styled.div``;
const HR = styled.hr`
    border: 1px solid #E5E5E5;
`;

class CartItem extends Component {
    render() {
        return (
            <>
             <HR/>
            <Container>
                <Left>
                    <Title>
                        Apollo 
                    </Title> 
                    <SubTitle>
                        Running Short
                    </SubTitle>
                    <Price>
                        $50
                    </Price>
                    <Size>
                        <SmallTitle>
                            SIZE:
                        </SmallTitle>
                        <SizeContainer>
                            <SizeItem chosen="true">XS</SizeItem>
                            <SizeItem>S</SizeItem>
                            <SizeItem>M</SizeItem>
                            <SizeItem>L</SizeItem>
                        </SizeContainer>
                    </Size>
                    <Color>
                        <SmallTitle>
                            COLOR:
                        </SmallTitle>
                        <ColorContainer>
                            <ColorItem chosen="true" bg="red"></ColorItem>
                            <ColorItem bg="green"></ColorItem>
                            <ColorItem bg="lightgrey"></ColorItem>
                        </ColorContainer>
                    </Color>
                </Left>
                <Right>
                    <AmountContainer>
                        <Button>
                            <Plus/>
                        </Button>
                        <Amount>1</Amount>
                        <Button>
                            <Minus/>
                        </Button>
                    </AmountContainer>
                     <SliderContainer>
                        <CartSlider/>
                    </SliderContainer>
                </Right>
               
                
            </Container>
        </>
        );
    }
}

export default CartItem;