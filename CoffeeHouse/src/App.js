import React, { Component } from 'react';
import { Navigate, BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from './Pages/MainPage';
import OurCoffeePage from './Pages/OurCoffeePage';
import ProductPage from './Pages/ProductPage';
import styled from "styled-components";

const Container = styled.div``;

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <Container>
                        <Routes>
                            <Route path='/' exact element={<MainPage/>}/>
                            <Route path='/ourCoffee' exact element={<OurCoffeePage/>}/>
                            <Route path='/productPage' element={<ProductPage/>}/>
                            <Route path='*'  element={<Navigate to="/"/>}/>
                        </Routes>
                </Container>
            </BrowserRouter>
        );
    }
}

export default App;