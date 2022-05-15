import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from "styled-components";

const Container = styled.div`
    color: white;
    max-width: 1280px;
    margin: 0 auto;
`;

const Navbar = styled.div`
    min-height: 104px;
    display: flex;
    align-items: center;
`;
const Left = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 320px;
`;

const MenuItem = styled.div`
    position: relative;
    font-size: 12px;
    font-weight: 400;
    line-height: 17px;
    letter-spacing: 0em;
    cursor: pointer;
    transition: all 300ms ease;

    &: hover {
        color: #d5d5d5;
    }
`;
const LogoContainer = styled.div`
    position: absolute;
    top: -20px;
    left: -30px;
    width: 35px;
    height: 35px;
`;
const Logo = styled.img`
    width: 100%;
    height: 100%;
`;

const Main = styled.div`
    margin-top: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    font-size: 40px;
    font-weight: 700;
    line-height: 58px;
    letter-spacing: 0em;
`;

const Background = styled.img`
    position: absolute;
    width: 100%;
    left: 0;
    top: 0;
    object-fit: cover;
    z-index: -1000;
`;

class OurCoffeeHeader extends Component {
    render() {
        return (
            <Container>
                <Navbar>
                    <Left>
                        <Link to="/" style={{textDecoration: "none", color: "white"}}>
                            <MenuItem>
                                <LogoContainer>
                                    <Logo src={require ("./Images/header-beans.png")}/>
                                </LogoContainer>
                                Coffee house
                            </MenuItem>
                        </Link>
                        <Link to="/ourCoffee" style={{textDecoration: "none", color: "white"}}>
                            <MenuItem>
                                Our coffee
                            </MenuItem>
                        </Link>
                        <MenuItem>
                            For your pleasure
                        </MenuItem>
                    </Left>
                </Navbar>
                <Main>
                    Our Coffee
                </Main>
                <Background src={require ("./Images/our_coffee-background.png")}/>
            </Container>
        );
    }
}

export default OurCoffeeHeader;