import React from "react";
import "./works.css";
import { Container, Row, Col, Card, Image, Button } from "react-bootstrap";

const Works = () => {
  return (
    <>
      <Container className="p-5">
        <Container className="mt-5 pt-5">
          <h1 className="text-center pt-5">Creative Web and Print Projects</h1>

          <Row xs="auto" lg={2} className="mt-5">
            <Col className="align-middle mt-5 pt-5">
              <Col className="text-start" style={{ width: "100%" }}>
                <h4>Web Design and Development </h4>
                <p>Compiled projects done in WordPress.</p>
                <Button href="/websites" variant="info">
                  View
                </Button>
              </Col>
            </Col>
            <Col className="mt-3">
              <Card>
                <Image
                  src="../assets/nait-web1.jpeg"
                  style={{ height: "40%" }}
                />
              </Card>
            </Col>
          </Row>

          <Row xs="auto" lg={2} className="mt-5">
            <Col className="align-middle mt-5 pt-5">
              <Col className="text-start" style={{ width: "100%" }}>
                <h4>Digital Design</h4>
                <p>Design & adaptation of web banners & social media posts</p>
                <Button href="/digital" variant="info">
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
                <Button href="/motion" variant="info">
                  View
                </Button>
              </Col>
            </Col>
            <Col className="mt-3">
              <Card>
                <Image
                  src="../assets/Von-motion.jpg"
                  style={{ height: "40%" }}
                />
              </Card>
            </Col>
          </Row>
        </Container>
      </Container>
    </>
  );
};

export default Works;
