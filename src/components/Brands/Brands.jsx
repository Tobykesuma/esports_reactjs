import React from 'react';
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
import './Brands.css';

const Brands = () => {
  return (
    <>
    <section className='app__brands section__padding' id='brands'>
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
        Navigation
      ]}
        className='mySwiper'
    >
        <SwiperSlide>
            <div className='app__brands__content__box'>
              <div className='app__brands__content'>
                  <img src={image.Partner_Logo1} className='app__brands__content__img' height={100} alt=''/>
              </div>
            </div>
          </SwiperSlide>
    </Swiper>
    </section>
    </>

  )
}

export default Brands