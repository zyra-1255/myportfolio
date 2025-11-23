import React from 'react';
import Navbar from './components/navbar';
import About from './components/about';
import Projects from './components/project';
import Skills from './components/skills';
import Contact from './components/contact';
import './App.css';

function App() {
  return (
    <div>
      <Navbar />
      <About />
      <Projects />
      <Skills />
      <Contact />
    </div>
  );
}

export default App;
