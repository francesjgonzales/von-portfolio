import React from "react";
import { useState } from "react";
import "./work.css";
import Card from "react-bootstrap/Card";
import {
  Container,
  Row,
  Col,
  Carousel,
  Image,
  ListGroup,
  Button,
} from "react-bootstrap";

const Digital = ({
  cardTitle,
  cardText,
  card1,
  card1Text,
  card2,
  card2Text,
  card3,
  card3Text,
  card4,
  card4Text,
  video7,
  title7,
  video8,
  title8,
}) => {
  /* ListTabGroup */
  const scrollToSection = () => {
    const container = document.getElementById("edm");
    if (Container) {
      container.scrollIntoView({ behavior: "smooth" });
    }
  };

  /* Carousel */
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };
  return (
    <Container className="mt-3">
      <Row>
        <h5>{cardTitle}</h5>
        <h6>{cardText}</h6>
        <Col>
          <ListGroup horizontal>
            <ListGroup.Item>This</ListGroup.Item>
            <ListGroup.Item>ListGroup</ListGroup.Item>
            <ListGroup.Item>renders</ListGroup.Item>
            <ListGroup.Item>
              <Button variant="link" onClick={scrollToSection}>
                {" "}
                Electronic Email
              </Button>
            </ListGroup.Item>
          </ListGroup>
        </Col>
      </Row>

      <Container></Container>

      <Container className="mt-5">
        <h5>Google Ads</h5>
        <p>
          Develop concept-based Google Ads and adapt them across various sizes
        </p>
        <Row xs={1} lg={2}>
          {/* ------------------Card 1------------------ */}
          <Col className="mt-3">
            <Card>
              <Card.Img variant="top" src={card1} alt={card1Text} />
              <Card.Text className="m-3 px-1">{card1Text}</Card.Text>
            </Card>
          </Col>

          {/* ------------------Card 2------------------ */}
          <Col className="mt-3">
            <Card>
              <Card.Img variant="top" src={card2} alt={card2Text} />
              <Card.Text className="m-3 px-1">{card2Text}</Card.Text>
            </Card>
          </Col>
        </Row>
      </Container>

      <Container className="mt-5">
        <h5>Social Media Posts</h5>
        <p>Designed the posts using Photoshop and Illustrator</p>
        <Row xs={1} lg={2}>
          {/* ------------------Card 3------------------ */}
          <Col className="mt-3">
            <Card>
              <Card.Img variant="top" src={card3} alt={card3Text} />
              <Card.Text className="m-3 px-1">{card3Text}</Card.Text>
            </Card>
          </Col>

          {/* ------------------Card 4------------------ */}
          <Col className="mt-3">
            <Card>
              <Card.Img variant="top" src={card4} alt={card4Text} />
              <Card.Text className="m-3 px-1">{card4Text}</Card.Text>
            </Card>
          </Col>
        </Row>
      </Container>

      <Container className="mt-5">
        <h5>Animated Web Banners</h5>
        <p>Created animated web banners using After Effects</p>
      </Container>

      <Row xs={1} lg={2}>
        {/* ------------------Card 5------------------ */}
        <Col className="mt-3">
          <Card>
            <iframe
              src={video7}
              title={title7}
              height="300px"
              width="100%"
              muted
            ></iframe>
            <Card.Text>{title7}</Card.Text>
          </Card>
        </Col>

        {/* ------------------Card 6------------------ */}
        <Col className="mt-3">
          <Card>
            <iframe
              src={video8}
              title={title8}
              height="300px"
              width="100%"
              muted
            ></iframe>
            <Card.Text>{title8}</Card.Text>
          </Card>
        </Col>
      </Row>

      <Container className="mt-5 mb-5" id="edm">
        <h5>Electronic email</h5>
        <p>Created the electronic emails using Figma</p>
      </Container>

      <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
          <Image src="/assets/IterInnovadi-edm-1.jpeg" fluid />
        </Carousel.Item>
        <Carousel.Item>
          <Image src="/assets/IterInnovadi-edm-3.jpeg" fluid />
        </Carousel.Item>
        <Carousel.Item>
          <Image src="/assets/IterInnovadi-edm-2.jpeg" fluid />
        </Carousel.Item>
      </Carousel>
    </Container>
  );
};
export default Digital;
