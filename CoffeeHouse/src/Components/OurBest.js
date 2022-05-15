import React, { Component } from 'react';
import ShowProducts from '../Functions/ShowProducts';
import styled from "styled-components"

const Container = styled.div`
    position: relative;
`;

const Background = styled.img`
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    object-fit: cover;
    z-index: -1000;
`;

const Title = styled.div`
    width: 100%;
    position: absolute;
    left: 0;
    top: 80px;
    font-family: Merienda;
    font-size: 24px;
    font-weight: 400;
    line-height: 35px;
    letter-spacing: 0em;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const OurBestItemContainer = styled.div`
    position: absolute;
    top: 155px;
    left: 26%;
    width: 722px;
    display: flex;
    justify-content: space-between;
`;


class OurBest extends Component {
    render() {
        return (
            <Container> 
                <Title>Our best</Title>
                <OurBestItemContainer>
                {ShowProducts()}
                </OurBestItemContainer>
                <Background src={require ("./Images/OurBest.png")}/>
            </Container>
        );
    }
}

export default OurBest;