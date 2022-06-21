import React from 'react';
import styled from 'styled-components';
import { mobile } from '../responsive';
import { Link } from "react-router-dom";

const Container = styled.div`
    flex: 1;
    margin: 3px;
    height: 70vh;
    position: relative;
`;

const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    ${mobile({ height: "30vh" })};
`;

const Info = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    top:0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    text-align: center;
`;

const Title = styled.h1`
    color: white;
    margin-bottom: 20px;
    text-shadow: 0px 2px 34px #000000;
`;

const Button = styled.button`
    border: none;
    padding: 10px;
    bckground: white;
    color: grey;
    cursor: pointer;
    font-weight: 600;
`;


const CategoryItem = ({item}) => {
    return (
        <Container key={item.id}>
            <Link to={`/products/${item.category}`}>
                <Image src={item.img}/>
                <Info>
                    <Title>{item.title}</Title>
                    <Button>SHOP NOW</Button>
                </Info>
            </Link>
        </Container>
    );
};

export default CategoryItem;