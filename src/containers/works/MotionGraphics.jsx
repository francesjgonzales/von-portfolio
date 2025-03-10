import React from 'react';
import './works.css';
import { Container, Row, Col } from 'react-bootstrap';
import motionGraphicData from '../../components/work/motionGraphicData';
import MotionGraphic from '../../components/work/MotionGraphic';


const MotionGraphics = () => {
  return (
    <>
      <Container className='mb-5'>
        <Row xs={1} md={2} className="g-4">
          {motionGraphicData.map((item) => (
            <Col key={item.id} id={item.id}>
              <MotionGraphic 
              cardTitle={item.cardTitle} cardText={item.cardText}
              video1={item.video1} title1={item.title1}
              video2={item.video2} title2={item.title2}
              video3={item.video3} title3={item.title3}
              video4={item.video4} title4={item.title4}
              video5={item.video5} title5={item.title5}
              video6={item.video6} title6={item.title6}
            />
              
            </Col>
            
          ))}
        </Row>
      </Container>
    </>
  )
}

export default MotionGraphics;