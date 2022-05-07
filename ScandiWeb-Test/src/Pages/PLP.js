import React, { Component } from 'react';
import Header from "../Components/Header";
import Products from '../Components/Products';
import styled from 'styled-components';

const Container = styled.div`

`

class PLP extends Component {
    constructor(props) {
        super(props);

        this.state = {
            cartIsOpen: null
        }
    }

    checkCartState = (state) => {
        this.setState(({cartIsOpen}) => {
            return {
                cartIsOpen: state  
            }
        })
    }

    render() {
        return (
            <Container>
                <Header checkCartState={this.checkCartState}/>
                <Products cartIsOpen={this.state.cartIsOpen}/>
            </Container>
        );
    }
}

export default PLP;