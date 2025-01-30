import React from "react";
import Table from "react-bootstrap/Table";
import { Container } from "react-bootstrap";

const Skills = () => {
  return (
    <Container className="p-5 mt-5">
      <Table striped bordered hover variant="light">
        <thead>
          <tr>
            <th>Skills</th>
            <th>Tools</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Web Development</td>
            <td className="text-start ps-5">
              <li>WordPress</li>
              <li>HTML</li>
              <li>Bootstrap CSS</li>
              <li>Tailwind CSS</li>
              <li>User Experience (Fundamentals)</li>
            </td>
          </tr>
          <tr>
            <td>Web Design</td>
            <td className="text-start ps-5">
              <li>Photoshop</li>
              <li>Illustrator</li>
              <li>Figma</li>
              <li>Adobe XD</li>
              <li>After Effects</li>
              <li>Premier Pro</li>
            </td>
          </tr>
          <tr>
            <td>Graphic Design</td>
            <td className="text-start ps-5">
              <li>Photoshop</li>
              <li>Illustrator</li>
              <li>In Design</li>
              <li>Microsoft Office</li>
              <li>Pre Press Production</li>
            </td>
          </tr>
        </tbody>
      </Table>

      <Table className="mt-5" striped bordered hover variant="light">
        <thead>
          <tr>
            <th>Soft Skills</th>
            <th>Tools</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Administrative</td>
            <td className="text-start ps-5">
              <li>Time management</li>
              <li>Written and verbal communications</li>
              <li>Collaboration</li>
              <li>Project Management</li>
            </td>
          </tr>
        </tbody>
      </Table>
    </Container>
  );
};

export default Skills;
