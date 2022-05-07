import React, { Component } from 'react';
import Header from '../Components/Header';
import ProductPage from '../Components/ProductPage';
import styled from "styled-components";

const Container = styled.div``;

class PDP extends Component {
    render() {
        return (
            <Container>
                <Header/>
                <ProductPage/>
            </Container>
        );
    }
}

export default PDP;