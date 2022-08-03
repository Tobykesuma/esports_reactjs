import React from 'react';
import './App.css';
import BaackTopBtn from './components/BackToTop/BaackTopBtn';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Contact from './components/Contact/Contact';




function App() {
  return (
    <div className="bg__white relative">
        <Navbar />
        <BaackTopBtn />
        <Contact />
        <Footer />
    </div>
  );
}

export default App;
