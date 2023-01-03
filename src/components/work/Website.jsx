import React from 'react';
import './work.css';
/* import Button from 'react-bootstrap/Button'; */
import Card from 'react-bootstrap/Card';
/* import { Link } from 'react-router-dom'; */
import { Container, Row, Col } from 'react-bootstrap';
/* import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'; */

const Website = ({ cardTitle, cardText, card1, card1Text, card2, card2Text, card3, card3Text, card4, card4Text }) => {
  return (

<Container className='mt-5'>
<Row>
  <Card.Title>
    {cardTitle}
  </Card.Title>
  <Card.Text>
    {cardText}
  </Card.Text>

  {/* ------------------Card 1------------------ */}
  <Col className='d-flex justify-content-center mt-3'>
    <Card style={{ width: '50rem' }}>
      <Card.Img variant="top" src={card1} alt={card1Text} />
      <Card.Text className='m-3 px-1'>
        {card1Text}
      </Card.Text>

      {/* ------------------modal START------------------ */}
     {/*  <Button className="m-3 mx-5" variant="primary" onClick={handleShow}>
        View
      </Button>

      <Modal show={show} onHide={handleClose} size="lg">
        <Modal.Header closeButton>
        </Modal.Header>
        <Modal.Body>
          <Card.Img variant="top" src={card3} alt={card1Text} />
          </Modal.Body>
        <Modal.Footer>
          <Button className="m-2" variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal> */}
    </Card>
  </Col>

  {/* ------------------Card 2------------------ */}
  <Col className='d-flex justify-content-center mt-3'>
    <Card style={{ width: '50rem' }}>
      <Card.Img variant="top" src={card2} alt={card2Text} />
      <Card.Text className='m-3 px-1'>
        {card2Text}
      </Card.Text>
    </Card>
  </Col>

  {/* ------------------Card 3------------------ */}
  <Col className='d-flex justify-content-center mt-3'>
    <Card style={{ width: '50rem' }}>
      <Card.Img variant="top" src={card3} alt={card3Text} />
      <Card.Text className='m-3 px-1'>
        {card3Text}
      </Card.Text>
    </Card>
  </Col>

  {/* ------------------Card 4------------------ */}
  <Col className='d-flex justify-content-center mt-3'>
    <Card style={{ width: '50rem' }}>
      <Card.Img variant="top" src={card4} alt={card4Text} />
      <Card.Text className='m-3 px-1'>
        {card4Text}
      </Card.Text>
    </Card>
  </Col>
</Row>

</Container>



  );
}
export default Website;