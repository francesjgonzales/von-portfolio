import React from 'react';
import './work.css';
import { Container, Row, Col } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';


const WorkDesc = ({ cardTitle, cardText, card1, card1Text, card2, card2Text, card3, card3Text, card4, card4Text }) => {
  return (
    <Container className='mt-5'>
      <Row>
        <Card.Title>
          {cardTitle}
        </Card.Title>
        <Card.Text>
          {cardText}
        </Card.Text>
        <Col className='d-flex justify-content-center mt-3'>
          <Card style={{ width: '30rem' }}>
            <Card.Img variant="top" src={card1} alt={card1Text}/>
            <Card.Text className='mt-3 px-1'>
              {card1Text}
            </Card.Text>
          </Card>
        </Col>
        <Col className='d-flex justify-content-center mt-3'>
          <Card style={{ width: '30rem' }}>
            <Card.Img variant="top" src={card2} alt={card2Text} />
            <Card.Text className='mt-3 px-1'>
              {card2Text}
            </Card.Text>
          </Card>
        </Col>
        <Col className='d-flex justify-content-center mt-3'>
          <Card style={{ width: '30rem' }}>
            <Card.Img variant="top" src={card3} alt={card3Text} />
            <Card.Text className='mt-3'>
              {card3Text}
            </Card.Text>
          </Card>
        </Col>
        <Col className='d-flex justify-content-center mt-3'>
          <Card style={{ width: '30rem' }}>
            <Card.Img variant="top" src={card4} alt={card4Text} />
            <Card.Text className='mt-3'>
              {card4Text}
            </Card.Text>
          </Card>
        </Col>

      </Row>

    </Container>

  );
}

export default WorkDesc;