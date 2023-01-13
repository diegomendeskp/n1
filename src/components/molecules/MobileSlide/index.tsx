import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper';
import Outriders from '../../atoms/Outriders';
import CyberPunk from '../../atoms/CyberPunk';
import DonkeyKong from '../../atoms/DonkeyKong';

function MobileSlide() {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={3}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <Outriders />
        </SwiperSlide>
        <SwiperSlide>
          <CyberPunk />
        </SwiperSlide>
        <SwiperSlide>
          <DonkeyKong />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
export default MobileSlide;
