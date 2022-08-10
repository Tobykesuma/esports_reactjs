import React from 'react';
import './About.css';
import image from '../../constants/image';




const About = () => {
  return (
    <section className='app__bg app__wrapper section__padding' id='about'>
        <div className='app__wrapper__img app__wrapper__img__reverse'>
            <img src={image.AboutBG} alt='about__image' />
        </div>
        
        <div className='app__wrapper__info'>
        <div className='app__about__mxauto'>
            <img src={image.OutlineAbout} className='app__outline__content' alt='outline__about' />
        </div>
            <h1 className='app__about__headtext'>About US</h1>
            <h2 className='headtext__cormorant'>What we believe in</h2>

            <div className='app__about__content'>
                {/* <div className='app__about__content__quote'> */}
                    {/* <img src={image.AboutBG} alt='quote__image' /> */}
                    <p className='app__about__subtext'>
                    Berdiri pada awal April 2021 Team M11 Esports berawal dari Divisi Dota 2. Pada bulan Oktober 2021 Team M11 Esports menambah Divisi baru yaitu PUBGM Ladies dan di awal tahun 2022 Team M11 menambah 2 divisi baru yaitu Mobile Legend Bang Bang (MLBB) dan Valorant. Divisi Dota 2 Team M11 sendiri sudah berhasil meraih beberapa kompetisi tingkat Nasional dan International.
                    </p>
                    <button className='custom__buttom' type='button'><a href='mailto:teamm11bali@gmail.com' target='_blank'>CONTACT US</a></button>
                </div>

    
            </div>
    </section>
  )
}

export default About;