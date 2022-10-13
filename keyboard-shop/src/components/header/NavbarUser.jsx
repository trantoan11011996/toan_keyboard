import React from "react";
import {AiOutlineSearch,AiOutlineUser,AiOutlineShoppingCart} from "react-icons/ai"
import "../header/header.css"
import {Nav,NavDropdown} from "react-bootstrap"
export default function NavbarUser(){

    return(
        <div className="navbar-user">
            <div className="user-icon search-icon">
            <AiOutlineSearch></AiOutlineSearch>
            </div>
            <div className=" user-icon user-login-icon">
                <AiOutlineUser></AiOutlineUser>
            </div>
            <div className=" user-icon cart-user-icon">
                <AiOutlineShoppingCart></AiOutlineShoppingCart>
            </div>
        </div>
    )
}