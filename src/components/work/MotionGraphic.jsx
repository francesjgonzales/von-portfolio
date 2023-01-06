import React from 'react';
import './work.css';
/* import Button from 'react-bootstrap/Button'; */
import Card from 'react-bootstrap/Card';
/* import { Link } from 'react-router-dom'; */
import { Container, Row, Col } from 'react-bootstrap';
/* import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'; */

const MotionGraphic = ({ cardTitle, cardText, title1, video1, video2, title2, video3, title3, video4, title4, video5, title5, video6, title6 }) => {
  return (

    <Container className='p-5'>
        <Card.Title>
          {cardTitle}
        </Card.Title>
        <Card.Text>
          {cardText}
        </Card.Text>

      <Row xs={1} md={2} className='mt-3'>
        <Col>
          <iframe src={video1} title={title1} height='300px' width='100%' controls muted></iframe>
          <Card.Text>
            {title1}
          </Card.Text>
        </Col>
      
        <Col>
          <iframe src={video2} title={title2} height='300px' width='100%' muted></iframe>
          <Card.Text>
            {title2}
          </Card.Text>
        </Col>
        </Row>
      <Row xs={1} md={2} className='mt-3'>
        <Col>
          <iframe src={video3} title={title3} height='300px' width='100%'  muted></iframe>
          <Card.Text>
            {title3}
          </Card.Text>
        </Col>
        <Col>
          <iframe src={video4} title={title4} height='300px' width='100%'  muted></iframe>
          <Card.Text>
            {title4}
          </Card.Text>
        </Col>
      </Row>

      <Row xs={1} md={2} className='mt-3'>
        <Col>
          <iframe src={video5} title={title5} height='300px' width='100%'  muted></iframe>
          <Card.Text>
            {title5}
          </Card.Text>
        </Col>
        <Col>
          <iframe src={video6} title={title6} height='300px' width='100%'  muted></iframe>
          <Card.Text>
            {title6}
          </Card.Text>
        </Col>
      </Row>


    </Container>



  );
}
export default MotionGraphic;