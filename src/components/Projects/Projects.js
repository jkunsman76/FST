import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import leaf from "../../Assets/Projects/leaf.png";


function Projects() {
  return (
    <Container fluid className="project-section">

      <Container>
        <h1 className="project-heading">
          FST <strong className="purple">Builds </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects we've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={""}
              isBlog={false}
              title=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={""}
              isBlog={false}
              title=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={""}
              isBlog={false}
              title=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={""}
              isBlog={false}
              title=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={""}
              isBlog={false}
              title=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={""}
              isBlog={false}
              title=""
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
