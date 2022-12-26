import React from 'react';
import Table from 'react-bootstrap/Table';


const Skills = () => {
  return (
    <div className='container'>
      <Table striped bordered hover variant="dark">
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
    </div>

  )
}

export default Skills