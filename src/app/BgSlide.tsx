'use client'
import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';

// import required modules
import { EffectFade, Autoplay } from 'swiper/modules';
import { Image } from '@nextui-org/react'

type Props = {}

const dataSlide = [
  {
    img: "/image/main/1.jpg",
    position:"object-center"
  },
  {
    img: "/image/main/2.jpg",
    position: "object-left md:object-center"
  },
  {
    img: "/image/main/3.jpg",
    position: "object-right md:object-center"
  },
  // {
  //   img: "/image/main/4.jpg"
  // },
  // {
  //   img: "/image/main/5.jpg"
  // },
  {
    img: "/image/main/6.jpg",
    position: "object-right xl:object-center"
  },
  {
    img: "/image/main/7.jpg",
    position: "hidden xl:block xl:object-center"
  },
]

const BgSlide = (props: Props) => {
  return (
    <Swiper
      effect={'fade'}
      navigation={false}
      loop
      allowTouchMove={false}
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
      }}
      modules={[EffectFade, Autoplay]}
      className="h-full w-full"
    >
      {dataSlide.map((item, index) => (
        <SwiperSlide key={index} className='h-full w-full'>
          <Image src={item.img} alt="1" removeWrapper radius="none"
            className={`w-full h-full ${item.position} object-cover animate-zoom-out brightness-50`} />
        </SwiperSlide>
      ))}
    </Swiper>
  )
}

export default BgSlide