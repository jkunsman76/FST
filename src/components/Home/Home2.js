import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {AiFillFacebook} from "react-icons/ai";


function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
            We're here for all of your classic car, hot rod, & restomod <span className="purple">needs </span> !
            </h1>
            <p className="home-about-body">
            We specialize in restorations and customizations of classic, hotrod, exotic, muscle car, rat rod automobiles, and many more. 
            <br />
            <br />
            Our work has landed many of our customer's vehicles in national magazines like Super Chevy and Truckin', as well as television programs like Musclecar TV, Hotrod TV, and Flowmaster commercials.
            <br />
            <br />
            Ask us about our custom fabricating and machine shop work!
              <br />
              <br />

            </p>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
           
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
