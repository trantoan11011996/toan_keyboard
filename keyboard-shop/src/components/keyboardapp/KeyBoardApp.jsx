import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Detailpage from "../detailpage/DetailPage";
import Footer from "../footer/Footer";
import Header from "../header/Header";
import HomePage from "../homepage/HomePage";
import LoginPage from "../loginpage/LoginPage";
import OrderPage from "../orderpage/OrderPage";
import ProductPgae from "../productpage/ProductPage";
import RegisterPage from "../registerpage/RegisterPage";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Dropdown from "react-bootstrap/Dropdown";
import AboutPage from "../aboutpage/AboutPage";
import AnnoucementDetail from "../annoucementDetail/AnnoucementDetail";
import { AuthContext } from "../../context/AuthContext";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";

export default function KeyBoardApp() {

  return (
      <BrowserRouter>
        <div className="keyboard-app">
          <Header />
          <Routes>
            <Route path="/" element={<HomePage />}></Route>
            <Route path="/about-page" element={<AboutPage />}></Route>
            <Route path="/product-page" element={<ProductPgae />}></Route>
            <Route path="/product/:id" element={<Detailpage />}></Route>
            <Route path="/order-page" element={<OrderPage />}></Route>
            <Route path="/login-page" element={<LoginPage />}></Route>
            <Route path="/register-page" element={<RegisterPage />}></Route>
            <Route
              path="/annoucement-detail/:id"
              element={<AnnoucementDetail />}
            ></Route>
          </Routes>
          <Footer />
        </div>
      </BrowserRouter>
  );
}
