import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../footer/footer.css";
import { AiFillYoutube, AiFillFacebook, AiFillInstagram } from "react-icons/ai";
import { FaDiscord } from "react-icons/fa";
export default function Footer() {
  return (
    <div className="footer">
      <Container>
          <Row>
            <Col md={6}>
              <div className="footer-link-page">
                <h1 className="list-links-footer">Quick links</h1>
                <ul className="list-links">
                  <li>
                    <Link to={"/privacy-policy"} className="list-link-item">Privacy Policy</Link>
                  </li>
                  <li>
                    <Link to={"/refund-policy"} className="list-link-item">Refund Policy</Link>
                  </li>
                  <li>
                    <Link to={"/shipping-policy"} className="list-link-item">Shipping Policy</Link>
                  </li>
                  <li>
                    <Link to={"/termservice-policy"} className="list-link-item">Terms of Service</Link>
                  </li>
                </ul>
              </div>
            </Col>
            <Col md={6}>
              <div className="discord-footer">
                <h1 className="discord-header-footer">
                  Join us on our Discord Community
                </h1>
                <p className="discord-content-footer">
                  You could join our{" "}
                  <a className="discord-link" href="">
                    Discord here
                  </a>{" "}
                  for Sale Announcements.
                </p>
              </div>
            </Col>
          </Row>
          <div className="link-icon-footer">
            <AiFillFacebook className="fb-icon icon-footer"></AiFillFacebook>
            <AiFillInstagram className="ins-icon icon-footer"></AiFillInstagram>
            <FaDiscord className="discord-icon icon-footer"></FaDiscord>
            <AiFillYoutube className="ytb-icon icon-footer"></AiFillYoutube>
          </div>
      </Container>
      <div className="footer-border"></div>
      <div className="footer-copyright">
        © 2022, <Link to={"/"}>Mechkey Store</Link>
        </div>
    </div>
  );
}
