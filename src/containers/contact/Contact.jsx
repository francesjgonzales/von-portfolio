import React from "react";
import "./contact.css";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const Contact = () => {
  return (
    <Container className="pt-4 d-flex justify-content-center">
      <Card style={{ width: "50rem" }}>
        <Card.Header>Contact me!</Card.Header>

        <Card.Body className="m-5">
          <Card.Title>Von Gonzales</Card.Title>
          <Card.Text> Web Designer</Card.Text>

          <Card.Text>
            Drop me an email at dunhillvongonzales@gmail.com
          </Card.Text>
          <a href="mailto:dunhillvongonzales@gmail.com">
            {" "}
            <Button variant="primary">Send email</Button>
          </a>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Contact;
