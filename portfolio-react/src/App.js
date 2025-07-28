import React from 'react';
import './App.css';
import Navbar from './Navbar'
import Header from './Header';
import AboutMe from './AboutMe';
import Projects from './Projects';
import Contact from './Contact';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Header />
      <AboutMe/>
      <Projects/>
      <Contact/>
    </div>
  );
}

export default App;
