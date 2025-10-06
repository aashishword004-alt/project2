import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import Home from './home';
import Navbar from './navBar';
import Footer from './footer';
import Category from './categorys';
import Products from './products';
import Login from './login';
import ViewProduct from './viewproduct';
import Cart from './catr'; // typo fixed: was "catr"
import Checkout from './checkout'; // typo fixed: was "Chackout"

function MYapp() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/category" element={<Category />} />
        <Route path="/products" element={<Products />} />
        <Route path="/login" element={<Login />} />
        <Route path="/viewproduct" element={<ViewProduct />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Home />);
