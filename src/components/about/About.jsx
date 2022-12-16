import React from 'react'
import { Container } from 'react-bootstrap';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

const Experience = () => (
    <>
      <p><a href="#home">Home</a></p>
      <p><a href="#wgpt3">What is GPT3?</a></p>
      <p><a href="#possibility">Open aI</a></p>
      <p><a href="#features">Case Sstudies</a></p>
      <p><a href="#blog">Library</a></p>
    </>
  )

const Skills = () => (
    <>
      <p>skills</p>
    </>
  )

const Tools= () => (
    <>
      <p>Tools used</p>
    </>
  )

const About = () => {
    /* const [key, setKey] = useState('home'); */
    return (
        <Container className='mt-3'>
            <Tabs
                defaultActiveKey="home"
                id="controlled-tab-example"
                className="mb-3 justify-content-center"
            >
                <Tab eventKey="home" title="Home">
                    <Experience />
                </Tab>
                <Tab eventKey="profile" title="Profile">
                    <Skills />
                </Tab>
                <Tab eventKey="tools" title="Tools">
                    <Tools />
                </Tab>
            </Tabs>
        </Container>
    );
}

export default About;