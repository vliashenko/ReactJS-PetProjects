import React from 'react';
import styled from 'styled-components'
import { mobile } from '../responsive';

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background: linear-gradient(
        rgba(255,255,255,0.5),
        rgba(255,255,255,0.5)
        ),
     url("https://jooinn.com/images/model-13.jpg");
    background-size: cover;
    display: flex;
    align-items: center;
    justify-content: center;
`;
const Wrapper = styled.div`
    padding: 20px;
    width: 25%;
    background-color: white;
    ${mobile({ width: "75%" })};
`;
const Title = styled.h1`
    font-size: 24px;
    font-weight: 300;
`;
const Form = styled.form`
    padding-top: 10px;
    display: flex; 
    justify-content: center;
    flex-direction: column;
`;
const Input = styled.input`
    flex: 1;
    min-width: 40%;
    margin: 10px 0px;
    padding: 10px
`;

const Button = styled.button`
    width: 40%;
    border: none;
    padding: 15px 20px;
    background-color: teal;
    color: white;
    cursor: pointer;
    margin: 5px 0px 10px;
`;

const Link = styled.a`
    margin: 5px 0px;
    font-size: 12px;
    text-decoration: underline;
    cursor: pointer
`


const Login = () => {
    return (
        <Container>
            <Wrapper>
                <Title>SIGN IN AN ACCOUNT</Title>
                <Form>                   
                    <Input placeholder="username"/>                  
                    <Input placeholder="password"/>
                    <Button>LOG IN</Button>
                    <Link>DO NOT REMEMBER YOUR PASSWORD?</Link>
                    <Link>CREATE A NEW ACCOUNT?</Link>
                </Form>
            </Wrapper>
        </Container>
    );
};

export default Login;