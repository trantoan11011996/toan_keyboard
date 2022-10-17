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
              <h1 className="content-detail-header">{detail.title}</h1>
              <p className="content-detail-date">{detail.date}</p>
              <p className="content content-detail-main">
                {detail.main_content}
              </p>
              <p className="content content-detail-album">
                {detail.detail_album} :{" "}
                <a className="album_link">{detail.link_album}</a>
              </p>
              <p className="content content-detail-marker">
                {detail.detail_marker} : <a className="link-marker">{detail.link_marker}</a>
              </p>
              <div className="child-content">
                <p className="content child-content-title">
                  {detail.child_content.title} :{" "}
                </p>
                <ul className="child-content-list">
                  {detail.child_content.content.map((value, index) => {
                    return (
                      <li className="content child-content-item">{value}</li>
                    );
                  })}
                </ul>
              </div>
            </div>
          )}
          <div className="footer-image-detail">
            {detail == null ? (
              <h1>Loading</h1>
            ) : (
              <img
                className="image-footer"
                src={detail.image_detail_footer}
              ></img>
            )}
          </div>
        </div>
      </Container>
    </div>
  );
}
