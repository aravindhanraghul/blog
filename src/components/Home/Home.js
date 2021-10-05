import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function Home() {
  return (<Container fluid className="about-section" style={{"color":"black"}}>
  <Container>
    <Row style={{ justifyContent: "center", padding: "10px" }}>
      <Col
        style={{
          justifyContent: "center",
          paddingTop: "30px",
          paddingBottom: "50px",
        }}
      >
        <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
          Hello I am Aravindhan.
          Worked as <bold style={{"color":"orange","font-family":"ui-rounded"}}>React </bold>and <bold style={{"color":"orange","font-family":"ui-rounded"}}>Node.Js</bold> Developer
       </h1>
       <br/>
       <br/>
      
       <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
        LET ME INTRODUCE MYSELF
       </h1>   
        <br/>
        <ui>
          <li>I fell in love UI interfaces and I have at least learnt something, I think…</li>
          <br/>
          <li>I am fluent in classics like Express JS,React Js and Javascript.</li>
          <br/>
        <li> My field of Interest's are building new Web Technologies and Products</li>
        <br/>
        <li>Whenever possible, I also apply my passion for developing products with Node.js and Modern Javascript Library and Frameworks like React.js and Express.js</li>
        </ui>
      </Col>
    </Row>
  </Container>
</Container>

  );
}

export default Home;
