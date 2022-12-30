import React from 'react';
import './work.css';
/* import Button from 'react-bootstrap/Button'; */
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
/* import { Container, Row, Col } from 'react-bootstrap';
 *//* import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'; */


const Work = ({ cardTitle, cardText, cardLink, cardImage }) => {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={ cardImage } />
      <Card.Body>
        <Card.Title>{cardTitle}</Card.Title>
        <Card.Text>
          {cardText}
        </Card.Text>
        <Link className='primary' to={cardLink} >View more</Link>
      </Card.Body>
    </Card>

  );
}
export default Work;

