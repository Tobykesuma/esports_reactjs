import React from 'react';
import {
  Swiper,
  SwiperSlide
} from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import {
  Autoplay,
  Pagination,
} from 'swiper';
import image from '../../constants/image';

const Brands = () => {
  return (
    <>
    <Swiper
      pagination={{
        clickable: true,
      }}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      modules={
        [
          Autoplay, Pagination
        ]}
        className='mySwiper'
    >
        <SwiperSlide>
            <div className='app__brands section__padding' id='brands'>
              <div className='app__brands__content'>
                  <img src={image.Partner_Logo1} alt=''/>
              </div>
            </div>
          </SwiperSlide>
    </Swiper>
    </>

  )
}

export default Brands