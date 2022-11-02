import { useState } from "react";
import {
  AiOutlineSearch,
  AiOutlineUser,
  AiOutlineShoppingCart,
  AiOutlineClose,
} from "react-icons/ai";
import "../header/header.css";
import { Link, useNavigate } from "react-router-dom";
import { Input, Space } from "antd";
import { useContext } from "react";
import { AuthContext, logOut } from "../../context/AuthContext";

export default function NavbarUser({ cart }) {
  const { currentUser} = useContext(AuthContext);
  const [showModal, setShowModal] = useState(false);
  const [showBoxUser, setShowBoxUser] = useState(false);

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
              <input type="text" className="input-search" placeholder="" />
              <label for="search" className="label-input">
                Search
              </label>
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

      <div
        className=" user-icon user-login-icon"
        onMouseLeave={(e) => setShowBoxUser(false)}
      >
        <Link to={currentUser ? "/user-info" : "/login-page"}>
          <AiOutlineUser
            className="icon-user"
            onMouseEnter={(e) => setShowBoxUser(true)}
          ></AiOutlineUser>
        </Link>
      </div>
      <div className=" user-icon cart-user-icon">
        <Link to={"/cart"}>
          <AiOutlineShoppingCart className="icon-user cart-icon"></AiOutlineShoppingCart>
          {cart.length !== 0 ? (<p className="cart-amount">{cart.length}</p>): null}
        </Link>
      </div>
    </div>
  );
}
