import React from 'react';
import './works.css';
import Work from '../../components/work/Work';
import { Container } from 'react-bootstrap';
import workData from '../../containers/works/workData';
/* import Row from 'react-bootstrap/Row'; */



const Works = () => {
  return (
    <>
      <Container className='d-flex m-5'>
        {workData.map((item, idx) => (
          <Work cardTitle={item.cardTitle} cardText={item.cardText} key={item.cardTitle + idx} />
        ))}
      </Container>
    </>
  );
}

export default Works;