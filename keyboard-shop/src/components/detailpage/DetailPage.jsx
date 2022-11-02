import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import axios from "axios";
import Lottie from "lottie-react";
import location from "./animationJsonDetail/79794-world-locations.json";
import success from "./animationJsonDetail/97240-success.json";
import { useEffect } from "react";
import "../detailpage/detail.css";
import { Radio } from "antd";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import CartBoxContext from "../../context/CartBoxContext";
import DetailContent from "./detailcontent/DetailContent";
export default function Detailpage() {
  const { addToCart,alertDuplicate ,setAlertDuplicate} = useContext(AuthContext);
  const { id } = useParams();
  const [detailItem, setDetailItem] = useState({});
  const [variantRender, setVariantRender] = useState([]);
  const [variantImage,setVariantImage] = useState('')
  const [productVariant, setProductVariant] = useState([]);
  const [complete, setComplete] = useState(undefined);
  const [imageDetail, setImageDetail] = useState([]);
  const [selectedVariants, setSelectedVariants] = useState({});
  const [inputQty, setInputQty] = useState(0);
  const [variantOrder, setVariantOrder] = useState({});
  const [alerQty, setAlerQty] = useState(false);

  const onSelectVariant = (variantName, variantValue) => {
    setSelectedVariants({ ...selectedVariants, [variantName]: variantValue });
    setAlertDuplicate(false)
  };

  const getDetail = async () => {
    const productDetail = axios
      .get(`https://keyboard-shop.herokuapp.com/api/products/${id}`)
      .then((res) => {
        return res.data;
      })
      .then((data) => {
        setDetailItem(data.product);
        setVariantRender(data.result);
        setProductVariant(data.product.variants);
        localStorage.setItem("detail-product", JSON.stringify(data.product));
        let initialValue = {};
        for (let variant of data.result) {
          initialValue[variant.name] = variant.value[0];
        }
        setSelectedVariants(initialValue);
        setTimeout(() => {
          setComplete(true);
        }, 1500);
      });
    return productDetail;
  };
  useEffect(() => {
    const detailData = async () => {
      await getDetail();
      const detail = JSON.parse(localStorage.getItem("detail-product"));
      setImageDetail(detail.imageDetails);
    };
    detailData();
  }, [id]);
  console.log('detail',detailItem);
  useEffect(() => {
    let foundVariant = productVariant.find((item) => {
      return item.attributes.every((attribute) => {
        return attribute.value == selectedVariants[attribute.name];
      });
    });
    console.log(foundVariant);
    setVariantOrder(foundVariant);
    setVariantImage(foundVariant?.image)
  }, [selectedVariants]);
  const inCreaseInput = () => {
    setInputQty((value) => value + 1);
  };
  const deCreaseInput = () => {
    setInputQty((value) => value - 1);
  };
  const hanldeAmount = (e)=>{
    setInputQty(Number(e.target.value))
    
}
  const handleAddToCart = (qty) => {
    if (qty == 0) {
      setAlerQty(true)
    }else{
      addToCart(variantOrder, inputQty, selectedVariants)
      setAlerQty(false)
      return
    }
  };
  return (
    <div className="detail-page">
      {!complete ? (
        <div className="loading-product-detail">
          <Lottie animationData={location} className="lottie-location" />
        </div>
      ) : (
        <Container className="container-detail" fluid>
          <Row className="row-detail">
            <Col md={6}>
              <div className="image-variant">
                <img className="image-variant" src={variantImage}></img>
              </div>
              <Row className="row-image-detail">
                {imageDetail.map((item, index) => {
                  return (
                    <Col key={index} md={6}>
                      <img className="image-detail" src={item}></img>
                    </Col>
                  );
                })}
              </Row>
            </Col>
            <Col md={6} className="detail-content">
              <div className="detail-info">

              <p className="detail-category-name">{detailItem.category.name}</p>
              <h1 className="detail-product-name">{detailItem.name}</h1>
              <p className="detil-product-price">${detailItem.price} USD</p>
              <div className="product-variant">
                {variantRender.map((item, index) => {
                  return (
                    <Radio.Group
                      className="radio-custom"
                      key={index}
                      value={selectedVariants[item.name]}
                      onChange={(e) =>
                        onSelectVariant(item.name, e.target.value)
                      }
                    >
                      <h1 className="variant-title">{item.name}</h1>
                      {item.value.map((value, index) => {
                        return (
                          <Radio.Button
                            className="btn-select-variant"
                            key={value}
                            value={value}
                          >
                            {value}
                          </Radio.Button>
                        );
                      })}
                    </Radio.Group>
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
                    min={0}
                    value={inputQty}
                    onChange={hanldeAmount}
                    ></input>
                  <button className="btn-qty" onClick={() => inCreaseInput()}>
                    +
                  </button>
                </div>
              </div>
              <div className="add-cart-home">
                <button
                  onClick={()=>handleAddToCart(inputQty)}
                  >
                  Add to cart
                </button>
              </div>
              <Link to={"/order-page"}>
                <div className="buy-now-home">
                  <button>Buy it now</button>
                </div>
              </Link>
              {alerQty && (
                <Form.Text className="text-danger link-wrong-qty">
                  <a>Please enter your quantity</a>
                </Form.Text>
              )}
              {alertDuplicate &&(
                 <Form.Text className="text-danger link-wrong-qty">
                 <a>This item have already in your cart</a>
               </Form.Text>
              )}
              </div>
              <div className="detail-description">
                  <DetailContent description={detailItem.desc}/>
              </div>
            </Col>
          </Row>
        </Container>
      )}
     
    </div>
  );
}
