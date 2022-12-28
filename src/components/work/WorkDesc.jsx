import React from 'react';
import { Container } from 'react-bootstrap';


const WorkDesc = ({ workBody, workImg }) => {
  return (
    <Container>
      {workBody} {workImg}
    </Container>
    
  );
}

export default WorkDesc;