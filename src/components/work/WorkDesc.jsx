import React from 'react';
import './work.css';
import { Container, Row, Col } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';


const WorkDesc = ({ cardTitle, card1, card1Text, card2, card2Text }) => {
  return (
    <Container className='mt-5'>
      <Row>
        <Card.Title>
          {cardTitle}
        </Card.Title>
        <Col className='d-flex justify-content-center mt-3'>
          <Card style={{ width: '30rem' }}>
            <Card.Img variant="top" src={card1} alt={card1Text}/>
            <Card.Text>
              <p>{card1Text}</p>
            </Card.Text>
          </Card>
        </Col>
        <Col className='d-flex justify-content-center mt-3'>
          <Card style={{ width: '30rem' }}>
            <Card.Img variant="top" src={card2} alt={card2Text} />
            <Card.Text>
              <p>{card2Text}</p>
            </Card.Text>

          </Card>
        </Col>

      </Row>

    </Container>

  );
}

export default WorkDesc;