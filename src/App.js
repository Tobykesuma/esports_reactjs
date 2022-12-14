import React from 'react';
import './App.css';
import BaackTopBtn from './components/BackToTop/BaackTopBtn';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Contact from './components/Contact/Contact';
import About from './components/About/About';
import LiveStream from './components/LiveStream/LiveStream';
import Brands from './components/Brands/Brands';
import Achievements from './components/Achievements/Achievements';



function App() {
  return (
    <div className="bg__white relative">
        <Navbar />
        {/* <BaackTopBtn /> */}
        <Achievements />
        {/* <Brands />  */}
        <About />
        <LiveStream />
        <Contact />
        <Footer />
    </div>
  );
}

export default App;
