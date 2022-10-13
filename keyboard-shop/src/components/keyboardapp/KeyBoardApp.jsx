import React from "react";
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Detailpage from "../detailpage/DetailPage";
import Footer from "../footer/Footer";
import Header from "../header/Header";
import HomePage from "../homepage/HomePage";
import LoginPage from "../loginpage/LoginPage";
import OrderPage from "../orderpage/OrderPage";
import ProductPgae from "../productpage/ProductPage";
import RegisterPage from "../resigterpage/RegisterPage";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Dropdown from "react-bootstrap/Dropdown";


export default function KeyBoardApp(){

    return(
        <BrowserRouter>
        <div className="keyboard-app">
            <Header/>
        <Routes>
            <Route path="/home-page" element={<HomePage/>}></Route>
            <Route path="/product-page" element={<ProductPgae/>}></Route>
            <Route path="/detail-page" element={<Detailpage/>}></Route>
            <Route path="/order-page" element={<OrderPage/>}></Route>
            <Route path="/login-page" element={<LoginPage/>}></Route>
            <Route path="/register-page" element={<RegisterPage/>}></Route>
        </Routes>
        <Footer/>
        </div>
        </BrowserRouter>
    )
}