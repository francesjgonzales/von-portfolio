import React from 'react';
import './work.css';
/* import Button from 'react-bootstrap/Button'; */
import Card from 'react-bootstrap/Card';
/* import { Link } from 'react-router-dom'; */
import { Container, Row, Col } from 'react-bootstrap';
/* import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'; */

const MotionGraphic = ({ cardTitle, cardText, title1, video1, video2, title2, video3, title3 }) => {
  return (

    <Container className='p-5'>
      <Row>
        <Card.Title>
          {cardTitle}
        </Card.Title>
        <Card.Text>
          {cardText}
        </Card.Text>

        <Col>
          <iframe src={video1} title={title1} height='150px' controls muted></iframe>
          <Card.Text>
            {title1}
          </Card.Text>
        </Col>
        <Col>
          <iframe src={video2} title={title2} height='150px' muted></iframe>
          <Card.Text>
            {title2}
          </Card.Text>
        </Col>
        <Col>
          <iframe src={video3} title={title3} height='300px' muted></iframe>
          <Card.Text>
            {title3}
          </Card.Text>
        </Col>
      </Row>

    </Container>



  );
}
export default MotionGraphic;