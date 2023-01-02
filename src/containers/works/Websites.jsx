import React from 'react';
import './works.css';
import Website from '../../components/work/Website';
import { Container, Row, Col } from 'react-bootstrap';
/* import workDataDesc from '../../components/work/workDataDesc'; */
import webData from '../../components/work/webData';


const Websites = () => {
  return (
    <>
      <Container className='mb-5'>
        <Row xs={1} md={2} className="g-4">
          {webData.map((item) => (
            <Col key={item.id} id={item.id}>
              <Website 
              cardTitle={item.cardTitle1} cardText={item.cardText}
              card1={item.card1} card1Text={item.card1Text} 
              card2={item.card2} card2Text={item.card2Text} 
              card3={item.card3} card3Text={item.card3Text} 
              card4={item.card4} card4Text={item.card4Text}
            />
              
            </Col>
          ))}
        </Row>
      </Container>
    </>
  )
}

export default Websites;