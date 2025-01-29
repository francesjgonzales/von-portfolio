import React from 'react';
import './contact.css';
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Contact = () => {
  return (
    <Container className='pt-4 d-flex justify-content-center'>
      <Card style={{ width: '25rem' }}>
        <Card.Header>Contact me!</Card.Header>
        <Card.Body>
          <Card.Title>Von Gonzales</Card.Title>
          <Card.Text> Senior Designer</Card.Text>
          <Card.Text>
            Drop me an email at dunhillvongonzales@gmail.com 
          </Card.Text>
          <a href="mailto:dunhillvongonzales@gmail.com"> <Button variant="primary">Send email</Button></a>
        </Card.Body>
      </Card>
    </Container>

  )
}

export default Contact