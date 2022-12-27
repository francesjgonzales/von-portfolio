import React from 'react';
import './work.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
/* import { Container, Row, Col } from 'react-bootstrap';
 *//* import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'; */


const Work = ({ cardTitle, cardText, cardLink }) => {
  return (

          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
              <Card.Title>{cardTitle}</Card.Title>
              <Card.Text>
                {cardText}
              </Card.Text>
              <Button variant="primary" href={cardLink} >Go somewhere</Button>
            </Card.Body>
          </Card>

  );
}

export default Work;

