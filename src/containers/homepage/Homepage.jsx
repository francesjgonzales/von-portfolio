import React from "react";
import { Container, Row, Col, Image, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import "bootstrap/dist/css/bootstrap.min.css";

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

      <Container className="mt-5 pt-5">
        <h3 className="text-start pt-5">Latest Creative Works</h3>
        <Row xs="auto" lg={2} className="mt-5">
          <Col className="align-middle mt-5 pt-5" xs={{ order: 0 }}>
            <Col className="text-start" style={{ width: "100%" }}>
              <h4>Web Design and Development </h4>
              <p>Compiled projects done in WordPress.</p>
              <Button as={Link} href="/websites" variant="info">
                View
              </Button>
            </Col>
          </Col>
          <Col className="mt-3">
            <Card>
              <Image src="../assets/nait-web1.jpeg" style={{ height: "40%" }} />
            </Card>
          </Col>
        </Row>

        <Row xs="auto" lg={2} className="mt-5">
          <Col className="align-middle mt-5 pt-5">
            <Col className="text-start" style={{ width: "100%" }}>
              <h4>Digital Design</h4>
              <p>Design & adaptation of web banners & social media posts</p>
              <Button as={Link} href="/digital" variant="info">
                View
              </Button>
            </Col>
          </Col>
          <Col className="mt-3">
            <Card>
              <Image
                src="../assets/Von-digital3.jpg"
                style={{ height: "40%" }}
              />
            </Card>
          </Col>
        </Row>

        <Row xs="auto" lg={2} className="mt-5">
          <Col className="align-middle mt-5 pt-5">
            <Col className="text-start" style={{ width: "100%" }}>
              <h4>Motion Graphics</h4>
              <p>
                Create animated web banners and social media posts and reels.
              </p>
              <Button as={Link} href="/motion" variant="info">
                View
              </Button>
            </Col>
          </Col>
          <Col className="mt-3">
            <Card>
              <Image src="../assets/Von-motion.jpg" style={{ height: "40%" }} />
            </Card>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default Homepage;
