import React, { useRef, useState, useEffect, useContext } from "react";
import {
  Button,
  Col,
  Container,
  Form,
  InputGroup,
  OverlayTrigger,
  Row,
  Tooltip,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { IoIosArrowBack } from "react-icons/io";
import { AiFillQuestionCircle } from "react-icons/ai";
import "../checkout/checkout.css";

export default function CheckOutPage({}) {
  const {
    cart,
    setDisplayHeaderFooter,
    currentUser,
    hanldeCraeteShippingInfo,
    setCity,
    setDistric,
    setAddress,
    city,
    address,
    distric,
  } = useContext(AuthContext);

  const [alertLogin, setAlertLogin] = useState(true);
  const [showNotiPhone, setShowNotiPhone] = useState(false);
  useEffect(() => {
    setDisplayHeaderFooter(false);
  }, []);
  let total = 0;
  for (let item of cart) {
    total = total + item.totalPrice;
  }
  const submitNewShippingInfo = (e) => {
    e.preventDefault();
    if (currentUser) {
      hanldeCraeteShippingInfo(city, distric, address, currentUser.id, cart);
      setAlertLogin(false);
    } else {
      setAlertLogin(true);
    }
  };
  const handleMouseOver = () => {
    setShowNotiPhone(true);
  };

  const handleMouseOut = () => {
    setShowNotiPhone(false);
  };
  console.log("cart", cart);
  return (
    <div className="checkout-page">
      <Container className="container-checkout-page" fluid>
        <Row className="row-checkout">
          <Col md={6} className="info-cart">
            <Row>
              <Col md={4}></Col>
              <Col className="col-checkout">
                <h1 className="checkout-header">Keyboard Shop</h1>
                <div className="contact-user">
                  <p>Contact infomation</p>
                </div>
                {currentUser ? (
                  <>
                    <Form onSubmit={submitNewShippingInfo}>
                      <Row>
                        <Col md={12} className="checkout-email-col">
                          <input
                            className="input-email-checkout"
                            type="email"
                            value={currentUser.email}
                            placeholder={currentUser.email}
                          ></input>
                          <label className="checkout-label-email">Email</label>
                        </Col>
                      </Row>
                      <Row className="row-input-checkout">
                        <p className="shipping-address">Shipping address</p>
                        <Col md={6}>
                          <InputGroup className="input-group-checkout input-name-checkout">
                            <Form.Control
                              type="string"
                              placeholder="First name (optional)"
                            ></Form.Control>
                          </InputGroup>
                        </Col>
                        <Col md={6}>
                          <InputGroup className="input-group-checkout">
                            <Form.Control
                              type="string"
                              placeholder="Last name (optional)"
                            ></Form.Control>
                          </InputGroup>
                        </Col>
                      </Row>
                      <Row className="row-input-checkout">
                        <Col>
                          <InputGroup className="input-group-checkout">
                            <Form.Control
                              type="string"
                              placeholder="Company (optional)"
                            ></Form.Control>
                          </InputGroup>
                        </Col>
                      </Row>
                      <Row className="row-input-checkout">
                        <Col>
                          <InputGroup className="input-group-checkout">
                            <Form.Control
                              type="string"
                              placeholder="Address"
                              required
                              value={address}
                              onChange={(e) => setAddress(e.target.value)}
                            ></Form.Control>
                          </InputGroup>
                        </Col>
                      </Row>
                      <Row className="row-input-checkout">
                        <Col>
                          <InputGroup className="input-group-checkout">
                            <Form.Control
                              placeholder="Distric"
                              type="string"
                              required
                              value={distric}
                              onChange={(e) => setDistric(e.target.value)}
                            ></Form.Control>
                          </InputGroup>
                        </Col>
                      </Row>
                      <Row className="row-input-checkout">
                        <Col md={6}>
                          <InputGroup className="input-group-checkout">
                            <Form.Control
                              type="string"
                              placeholder="City"
                              required
                              value={city}
                              onChange={(e) => setCity(e.target.value)}
                            ></Form.Control>
                          </InputGroup>
                        </Col>
                        <Col md={6}>
                          <InputGroup className="input-group-checkout">
                            <Form.Control
                              type="string"
                              placeholder="Postal code"
                            ></Form.Control>
                          </InputGroup>
                        </Col>
                      </Row>
                      <Row className="row-input-checkout">
                        <Col className="checkout-phone-col">
                          <input
                            className="input-phone-checkout"
                            type="string"
                            placeholder="Phone"
                          ></input>
                          <label
                            className="checkout-label-phone"
                            onMouseOver={handleMouseOver}
                            onMouseOut={handleMouseOut}
                          >
                            {/* <AiFillQuestionCircle></AiFillQuestionCircle> */}
                          </label>
                          {/* {showNotiPhone && (
                          <div className="noti-phone">
                            Phone
                          </div>
                        )} */}
                          {["top"].map((placement) => (
                            <OverlayTrigger
                              key={placement}
                              placement={placement}
                              overlay={
                                <Tooltip id={`tooltip-${placement}`}>
                                  In case we need to contact you about your
                                  order
                                </Tooltip>
                              }
                            >
                              <button
                                variant="secondary"
                                className="noti-phone"
                              >
                                ?
                              </button>
                            </OverlayTrigger>
                          ))}
                        </Col>
                      </Row>
                      <div className="btn-wrap">
                        <Link to={"/cart"}>
                          <div className="return-wrap">
                            <IoIosArrowBack></IoIosArrowBack>
                            <p className="return-content">Return to cart</p>
                          </div>
                        </Link>
                        <Button type="submit" className="btn-continue">
                          Continue to shopping
                        </Button>
                      </div>
                    </Form>
                  </>
                ) : (
                  <>
                    {alertLogin ? (
                      <>
                        <p>login to continue shopping</p>
                        <Link to={"/login-page"}>
                          <Button>Login</Button>
                        </Link>
                      </>
                    ) : (
                      <Button type="submit">Conitnue Shipping</Button>
                    )}
                  </>
                )}
                <Row className="border-col-checkout">
                  <Col md={12}></Col>
                </Row>
                <Row className="footer-col-checkout">
                  <Col className="footer-checkout">
                    <Link className="link-footer">
                      <p>Refund policy</p>
                    </Link>
                    <Link className="link-footer">
                      <p>Shipping policy</p>
                    </Link>
                    <Link className="link-footer">
                      <p>Privacy policy</p>
                    </Link>
                    <Link className="link-footer">
                      <p>Terms of service</p>
                    </Link>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Col>
          <Col md={6} className="col-checkout pay-cart">
            <Row>
              {cart?.map((item, index) => {
                return (
                  <>
                    <Col md={6}>
                      <img className="image-product" src={item.image}></img>
                    </Col>
                    <Col>
                      <p>Price : {item.totalPrice}</p>
                    </Col>
                  </>
                );
              })}
              <p>total price : {total}</p>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

{
  /* <Link to={"/cart"}>
        <button onClick={() => setDisplayHeaderFooter(true)}>
            return to cart
        </button>
    </Link> */
}
