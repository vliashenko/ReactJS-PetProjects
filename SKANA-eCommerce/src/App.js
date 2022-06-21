import React, { Component } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Cart from './Pages/Cart';
import Home from './Pages/Home';
import Login from './Pages/Login';
import Product from './Pages/Product';
import ProductList from './Pages/ProductList';
import Register from './Pages/Register';

class App extends Component {
  render() {
    const user = false;
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Home/>}/>
          
          <Route path="/products/:categoty" exact element={<ProductList/>}/>
       
       
          <Route path="/product/:id" exact element={<Product/>}/>
       
       
          <Route path="/cart" exact element={<Cart/>}/>
        
       
          <Route path="/login" exact element={user ? <Navigate to='/'/> : <Login/>}/>
        
        
          <Route path="/register" exact element={user ? <Navigate to='/'/> : <Register/>}/>
        
       
          <Route path="*" element={<Navigate to="/" replace/>}/>
        
        </Routes>
      </BrowserRouter>
      
    );
  }
}

export default App;
