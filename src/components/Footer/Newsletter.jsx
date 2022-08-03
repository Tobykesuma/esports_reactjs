import React from 'react';
import './Newsletter.css';
// import SubHeading from '../SubHeading/SubHeading';


const Newsletter = () => {
  return (
    <div className='app__newsletter'>
        <div className='app__newsletter__heading'>
            {/* <SubHeading title="NewsLetter" />  */}
            <h1 className='headtext__cormorant'>Subscribe To Our Newsletter</h1>
            <p className='p__opensans margin__top'>And never miss latest Updates!</p>   
        </div>

        <div className='app__newsletter__input flex__center'>
            <input type='email' placeholder='Enter your email address' />
            <button type='button' className='custom__button'>Subscribe</button>    
        </div>        
    </div>
  )
};

export default Newsletter;