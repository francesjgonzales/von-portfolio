import React from "react";
import { Container, Row, Col, Image, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Works from "../../containers/works/Works";

const Homepage = () => {
  return (
    <Container className="mt-5">
      <Row className="justify-content-md-center">
        <Col md={4}>
          <Image src="../assets/von-pic.png" roundedCircle />
        </Col>

        <Col className="mt-5 pt-5">
          <h1 className="text-center align-middle">
            I'm Von Gonzales - a Web Designer and Developer focused on crafting
            engaging user experiences through creative design and digital media.
          </h1>
        </Col>
      </Row>

      <Works />
    </Container>
  );
};

export default Homepage;
