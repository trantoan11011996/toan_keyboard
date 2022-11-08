import React from "react";
import "../cartbox/cartbox.css";
import { Row, Col } from "react-bootstrap";
import { useContext } from "react";
import CartBoxContext from "../../context/CartBoxContext";
import { AiOutlineCheck } from "react-icons/ai";
import { Link } from "react-router-dom";
export default function CartBox({ itemAdd, cart }) {
  const { isCartBoxOpen, setIsCartBoxOpen } = useContext(CartBoxContext);
  return (
    <div className={isCartBoxOpen ? "show-cart-detail" : "cart-detail"}>
      <div className="btn-close-wrap">
        <button
          className="btn-close-cartbox"
          onClick={() => setIsCartBoxOpen(false)}
        >
          x
        </button>
      </div>
      <div className="item-added">
        <AiOutlineCheck className="icon-check"></AiOutlineCheck>
        <p>Item add to your cart</p>
      </div>
      <div className="cart-box-info">
        <Row>
          <Col md={5}>
            <img className="image-cart-box" src={itemAdd.image}></img>
          </Col>
          <Col md={7}>
            {itemAdd.variant ? (
              <div className="variant-name">
                {Object.keys(itemAdd.variant).map((key, index) => {
                  return (
                    <p>
                      {key} : {itemAdd.variant[key]}
                    </p>
                  );
                })}
              </div>
            ) : (
              <>null</>
            )}
          </Col>
        </Row>
      </div>
      <Link to={"/cart"}>
        <div className="cartbox-amount">
          <p className="cartbox-amount-content">View my cart</p>
          <p className="cartbox-amount-total">({cart?.length})</p>
        </div>
      </Link>
      <div className="cartbox-checkout">
        <p>Check out</p>
      </div>
      <Link to={"/product-page"}>
        <div className="cartbox-continue">
          <p>Continue shopping</p>
        </div>
      </Link>
    </div>
  );
}
