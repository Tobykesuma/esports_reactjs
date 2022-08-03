import React from 'react';
import {TbAlignRight} from 'react-icons/tb';
import {AiOutlineAlignRight} from 'react-icons/ai';
import './Navbar.css';
import image from '../../constants/image';



const Navbar = () => {
  const [toggleMenu, setToggleMenu] = React.useState(false);

  return (
    <nav className='app__navbar'>
        <div className='app__navbar__logo'>
            <a href='/'><img src={image.logo} alt='app__logo' /></a>
        </div>
        <ul className='app__navbar__links'>
            <li className='p__opensans'><a href='/'>Home</a></li>
            <li className='p__opensans'><a href='/about'>About</a></li>
            <li className='p__opensans'><a href='/schedule'>Schedule</a></li>
            <li className='p__opensans'><a href='/news'>News</a></li>
            <li className='p__opensans'><a href='/teams'>Teams</a></li>
            <li className='p__opensans'><a href='/partners'>Partners</a></li>
            <li className='p__opensans'><a href='/shop'>Shop</a></li>
        </ul>
        {/* navbar__login */}
        {/* <div className='app__navbar__login'>
            <a href='/login' className='p__opensans'>Login In / Registration</a>
        </div> */}

        {/* mobile__navbar */}
        <div className='app__navbar__smallscreen'>
            <TbAlignRight color='#fff' fontSize={27} onClick={() => setToggleMenu(true)} />
            {toggleMenu && (
                <div className='app__navbar__smallscreen_overlay flex__center slide__bottom'>
                    <AiOutlineAlignRight fontSize={27} className='overlay__close' onClick={() => setToggleMenu(false)} />
                    <ul className='app__navbar__smallscreen__links'>
                        <li><a href='/' onClick={() => setToggleMenu(false)}>Home</a></li>
                        <li><a href='/about' onClick={() => setToggleMenu(false)}>About</a></li>
                        <li><a href='/schedule' onClick={() => setToggleMenu(false)}>Schedule</a></li>
                        <li><a href='/news' onClick={() => setToggleMenu(false)}>News</a></li>
                        <li><a href='/teams' onClick={() => setToggleMenu(false)}>Teams</a></li>
                        <li><a href='/partners' onClick={() => setToggleMenu(false)}>Partners</a></li>
                        <li><a href='/shop' onClick={() => setToggleMenu(false)}>Shop</a></li>
                    </ul>
                </div>
            )}
        </div>
    </nav>
  );
};

export default Navbar;