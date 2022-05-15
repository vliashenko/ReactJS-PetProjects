import React, { Component } from 'react';
import { Link } from "react-router-dom";
import styled from "styled-components"

const Container = styled.div`
    padding-bottom: 40px;
`;

const Navbar = styled.div`
    margin: 52px auto 30px auto;
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
        color: #929292;
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
const MainLogoContainer = styled.div`
    margin: 0 auto;
    width: 195px;
    height: 32px;
`;
const MainLogo = styled.img`
    width: 100%;
    height: 100%;
`;

class Footer extends Component {
    render() {
        return (
            <Container>
                <Navbar>
                    <Link to="/" style={{textDecoration: "none", color: "black"}}>
                        <MenuItem>
                            <LogoContainer>
                                <Logo src={require ("./Images/footer-beans.png")}/>
                            </LogoContainer>
                            Coffee house
                        </MenuItem>
                    </Link>
                    <Link to="/ourCoffee" style={{textDecoration: "none", color: "black"}}>
                        <MenuItem>
                            Our coffee
                        </MenuItem>
                    </Link>
                    <MenuItem>
                        For your pleasure
                    </MenuItem>
                </Navbar>
                <MainLogoContainer>
                    <MainLogo src={require ("./Images/about_us_lines-beans-black.png")}/>
                </MainLogoContainer>
            </Container>
        );
    }
}

export default Footer;