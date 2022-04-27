import React, { useState, useEffect, useRef } from "react";
import { Container, Row, Form, Col, Button } from "react-bootstrap";
import emailjs from "emailjs-com"
import { AiOutlineDownload } from "react-icons/ai";


function ContactNew() {
  const [width, setWidth] = useState(1200);
  const form = useRef()

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_wq5xgqe', 'template_6027bd7', form.current, 'SQNuGMS4AL3vI5Ek8')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      })
  }

  return (
    <div style={{height:'100%', width:'100%'}}>
      <Container fluid className="contact-section">
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Col>
            <Form ref={form} onSubmit={sendEmail}>
              <Form.Group className="email_form">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" name="user_name" />
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" name="user_email" />
                <Form.Label>Subject</Form.Label>
                <Form.Control type="text" name="subject" />
                <Form.Label>Message</Form.Label>
                <Form.Control as="textarea" rows={5} name="message" />
              </Form.Group>
              <Button variant="primary" type="submit" value="Send">Send</Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default ContactNew;
