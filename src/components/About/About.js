import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Techstack from "./Techstack";
import Toolstack from "./Toolstack";

function About() {
  return (
    <Container fluid className="about-section">
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{fontFamily:"ui-rounded",fontSize:"2.2rem"}}>
              Know Who I'M
              Hi Everyone, I am <bold style={{"color":"skyblue"}}>ARAVINDHAN SELVARAJ </bold>from TamilNadu, India.
              I have done my <bold style={{"color":"#ffff00","text-decoration": "underline"}}>B.E (ECE)</bold> in <bold style={{"color":"orange"}}>Bannari Amman Institute of Technology</bold>.
           </h1>
          </Col>
        </Row>
        <h1 className="project-heading">
          Professional Skillset 
        </h1>

        <Techstack />

        <h1 className="project-heading">
          Tools I use
        </h1>
        <Toolstack />

      </Container>
    </Container>
  );
}

export default About;
