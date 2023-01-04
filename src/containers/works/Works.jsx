import React from 'react';
import './works.css';
import Work from '../../components/work/Work';
import { Container, Row, Col } from 'react-bootstrap';
import workData from '../../components/work/workData';



const Works = () => {
  return (
    <>
      <Container className='mb-5'>
<<<<<<< HEAD
        <Row xs={1} md={2} lg={3} className="g-4">
        {workData.map((item) => (
          <Col key={item.id} id={ item.id }>
          <Work cardTitle={item.cardTitle} cardText={item.cardText} cardLink={item.cardLink} cardImage={item.cardImage} />
          </Col>
        ))}
=======
        <Row xs={1} md={2} className="g-4">
          {workData.map((item) => (
            <Col key={item.id} id={item.id}>
              <Work cardTitle={item.cardTitle} cardText={item.cardText} cardLink={item.cardLink} cardImage={item.cardImage} />
            </Col>
          ))}
>>>>>>> 978f9c39aabde15359087ba3db1a55ca08d8d2fa
        </Row>
      </Container>

    </>
  );
}

export default Works;