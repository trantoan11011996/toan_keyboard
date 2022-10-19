import React from "react";
import { AuthContext } from "../../../context/AuthContext";
import ProductListHome from "../ProductListHome/ProductListHome";
import { Container, Row, Col } from "react-bootstrap";
import { useState, useEffect, useContext } from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import axios from "axios";
export default function CategoryHomeList({ id, name }) {
  const { productData } = useContext(AuthContext);
  const [variantMain, setVariantMain] = useState(null);
  const [detailProduct, setDetailProduct] = useState({});
  const [inputQty, setInputQty] = useState(0);

  let data = [...productData].filter((item) => item.category._id == id);

  /// GET RESULT OF VARIANT TO RENDER
  const variant = data[0]?.variants;
  let arrAtributes = [];
  for (let i = 0; i < variant?.length; i++) {
    const attributes = variant[i].attributes;
    for (let j = 0; j < attributes.length; j++) {
      arrAtributes.push(attributes[j]);
    }
  }
  // lọc trùng
  arrAtributes = arrAtributes.filter(
    (value, index, self) =>
      index ===
      self.findIndex((t) => t.name === value.name && t.value === value.value)
  );
  const result = Array.from(new Set(arrAtributes.map((s) => s.name))).map(
    (lab) => {
      return {
        name: lab,
        value: arrAtributes
          .filter((s) => s.name === lab)
          .map((edition) => edition.value),
      };
    }
  );

  const inCreaseInput = () => {
    setInputQty((value) => value + 1);
  };
  const deCreaseInput = () => {
    setInputQty((value) => value - 1);
  };
  const getID = (id)=>{
    console.log('id',id);
  }
  return (
    <div className="category-home-list">
      <Container className="container-category-home" fluid>
        <div className="main-product">
          <Row>
            <Col md={6} className="home-image-product">
              <img src={data[0]?.imageMain}></img>
            </Col>
            <Col md={6} className="home-content-product">
              <p>{data[0]?.category.name}</p>
              <h1>{data[0]?.name}</h1>
              <p>${data[0]?.price}.00</p>
              {result?.map((item, index) => {
                return (
                  <>
                    <h1>{item.name}</h1>
                    {item.value.map((item, index) => {
                      return <p>{item}</p>;
                    })}
                  </>
                );
              })}
              <div className="qty-product-home">
                {inputQty == 0 ? (
                  <button onClick={() => deCreaseInput()} disabled>
                    -
                  </button>
                ) : (
                  <button onClick={() => deCreaseInput()}>
                    -
                  </button>
                )}

                <input
                  className="input-qty-home"
                  type="number"
                  value={inputQty}
                  min={0}
                ></input>
                <button onClick={() => inCreaseInput()}>+</button>
              </div>
              <div className="add-cart-home">
                <button>Add to cart</button>
              </div>
              <div className="buy-now-home">
                <button>Buy it now</button>
              </div>
              <div className="view-detail" onClick={()=>getID(data[0]?._id)}>
                <p>View full details</p>
                <span>
                  <AiOutlineArrowRight></AiOutlineArrowRight>
                </span>
              </div>
            </Col>
          </Row>
        </div>
        {data.length == 0 ? null : (
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
