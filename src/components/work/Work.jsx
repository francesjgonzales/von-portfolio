import React from 'react';
import './work.css';
/* import Button from 'react-bootstrap/Button'; */
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
/* import { Container, Row, Col } from 'react-bootstrap';
 *//* import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'; */

const Work = ({ cardTitle, cardText, cardLink, cardImage, card1 }) => {
  return (
    <Card style={{ width: '35rem' }}>
      <Card.Img variant="top" src={ cardImage } />
      {/* <Card.Img variant="top" src={ card1 } /> */}
      <Card.Body>
        <Card.Title>{cardTitle}</Card.Title>
        <Card.Text>
          {cardText}
        </Card.Text>
        <Link className='primary' to={cardLink}> View more</Link>
      </Card.Body>
    </Card>

  );
}
export default Work;