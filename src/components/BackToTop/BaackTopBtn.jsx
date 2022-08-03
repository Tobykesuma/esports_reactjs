import React, { useState, useEffect} from 'react';
import { Link, animateScroll as scroll } from 'react-scroll';
import {FaRegArrowAltCircleUp} from 'react-icons/fa';
import './BaacktoBtn.css';

const BaackTopBtn = () => {
  const [show, setShow] = useState(false);
  useEffect(() => {
    window.addEventListener('scroll', () => {
        return window.scrollY > 600 ? setShow(true) : setShow(false);
    });
  });

  const scrollToTop = () => {
    scroll.scrollToTop();
  };
  {
    return (
        show && (
            <button onClick={() => scrollToTop()} className='app__backtotop'>
                <FaRegArrowAltCircleUp className='app__backtotop__icons' />
            </button>
        )
    );
    
  }
};

export default BaackTopBtn;