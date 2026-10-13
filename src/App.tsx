import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Videos from './components/Videos';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './index.css';

const App: React.FC = () => {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Portfolio />
        <Videos />
        <Contact />
      </main>
      <Footer />
    </>
  );
};

export default App;
