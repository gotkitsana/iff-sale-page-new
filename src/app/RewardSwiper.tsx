'use client'
import React from 'react';
import { Image } from '@nextui-org/react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

import { Autoplay } from 'swiper/modules';

const data = [
  {
    img:"/image/fish/award/1-new.png",
    title:"TNPA ATKS 2023",
    content:"Male Kokugyo Prize 85 BU",
  },
  {
    img: "/image/fish/award/2-new.png",
    title: "TNPA ATKS 2023",
    content: "Male Kokugyo Prize 85 BU",
  },
  {
    img: "/image/fish/award/3-new.png",
    title: "TNPA ATKS 2023",
    content: "2nd Runner up Kohaku 40 Bu",
  },
  {
    img: "/image/fish/award/g70-new.png",
    title: "ZNA TKKG KOI SHOW 2022",
    content: "Winner Hikari Moyomono & Hikari Utsurimono 70 Bu",
  },
  {
    img: "/image/fish/award/s60-new.png",
    title: "ZNA TKKG KOI SHOW 2022",
    content: "Best in size Gosanke 60 bu",
  },
  {
    img: "/image/fish/award/s80-new.png",
    title: "ZNA TKKG KOI SHOW 2022",
    content: "Winner Taisno Sanshoku 80 Bu",
  },
  {
    img: "/image/fish/award/u75-new.png",
    title: "ZNA TKKG KOI SHOW 2022",
    content: "1st Runner up Utsuri Mono 75 Bu",
  },
  {
    img: "/image/fish/award/w85-new.png",
    title: "ZNA TKKG KOI SHOW 2022",
    content: "2nd Runner up Kohaku 40 Bu",
  }
]

const RewardSwiper = () => {
  return (
    <Swiper
      slidesPerView={2}
      spaceBetween={10}
      autoplay={{
        delay: 3500,
        disableOnInteraction: false,
      }}
      breakpoints={{
        640: {
          slidesPerView: 3,
          spaceBetween: 15,
        },
        930: {
          slidesPerView: 4,
          spaceBetween: 20,
        },
      }}
      loop
      modules={[Autoplay]}
      className="mySwiper max-w-6xl mx-auto mt-4 lg:mt-10"
    >
      {data?.map((item,index)=>(
        <SwiperSlide key={index} >
          <div className=' mx-auto '>
            <Image src={item.img} alt="barley" width="100%" radius="none" />
            <div className=' text-white'>
              <p className='text-center '>{item.title}</p>
              <p className='text-center text-sm'>{item.content}</p>
            </div>
          </div>
        </SwiperSlide>
      ))}
    
    </Swiper>
  )
}

export default RewardSwiper