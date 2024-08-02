// src/App.js
import React from 'react';
import Navbar from './components/Navbar';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Dog from './components/Dog';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Dog />
      <main>
        <About />
        <Projects />
        <Skills />
        <Contact />
      </main>
    </div>
  );
}

export default App;
