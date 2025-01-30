import React from 'react';
import { Works, Skills, Contact, Footer, About, Homepage, Websites, Digitals, MotionGraphics } from './containers';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes, Link } from "react-router-dom";
import { Container, Nav, Navbar, ThemeProvider } from 'react-bootstrap';


const App = () => {
  return (
    <div className='App'>
      <>
        <ThemeProvider
          breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs']}
          minBreakpoint="xs">
          <Navbar collapseOnSelect expand="lg">
            <Container >
              <Navbar.Brand as={Link} to="/">VG</Navbar.Brand>
              <Navbar.Toggle aria-controls="responsive-navbar-nav" />
              <Navbar.Collapse className=" justify-content-end" id="responsive-navbar-nav">
                <Nav>
                  <Nav.Link as={Link} to="/" element={<Homepage />}>Home</Nav.Link>
                  <Nav.Link as={Link} to="/about" element={<About />}>About</Nav.Link>
                  <Nav.Link as={Link} to="/websites" element={<Websites />}>Website</Nav.Link>
                  <Nav.Link as={Link} to="/motion" element={<MotionGraphics />}>Motion Graphics</Nav.Link>
                  <Nav.Link as={Link} to="/digital">Digital Creatives</Nav.Link>
                  <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>

          <Routes>
            <Route index element={<Homepage />} />
            <Route path="/about" element={<About />} />
            <Route path="/websites" element={<Websites />} />
            <Route path="/digital" element={<Digitals />} />
            <Route path="/motion" element={<MotionGraphics />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
          <Footer />
        </ThemeProvider>

      </>
    </div >

  )
}

export default App 