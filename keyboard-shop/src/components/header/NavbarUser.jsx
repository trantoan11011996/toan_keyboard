import React from "react";
import {
  AiOutlineSearch,
  AiOutlineUser,
  AiOutlineShoppingCart,
} from "react-icons/ai";
import "../header/header.css";
import { Nav, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
export default function NavbarUser() {
  return (
    <div className="navbar-user">
      <div className="user-icon search-icon">
        <AiOutlineSearch></AiOutlineSearch>
      </div>
      <Link to={"/login-page"}>
        <div className=" user-icon user-login-icon">
          <AiOutlineUser className="icon-user"></AiOutlineUser>
        </div>
      </Link>
      <Link to={"/register-page"}>
        <div className=" user-icon cart-user-icon">
          <AiOutlineShoppingCart className="icon-user"></AiOutlineShoppingCart>
        </div>
      </Link>
    </div>
  );
}
