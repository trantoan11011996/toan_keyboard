import React from "react";
import { useContext } from "react";
import { AuthContext } from "../../../context/AuthContext";
import ProductListHome from "../ProductListHome/ProductListHome";
import { Container, Row,Col } from "react-bootstrap";
export default function CategoryHomeList({ id, name }) {
  const { productData } = useContext(AuthContext);

  let data = [...productData].filter((item) => item.category._id == id);
  console.log("data", data);
  return (
    <div className="category-home-list">
      <Container className="container-category-home" fluid>
        <div className="main-product">
            <Row>
                <Col md={6}>
                    <img src={data[0]?.imageMain}></img>
                </Col>
                <Col md={6}>
                    <p>{data[0]?.name}</p>
                </Col>
            </Row>
        </div>
        {data.length==0 ? null : (
          <div className="category-home-product">
            <h1 className="category-title">{name}</h1>
            <ProductListHome data={data} />
            <button className="btn-view-all">View all</button>
          </div>
        )}
      </Container>
    </div>
  );
}
