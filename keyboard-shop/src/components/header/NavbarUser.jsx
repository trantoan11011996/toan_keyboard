import { useState } from "react";
import {
  AiOutlineSearch,
  AiOutlineUser,
  AiOutlineShoppingCart,
  AiOutlineClose,
} from "react-icons/ai";
import "../header/header.css";
import { Link } from "react-router-dom";
import { Input, Space } from "antd";
export default function NavbarUser() {
  const [showModal, setShowModal] = useState(false);
  const { Search } = Input;

  const onSearch = (value) => console.log(value);
  const handleOpenModal = () => {
    setShowModal(true);
  };
  const handleCloseModal = () => {
    setShowModal(false);
  };
  return (
    <div className="navbar-user">
      <div className="user-icon search-icon" onClick={handleOpenModal}>
        <AiOutlineSearch></AiOutlineSearch>
      </div>
      {showModal ? (
        <div className="container-modal" onClick={handleCloseModal}>
          <div
            className={showModal ? "show-modal-content" : "modal-content"}
            onClick={(e) => {
              // do not close modal if anything inside modal content is clicked
              e.stopPropagation();
            }}
          >
            <div className="input-container">
              <input type="text" className="input-search" placeholder=""/>
              <label for="search" className="label-input">Search</label>
            </div>
            <AiOutlineClose
              className="close-modal-btn"
              onClick={handleCloseModal}
            ></AiOutlineClose>
          </div>
        </div>
      ) : (
        <></>
      )}

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

{
  /* <div className="search-input">
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
          </div> */
}
