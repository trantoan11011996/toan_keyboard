import React from "react";
import { AuthContext } from "../../../context/AuthContext";
import ProductListHome from "../ProductListHome/ProductListHome";
import { Container, Row, Col } from "react-bootstrap";
import { useState, useEffect, useContext } from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import axios from "axios";
import { Radio } from "antd";
import { Link } from "react-router-dom";
export default function CategoryHomeList({ id, name }) {
  const { productData } = useContext(AuthContext);
  const [variantMain, setVariantMain] = useState(null);
  const [detailProduct, setDetailProduct] = useState({});
  const [selectedVariants, setSelectedVariants] = useState({});
  const onSelectVariant = (variantName, variantValue) => {
    setSelectedVariants({ ...selectedVariants, [variantName]: variantValue });
  };
  const [inputQty, setInputQty] = useState(0);
  console.log("product", productData);
  let data = [...productData].filter((item) => {
    return item.category._id == id;
  });
  console.log("data", id);
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
  const getID = (id) => {
    console.log("id", id);
  };
  useEffect(() => {
    console.log("selected variant", selectedVariants);
    let foundVariant = data[0]?.variants.find((item) => {
      return item.attributes.every((attribute) => {
        return attribute.value == selectedVariants[attribute.name];
      });
    });
    console.log("foundvariant", foundVariant);
  }, [selectedVariants]);
  return (
    <div className="category-home-list">
      <Container className="container-category-home" fluid>
        <div className="main-product">
          <Row className="row-content-home-product">
            <Col md={6} className="home-image-product">
              <img src={data[0]?.imageMain}></img>
            </Col>
            <Col md={6} className="home-content-product">
              <p className="product-category">{data[0]?.category.name}</p>
              <h1 className="product-name">{data[0]?.name}</h1>
              <p className="product-price">${data[0]?.price}.00</p>
              <div className="product-variant">
                {result?.map((item, index) => {
                  return (
                    <div>
                      <Radio.Group
                        className="variant-group"
                        key={item.name}
                        value={selectedVariants[item.name]}
                        onChange={(e) =>
                          onSelectVariant(item.name, e.target.value)
                        }
                      >
                        <h1 className="variant-title">{item.name}</h1>
                        {item.value.map((value, index) => {
                          return (
                            <Radio.Button
                              key={value}
                              value={value}
                              className="btn-select-variant"
                            >
                              {value}
                            </Radio.Button>
                          );
                        })}
                      </Radio.Group>
                    </div>
                  );
                })}
              </div>
              <div className="qty-product-home">
                <p className="qty-title">Quantity</p>
                <div className="qty-input">
                  {inputQty == 0 ? (
                    <button
                      className="btn-qty"
                      onClick={() => deCreaseInput()}
                      disabled
                    >
                      -
                    </button>
                  ) : (
                    <button className="btn-qty" onClick={() => deCreaseInput()}>
                      -
                    </button>
                  )}

                  <input
                    className="value-qty"
                    type="number"
                    value={inputQty}
                    min={0}
                  ></input>
                  <button className="btn-qty" onClick={() => inCreaseInput()}>
                    +
                  </button>
                </div>
              </div>
              <div className="add-cart-home">
                <button>Add to cart</button>
              </div>
              <div className="buy-now-home">
                <button>Buy it now</button>
              </div>
              <div className="view-detail" onClick={() => getID(data[0]?._id)}>
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
            <Link to={"/product-page"}>
              <button className="btn-view-all">View all</button>
            </Link>
          </div>
        )}
      </Container>
    </div>
  );
}
