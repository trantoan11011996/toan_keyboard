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
import AboutPage from "../aboutpage/AboutPage";
import AnnoucementDetail from "../annoucementDetail/AnnoucementDetail";
import { AuthContext, autoLogin, getCart } from "../../context/AuthContext";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import CartUser from "../cartUser/CartUser";
import UserInfo from "../userinfo/UserInfo";
import { CartBoxContextProvider } from "../../context/CartBoxContext";
import ResetPassword from "../resetPassword/ResetPassword";
import Policy from "../privacy/Policy";
import Refund from "../privacy/Refund";
import Shipping from "../privacy/Shipping";
import TermService from "../privacy/TermService";
import ProductCategoryPage from "../productCategory/ProductCategoryPage";
import CheckOutPage from "../checkout/CheckOutPage";

export default function KeyBoardApp() {
  const [cart, setCart] = useState([]);
  const [currentUser, setCurrentUser] = useState({});
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailRegister, setEmailRegister] = useState("");
  const [passwordRegister, setPasswordRegister] = useState("");
  const [emailReset, setEmailReset] = useState("");
  const [itemCart, setItemCart] = useState([]);
  const [itemAdd, setItemAdd] = useState({});
  const [isCartBoxOpen, setIsCartBoxOpen] = useState(false);
  const [alertDuplicate, setAlertDuplicate] = useState(false);
  const [displayHeaderFooter, setDisplayHeaderFooter] = useState(true);
  const [shippingInfo, setShippingInfo] = useState({});
  const [city, setCity] = useState("");
  const [distric, setDistric] = useState("");
  const [address, setAddress] = useState("");
  useEffect(() => {
    const user = autoLogin();
    const cartUser = getCart();
    // setCartBox(false);
    setCart(cartUser);
    setCurrentUser(user);
  }, []);

  const addToCart = (product, amount, selectedVariants) => {
    const newItem = { ...product, quantity: amount, variant: selectedVariants };
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
      totalPrice = newItem.quantity * newItem.price;
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
    )
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log("data", data);
        return data;
      });
    return emailsend;
  };

  const hanldeCraeteShippingInfo = (address, distric, city, userId, cart) => {
    setItemCart(cart);
    const newShipping = {
      user: userId,
      shippingAddress: {
        address: address,
        distric: distric,
        city: city,
      },
      items: itemCart,
    };
    const info = { ...newShipping };
    setShippingInfo(info);
  };

  useEffect(() => {
    hanldeCraeteShippingInfo(address, distric, city, currentUser.id, itemCart);
    setCity("");
    setDistric("");
    setAddress("");
  }, [itemCart]);
  console.log("shippinginffo", shippingInfo);
  return (
    <>
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
          passwordRegister,
          setDisplayHeaderFooter,
          displayHeaderFooter,
          shippingInfo,
          setShippingInfo,
          hanldeCraeteShippingInfo,
          setCity,
          setDistric,
          setAddress,
          city,
          address,
          distric,
        }}
      >
        <BrowserRouter>
          <CartBoxContextProvider value={{ isCartBoxOpen, setIsCartBoxOpen }}>
            <div className="keyboard-app">
              {displayHeaderFooter && <Header />}
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
                <Route
                  path="/reset-password"
                  element={<ResetPassword />}
                ></Route>
                <Route path="/privacy-policy" element={<Policy />}></Route>
                <Route path="/refund-policy" element={<Refund />}></Route>
                <Route path="/shipping-policy" element={<Shipping />}></Route>
                <Route
                  path="/termservice-policy"
                  element={<TermService />}
                ></Route>
                <Route
                  path="/category/:id"
                  element={<ProductCategoryPage />}
                ></Route>
                <Route path="/checkout" element={<CheckOutPage />}></Route>
              </Routes>
              {displayHeaderFooter && <Footer />}
            </div>
          </CartBoxContextProvider>
        </BrowserRouter>
      </AuthContext.Provider>
    </>
  );
}
