import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { getDataAnnoucement } from "../../data-sample/AnnoucementsData";
import { Container, Row, Col } from "react-bootstrap";
import Image from "react-bootstrap/Image";
import { Link } from "react-router-dom";

export default function Annoucements() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const result = getDataAnnoucement();
    setData(result);
  }, []);
  console.log(data);
  return (
    <div className="container-annoucement">
      <Container className="wrap-content" fluid>
        <h1 className="annouce-title">Annoucements</h1>
        <Row className="row-content">
          {data.map((item, index) => {
            return (
              <Col className="col-annoucement mt-3" md={4} sm={12}>
                <Link to={"/annoucement-detail/" + item.id}>
                <div className="image-annouce-wrap">
                  <Image
                    className="image-annouce"
                    src={item.image_home}
                    fluid
                  ></Image>
                </div>
                <div className="content-annouce">
                  <h1 className="title-content-annouce">{item.title}</h1>
                  <p className="date-content-annouce">{item.date}</p>
                  <p className="main-content-annouce">{item.main_content}</p>
                </div>
                </Link>
              </Col>
            );
          })}
        </Row>
      </Container>
    </div>
  );
}
