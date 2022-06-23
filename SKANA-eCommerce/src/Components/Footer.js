import React from 'react';
import styled from 'styled-components';
import { Facebook, Instagram, Room, Pinterest, Twitter, Phone, MailOutline } from '@mui/icons-material';
import { mobile } from '../responsive';

const Container = styled.div`
    display: flex;
    ${mobile({ flexDirection: "column" })};
`
const Left = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 20px;
`;

const Logo = styled.h1`

`;

const Desc = styled.p`
    margin: 20px 0px;
`;

const SocialContainer = styled.div`
    display: flex;
`;

const SocialIcon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: white;
    background-color: #${props => props.color};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
`;

const Center = styled.div`
    flex: 1;
    padding: 20px;
    ${mobile({ display: "none" })};
`;

const Title = styled.h3`
    margin-bottom: 30px;
`

const List = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
`

const ListItem = styled.li`
    width: 50%;
    margin-bottom: 10px;
`

const Right = styled.div`
    flex: 1;
    padding: 20px;
    ${mobile({ backgroundColor: "#fff8f8" })};
`;

const ContactItem = styled.div`
    margin-bottom: 20px;
    display: flex;
    align-items: center;
`
const Payment = styled.img`
    width: 80%;
`

const Footer = () => {
    return (
        <Container>
            <Left>
                <Logo>SKANA.</Logo>
                    <Desc>
                    There are many variations of passages of Lorem Ipsum aviable, but
                    the majority have suffered alteration in some form, by injected 
                    humor, or randomised words wich don't look even slightly believable.
                    </Desc>
                        <SocialContainer>
                            <SocialIcon color="3B5999">
                                <Facebook/>
                            </SocialIcon>
                            <SocialIcon color="E4405F">
                                <Instagram/>
                            </SocialIcon>
                            <SocialIcon color="55ACEE">
                                <Twitter/>
                            </SocialIcon>
                            <SocialIcon color="E60023">
                                <Pinterest/>
                            </SocialIcon>
                        </SocialContainer>
            </Left>
            <Center>
                <Title>Useful links</Title>
                <List>
                    <ListItem>Home</ListItem>
                    <ListItem>Cart</ListItem>
                    <ListItem>Man Fashion</ListItem>
                    <ListItem>Woman Fashion</ListItem>
                    <ListItem>Accessories</ListItem>
                    <ListItem>My Account</ListItem>
                    <ListItem>Order Tracking</ListItem>
                    <ListItem>Whishlist</ListItem>
                    <ListItem>Terms</ListItem>
                    <ListItem></ListItem>
                </List>
            </Center>
            <Right>
                <Title>Contacts</Title>
                <ContactItem>
                   <Room style={{marginRight: 10}}/> 
                   15 Viliamsa str, Kyiv Ukraine. 
                </ContactItem>
                <ContactItem>
                   <Phone style={{marginRight: 10}}/>
                   +380688485643
                </ContactItem>
                <ContactItem>
                    <MailOutline style={{marginRight: 10}}/>
                   greedisdood1@gmail.com 
                </ContactItem>
                <Payment src="https://spainsur.es/wp-content/uploads/2018/12/paypal-logo.png"/>
            </Right>
        </Container>
    );
};

export default Footer;