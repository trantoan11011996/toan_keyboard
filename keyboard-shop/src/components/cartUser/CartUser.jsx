import React from "react";
import { useContext } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import "../cartUser/cart.css";
import { BsFillTrashFill } from "react-icons/bs";
import CartBoxContext from "../../context/CartBoxContext";

export default function CartUser() {
  const { cart, setCart, setDisplayHeaderFooter } = useContext(AuthContext)
  const {setIsHeaderShow} = useContext(CartBoxContext)
  const [variantCart, setVariantCart] = useState({});
  const [inputQtyCart, setInputQtyCart] = useState();
  const [variantOrder, setVariantOrder] = useState({});
  let totalPriceOrder = 0;

  useEffect(() => {
    for (let item of cart) {
      setVariantCart(item.variant);
    }
    setDisplayHeaderFooter(true);
  }, []);
  const handleTotalPrice = () => {
    for (let item of cart) {
      totalPriceOrder = totalPriceOrder + item.totalPrice;
    }
  };
  handleTotalPrice();

  const inCreaseInputCart = (id) => {
    let cartMap;
    setCart(
      (cartMap = cart.map((item) => {
        if (item._id === id) {
          const cloneItem = { ...item, amount: item.amount + 1 };
          cloneItem["totalPrice"] = cloneItem.amount * cloneItem.price;
          return cloneItem;
        }
        return item;
      }))
    );
    localStorage.setItem("itemInCart", JSON.stringify(cartMap));
  };

  const deCreaseInputCart = (id) => {
    let cartMap;
    setCart(
      (cartMap = cart.map((item) => {
        if (item._id === id) {
          const cloneItem = { ...item, amount: item.amount - 1 };
          cloneItem["totalPrice"] = cloneItem.amount * cloneItem.price;
          return cloneItem;
        }
        return item;
      }))
    );
    localStorage.setItem("itemInCart", JSON.stringify(cartMap));
  };
  const hanldeAmountCart = (e) => {
    setInputQtyCart(Number(e.target.value));
  };
  const deleteProductCart = (id) => {
    const cloneCart = [...cart];
    const filterResult = cloneCart.filter((item) => item._id !== id);
    setCart(filterResult);
    localStorage.setItem("itemInCart", JSON.stringify(filterResult));
  };
  return (
    <div className="cart-user">
      <Container className="container-cart-user" fluid>
        {cart.length !== 0 ? (
          <>
            <div className="cart-header-wrap">
              <h1 className="cart-header">Your Cart</h1>
              <Link to={"/product-page"}>
                <div className="btn-shopping">Continue shopping</div>
              </Link>
            </div>
            <div className="cart-product-list">
              <Row>
                <Col md={6}>
                  <p className="product-cart cart-field-title">PRODUCT</p>
                </Col>
                <Col md={3}>
                  <p className="qantity-cart cart-field-title">QUANTITY</p>
                </Col>
                <Col md={3}>
                  <p className="total-cart cart-field-title">TOTAL</p>
                </Col>
              </Row>
              <Row className="row-cart-wrap">
                {cart.map((item, index) => {
                  return (
                    <Row className="row-cart">
                      <Col md={6}>
                        <div className="product-info">
                          <Row>
                            <Col md={3} className="col-image-cart">
                              <img
                                className="image-product-cart"
                                src={item.image}
                              ></img>
                            </Col>
                            <Col md={8} className="col-content-cart">
                              {Object.keys(item.variant).map((key, index) => {
                                return (
                                  <p>
                                    {key} : {item.variant[key]}
                                  </p>
                                );
                              })}
                            </Col>
                          </Row>
                        </div>
                      </Col>
                      <Col md={3} className="col-qty-cart">
                        <div className="qty-input">
                          {item.amount == 0 ? (
                            <button
                              className="btn-qty"
                              onClick={() => deCreaseInputCart()}
                              disabled
                            >
                              -
                            </button>
                          ) : (
                            <button
                              className="btn-qty"
                              onClick={() => deCreaseInputCart(item._id)}
                            >
                              -
                            </button>
                          )}

                          <input
                            className="value-qty"
                            type="number"
                            value={item.quantity}
                            min={0}
                            onChange={hanldeAmountCart}
                          ></input>
                          <button
                            className="btn-qty"
                            onClick={() => inCreaseInputCart(item._id)}
                          >
                            +
                          </button>
                        </div>
                        <BsFillTrashFill
                          className="delete-product-cart"
                          onClick={() => deleteProductCart(item._id)}
                        ></BsFillTrashFill>
                      </Col>
                      <Col className="col-total" md={3}>
                        <p className="total-content">$ {item.totalPrice}</p>
                      </Col>
                    </Row>
                  );
                })}
              </Row>
            </div>
            <Row className="row-footer-cart">
              <Col className="col-instruction" md={6}></Col>
              <Col className="col-create-order">
                <div className="subtotal-cart">
                  <p className="subtotal-content">Subtotal </p>
                  <p className="subtotal-value">${totalPriceOrder}</p>
                </div>
                <Link to={"/checkout"} className="link-checkout">
                  <button
                    className="btn-checkout"
                    onClick={() => setDisplayHeaderFooter(false)}
                  >
                    Check out
                  </button>
                </Link>
              </Col>
            </Row>
          </>
        ) : (
          <div className="cart-empty">
            <h1>Your cart is empty</h1>
            <p className="cart-account">Have an account ?</p>
            <div className="login-cart">
              <Link to={"/login-page"}>
                <p className="login-link">Log in</p>
              </Link>
              <span>to checkout faster</span>
            </div>
          </div>
        )}
      </Container>
    </div>
  );
}
