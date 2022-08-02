import React from 'react';
import {BsFillGridFill} from 'react-icons/bs';
import {AiOutlineAlignRight} from 'react-icons/ai';
import './Navbar.css';




const Navbar = () => {
  const [toggleMenu, setToggleMenu] = React.useState(false);

  return (
    <nav className='app__navbar'>
        <div className='app__navbar__logo'>
            {/* <img src={} alt='app__logo' /> */}
        </div>
        <ul className='app__navbar__links'>
            <li className='p__opensans'><a href='#home'>Home</a></li>
            <li className='p__opensans'><a href='#home'>About</a></li>
            <li className='p__opensans'><a href='#home'>Schedule</a></li>
            <li className='p__opensans'><a href='#home'>News</a></li>
            <li className='p__opensans'><a href='#home'>Teams</a></li>
            <li className='p__opensans'><a href='#home'>Partners</a></li>
        </ul>
        {/* navbar__login */}
        <div className='app__navbar__login'>
            <a href='#login' className='p__opensans'>Login In / Registration</a>
        </div>

        {/* mobile__navbar */}
        <div className='app__navbar__smallscreen'>
            <BsFillGridFill color='#fff' font-size={27} onClick={() => setToggleMenu(true)} />
            {toggleMenu && (
                <div className='app__navbar__smallscreen_overlay flex__center slide__bottom'>
                    <AiOutlineAlignRight fontSize={27} className='overlay__close' onClick={() => setToggleMenu(false)} />
                    <ul className='app__navbar__smallscreen__links'>
                        <li><a href='#home' onClick={() => setToggleMenu(false)}>Home</a></li>
                        <li><a href='#home' onClick={() => setToggleMenu(false)}>About</a></li>
                        <li><a href='#home' onClick={() => setToggleMenu(false)}>Schedule</a></li>
                        <li><a href='#home' onClick={() => setToggleMenu(false)}>News</a></li>
                        <li><a href='#home' onClick={() => setToggleMenu(false)}>Teams</a></li>
                        <li><a href='#home' onClick={() => setToggleMenu(false)}>Partners</a></li>
                    </ul>
                </div>
            )}
        </div>
    </nav>
  );
};

export default Navbar;