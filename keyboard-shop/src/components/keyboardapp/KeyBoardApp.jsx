import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Detailpage from "../detailpage/DetailPage";
import Footer from "../footer/Footer";
import Header from "../header/Header";
import HomePage from "../homepage/HomePage";
import LoginPage from "../loginpage/LoginPage";
import OrderPage from "../orderpage/OrderPage";
import ProductPage from "../productpage/ProductPage";
import RegisterPage from "../registerpage/RegisterPage";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Dropdown from "react-bootstrap/Dropdown";
import AboutPage from "../aboutpage/AboutPage";
import AnnoucementDetail from "../annoucementDetail/AnnoucementDetail";
import { AuthContext, autoLogin, getCart } from "../../context/AuthContext";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import CartUser from "../cartUser/CartUser";
import UserInfo from "../userinfo/UserInfo";

export default function KeyBoardApp() {
  const [cart, setCart] = useState([]);
  const [currentUser, setCurrentUser] = useState({});
  const [cartBox,setCartBox] = useState(false)
  const [itemCart,setItemCart] = useState({})

  useEffect(() => {
    const user = autoLogin();
    const cartUser = getCart();
    setCartBox(false)
    setCart(cartUser);
    setCurrentUser(user);
  }, []);


  const addToCart = (product, amount, selectedVariants) => {
    const newItem = { ...product, amount: amount, variant: selectedVariants }
    const item = newItem;
    setItemCart(item)
    let totalPrice;
    let itemInCart = [...cart];
    console.log("product", product);
    const findDuplicate = cart.some((item) => item._id === product._id);
    if (!findDuplicate) {
      totalPrice = newItem.amount * newItem.price;
      const newItemUpdatePrice = { ...newItem, totalPrice: totalPrice };
      itemInCart = [...cart, newItemUpdatePrice];
      console.log("cart", itemInCart);
      const json = localStorage.setItem(
        "itemInCart",
        JSON.stringify(itemInCart)
      );
      const getJson = localStorage.getItem("itemInCart");
      setCart(JSON.parse(getJson));
      setCartBox(true)
    } else {
      alert("this item have been add");
    }
  };



  return (
    <AuthContext.Provider
      value={{ cart, setCart, addToCart, currentUser, setCurrentUser,cartBox,setCartBox , itemCart }}
    >
      <BrowserRouter>
        <div className="keyboard-app">
          <Header />
          <Routes>
            <Route path="/" element={<HomePage />}></Route>
            <Route path="/about-page" element={<AboutPage />}></Route>
            <Route path="/product-page" element={<ProductPage />}></Route>
            <Route path="/product/:id" element={<Detailpage />}></Route>
            <Route path="/order-page" element={<OrderPage />}></Route>
            <Route path="/login-page" element={<LoginPage />}></Route>
            <Route path="/register-page" element={<RegisterPage />}></Route>
            <Route path="/cart" element={<CartUser />}></Route>
            <Route path="/user-info" element={<UserInfo />}></Route>
            <Route
              path="/annoucement-detail/:id"
              element={<AnnoucementDetail />}
            ></Route>
          </Routes>
          <Footer />
        </div>
      </BrowserRouter>
    </AuthContext.Provider>
  );
}
