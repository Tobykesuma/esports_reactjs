import React from 'react';
import ReactPlayer from 'react-player';
import './LiveStream.css';

const LiveStream = () => {
 return (
    <section className='app__livestream section__padding' id='livestream'>
        <div className='app__livestream__overlay flex__center'>
            {/* <h1 className='app__livestream__headtext'>LIVE STREAM</h1> */}
            <div className='app__livestream__box'>
                <ReactPlayer  className='app__livestream__mobile'  url='https://www.youtube.com/watch?v=EJueaifwRcU' 
                height={900} width={1905}
               />
            </div>
        </div>
    </section>
  )
}



export default LiveStream