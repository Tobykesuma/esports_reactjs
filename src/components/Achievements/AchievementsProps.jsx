import './Slider.css';
import PropTypes from 'prop-types';
import {
    Swiper, SwiperSlide
} from 'swiper/react';
import {
    Navigation,
    Thumbs
} from 'swiper'

const AchievementsProps = props => {
  return (
    <>
    <Swiper
        Loop={true}
        spaceBetween={10}
        navigation={true}
        modules={
            [
                Navigation, Thumbs
            ]
        }
        grabCursor={true}
        className='achivements__images___slider'
    >
        {
            props.images.map((item, index) => (
                <SwiperSlide key={index}>
                    <img src={item} className='images__props__achievements' alt='Slider Images' />
                </SwiperSlide>
            ))
        }
    </Swiper>
    </>
  )
}

AchievementsProps.propTypes = {
    images: PropTypes.array.isRequired
}

export default AchievementsProps