import Announcement from '../Components/Announcement';
import React from 'react';
import styled from 'styled-components';
import Footer from '../Components/Footer';
import Navbar from '../Components/Navbar';
import Newsletter from '../Components/Newsletter';
import { Add, Remove } from '@mui/icons-material';
import { mobile } from '../responsive';
import { useState } from 'react';
import { useEffect } from 'react';
import {useLocation} from "react-router-dom"
import axios from 'axios';
import { addProduct } from '../redux/cartRedux';
import { useDispatch } from 'react-redux';

const Container = styled.div`

`;
const Wrapper = styled.div`
    padding: 50px;
    display: flex;
    ${mobile({ padding: "10px", flexDirection: "column" })};
`;
const ImageContainer = styled.div`
   flex: 1; 
`;
const Image = styled.img`
    width: 100%;
`;
const InfoContainer = styled.div`
    flex: 1;
    padding: 0px 50px;
    ${mobile({ padding: "10px" })};
`;
const Title = styled.h1`
    font-weight: 200;
`;
const Desc = styled.p`
    margin: 20px 0px;
`;
const Price = styled.span`
    font-weight: 800;
    font-size: 40px;
`;

const FilterContainer = styled.div`
    width: 50%;
    margin: 35px 0px;
    display: flex;
    justify-content: space-between;
    ${mobile({ width: "100%" })};
`;
const Filter = styled.div`
    display: flex;
    align-items: center;
`;
const FilterTitle = styled.span`
    font-weight: 200;
    font-size: 20px;
`;
const FilterColor = styled.div`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${props=> props.color};
    margin: 0px 8px;
    cursor: pointer;
    border: 1px solid #afafaf;
`;
const FilterSize = styled.select`
    margin-left: 10px;
    padding: 5px;
`;
const FilterSizeOption = styled.option`

`;
const AddContainer = styled.div`
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    ${mobile({ width: "100%" })};
`;
const AmountContainer = styled.div`
    display: flex;
    align-items: center;
    font-weight: 700;
`;
const Amount = styled.span`
    width: 30px;
    height: 30px;
    border-radius: 10px;
    border: 1px solid teal;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 5px;
`;
const Button = styled.button`
    padding: 15px;
    border: 2px solid teal;
    background-color: white;
    cursor: pointer;
    font-weight: 500;
    transition: all 0.5s ease;

    &:hover {
        background-color: #f8f4f4;
    }
`;



const Product = () => {

    const location = useLocation();
    const productId = location.pathname.split('/')[2];

    const [product, setProduct] = useState({});
    const [quantity, setQuantity] = useState(1);
    const [color, setColor] = useState("");
    const [size, setSize] = useState("");
    const dispatch = useDispatch()

    useEffect(() => {

        const getProduct = async () => {
            try {
                const res = await axios.get(`http://localhost:5000/api/products/find/${productId}`)
                setProduct(res.data)
                setColor(res.data.color[0])
                setSize(res.data.size[0])
            } catch(err) {
                console.log(err);
            }
        }
        getProduct()
    }, [productId])

    const handleQuantity = (type) => {
        if(type === "dec") {
           quantity > 1 && setQuantity(quantity - 1)
        } else {
            setQuantity(quantity + 1)
        }
    }

    const handleClick = () => {
        dispatch(
            addProduct({ ...product, quantity, color, size })
        )
    }

    return (
        <Container>
            <Navbar/>
            <Announcement/>
            <Wrapper>
                <ImageContainer>
                    <Image src={product.img}/>
                </ImageContainer>
                <InfoContainer>
                    <Title>{product.title}</Title>
                    <Desc>{product.description}</Desc>
                    <Price>$ {product.price}</Price>
                    <FilterContainer>
                        <Filter>
                            <FilterTitle>Color</FilterTitle>
                            {product.color?.map((c) => {
                                return <FilterColor onClick={() => setColor(c)} color={c} key={c}/>
                            })}
                        </Filter>
                        <Filter>
                            <FilterTitle>Size</FilterTitle>
                            <FilterSize onChange={(e) => setSize(e.target.value)}>
                               {product.size?.map((s) => {
                                    return <FilterSizeOption key={s}>{s}</FilterSizeOption>
                                })}
                            </FilterSize>
                        </Filter>
                    </FilterContainer>
                    <AddContainer>
                        <AmountContainer>
                            <Remove style={{cursor: "pointer"}} onClick={()=> handleQuantity("dec")}/>
                            <Amount>{quantity}</Amount>
                            <Add style={{cursor: "pointer"}} onClick={()=> handleQuantity("inc")}/>
                        </AmountContainer>
                        <Button onClick={handleClick}>ADD TO CART</Button>
                    </AddContainer>
                </InfoContainer>
            </Wrapper>
            <Newsletter/>
            <Footer/>
        </Container>
    );
};

export default Product;