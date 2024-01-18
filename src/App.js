import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Experience from './pages/Experience';
import Skills from './pages/Skills';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <About />
      <Projects />
      <Experience />
      <Skills />
      <Footer />
    </div>
  );
}

export default App;
