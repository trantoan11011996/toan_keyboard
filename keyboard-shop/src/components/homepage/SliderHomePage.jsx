import React from "react";
import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
export default function ImageHomePage() {
  return (
    <div className="image-homepage">
      <Row className="row-image-slide">
        <Col md={6} className="col-image-homepage-first">
          <div className="image-home">
            <img src="https://cdn.shopify.com/s/files/1/0299/9497/5365/products/5_1024x1024_2x_da480a18-5860-4094-8d60-dae7dd428205_1100x.webp?v=1659513244"></img>
          </div>
        </Col>
        <Col md={6} className="col-image-homepage-seccond">
          <div className="image-home">
            <img src="https://cdn.shopify.com/s/files/1/0299/9497/5365/products/8_1024x1024_2x_8666968f-9891-4691-ae18-d81c91894cee_1100x.webp?v=1659519061"></img>
          </div>
        </Col>
      </Row>
      <div className="btn-product-page">
        <h1>Bin.KeyBoard</h1>
        <Link to={"/product-page"}>
          <button>Shop all</button>
        </Link>
      </div>
    </div>
  );
}
