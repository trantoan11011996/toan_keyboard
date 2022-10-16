import React, { useEffect, useState } from "react";
import { Nav, Navbar, Container } from "react-bootstrap";
import { DownOutlined } from "@ant-design/icons";
import { Dropdown, Menu, Space } from "antd";
import { Link } from "react-router-dom";
import { AiOutlineArrowDown } from "react-icons/ai";
import axios from "axios";
import "../header/header.css";


export default function NavbarContent() {
  const [showDropdow, setShowDropdow] = useState(false);
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

  const handleDropdown = () => {
    setShowDropdow(!showDropdow);
  };
  const getID=(id)=>{
    console.log(id)
  }
  return (
    <Navbar expand="lg">
      <Container className="navbar-product">
        <Nav className="me-auto nav-link">
          <Nav className="nav-home nav-content">
            <Link className="nav-link-home link" to={"/"}>
              Home
            </Link>
          </Nav>
          <Dropdown className="nav-content"
            overlay={
              <Menu className="dropdow">
                {categories.map((value, index) => {
                  return(
                    <Menu.Item className="dopdown-content"  key={index} onClick={()=>getID(value._id)}>{value.name}</Menu.Item> 
                  )
                })}
              </Menu>
            }
            trigger={["click"]}
          >
              <Space className="dropdown-title">
                KeyBoard Kit
             <AiOutlineArrowDown className="dropdow-icon"></AiOutlineArrowDown>
              </Space>
          </Dropdown>
          <Nav className="nav-discord nav-content">
            <Link className="nav-link-discord link" to={""}>
              Discord server
            </Link>
          </Nav>
          <Nav className="nav-product nav-content">
            <Link className="nav-link-product link" to={"/product-page"}>
              Catalog
            </Link>
          </Nav>
          <Nav className="nav-about nav-content">
            <Link className="nav-link-about link" to={"/about-page"}>
              About us
            </Link>
          </Nav>
        </Nav>
      </Container>
    </Navbar>
  );
}
