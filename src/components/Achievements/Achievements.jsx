import React from 'react';
import './Achievements.css';
import {
    Swiper,
    SwiperSlide
  } from 'swiper/react';
  import 'swiper/css';
  import 'swiper/css/pagination';
  import 'swiper/css/navigation';
  import {
    Autoplay,
    Navigation,
    Pagination,
  } from 'swiper';
  import image from '../../constants/image';

const Achievements = () => {
  return (
    <section className='app_achievements section__padding' id='achievements'>
        <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
                delay: 2500,
                disableOnInteraction: false,
            }}
            pagination={{
                clickable: true,
            }}
            navigation={true}
            modules={[
                Autoplay,
                Pagination,
                Navigation,
            ]}
            className='mySwiper'
        >
            <SwiperSlide>
                <div className='app__achievements__content__box'>
                    {/* Achievements Logo 1 */}
                    <div className='app__achievements__content'>
                        <img src={image.Tournament_Logo1} className='image__tournament__logo' alt='' />
                    </div>
                    <div className='app__achivements__text__content'>
                        <h1 className='app__achivements__headingtext'>
                            ESL BATTLE COMMUNITY
                        </h1>
                        <p className='app__achivements__lowtext'>
                            1ST
                        </p> 
                        <p className='app__achievements__place'>
                            Place
                        </p>
                    </div>

                    {/* Achievements Logo 2 */}
                    <div className='app__achievements__content'>
                        <img src={image.Tournament_Logo2} className='image__tournament__logo' alt='' />
                    </div>
                    <div className='app__achivements__text__content'>
                        <h1 className='app__achivements__headingtext'>
                            ESL BATTLE COMMUNITY
                        </h1>
                        <p className='app__achivements__lowtext'>
                            1ST
                        </p> 
                        <p className='app__achievements__place'>
                            Place
                        </p>
                    </div>
                    

                </div>
            </SwiperSlide>

        </Swiper>
    </section>
  )
}

export default Achievements
