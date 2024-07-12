import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// Import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import Image from 'next/image';

const HeroSlider = () => {
  return (
    <div>
      <Swiper
        spaceBetween={0}
        centeredSlides={true}
        loop={true}
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
             Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
        <Image className='w-full ' height={500} width={500} src={'/asets/slide3.png'}></Image>

        </SwiperSlide>
        <SwiperSlide>
            <Image  className='w-full' height={500} width={500} src={'/asets/slide2.png'}></Image>
        </SwiperSlide>
        <SwiperSlide >
            <Image  className='w-full ' height={500} width={500} src={'/asets/slide 1.png'}></Image>

        </SwiperSlide>
     
      </Swiper>
    </div>
  );
};

export default HeroSlider;
