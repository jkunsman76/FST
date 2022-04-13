import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { AiOutlineDownload } from "react-icons/ai";


function ContactNew() {
  const [width, setWidth] = useState(1200);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  return (
    <div>
      <Container fluid className="contact-section">
        <Row style={{ justifyContent: "center", position: "relative" }}>
      
        </Row>

        <Row className="contact">

        </Row>

        <Row style={{ justifyContent: "center", position: "relative" }}>
        
        </Row>
      </Container>
    </div>
  );
}

export default ContactNew;
