import React from 'react';
import './works.css';
import WorkDesc from '../../components/work/WorkDesc';
import { Container, Row, Col } from 'react-bootstrap';
/* import workDataDesc from '../../components/work/workDataDesc'; */
import workData from '../../components/work/workData';



const WorksDesc = () => {
  return (
    <>
      <Container className='mb-5'>
        <Row xs={1} md= {2 } className="g-4">
          {workData.map((item) => (
            <Col key={item.id} id={item.id}>
              <WorkDesc cardTitle={item.cardTitle} card1={item.card1} card1Text={item.card1Text} card2={item.card2} card2Text={item.card2Text}/>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  )
}

export default WorksDesc;

/* const WorksDesc = () => {
  return (
    <>
      <Container className='mb-5'>
        <Row xs={1} md= {2 } className="g-4">
          {workDataDesc.map((item) => (
            <Col key={item.id} id={item.id}>
              <WorkDesc workBody={item.workBody} workImg={item.workImg} />
            </Col>
          ))}
        </Row>
      </Container>
    </>
  )
}

export default WorksDesc; */