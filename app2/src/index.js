import ReactDOM from 'react-dom/client';
import Home from './home';
import React from "react";
import Navbar from './navBar';
import Footer from './footer';
import Category from './categorys'
import Products from './products';
import Login from './login';
import ViewProduct from './viewproduct';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<ViewProduct/>);
