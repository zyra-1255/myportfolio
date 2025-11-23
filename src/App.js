import React from 'react';
import './App.css';
import Hero from './components/Hero';
import about from './components/about';
import skills from './components/skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Education from './components/Education';
import contact from './components/contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Hero />
      <about />
      <skills />
      <Projects />
      <Experience />
      <Education />
      <contact />
      <Footer />
    </div>
  );
}

export default App;
//dad
