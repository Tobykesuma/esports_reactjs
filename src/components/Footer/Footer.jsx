import React from 'react'
import { FiFacebook, FiTwitter, FiInstagram, FiYoutube } from 'react-icons/fi';
import { FaTiktok } from 'react-icons/fa'
import FooterOverlay  from './FooterOverlay';
import Newslatter from './Newsletter';
import './Footer.css';
import image from '../../constants/image';


const Footer = () => {
    return (
    <section className='app__footer section__padding' id='login'>
        <FooterOverlay />
        <Newslatter />

        <div className='app__footer__links'>
            <div className='app__footer__links__contact'>
                <h1 className='app__footer__headtext'>Contact Us</h1>
                <p className='p__opensans'></p>
                <p className='p__opensans'></p>
                <p className='p__opensans'></p>
            </div>

            <diiv className='app__footer__links__logo'>
                <img src={image.logo} alt='footer__logo' />
                <p className='p__opensans'>&quot; .&quot;</p>
                <div className='app__footer__links__icons'>
                    <FiFacebook />
                    <FiTwitter />
                    <FiInstagram />
                    <FiYoutube />
                    <FaTiktok />
                </div>
            </diiv>

            <div className='footer__copyright'>
                <p className='p__opensans'>&copy; 2022 TEAM M11 ESPORTS. ALL RIGHT RESERVED</p>
            </div>
            <div className='footer__copyright__second'>
                <p className='p__opensans'>DESIGN AND DEVELOP BY <a href='https://www.instagram.com/itstobikesuma'>TOBI KESUMA</a></p>
            </div>
        </div>
    </section>
  )
};

export default Footer;