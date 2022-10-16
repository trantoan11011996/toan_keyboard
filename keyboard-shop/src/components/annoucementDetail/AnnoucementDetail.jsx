import React from "react";
import { useEffect, useState } from "react";
import { Container, Image } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { getAnnoucemenDetail } from "../../data-sample/AnnoucementsData";
import "../annoucementDetail/detail.css";
import "../annoucementDetail/reponsive.css";
export default function AnnoucementDetail() {
  const { id } = useParams();
  const [detail, setDetail] = useState(null);
  useEffect(() => {
    const detailData = getAnnoucemenDetail(id);
    setDetail(detailData);
  }, [id]);
  return (
    <div className="annoucement-detail">
      <Container className="wrap-annouce-detail" fluid>
        <div className="main-image-detail">
          {detail == null ? (
            <h1>Loading</h1>
          ) : (
            <img
              className="image-detail"
              src={detail.image_detail_header}
            ></img>
          )}
        </div>
        <div className="wrap-content-detail">
          {detail == null ? (
            <h1>loading</h1>
          ) : (
            <div className="content-detail">
              <h1 className="cotent-detail-header">{detail.title}</h1>
              <p className="content-detail-date">{detail.date}</p>
              <p className="content-detail-main">{detail.main_content}</p>
            </div>
          )}
        </div>
      </Container>
    </div>
  );
}
