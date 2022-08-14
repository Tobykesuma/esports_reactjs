import React from 'react';
import './Achievements.css';
import {
    Swiper,
    SwiperSlide
  } from 'swiper/react';
import {
  Pagination,
  Autoplay
} from 'swiper';
import 'swiper/css';
import image from '../../constants/image';

const Achievements = () => {
  return (
    <section className='app__achievements' id='achievements'>
        <div className='app__achievements__headingtext'>
          <span>ACHIEVEMENTS</span>
        </div>
        <div className='app__achievements__content__images'>
          <Swiper

          spaceBetween={10}
          slidesPerView={5}
          grabCursor={true}
          loop={true}
          autoplay={{
            delay: 4500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          modules={[
            Pagination, Autoplay
          ]}
            // Breakpoints //
            // breakpoints={{
            //   // when window width is >= 650px
            // 2000: {
            //   width: 2000,
            //   slidesPerView: 5,
            // },

            // 990: {
            //   width: 990,
            //   slidesPerView: 5,
            // },

            // 650: {
            //   width: 650,
            //   slidesPerView: 1,
            // },
            // 390: {
            //   width: 390,
            //   slidesPerView: 1,
            // },


            // }}

            
          >
            <SwiperSlide>
                <img src={image.Tournament_Logo1} className='app__achievements__img' alt='' />
                <div className='app__achievements__content'>
                  <div className='app__achievements__subtext'>
                    <h1>1st</h1>
                    <p>Place</p>
                  </div>
                </div>
            </SwiperSlide>

            <SwiperSlide>
                <img src={image.Tournament_Logo2} className='app__achievements__img' alt='' />
            </SwiperSlide>

            <SwiperSlide>
                <img src={image.Tournament_Logo3} className='app__achievements__img' alt='' />
            </SwiperSlide>

            <SwiperSlide>
                <img src={image.Tournament_Logo4} className='app__achievements__img' alt='' />
            </SwiperSlide>

            <SwiperSlide>
                <img src={image.Tournament_Logo5} className='app__achievements__img' alt='' />
            </SwiperSlide>

            <SwiperSlide>
                <img src={image.Tournament_Logo6} className='app__achievements__img' alt='' />
            </SwiperSlide>

          </Swiper>
        </div>
    </section>
  )
}

export default Achievements
