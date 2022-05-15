import React, { Component } from 'react';
import styled from "styled-components";

const Container = styled.div`
    margin-top: 330px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin-bottom: 101px;
`;
const Title = styled.div`
    font-size: 24px;
    font-weight: 400;
    line-height: 35px;
    letter-spacing: 0em;
`;
const LogoContainer = styled.div`
    margin-top:20px;
    width: 320px;
    height: 45px;
`;
const Logo = styled.img`
    width: 100%;
    height: 100%;
`;
const FirstText = styled.div`
    margin-top: 41px;
    width: 590px;
    font-size: 14px;
    font-weight: 400;
    line-height: 20px;
    letter-spacing: 0em;
    text-align: center;
`;
const SecondText = styled.div`
    margin-top:20px;
    width: 590px;
    font-size: 14px;
    font-weight: 400;
    line-height: 20px;
    letter-spacing: 0em;
    text-align: center;
`;

class AboutUs extends Component {
    render() {
        return (
            <Container>
                <Title>
                    About Us
                </Title>
                <LogoContainer>
                    <Logo src={require ("./Images/about_us_lines-beans-black.png")}/>
                </LogoContainer>
                <FirstText>
                    Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.
                    Afraid at highly months do things on at. Situation recommend objection do intention
                    so questions. As greatly removed calling pleased improve an. Last ask him cold feel
                    met spot shy want. Children me laughing we prospect answered followed. At it went
                    is song that held help face.
                </FirstText>
                <SecondText>
                    Now residence dashwoods she excellent you. Shade being under his bed her, Much
                    read on as draw. Blessing for ignorant exercise any yourself unpacked. Pleasant
                    horrible but confined day end marriage. Eagerness furniture set preserved far
                    recommend. Did even but nor are most gave hope. Secure active living depend son
                    repair day ladies now.
                </SecondText>
            </Container>
        );
    }
}

export default AboutUs;