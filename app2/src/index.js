import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";

import Home from './home';
import Category from './categorys';
import Products from './products';
import Login from './login';
import ViewProduct from './viewproduct';
import Cart from './cart'; 
import Checkout from './checkout';
import ChangePassword from './changepassword';
import Registration from './registration';
function MYapp() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/categorys" element={<Category />} />
        <Route path="/products" element={<Products />} />
        <Route path="/login" element={<Login />} />
        <Route path="/viewproduct" element={<ViewProduct />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/changepassword" element={<ChangePassword />} />
        <Route path="/registration" element={<Registration />} />
        
        
        {/* 404 Pandding */}
        {/* <Route path="*" element={< />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<MYapp />);
