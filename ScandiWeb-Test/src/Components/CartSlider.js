import React, { Component } from 'react';
import styled from "styled-components";


const Container = styled.div`
    width: 200px;
    height: 310px;
    display: flex;
    position: relative;
    overflow: hidden;
`;

const Wrapper = styled.div`
    height: 100%;
    display: flex;
    transition: all 1.5s ease;
    transform: translateX(${props => props.slideIndex * - 200}px);
`;

const Arrow = styled.div`
    position: absolute;
    top: 80%;
    bottom: 0;
    left: ${props => props.direction === "left" && "130px"};
    right: ${props => props.direction === "right" && "10px"};
    margin: auto;
    cursor: pointer;
    width: 24px;
    height: 24px;
    background-color: rgba(0, 0, 0, 0.73);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 2;
`;
const ArrowImageLeft = styled.img`
    width: 5.63px;
    height: 11.24px;
`;
const Slide = styled.div``;

const ImageContainer = styled.div`
    width: 200px;
`;

const Image = styled.img`
    width: 100%;
    height: 310px;
    object-fit: cover;
`;

const ArrowImageRight = styled.img`
    width: 5.63px;
    height: 11.24px;
`;

class CartSlider extends Component {
    constructor(props) {
        super(props);

        this.state = {
            slideIndex: 0
        }
    }
        handleClick = (direction) => {
        
            if(direction === "left") {
                this.setState(({slideIndex}) => {
                    if(slideIndex > 0) {
                       return {
                         slideIndex: slideIndex - 1  
                       } 
                    } else {
                        return {
                            slideIndex: 2  
                        } 
                    }
                })
            } else { 
                this.setState(({slideIndex}) => {
                    if(slideIndex < 2) {
                        return {
                            slideIndex: slideIndex + 1  
                          } 
                    } else {
                        return {
                            slideIndex: 0  
                        } 
                    }
                })
            }

        }
    
    render() {
        return (
            <Container>
                <Arrow direction="left" onClick = {() => this.handleClick("left")}>
                    <ArrowImageLeft src={require ('../Images/slider-left.png')}/>
                </Arrow>
                <Wrapper slideIndex={this.state.slideIndex}>
                <Slide>
                    <ImageContainer>
                        <Image src={"https://cdn.shopify.com/s/files/1/0096/2622/2688/files/TT_Dropdown_sweater_2048x2048.jpg?v=1639666761"}/>
                    </ImageContainer>
                </Slide>
                <Slide>
                    <ImageContainer>
                        <Image src={"https://velmet.ua/image/cache/catalog/images/products/50-takticheskaya-voennaya-odezhda/59-kiteli-rubashki/rubashka-boevaya-zewana-x-1-combat-shirt-mawka-2-940x1000.jpg"}/>
                    </ImageContainer>
                </Slide>
                <Slide>
                    <ImageContainer>
                        <Image src={"https://contents.mediadecathlon.com/p1484240/k$ab565f3675dbdd7e3c486175e2c16583/men-s-travel-trekking-shirt-travel100-warm-bordeaux.jpg?&f=800x800"}/>
                    </ImageContainer>
                </Slide>
                </Wrapper>
                <Arrow direction="right" onClick = {() => this.handleClick("right")}>
                    <ArrowImageRight src={require ('../Images/slider-right.png')}/>
                </Arrow>
            </Container>
        );
    }
}

export default CartSlider;