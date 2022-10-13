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
          <Nav className="nav-home">
            <Link className="nav-link-home link" to={"/home-page"}>
              Home
            </Link>
          </Nav>
          <Dropdown
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
                <DownOutlined />
              </Space>
          </Dropdown>
          <Nav className="nav-discord">
            <Link className="nav-link-discord link" to={""}>
              Discord server
            </Link>
          </Nav>
          <Nav className="nav-product">
            <Link className="nav-link-product link" to={"/product-page"}>
              Catalog
            </Link>
          </Nav>
          <Nav className="nav-about">
            <Link className="nav-link-about link" to={""}>
              About us
            </Link>
          </Nav>
        </Nav>
      </Container>
    </Navbar>
  );
}