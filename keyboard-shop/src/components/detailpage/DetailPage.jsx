import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Button, Col, Container, Row } from "react-bootstrap";
import axios from "axios";
import Lottie from "lottie-react";
import location from "./animationJsonDetail/79794-world-locations.json";
import success from "./animationJsonDetail/97240-success.json";
import { useEffect } from "react";
import "../detailpage/detail.css";
export default function Detailpage() {
  const { id } = useParams();
  const [detailItem, setDetailItem] = useState({});
  const [variantRender, setVariantRender] = useState([]);
  const [complete, setComplete] = useState(undefined);
  const [imageVariant, setImageVariant] = useState({});
  const [imageDetail, setImageDetail] = useState([]);

  const getDetail = async () => {
    const productDetail = axios
      .get(`https://keyboard-shop.herokuapp.com/api/products/${id}`)
      .then((res) => {
        return res.data;
      })
      .then((data) => {
        setDetailItem(data.product);
        setVariantRender(data.result);
        localStorage.setItem("detail-product", JSON.stringify(data.product));
        setTimeout(() => {
          setComplete(true);
        }, 1500);
      });
    return productDetail;
  };
  useEffect(() => {
      const detailData = async()=>{
        await getDetail()
        const detail = JSON.parse(localStorage.getItem("detail-product"));
        setImageVariant(detail.variants[0].image);
        setImageDetail(detail.imageDetails);
      }
      detailData()
  }, [id]);
  
 
  
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
                <img className="image-variant" src={imageVariant}></img>
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
                  <p className="detail-category-name">{detailItem.category.name}</p>
                  <h1 className="detail-product-name">{detailItem.name}</h1>
                  <p className="detil-product-price">${detailItem.price} USD</p>
                  
            </Col>
          </Row>
        </Container>
      )}
    </div>
  );
}
