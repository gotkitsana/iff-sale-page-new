'use client'
import { Button, Divider, Image } from '@nextui-org/react'
import { useRef } from 'react';


export default function Home() {



  return (
    <div className='flex flex-col scroll-smooth '>
      <section id="01" className=' h-full w-full bg-[url(/image/bg/section-1.jpg)] bg-center bg-cover'>
        <div className='flex justify-center my-4 '>
          <Image src="/logo.png" alt="logo" width="100%" className='max-w-[10rem]' />
        </div>

        <p className='text-center font-medium text-3xl'>สอบถามสายพันธ์ และ ราคาปลา</p>

        <div className=' flex flex-col items-center gap-y-2 mt-4'>
          <button className=' hover:brightness-125 hover:text-white bg-gradient-to-b from-[#A48028] to-[#73591A] 
          text-lg px-14 py-1 rounded-xl '>
            คลิกเลย
          </button>
          <p className='text-yellow-500 text-sm'>กดรับราคาพิเศษ ภายในวันที่ 30 ธ.ค. นี้เท่านั้น</p>
        </div>

        <div className=' relative flex flex-col max-w-4xl mx-auto pt-2 pb-10 md:h-[53rem]'>
          <div className='flex flex-col md:grid md:grid-cols-2'>
            <Image src="/image/fish/kohaku.png" alt="logo" width="100%" className='max-w-sm md:max-w-md mx-auto md:ml-auto md:mr-[unset]' />

            <div className='flex flex-row items-center gap-x-6 px-10 md:px-0 '>
              <Divider orientation="vertical" className='h-28 w-[1px] bg-white' />
              <div>
                <p className=' font-medium text-xl'>KOHAKU</p>
                <p className='text-sm md:text-base py-1 font-[300]'>ถือว่าเป็นราชินีแห่งปลาคาร์ฟ เป็นปลาที่มี 2 สี</p>
                <p className='text-sm md:text-base font-[300]'>ที่มีสีแดงวางอยู่บนพื้นหลังขาว</p>
              </div>
            </div>
          </div>

          <div className='flex flex-col-reverse md:grid md:grid-cols-2 md:absolute md:top-[14rem]'>
            <div className=' flex flex-row items-center gap-x-6 px-10 md:px-0'>
              <Divider orientation="vertical" className='h-32 w-[1px] bg-white' />
              <div>
                <p className=' font-medium text-xl'>TANCHO</p>
                <p className='text-sm md:text-base pt-1 font-[300]'>
                  ปลาตันโจที่ดี ควรมีสีแดงกลม และขนาดใหญ่ได้สัดส่วนบันหัวเท่านั้น
                  แม้รูปทรงไม่ได้เป็นทรงกลม และไม่มีลวดลายสีแดงที่จุดอื่นๆ ที่ลำตัว
                </p>
              </div>
            </div>

            <Image src="/image/fish/tancho.png" alt="logo" width="100%" className='max-w-sm md:max-w-md mx-auto md:mr-auto md:ml-[unset]' />
          </div>

          <div className='flex flex-col md:grid md:grid-cols-2 md:absolute md:bottom-0'>
            <Image src="/image/fish/sanke-re.png" alt="logo" width="100%"
              className='max-w-sm md:max-w-md mx-auto md:ml-auto md:mr-[unset] '
              style={{
                transform: "scaleX(-1)"
              }} />

            <div className='flex flex-row items-center gap-x-6 px-10 md:px-0'>
              <Divider orientation="vertical" className='h-32 w-[1px] bg-white' />
              <div>
                <p className=' font-medium text-xl'>SANKE</p>
                <p className='text-sm md:text-base pt-1 font-[300]'>
                  หรือ TAISHO SANSHOKU ปลาคาร์ฟที่มี 3 สี สีขาว สีแดง และสีดำ สีดำบนตัวปลานั้น
                  ควรจะดำสนิทและดวงใหญ่ไม่มีสีดำบนส่วนหัว รวมทั้งไม่มีสีแดง บนครีบและหาง
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>


      <section id="02" className='antialiased h-full w-full bg-[url(/image/bg/section-2.png)] bg-left md:bg-center bg-cover'>
        <div className='flex flex-col items-center bg-black/20 pb-10 md:pt-10' >
          <p data-aos="fade-up"
            className={`text-2xl md:text-3xl lg:text-4xl my-10 font-medium `}>
            ทำไมถึงต้องเลือก <span className='text-yellow-500'>อินเตอร์ฟิช ฟาร์ม</span> ?
          </p>

          <div className='max-w-lg lg:max-w-2xl w-full mx-auto px-2 md:px-0'>
            <div data-aos="fade-up"
             className='flex flex-row gap-x-2 lg:gap-x-4 pb-4 lg:pb-8'>
              <p className=' flex-none md:text-lg lg:text-xl'>&#x2022;</p>
              <div className='flex-auto md:text-lg lg:text-xl'>
                <p className='text-center '>
                  อินเตอร์ฟิช ฟาร์ม นำเข้าปลาคาร์ฟ จากฟาร์ม อันดับ 1
                </p>
                <p className='text-center '>
                  ของโลก SAKAI FISH FARM และฟาร์มชั้นนำในญี่ปุ่น
                </p>
              </div>
            </div>

            <div data-aos="fade-up"
             className='flex flex-row gap-x-2 lg:gap-x-4 pb-4 lg:pb-8'>
              <p className=' flex-none md:text-lg lg:text-xl'>&#x2022;</p>
              <div className='flex-auto md:text-lg lg:text-xl'>
                <p className='text-center '>
                  อินเตอร์ฟิช ฟาร์ม มีแม่พันธุ์ที่ฝากเลี้ยง และ BREED เองที่ SAKAI FISH FARM
                </p>
              </div>
            </div>

            <div data-aos="fade-up"
             className='flex flex-row gap-x-2 lg:gap-x-4 pb-4 lg:pb-8'>
              <p className=' flex-none md:text-lg lg:text-xl'>&#x2022;</p>
              <div className='flex-auto md:text-lg lg:text-xl'>
                <p className='text-center '>
                  อินเตอร์ฟิช ฟาร์ม มีระบบการจัดการ ที่เป็นมาตรฐาน พร้อมดูแลจัดส่งทั่วประเทศไทยและต่างประเทศ
                </p>
              </div>
            </div>

            <div data-aos="fade-up"
             className='flex flex-row gap-x-2 lg:gap-x-4 pb-4 lg:pb-8'>
              <p className=' flex-none md:text-lg lg:text-xl'>&#x2022;</p>
              <div className='flex-auto md:text-lg lg:text-xl'>
                <p className='text-center '>
                  เป็นฟาร์มอันดับ 1 ในภาคเหนือ ที่มีภูมิอากาศที่ดีทำให้ปลานั้นคุณภาพดีเหมือนพึ่งมาจากญี่ปุ่น
                </p>
              </div>
            </div>

            <div data-aos="fade-up"
             className=' flex justify-center mt-4'>
              <button className=' hover:brightness-125 hover:text-white bg-gradient-to-b from-[#A48028] to-[#73591A] 
          lg:text-xl px-14 py-1 font-medium rounded-xl '>
                สนใจสอบถาม
              </button>
            </div>
           
          </div>

        </div>

      </section>


      <section id="03" className='antialiased h-full w-full relative'>
        <div className='pb-3 md:pb-6 pt-8 lg:pt-14 w-full grid grid-cols-6 md:grid-cols-5 items-center'>
          <Divider className=' col-span-2 bg-white' />
          <div className='text-center col-span-2 md:col-span-1 '>
            <p className='text-3xl md:text-4xl font-medium'>OYAGOI</p>
            <p className=' md:text-xl font-medium'>พ่อแม่พันธุ์ปลา</p>
          </div>
          <Divider className=' col-span-2 bg-white' />
        </div>
        <p className='text-yellow-500 text-center text-lg md:text-xl'>ฟาร์มของเรามีพ่อแม่พันธุ์ปลาคาร์ฟที่ฝากไว้อยู่ที่ญี่ปุ่น</p>

        <div className='h-full  w-full relative mt-6 md:mt-12 '>
          <div className=' grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10 px-2 lg:px-0 pb-20 md:pb-40 lg:pb-60 xl:pb-80 h-full bg-black/40'>
            <div className='flex flex-row gap-6 md:flex-col items-center justify-center md:justify-between'> 
              <Image src="/image/fish/sc-3/barley.png" alt="barley" width="100%" className='w-[5rem] md:w-[7.5rem] lg:w-[10rem] mx-auto' />
              <div>
                <p>バーレイ Barley</p>
                <p>ライスヴァリーの子</p>
                <p>Offspring of Rise Valley</p>
                <p>産卵日 / Spawning Day 2022.06.08</p>
              </div>
            </div>

            <div className='flex flex-row gap-6 md:flex-col items-center justify-center md:justify-between'>
              <Image src="/image/fish/sc-3/simple-love.png" alt="simple-love" width="100%" className='w-[5rem] md:w-[7.5rem] lg:w-[10rem] mx-auto' />
              <div>
                <p>シンプルラブ III Simple Love III</p>
                <p>シンプルラブの子</p>
                <p>Offspring of Simple Love</p>
                <p>産卵日 / Spawning Day 2022.07.21</p>
              </div>
            </div>

            <div className='flex flex-row gap-6 md:flex-col items-center justify-center md:justify-between'>
              <Image src="/image/fish/sc-3/luna.png" alt="luna" width="100%" className='w-[5rem] md:w-[7.5rem] lg:w-[10rem] mx-auto' />
              <div>
                <p>ルナ Luna</p>
                <p>ミスタイの子</p>
                <p>Offspring of Miss Thai</p>
                <p>産卵日 / Spawning Day 2022.06.30</p>
              </div>
            </div>
          </div>

          <div className=' absolute bottom-0 left-0 right-0 z-0 max-w-[1980px] '>
            <Image src="/image/bg/section-3.png" alt="bg" radius="none" className='mx-auto' />
          </div>
        </div>
      </section>


    </div>
  )
}
