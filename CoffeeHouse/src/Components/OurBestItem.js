import React, { Component } from 'react';
import { Link } from "react-router-dom";
import styled from "styled-components";
import history from "history/browser"

const Container = styled.div`
    width: 200px;
    height: 240px;
    display: flex;
    flex-direction: column;
    background: rgba(255, 255, 255, 0.65);
    border-radius: 8px;
    cursor: pointer;
    transition: all 400ms ease;

    &:hover {
        transform: scale(1.08);
    }
`;

const ImageContainer = styled.div`
    width: 151px;
    height: 130px;
    margin: 22px auto 18px auto;
`;

const Image = styled.img`
    width: 100%;
    height: 100%;
`;

const Name = styled.div`
    font-size: 14px;
    font-weight: 400;
    line-height: 20px;
    letter-spacing: 0em;
    text-align: center;
    margin: 0 auto;
`;

const Price = styled.div`
    font-size: 14px;
    font-weight: 700;
    line-height: 20px;
    letter-spacing: 0em;
    text-align: right;
    margin: 10px 20px;
`;

class OurBestItem extends Component {

    onClick = () => {
        history.push('/productPage', this.props)
    }
    
    render() {
        const { name, country, description, price, image,id } = this.props;

        return (
            <Link to="/productPage" onClick={this.onClick} state={{name, country, description, price, image,id}}>
            <Container>
                <ImageContainer>
                        <Image src={this.props.image}/>
                    </ImageContainer>
                    <Name>
                        {this.props.name}
                    </Name>
                    <Price>
                        {this.props.price}$
                    </Price>
            </Container>
            </Link>
        );
    }
}

export default OurBestItem;