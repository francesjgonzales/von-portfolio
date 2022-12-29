import React from 'react';
import WorkDesc from '../../components/work/WorkDesc';
import { Container } from 'react-bootstrap';
import workDataDesc from '../../components/work/workDataDesc';

const WorksDesc = () => {
  return (
    <>
      <Container>
        {workDataDesc.map((item, idx) => (
          <WorkDesc workBody={item.workBody} workImg={item.workImg} key={item.idx} />
        ))}
  </Container>
    
    </>
  )
}

export default WorksDesc;