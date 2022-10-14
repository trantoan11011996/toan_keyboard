import React, { useState, Component } from "react";
import { Link } from "react-router-dom";
import {
  AiOutlineArrowRight,
  AiOutlineMenu,
  AiOutlineClose,
  AiOutlineArrowLeft,
  AiOutlineUser,
  AiFillYoutube,
  AiFillFacebook,
  AiFillInstagram,
} from "react-icons/ai";
import "../header/header.css";
import "../header/reponsive.css";
import {
  Navbar,
  Container,
  Nav,
  NavDropdown,
  Offcanvas,
  Form,
  Button,
  Row,
  Col,
} from "react-bootstrap";
import NavbarContent from "./NavbarContent";
import NavbarUser from "./NavbarUser";
import Dropdown from "react-bootstrap/Dropdown";
import { useEffect } from "react";
import axios from "axios";

export default function Header() {
  const [showSidebar, setShowSidebar] = useState(false);
  const [showSidebarCategory, setShowSidebarCategory] = useState(false);
  const [Sidebarlist, setShowSidebarList] = useState(true);
  const [categories, setCategories] = useState([]);

  const getAllCategory = () => {
    const listCategory = axios
      .get(`https://keyboard-shop.herokuapp.com/api/products`)
      .then((res) => {
        return res.data;
      })
      .then((data) => {
        console.log(data.allCategory);
        setCategories(data.allCategory);
      });
    return listCategory;
  };
  useEffect(() => {
    getAllCategory();
  }, []);

  const handleOpenSidebar = () => {
    setShowSidebar(true);
    console.log("true");
  };
  const handleCloseSidebar = () => {
    setShowSidebar(false);
    console.log("false");
  };
  const handleOpenCategory = () => {
    setShowSidebarCategory(true);
    setShowSidebarList(false);
    console.log("true true");
  };
  const handleCloseCategory = () => {
    setShowSidebarCategory(false);
    setShowSidebarList(true);
    console.log("false false");
  };
  return (
    <div className="header">
      <div className="join-link">
        <p className="join-link-text">
          Join us on our Discord community.{" "}
          <span className="arrow-link-discord">
            <AiOutlineArrowRight></AiOutlineArrowRight>
          </span>{" "}
        </p>
      </div>
      <div className="wrap-header">
        <div className="container-header">
          <Row className="navbar-header">
            <Col className="header-logo-first col-logo" lg={2}>
              <Link to={"/"}>
                <div className="navbar-logo">
                  <img
                    className="header-logo"
                    src="https://cdn.shopify.com/s/files/1/0299/9497/5365/files/logo_9036676e-1709-4680-9f5a-97e5d10a93ae_90x.png?v=1630939482"
                    alt="logo"
                  ></img>
                </div>
              </Link>
            </Col>
            <Col className="col-navbar-content" lg={8} md={4} sm={4}>
              <div className="navbar-content">
                <NavbarContent />
              </div>
              <div className="navbar-icon-content none">
                {showSidebar ? (
                  <AiOutlineClose onClick={handleCloseSidebar}></AiOutlineClose>
                ) : (
                  <AiOutlineMenu onClick={handleOpenSidebar}></AiOutlineMenu>
                )}
              </div>
            </Col>
            <Col className="header-logo-seccond none col-logo" md={4} sm={4}>
              <Link to={"/"}>
                <div className="navbar-logo">
                  <img
                    className="header-logo"
                    src="https://cdn.shopify.com/s/files/1/0299/9497/5365/files/logo_9036676e-1709-4680-9f5a-97e5d10a93ae_90x.png?v=1630939482"
                    alt="logo"
                  ></img>
                </div>
              </Link>
            </Col>
            <Col className="col-navbar-user" lg={2} md={4} sm={4}>
              <div className="navbar-login-register">
                <NavbarUser />
              </div>
            </Col>
          </Row>
        </div>
      </div>
      <div className={showSidebar ? "show" : "sidebar"}>
        {Sidebarlist && (
          <div className="siderbar-list">
            <Nav className="nav-sidebar" activeKey="/home">
              <Nav.Item className="nav-item-sidebar" onClick={()=>handleCloseSidebar()}>
                <Link to={"/"} className="nav-link-sidebar">Home</Link>
              </Nav.Item>
              <Nav.Item
                className="nav-item-sidebar sidebar-keyboard"
                onClick={handleOpenCategory}
              >
                <Link className="nav-link-sidebar">Keyboard Kit</Link>
                <AiOutlineArrowRight></AiOutlineArrowRight>
              </Nav.Item>
              <Nav.Item className="nav-item-sidebar">
                <Link className="nav-link-sidebar">Discord server</Link>
              </Nav.Item>
              <Nav.Item className="nav-item-sidebar">
                <Link className="nav-link-sidebar">Catalog</Link>
              </Nav.Item>
              <Nav.Item className="nav-item-sidebar">
                <Link className="nav-link-sidebar">About us</Link>
              </Nav.Item>
            </Nav>
          </div>
        )}
        {showSidebarCategory && (
          <div className="sidebar-category">
            <div className="back-sidebar-list" onClick={handleCloseCategory}>
              <AiOutlineArrowLeft className="back-sidebar-icon"></AiOutlineArrowLeft>
            </div>
            <ul className="sidebar-category-list">
              {categories.map((item, index) => {
                return <li className="sidebar-category-item">{item.name}</li>;
              })}
            </ul>
          </div>
        )}
        <div className="sidebar-login">
          <div>
            <Link to={"/login-page"} className="user-login" onClick={()=>handleCloseSidebar()}>
              <AiOutlineUser className="login-icon-sidebar"></AiOutlineUser>
              <p className="login-content-sidebar">Login</p>
            </Link>
          </div>
          <div className="icon-sidebar">
            <AiFillFacebook></AiFillFacebook>
            <AiFillInstagram></AiFillInstagram>
            <AiFillYoutube></AiFillYoutube>
          </div>
        </div>
      </div>
    </div>
  );
}
