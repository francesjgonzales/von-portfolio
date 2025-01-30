import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";

const Header = () => {
  return (
    <Container className="mt-5">
      <Row className="justify-content-md-center ">
        <Col md={4}>
          <Image src="../assets/von-pic.png" roundedCircle />
        </Col>
        <Col>
          <h1 className="text-center mt-4 mb-4 ">
            A Web Designer and Developer focused on crafting engaging user
            experiences through creative design and digital media.
          </h1>
        </Col>
      </Row>
    </Container>
  );
};

export default Header;
