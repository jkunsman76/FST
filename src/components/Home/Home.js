import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import FSTResto from "../../Assets/FSTResto.jpg";
import Home2 from "./Home2";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">

        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
               Welcome To{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  
                </span>
              </h1>

              <h1 className="heading-name">
                
                <strong className="main-name"> FST Restorations</strong>
              </h1>

            </Col>

            <Col md={5} style={{ display: 'flex', paddingBottom: 20, justifyContent: "flex-end" }}>
              <img
                src={FSTResto}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "450px" }}
              />
            </Col>
          </Row>
        </Container>
      </Container>
      <Home2 />
    </section>
  );
}

export default Home;
