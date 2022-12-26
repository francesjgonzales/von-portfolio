import React from 'react';
import { Works, Skills, Contact, Footer, Header } from './containers';
import { About } from './components';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes, Link } from "react-router-dom";
import { Container, Nav, Navbar } from 'react-bootstrap';

const App = () => {
  return (
    <div className='App'>
      <>
      <Navbar collapseOnSelect expand="lg" bg="light">
      <Container>
        <Navbar.Brand href="/home">VG</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse className=" justify-content-end" id="responsive-navbar-nav">
          <Nav>
            <Nav.Link as={Link} to="/about">About</Nav.Link>
            <Nav.Link  as={Link} to="/works">Work</Nav.Link>
            <Nav.Link  as={Link} to="/skills">Skills</Nav.Link>
            <Nav.Link  as={Link} to="/contact">Contact</Nav.Link>
            {/* <Nav.Link eventKey={2} href="#memes">
              Dank memes
            </Nav.Link> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
      <Header />
      <Routes>
        {/* <Route path="/header" element={ <Header /> }/> */}
        <Route path="/about" element={ <About /> }/>
        <Route path="/works" element={ <Works /> }/>
        <Route path="/skills" element={ <Skills /> }/>
        <Route path="/contact" element={ <Contact /> }/>
      </Routes>
      {/* <Skills /> */}
      
      <Footer />
    </>
    </div>

  )
}

export default App 