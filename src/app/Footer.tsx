'use client'
import { Button, Image } from '@nextui-org/react'
import React from 'react'

type Props = {
  line: string
}

const Footer = ({ line }: Props) => {
  return (
    <div className='py-6 md:py-10 antialiased bg-gradient-to-b from-[#efefef]/80 via-white/90 to-[#efefef]/80'>
      <p className='text-center text-xl md:text-3xl text-black py-6 md:py-10 font-medium'>
        INTERFISH FARM
      </p>

      <p className='text-black text-center text-sm md:text-lg'>ฟาร์มปลาคาร์ฟที่มีระบบจัดการระดับอินเตอร์และใหญ่ที่สุดในประเทศ </p>
      <p className='text-black text-center text-sm md:text-lg'>มีปลาคาร์ฟญี่ปุ่นให้เลือกหลากหลายสายพันธุ์ บริการจัดส่งอย่างรวดเร็วและปลอดภัย</p>

      <div className='pt-4 md:pt-8 text-center'>
        <p className='text-black  md:text-lg font-semibold'>ติดต่อเรา</p>
        <p className='text-black text-sm md:text-lg'>114 หมู่ 5 ต.บ้านดู่ อ.เมือง จ.เชียงราย 57100</p>
        <p className='text-black text-sm md:text-lg'>เบอร์โทร 065 239 554</p>
      </div>

      <div className='flex flex-row gap-x-6 items-center justify-center mt-6'>
        <a href='https://www.facebook.com/interfishfarm' target='_blank' 
          className='flex flex-row items-center gap-x-2 bg-blue-500 py-0.5 px-2 rounded-md hover:brightness-90' >
          <Image src="/image/icon/facebook.png" alt="facebook" className='w-8 h-8' />
          <p className='text-white'>อินเตอร์ฟิช ฟาร์ม</p> 
        </a>

        <a href={line} target='_blank'
          className='flex flex-row items-center gap-x-2 bg-green-500 py-0.5 px-2 rounded-md hover:brightness-90' >
          <Image src="/image/icon/line.png" alt="facebook" className='w-8 h-8' />
          <p className='text-white'>@interfishfarm</p>
          
        </a>
      </div>
    </div>
  )
}

export default Footer