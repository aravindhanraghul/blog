import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Resumecontent from "./ResumeContent";
import pdf from "../../Assets/resume.pdf";
import { AiOutlineDownload } from "react-icons/ai";

function Resume() {
   return (
    <Container fluid className="resume-section">
      <Container>
        <Row className="resume">
          <Col md={6} className="resume-left">
            <h3 className="resume-title">Experience</h3>
            <Resumecontent
              title="Frontend Developer "
              date="DEC 2020 - July 2021"
              content={[
                "Worked on the development of an ERP Tool",
                " Translated designs and wireframes into a highly responsive user interface and reusable components using React.js.",
                "Used Back-End APIs to display data using the Custom Components, library Components, and Redux.",
              ]}
            />
          <Resumecontent
              title="Back End Developer "
              date="July 2021-Present"
              content={[
                "Worked on the development of an E-Trucking Soft",
                "E-Trucking Soft is revolutionary all-in-one Trucking Management System combines everything you need to automate your day-to-day trucking operations."  
              ]}
            />
            
            
      
          </Col>
          <Col md={6} className="resume-right">
            <h3 className="resume-title">Education</h3>
            <Resumecontent
              title="Bannari Amman Institute of Technology ,Sathyamangalam  "
              date="2016 - 2020"
              content={[`CGPA: 7.1`]}
            />

            <h3 className="resume-title">Publications</h3>
            <Resumecontent
              title=""
              content={[
                `Presented a Paper under the titled “Navigation of Blind People Using Passenger Bus Alert
                System”in the national level Technical Symposium “COMPCOM 2K18” at Government College of
                Engineering,Salem.
                `
              ]}
            />
          </Col>
        </Row>
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button variant="primary" href={pdf} target="_blank">
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>
      </Container>
    </Container>
  );
}

export default Resume;
