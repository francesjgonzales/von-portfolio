import React from 'react'
import { Container } from 'react-bootstrap';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Table from 'react-bootstrap/Table';


const Experience = () => (
  <Table striped bordered hover variant="light">
  <thead>
    <tr>
      <th>Job Position</th>
      <th>Company</th>
      <th>Date</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Senior Creative Designer</td>
      <td>Adaptsmedia  |  Dubai - remote work</td>
      <td>2022 - Present</td>
    </tr>
    <tr>
      <td>Senior Creative Designer - <em>Head of Creative Studio</em></td>
      <td>Xpress Print Pte Ltd  |  Singapore</td>
      <td>2006 - 2022</td>
    </tr>
    <tr>
      <td>DTP Artist / Jr. Graphic Designer</td>
      <td>Xpress Media  |  Philippines</td>
      <td>2004 - 2006</td>
    </tr>
    <tr>
      <td>Trainee - DTP Artist</td>
      <td>Xpress Media  |  Philippines</td>
      <td>2005 - 2006</td>
    </tr>
    <tr>
      <td>Layout Artist</td>
      <td>J & R Printing Co. Inc  |  Philippines</td>
      <td>2003 - 2004</td>
    </tr>
  </tbody>
</Table>
)

const Skills = () => (
  <Table striped bordered hover variant="light">
    <thead>
      <tr>
        <th>Skills</th>
        <th>Tools</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Visual Design</td>
        <td className='text-start ps-5'>
          <li>Photoshop</li>
          <li>Illustrator</li>
          <li>Figma</li>
          <li>Adobe XD</li>
          <li>After Effects</li>
        </td>
      </tr>
      <tr>
        <td>Publishing Layout</td>
        <td className='text-start ps-5'>
          <li>Photoshop</li>
          <li>Illustrator</li>
          <li>In Design</li>
          <li>Microsoft Office</li>
        </td>
      </tr>
      <tr>
      <td>Branding</td>
        <td className='text-start ps-5'>
          <li>Conceptualisation</li>
          <li>Art Direction</li>
          <li>Off set printing</li>
        </td>
      </tr>
    </tbody>
  </Table>
);

const About = () => {
  /* const [key, setKey] = useState('home'); */
  return (
    <Container className='mx-5 p-5'>
      <Tabs
        defaultActiveKey="Experience"
        id="controlled-tab-example"
        className="mb-3 justify-content-center mt-3"
      >
        <Tab eventKey="Experience" title="Experience">
          <Experience />
        </Tab>
        <Tab eventKey="skills" title="Skills">
          <Skills />
        </Tab>
      </Tabs>
    </Container>
  );
}

export default About;