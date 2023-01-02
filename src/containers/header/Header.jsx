import React from 'react';
import './header.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Header = () => {
  return (
    <Container>
      <Row>
        <Col className='mt-5'>
          <h1>Von Gonzales</h1>
          <h5>Creative Designer with skills in UI Design, Branding, Digital and Web design,
            Motion Branding & Print</h5>
        </Col>
      </Row>
    </Container>
  );
}

export default Header;