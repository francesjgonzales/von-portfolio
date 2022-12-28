import React from 'react';
import './works.css';
import Work from '../../components/work/Work';
import { Container, Row, Col } from 'react-bootstrap';
import workData from '../../components/work/workData';

const Works = () => {
  return (
    <>
      <Container className='mb-5'>
        <Row xs={1} md={2} className="g-4">
        {workData.map((item, idx) => (
          <Col>
          <Work cardTitle={item.cardTitle} cardText={item.cardText} cardLink={item.cardLink} key={item.cardTitle + idx} />
          </Col>
        ))}
        </Row>
      </Container>


    </>

  );
}

export default Works;