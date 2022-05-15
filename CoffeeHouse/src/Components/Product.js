import React, { Component } from 'react';
import styled from "styled-components";

const Container = styled.div`
    margin: 184px auto 104px auto;
    width: 918px;
    display: flex;
    justify-content: space-around;
`;

const Left = styled.div``;

const ImageContainer = styled.div`
    width: 392px;
    height: 355px;
`;
const Image = styled.img`
    width: 100%;
    height: 100%;
`;
const Right = styled.div`
    width: 420px;
`;
const Title = styled.div`
    text-align: center;
    font-size: 24px;
    font-weight: 400;
    line-height: 35px;
    letter-spacing: 0em;
`;
const LogoContainer = styled.div`
    margin: 23.5px auto;
    width: 195px;
    height: 30px;
`;
const Logo = styled.img`
    width: 100%;
    height: 100%;
`;
const Name = styled.div`
    margin-top: 26px;
    font-size: 18px;
    font-weight: 700;
    line-height: 20px;
    letter-spacing: 0em;
`;
const Country = styled.div`
    margin-top: 26px;
    font-size: 14px;
    font-weight: 700;
    line-height: 20px;
    letter-spacing: 0em;
`;
const CountryContent = styled.span`
    font-size: 14px;
    font-weight: 400;
    line-height: 20px;
    letter-spacing: 0em;
`;
const Desc = styled.div`
    margin-top: 16px;
    font-size: 14px;
    font-weight: 700;
    line-height: 20px;
    letter-spacing: 0em;
`;
const DescContent = styled.span`
    font-size: 14px;
    font-weight: 400;
    line-height: 20px;
    letter-spacing: 0em;
`;
const Price = styled.div`
    margin-top: 26px;
    font-size: 14px;
    font-weight: 700;
    line-height: 20px;
    letter-spacing: 0em;
`;
const PriceContent = styled.span`
    font-size: 22px;
    font-weight: 700;
    line-height: 20px;
    letter-spacing: 0em;
`;

class Product extends Component {
    render() {
        const { name, country, description, price, image,id } = this.props.props;
        return (
            <Container>
                <Left>
                    <ImageContainer>
                        <Image src={image}/>
                    </ImageContainer>
                </Left>
                <Right>
                    <Title>
                        About it
                    </Title>
                    <LogoContainer>
                        <Logo src={require ("./Images/about_us_lines-beans-black.png")}/>
                    </LogoContainer>
                    <Name>
                        {name}
                    </Name>
                    <Country>
                        Country:
                        <CountryContent>
                            {country}
                        </CountryContent>
                    </Country>
                    <Desc>
                    Description: 
                        <DescContent>
                            {description}
                        </DescContent>
                    </Desc>
                    <Price>
                        Price:
                        <PriceContent>
                            {price}$
                        </PriceContent>
                    </Price>
                </Right>
            </Container>
        );
    }
}

export default Product;