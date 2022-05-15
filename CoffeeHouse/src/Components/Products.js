import React, { Component } from 'react';
import ShowFiltered from '../Functions/ShowFiltered';
import styled from "styled-components";

const Container = styled.div``;

const SearchContainer = styled.div`
    margin: 0 auto;
    width: 800px;
    display: flex;
    justify-content: space-around;
`;
const Left = styled.div``;

const Label = styled.span`
    margin-right: 25px;
`;
const Input = styled.input`
    padding-left: 40px;
    outline: none;
    width: 180px;
    height: 30px;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
    font-family: Merienda;
    font-size: 12px;
    font-weight: 400;
    line-height: 17px;
    letter-spacing: 0em;
    cursor: pointer;
`;
const Right = styled.div`
    display: flex;
    align-items: center;
`;

const RightItemContainer = styled.div`
    width: 325px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const RightItem = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 75px;
    height: 30px;
    font-size: 12px;
    font-weight: 400;
    line-height: 17px;
    letter-spacing: 0em;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
    cursor: pointer;
    transition: transform 400ms ease;

    &:hover {
        transform: scale(1.05);
    }

    background: ${props => props.active? 'rgba(0, 0, 0, 0.05)' : 'none'}
`;

const ProductsContainer = styled.div` 
    margin: 31px auto;
    width: 800px;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
`;

class Products extends Component {
    constructor(props){
        super(props);

        this.state = {
            filter: "All",
            term: "",
        }
    }

    setFilterName = (filterName) => {
        this.setState(()=> ({
            filter: filterName
        }))
    }

    onUpdateSearch = (e) => {
        const term = e.target.value;
        this.setState({term})
      }

    render() {
        return (
            <Container>
                <SearchContainer>
                    <Left>
                        <Label>
                            Looking for
                        </Label>
                        <Input 
                            value={this.state.term}
                            onChange={this.onUpdateSearch}
                            type="text" 
                            placeholder='start typing here...'/>
                    </Left>
                    <Right>
                        <Label>
                            Or filter
                        </Label>
                        <RightItemContainer>
                        <RightItem 
                                active={this.state.filter === "All" ? true:false}
                                onClick={() =>this.setFilterName("All")}>
                                All
                            </RightItem>
                            <RightItem 
                                active={this.state.filter === "Brazil" ? true:false}
                                onClick={() =>this.setFilterName("Brazil")}>
                                Brazil
                            </RightItem>
                            <RightItem 
                                active={this.state.filter === "Kenya" ? true:false}
                                onClick={() =>this.setFilterName("Kenya")}>
                                Kenya
                            </RightItem>
                            <RightItem 
                                active={this.state.filter === "Columbia" ? true:false}
                                onClick={() =>this.setFilterName("Columbia")}>
                                Columbia
                            </RightItem>
                        </RightItemContainer>
                    </Right>
                </SearchContainer>
                <ProductsContainer>
                    {ShowFiltered(this.state.filter, this.state.term)}
                </ProductsContainer>
            </Container>
        );
    }
}

export default Products;