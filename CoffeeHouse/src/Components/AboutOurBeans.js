import React, { Component } from 'react';
import styled from "styled-components";

const Container = styled.div``;

const Wrapper = styled.div`
    margin: 164px auto 0 auto;
    width: 700px;
    display: flex;
    justify-content: space-between;
`;

const Left = styled.div``;

const ImageContainer = styled.div`
    width: 272px;
    height: 355px;
`;
const Image = styled.img`
    width: 100%;
    height: 100%;
`;
const Right = styled.div`
    width: 336px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;
const Title = styled.div`
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
const Content = styled.div`
    font-size: 14px;
    font-weight: 400;
    line-height: 20px;
    letter-spacing: 0em;
    text-align: center;
`;
const SubContent = styled.div`
    margin-top: 20px;
    text-align: center;
    font-size: 14px;
    font-weight: 400;
    line-height: 20px;
    letter-spacing: 0em;
`;
const LineImageContainer = styled.div`
    margin: 60px auto;
    width: 240px;
`;
const LineImage = styled.img`
    width: 100%;
    height: 100%;
`;

class AboutOurBeans extends Component {
    render() {
        return (
            <Container>
                <Wrapper>
                   <Left>
                    <ImageContainer>
                        <Image src={require ("./Images/about_our_beans-girl.png")}/>
                    </ImageContainer>
                </Left>
                <Right>
                    <Title>
                        About our beans
                    </Title>
                    <LogoContainer>
                        <Logo src={require ("./Images/about_us_lines-beans-black.png")}/>
                    </LogoContainer>
                    <Content>
                        Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.
                    </Content>
                    <SubContent>
                        Afraid at highly months do things on at. Situation recommend objection do intention
                        so questions. <br/>
                        As greatly removed calling pleased improve an.<br/>
                        Last ask him cold feel<br/>
                        met spot shy want. Children me laughing we prospect answered followed. At it went
                        is song that held help face.
                    </SubContent>
                </Right> 
                </Wrapper>
                <LineImageContainer>
                    <LineImage src={require ("./Images/about_our_beans-black-line.png")}/>
                </LineImageContainer>
            </Container>
        );
    }
}

export default AboutOurBeans;