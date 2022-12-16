import React from 'react';
import { Works, Contact, Footer, Header, Skills } from './containers';
import { Navbar, About } from './components';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


const App = () => {
  return (
    <div className='App gradient__bg'>
      <Navbar />
      <Works />
      <Header /> 
      <About />
      <Skills />
      <Contact />
      <Footer />
    </div>

  )
}

export default App