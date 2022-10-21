import React from "react";
import {
  AiOutlineSearch,
  AiOutlineUser,
  AiOutlineShoppingCart,
} from "react-icons/ai";
import "../header/header.css";
import {
  Button,
  Modal,
  Nav,
  NavDropdown,
  InputGroup,
  Form,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import { useState } from "react";
export default function NavbarUser() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="navbar-user">
      <div className="user-icon search-icon" onClick={handleShow}>
        <AiOutlineSearch></AiOutlineSearch>
      </div>
      <div className="container-modal">
  
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



{/* <div className="search-input">
            <InputGroup className="mb-3">
              <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
              <Form.Control
                placeholder="Username"
                aria-label="Username"
                aria-describedby="basic-addon1"
              />
            </InputGroup>
            <div className="close-modal">
              <button className="btn-close-modal" onClick={() => handleClose()}>
                X
              </button>
            </div>
          </div> */}