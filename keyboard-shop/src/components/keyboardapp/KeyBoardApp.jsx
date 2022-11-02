import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  useLocation,
  useRoutes,
} from "react-router-dom";
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
import CartBoxContext, {
  CartBoxContextProvider,
} from "../../context/CartBoxContext";
import ResetPassword from "../resetPassword/ResetPassword";

export default function KeyBoardApp() {
  const [cart, setCart] = useState([]);
  const [currentUser, setCurrentUser] = useState({});
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailRegister, setEmailRegister] = useState("");
  const [passwordRegister, setPasswordRegister] = useState("");
  const [emailReset, setEmailReset] = useState("");
  const [itemCart, setItemCart] = useState({});
  const [itemAdd, setItemAdd] = useState({});
  const [isCartBoxOpen, setIsCartBoxOpen] = useState(false);
  const [alertDuplicate, setAlertDuplicate] = useState(false);

  useEffect(() => {
    const user = autoLogin();
    const cartUser = getCart();
    // setCartBox(false);
    setCart(cartUser);
    setCurrentUser(user);
  }, []);

  const addToCart = (product, amount, selectedVariants) => {
    const newItem = { ...product, amount: amount, variant: selectedVariants };
    const item = newItem;
    setItemAdd(newItem);
    setItemCart(item);
    let totalPrice;
    let itemInCart = [...cart];
    const findDuplicate = cart.some((item) => {
      console.log("item choose", item);
      return item._id === product._id;
    });
    if (!findDuplicate) {
      totalPrice = newItem.amount * newItem.price;
      const newItemUpdatePrice = { ...newItem, totalPrice: totalPrice };
      itemInCart = [...cart, newItemUpdatePrice];
      const json = localStorage.setItem(
        "itemInCart",
        JSON.stringify(itemInCart)
      );
      const getJson = localStorage.getItem("itemInCart");
      setCart(JSON.parse(getJson));
      // setCartBox(true);
      setIsCartBoxOpen(true);
      setAlertDuplicate(false);
    } else {
      setAlertDuplicate(true);
    }
  };

  const createNewUser = async (email, password) => {
    let userInfo = { email: email, password: password };
    console.log("info", userInfo);
    const newUser = await fetch(
      `https://keyboard-shop.herokuapp.com/api/users/register`,
      {
        method: "POST",
        body: JSON.stringify(userInfo),
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      }
    )
      .then((res) => {
        if (!res.ok) {
          return res.json();
        }
        return res.json();
      })
      .then((data) => {
        if (data.message) {
          return data;
        } else {
          localStorage.setItem("CurrentUser", JSON.stringify(data));
          return data;
        }
      })
      .catch((error) => {
        console.log("err", error);
      });
    return newUser;
  };

  const submitEmail = async (email) => {
    const emailInfo = { email: email };
    const emailsend = await fetch(
      `https://keyboard-shop.herokuapp.com/api/users/forgotpassword`,
      {
        method: "POST",
        body: JSON.stringify(emailInfo),
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      }
    ).then((res)=>{
        return res.json()
    }).then((data)=>{
      console.log('data',data);
      return data
    })
    return emailsend
  };
  return (
    <AuthContext.Provider
      value={{
        cart,
        setCart,
        addToCart,
        currentUser,
        setCurrentUser,
        itemAdd,
        alertDuplicate,
        setAlertDuplicate,
        createNewUser,
        email,
        setEmail,
        password,
        setPassword,
        emailReset,
        setEmailReset,
        submitEmail,
        setEmailRegister,
        emailRegister,
        setPasswordRegister,
        passwordRegister
      }}
    >
      <BrowserRouter>
        <CartBoxContextProvider value={{ isCartBoxOpen, setIsCartBoxOpen }}>
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
              <Route path="/reset-password" element={<ResetPassword />}></Route>
            </Routes>
            <Footer />
          </div>
        </CartBoxContextProvider>
      </BrowserRouter>
    </AuthContext.Provider>
  );
}
