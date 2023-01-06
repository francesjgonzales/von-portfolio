import React from 'react';
import './works.css';
import Digital from '../../components/work/Digital';
import { Container, Row, Col } from 'react-bootstrap';
/* import workDataDesc from '../../components/work/workDataDesc'; */
import digitalData from '../../components/work/digitalData';


const Digitals = () => {
  return (
    <>
      <Container className='mb-5'>
        <Row xs={1} md={2} className="g-4">
          {digitalData.map((item) => (
            <Col key={item.id} id={item.id}>
              <Digital 
              cardTitle={item.cardTitle} cardText={item.cardText}
              card1={item.card1} card1Text={item.card1Text} 
              card2={item.card2} card2Text={item.card2Text} 
              card3={item.card3} card3Text={item.card3Text} 
              card4={item.card4} card4Text={item.card4Text}
              video7={item.video7} title7={item.title7}
              video8={item.video8} title8={item.title8}
            />
              
            </Col>
          ))}
        </Row>
      </Container>
    </>
  )
}

export default Digitals;