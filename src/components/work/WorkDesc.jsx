import React from 'react';
import { Container } from 'react-bootstrap';


const WorkDesc = ({ workBody, workImg, idx }) => {
  return (
    <Container className={idx}>
      {workBody} {workImg}
    </Container>
    
  );
}

export default WorkDesc;