import React, { Component } from 'react';
import styled from "styled-components";

const Container = styled.div`
    margin-top: 82px;
    padding-bottom: 178px;
    display: flex;
`;

const Left = styled.div`
    display: flex;
    flex-direction: column;
`;
const SmallImageContainer = styled.div`
    width: 80px;
    margin-bottom: 32.39px;
`;
const SmallImage = styled.img`
    width: 100%;
    height: 80px;
    object-fit: cover;
    cursor: pointer;
`;
const Center = styled.div`
    margin-left: 62.29px;
`;
const BigImageContainer = styled.div`
    width: 610px;
`;
const BigImage = styled.img`
    width: 100%;
    height: 511px;
    object-fit: cover;
`;
const Right = styled.div`
    margin-left: 100px;
`;
const Title = styled.h3`
    margin: 0px;
    font-size: 30px;
    font-weight: 600;
    line-height: 27px;
    letter-spacing: 0em;
`;
const SubTitle = styled.p`
    margin-top: 16px;
    font-size: 30px;
    font-weight: 400;
    line-height: 27px;
    letter-spacing: 0em;
`;
const Size = styled.div``;

const SmallTitle = styled.div`
    font-size: 18px;
    font-weight: 700;
    line-height: 18px;
    letter-spacing: 0em;
`;

const SizeContainer = styled.div`
    margin-top: 8px;
    display: flex;
`;

const SizeItem = styled.div`
    margin-right: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 63px;
    height: 45px;
    font-size: 16px;
    font-weight: 500;
    line-height: 18px;
    letter-spacing: 0.05em;
    border: 1px solid #1D1F22;
    cursor: pointer;

    background: ${props => props.chosen === "true" && '#1D1F22'};
    color: ${props => props.chosen === "true" && 'white'};
`;
const Color = styled.div`
    margin-top: 24px;
`;

const ColorContainer = styled.div`
    display: flex;
    align-items: center;
`;

const ColorItem = styled.div`
    width: 32px;
    height: 32px;
    margin-right: 10px;
    cursor: pointer;
    background: ${props => props.bg};
    border: ${props => props.chosen === "true" && '2px solid #5ECE7B'};
    height: ${props => props.chosen === "true" && '30px'};
`;
const Price = styled.div`
    margin-top: 38px;
`;
const PriceItem = styled.div`
    margin-top: 10px;
    font-size: 24px;
    font-weight: 700;
    line-height: 18px;
    letter-spacing: 0em;
`;
const Button = styled.button`
    margin-top: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    width: 292px;
    height: 52px;
    background: #5ECE7B;
    color: white;
    font-size: 16px;
    font-weight: 600;
    line-height: 19px;
    letter-spacing: 0em;
    cursor: pointer;
`;
const Desc = styled.div`
    width: 292px;
    margin-top: 40px;
    font-size: 16px;
    font-weight: 400;
    line-height: 26px;
    letter-spacing: 0em;
`;


class ProductPage extends Component {
    render() {
        return (
            <Container>
                <Left>
                    <SmallImageContainer>
                        <SmallImage src="https://cdn.shopify.com/s/files/1/0096/2622/2688/files/TT_Dropdown_sweater_2048x2048.jpg?v=1639666761"/>
                    </SmallImageContainer>
                    <SmallImageContainer>
                        <SmallImage src="https://cdn.shopify.com/s/files/1/0096/2622/2688/files/TT_Dropdown_sweater_2048x2048.jpg?v=1639666761"/>
                    </SmallImageContainer>
                    <SmallImageContainer>
                        <SmallImage src="https://cdn.shopify.com/s/files/1/0096/2622/2688/files/TT_Dropdown_sweater_2048x2048.jpg?v=1639666761"/>
                    </SmallImageContainer>
                </Left>
                <Center>
                    <BigImageContainer>
                        <BigImage src="https://cdn.shopify.com/s/files/1/0096/2622/2688/files/TT_Dropdown_sweater_2048x2048.jpg?v=1639666761"/>
                    </BigImageContainer>
                </Center>
                <Right>
                    <Title>
                        Apollo
                    </Title>
                    <SubTitle>
                        Running Short
                    </SubTitle>
                    <Size>
                        <SmallTitle>
                            SIZE:
                        </SmallTitle>
                        <SizeContainer>
                           <SizeItem chosen="true">
                            XS
                        </SizeItem>
                        <SizeItem>
                            S
                        </SizeItem>
                        <SizeItem>
                            M
                        </SizeItem>
                        <SizeItem>
                            L
                        </SizeItem> 
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
                    <Price>
                        <SmallTitle>
                            PRICE:
                        </SmallTitle>
                        <PriceItem>$50</PriceItem>
                    </Price>
                    <Button>ADD TO CART</Button>
                    <Desc>
                    Find stunning women's cocktail dresses and party dresses.
                    Stand out in lace and metallic cocktail dresses and party
                    dresses from all your favorite brands.
                    </Desc>
                </Right>
            </Container>
        );
    }
}

export default ProductPage;