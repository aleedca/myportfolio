import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Experience from './pages/Experience';
import Skills from './pages/Skills';
import './App.css';

const App = () => {
  const [theme, setTheme] = useState("dark")

  useEffect(() => {
    document.body.dataset.theme = theme;
  }, [theme]);

  return (
    <div className="App" data-theme={theme === "dark" ? "dark" : "light"}>
      <Navbar theme={theme} setTheme={setTheme} />

      <div className='page'>
        <Home theme={theme}/>
        <About />
        <Projects />
        <Experience />
        <Skills />
      </div>
    </div>
  );
}

export default App;
