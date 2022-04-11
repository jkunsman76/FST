import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillFacebook
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copywright">
         
        </Col>
        <Col md="4" className="footer-copywright">
        <h2>Check Us Out</h2>

            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://www.facebook.com/FST.Restorations"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillFacebook />
                </a>
              </li>
            </ul>
        </Col>
        <Col md="4" className="footer-body">
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
