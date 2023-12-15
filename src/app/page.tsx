'use client'
import { Button, Divider, Image } from '@nextui-org/react'
import { useRef } from 'react';
import Footer from './Footer';
import RewardSwiper from './RewardSwiper';

export default function Home() {
  const line = 'https://line.me/R/ti/p/@022awchp'

  return (
    <div className='flex flex-col scroll-smooth bg-black'>
      <section id="01" className=' h-full w-full bg-[url(/image/bg/section-1.jpg)] bg-center bg-cover'>
        <div className='flex justify-center my-4 '>
          <Image src="/logo-new.png" alt="logo" width="100%" className='max-w-[12.5rem]' />
        </div>

        <p className='text-center font-medium text-3xl text-white'>สอบถามสายพันธ์ และ ราคาปลา</p>

        <div className=' flex flex-col items-center gap-y-2 mt-4'>
          <a href={line} target='_blank'
            className=' hover:brightness-125 text-white bg-gradient-to-b from-[#A48028] to-[#73591A] 
          text-lg px-14 py-1 rounded-xl '>
            คลิกเลย
          </a>
          <p className='text-yellow-500 text-sm'>กดรับราคาพิเศษ ภายในวันที่ 30 ธ.ค. นี้เท่านั้น</p>
        </div>

        <div className=' relative flex flex-col max-w-4xl mx-auto pt-2 pb-10 md:h-[53rem]'>
          <div className='flex flex-col md:grid md:grid-cols-2'>
            <Image src="/image/fish/kohaku.png" alt="fish" width="100%" className='max-w-sm md:max-w-md mx-auto md:ml-auto md:mr-[unset]' />

            <div className='flex flex-row items-center gap-x-6 px-10 md:px-0 '>
              <Divider orientation="vertical" className='h-28 w-[1px] bg-white' />
              <div className='text-white'>
                <p className=' font-medium text-xl'>KOHAKU</p>
                <p className='text-sm md:text-base py-1 font-[300]'>ถือว่าเป็นราชินีแห่งปลาคาร์ฟ เป็นปลาที่มี 2 สี</p>
                <p className='text-sm md:text-base font-[300]'>ที่มีสีแดงวางอยู่บนพื้นหลังขาว</p>
              </div>
            </div>
          </div>

          <div className='flex flex-col-reverse md:grid md:grid-cols-2 md:absolute md:top-[14rem]'>
            <div className=' flex flex-row items-center gap-x-6 px-10 md:px-0'>
              <Divider orientation="vertical" className='h-32 w-[1px] bg-white' />
              <div className='text-white'>
                <p className=' font-medium text-xl'>TANCHO</p>
                <p className='text-sm md:text-base pt-1 font-[300]'>
                  ปลาตันโจที่ดี ควรมีสีแดงกลม และขนาดใหญ่ได้สัดส่วนบนหัวเท่านั้น
                  แม้รูปทรงไม่ได้เป็นทรงกลม และไม่มีลวดลายสีแดงที่จุดอื่นๆ ที่ลำตัว
                </p>
              </div>
            </div>

            <Image src="/image/fish/tancho.png" alt="fish" width="100%" className='max-w-sm md:max-w-md mx-auto md:mr-auto md:ml-[unset]' />
          </div>

          <div className='flex flex-col md:grid md:grid-cols-2 md:absolute md:bottom-0'>
            <Image src="/image/fish/sanke-re.png" alt="fish" width="100%"
              className='max-w-sm md:max-w-md mx-auto md:ml-auto md:mr-[unset] '
              style={{
                transform: "scaleX(-1)"
              }} />

            <div className='flex flex-row items-center gap-x-6 px-10 md:px-0'>
              <Divider orientation="vertical" className='h-32 w-[1px] bg-white' />
              <div className='text-white'>
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

      <section id="02" className=' relative z-50 antialiased h-full w-full bg-[url(/image/bg/section-2.png)] bg-left md:bg-center bg-cover'>
        <div className='flex flex-col items-center bg-black/20 pb-10 md:pt-10' >
          <p data-aos="fade-up"
            className={`text-2xl md:text-3xl lg:text-4xl my-10 font-medium text-white`}>
            ทำไมถึงต้องเลือก <span className='text-yellow-500'>อินเตอร์ฟิช ฟาร์ม</span> ?
          </p>

          <div className='max-w-lg lg:max-w-2xl w-full mx-auto px-2 md:px-0'>
            <div data-aos="fade-up"
              className='flex flex-row gap-x-2 lg:gap-x-4 pb-4 lg:pb-8'>
              <p className=' flex-none md:text-lg lg:text-xl text-white'>&#x2022;</p>
              <div className='flex-auto md:text-lg lg:text-xl '>
                <p className='text-center text-white'>
                  อินเตอร์ฟิช ฟาร์ม นำเข้าปลาคาร์ฟ จากฟาร์ม อันดับ 1
                </p>
                <p className='text-center text-white'>
                  ของโลก SAKAI FISH FARM และฟาร์มชั้นนำในญี่ปุ่น
                </p>
              </div>
            </div>

            <div data-aos="fade-up"
              className='flex flex-row gap-x-2 lg:gap-x-4 pb-4 lg:pb-8'>
              <p className=' flex-none md:text-lg lg:text-xl text-white'>&#x2022;</p>
              <div className='flex-auto md:text-lg lg:text-xl '>
                <p className='text-center text-white'>
                  อินเตอร์ฟิช ฟาร์ม มีแม่พันธุ์ที่ฝากเลี้ยง และ BREED เองที่ SAKAI FISH FARM
                </p>
              </div>
            </div>

            <div data-aos="fade-up"
              className='flex flex-row gap-x-2 lg:gap-x-4 pb-4 lg:pb-8'>
              <p className=' flex-none md:text-lg lg:text-xl text-white'>&#x2022;</p>
              <div className='flex-auto md:text-lg lg:text-xl'>
                <p className='text-center text-white'>
                  อินเตอร์ฟิช ฟาร์ม มีระบบการจัดการ ที่เป็นมาตรฐาน พร้อมดูแลจัดส่งทั่วประเทศไทยและต่างประเทศ
                </p>
              </div>
            </div>

            <div data-aos="fade-up"
              className='flex flex-row gap-x-2 lg:gap-x-4 pb-4 lg:pb-8'>
              <p className=' flex-none md:text-lg lg:text-xl text-white'>&#x2022;</p>
              <div className='flex-auto md:text-lg lg:text-xl'>
                <p className='text-center text-white'>
                  เป็นฟาร์มอันดับ 1 ในภาคเหนือ ที่มีภูมิอากาศที่ดีทำให้ปลานั้นคุณภาพดีเหมือนพึ่งมาจากญี่ปุ่น
                </p>
              </div>
            </div>

            <div data-aos="fade-up"
              className=' flex justify-center mt-4'>
              <a href={line} target='_blank' className=' hover:brightness-125 text-white bg-gradient-to-b from-[#A48028] to-[#73591A] 
          lg:text-xl px-14 py-1 font-medium rounded-xl '>
                สนใจสอบถาม
              </a>
            </div>

          </div>

        </div>

      </section>


      {/* <section id="03" className='antialiased h-full w-full relative '>
        <div className='pb-3 md:pb-6 pt-8 lg:pt-14 w-full grid grid-cols-6 md:grid-cols-5 items-center'>
          <Divider className=' col-span-2 bg-white' />
          <div className='text-center col-span-2 md:col-span-1 '>
            <p className='text-3xl md:text-4xl font-medium text-white'>OYAGOI</p>
            <p className=' md:text-xl font-medium text-white'>พ่อแม่พันธุ์ปลา</p>
          </div>
          <Divider className=' col-span-2 bg-white' />
        </div>
        <p className='text-yellow-500 text-center text-lg md:text-xl'>ฟาร์มของเรามีพ่อแม่พันธุ์ปลาคาร์ฟที่ฝากไว้อยู่ที่ญี่ปุ่น</p>

        <div className='h-full w-full relative mt-6 md:mt-12 '>
          <div className='bg-black/30 relative z-10'>
            <div className=' max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6  px-2 lg:px-0  md:pb-40 lg:pb-60 xl:pb-80 h-full '>
              <div data-aos="fade-up"
                className='flex flex-row gap-6 md:flex-col items-center justify-center md:justify-between'>
                <Image src="/image/fish/sc-3/barley.png" alt="barley" width="100%" className='w-[5rem] md:w-[7.5rem] lg:w-[10rem] mx-auto' />
                <div className='text-white'>
                  <p>バーレイ Barley</p>
                  <p>ライスヴァリーの子</p>
                  <p>Offspring of Rise Valley</p>
                  <p>産卵日 / Spawning Day 2022.06.08</p>
                </div>
              </div>

              <div data-aos="fade-up" data-aos-delay="150"
                className='flex flex-row gap-6 md:flex-col items-center justify-center md:justify-between'>
                <Image src="/image/fish/sc-3/simple-love.png" alt="simple-love" width="100%" className='w-[5rem] md:w-[7.5rem] lg:w-[10rem] mx-auto' />
                <div className='text-white'>
                  <p>シンプルラブ III Simple Love III</p>
                  <p>シンプルラブの子</p>
                  <p>Offspring of Simple Love</p>
                  <p>産卵日 / Spawning Day 2022.07.21</p>
                </div>
              </div>

              <div data-aos="fade-up" data-aos-delay="300"
                className='flex flex-row gap-6 md:flex-col items-center justify-center md:justify-between'>
                <Image src="/image/fish/sc-3/luna.png" alt="luna" width="100%" className='w-[5rem] md:w-[7.5rem] lg:w-[10rem] mx-auto' />
                <div className='text-white'>
                  <p>ルナ Luna</p>
                  <p>ミスタイの子</p>
                  <p>Offspring of Miss Thai</p>
                  <p>産卵日 / Spawning Day 2022.06.30</p>
                </div>
              </div>
            </div>
          </div>
          <div className=' absolute bottom-0 left-0 right-0 z-0 max-w-[1980px] mx-auto'>
            <Image src="/image/bg/section-3.png" alt="bg" radius="none" className='mx-auto' />
          </div>
        </div>

        <div className='pb-6 pt-8 lg:pt-14 w-full grid grid-cols-7 md:grid-cols-4 xl:grid-cols-3 items-center md:absolute md:bottom-10 xl:bottom-28 left-0 right-0 z-50'>
          <Divider className='  bg-white' />
          <div className='text-center col-span-5 md:col-span-2 xl:col-span-1'>
            <p className='text-xl md:text-2xl lg:text-4xl font-medium text-white'>List of Award-Winning Carp</p>
            <p className='md:text-lg lg:text-2xl font-medium text-white'>รายการรางวัลของเรา</p>
          </div>
          <Divider className='  bg-white' />
        </div>
      </section> */}

      <section id="03" className='antialiased h-full w-full relative mb-4'>
        <div className='bg-black/40 relative z-50 pb-10'>
          <div className='pb-6 pt-8 lg:pt-14 w-full grid grid-cols-7 md:grid-cols-4 xl:grid-cols-3 items-center'>
            <Divider className=' bg-white' />
            <div className='text-center col-span-5 md:col-span-2 xl:col-span-1 '>
              <p className='text-xl md:text-2xl lg:text-4xl font-medium text-white'>List of Award-Winning Carp</p>
              <p className='md:text-lg lg:text-2xl font-medium text-white'>รายการรางวัลของเรา</p>
            </div>
            <Divider className='  bg-white' />
          </div>

          <RewardSwiper />

          {/* <div className=' max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-3 gap-6  px-2  lg:px-0 md:pt-10 pb-6 h-full '>

            <div className='max-w-[12rem] md:max-w-[13rem] mx-auto  bg-red-500'>
              <Image src="/image/fish/award/1-new.png" alt="barley" width="100%" radius="none" />
              <div className=' text-white'>
                <p className='text-center '>TNPA ATKS 2023</p>
                <p className='text-center text-sm'>Male Kokugyo Prize 85 BU</p>
              </div>
            </div>

            <div className='max-w-[12rem] md:max-w-[13rem] mx-auto  bg-red-500'>
              <Image src="/image/fish/award/2-new.png" alt="barley" width="100%" radius="none" />
              <div className=' text-white'>
                <p className='text-center '>TNPA ATKS 2023</p>
                <p className='text-center text-sm'>Male Kokugyo Prize 85 BU</p>
              </div>
            </div>

            <div className='max-w-[12rem] md:max-w-[13rem] mx-auto  bg-red-500 '>
              <Image src="/image/fish/award/3-new.png" alt="barley" width="100%" radius="none" />
              <div className=' text-white'>
                <p className='text-center '>TNPA ATKS 2023</p>
                <p className='text-center text-sm'>2nd Runner up Kohaku 40 Bu</p>
              </div>
            </div>

            <div className='max-w-[12rem] md:max-w-[13rem] mx-auto bg-red-500'>
              <Image src="/image/fish/award/g70-new.png" alt="barley" width="100%" radius="none" />
              <div className=' text-white'>
                <p className='text-center '>ZNA TKKG KOI SHOW 2022</p>
                <p className='text-center text-sm '>Winner Hikari Moyomono & Hikari Utsurimono 70 Bu</p>
              </div>
            </div>

            <div className='max-w-[12rem] md:max-w-[13rem] mx-auto bg-red-500'>
              <Image src="/image/fish/award/s60-new.png" alt="barley" width="100%" radius="none" />
              <div className=' text-white'>
                <p className='text-center '>ZNA TKKG KOI SHOW 2022</p>
                <p className='text-center text-sm'>Best in size Gosanke 60 bu</p>
              </div>
            </div>

            <div className='max-w-[12rem] md:max-w-[13rem] mx-auto bg-red-500'>
              <Image src="/image/fish/award/s80-new.png" alt="barley" width="100%" radius="none" />
              <div className=' text-white'>
                <p className='text-center '>ZNA TKKG KOI SHOW 2022</p>
                <p className='text-center text-sm'>Winner Taisno Sanshoku 80 Bu</p>
              </div>
            </div>

            <div className='max-w-[12rem] md:max-w-[13rem] mx-auto bg-red-500'>
              <Image src="/image/fish/award/u75-new.png" alt="barley" width="100%" radius="none" />
              <div className=' text-white'>
                <p className='text-center '>ZNA TKKG KOI SHOW 2022</p>
                <p className='text-center text-sm'>1st Runner up Utsuri Mono 75 Bu</p>
              </div>
            </div>

            <div className='max-w-[12rem] md:max-w-[13rem] mx-auto bg-red-500'>
              <Image src="/image/fish/award/w85-new.png" alt="barley" width="100%" radius="none" />
              <div className=' text-white'>
                <p className='text-center '>ZNA TKKG KOI SHOW 2022</p>
                <p className='text-center text-sm'>2nd Runner up Kohaku 40 Bu</p>
              </div>
            </div>

  

          </div> */}

          <div className='flex justify-center my-4 lg:mt-10'>
            <a href={line} target='_blank'
              className=' hover:brightness-125 text-white bg-gradient-to-b from-[#A48028] to-[#73591A] 
          text-lg px-10 py-1 rounded-xl '>
              สนใจสอบถาม
            </a>
          </div>

        </div>
        <div className=' absolute bottom-0 left-0 right-0 z-0 max-w-[1780px] mx-auto'>
          <Image src="/image/bg/section-3.png" alt="bg" radius="none" className='mx-auto' />
        </div>
      </section>

      {/* <section id="04" className=' relative md:-top-6 xl:-top-16 md:px-6 lg:px-0'>
        <div className='max-w-3xl gap-x-1 md:gap-x-0 mx-auto grid grid-cols-2 md:flex md:flex-row md:justify-between pb-6 md:pb-10 lg:pb-20'>
          <div className='max-w-[12rem] md:max-w-[13rem] mx-auto md:mx-[unset] h-full overflow-hidden'>
            <Image src="/image/fish/award/1.jpg" alt="barley" width="100%" radius="none" />
            <div className='bg-white text-black p-1 h-full'>
              <p className='text-center text-sm'>TNPA ATKS 2023</p>
              <p className='text-center text-sm'>Male Kokugyo Prize 85 BU</p>
            </div>
          </div>

          <div className='max-w-[12rem] md:max-w-[13rem] mx-auto md:mx-[unset] h-full overflow-hidden'>
            <Image src="/image/fish/award/2.jpg" alt="barley" width="100%" radius="none" />
            <div className='bg-white text-black p-1 h-full'>
              <p className='text-center text-sm'>TNPA ATKS 2023</p>
              <p className='text-center text-sm'>Male Kokugyo Prize 85 BU</p>
            </div>
          </div>
        </div>

        <div className='block md:hidden max-w-[12rem] mx-auto h-full overflow-hidden pb-6'>
          <Image src="/image/fish/award/2.jpg" alt="barley" width="100%" radius="none" />
          <div className='bg-white text-black p-1 '>
            <p className='text-center text-sm'>TNPA ATKS 2023</p>
            <p className='text-center text-sm'>Male Kokugyo Prize 85 BU</p>
          </div>
        </div>

        <div className='max-w-3xl mx-auto gap-x-1 md:gap-x-0 grid grid-cols-2 md:flex md:flex-row  md:justify-between'>
          <div className='max-w-[12rem] md:max-w-[13rem] mx-auto md:mx-[unset] h-full overflow-hidden'>
            <Image src="/image/fish/award/3.jpg" alt="barley" width="100%" radius="none" />
            <div className='bg-white text-black  p-1 h-full'>
              <p className='text-center text-sm'>TNPA ATKS 2023</p>
              <p className='text-center text-sm'>2nd Runner up Kohaku 40 Bu</p>
            </div>
          </div>

          <div className='hidden md:block relative md:-top-[10rem] lg:-top-[12.5rem] max-w-[12rem] md:max-w-[13rem]' >
            <Image src="/image/fish/award/2.jpg" alt="barley" width="100%" radius="none" />
            <div className='bg-white text-black p-1 '>
              <p className='text-center text-sm'>TNPA ATKS 2023</p>
              <p className='text-center text-sm'>Male Kokugyo Prize 85 BU</p>
            </div>
          </div>

          <div className='max-w-[12rem] md:max-w-[13rem] mx-auto md:mx-[unset] h-full overflow-hidden'>
            <Image src="/image/fish/award/2.jpg" alt="barley" width="100%" radius="none" />
            <div className='bg-white text-black p-1 h-full'>
              <p className='text-center text-sm'>TNPA ATKS 2023</p>
              <p className='text-center text-sm'>Winner Showa Sanshoku 65 BU</p>
            </div>
          </div>
        </div>

        <div className='flex justify-center my-8 md:mb-0 xl:mt-10'>
          <a href={line} target='_blank'
            className=' hover:brightness-125 text-white bg-gradient-to-b from-[#A48028] to-[#73591A] 
          text-lg px-10 py-1 rounded-xl '>
            สนใจสอบถาม
          </a>
        </div>
      </section> */}

      <section id="05" className='px-2 md:px-6 mb-10 antialiased' >
        <Divider className='bg-white lg:w-[95%] mx-auto' />

        <div data-aos="fade-up" className=' aspect-[3/1] relative max-w-3xl mx-auto mt-6 xl:mt-10 '>
          <div className='bg-black/10 flex justify-center items-center w-full h-full absolute top-0 z-20'>
            <a href={line} target='_blank'
              className='hover:brightness-125 text-white bg-gradient-to-b from-[#A48028] to-[#73591A] 
              md:text-lg px-6 md:px-12 py-1 rounded-xl shadow-lg shadow-black/70  font-medium'>
              สั่งซื้ออาหาร
            </a>
          </div>

          <Image src="/image/banner/01.jpg" alt="banner" removeWrapper radius='none' className='w-full h-full' />
        </div>

        <div data-aos="fade-up" className='my-2 aspect-[3/1] relative max-w-3xl mx-auto mt-6 xl:mt-10 '>
          <div className=' flex flex-col gap-y-2 justify-center items-center w-full h-full absolute top-0 z-20'>
            <a href={line} target='_blank'
              className='hover:brightness-125 text-white bg-gradient-to-b from-[#A48028] to-[#73591A] 
              md:text-lg px-6 md:px-12 py-1 rounded-xl shadow-lg shadow-black/70  font-medium '>
              I.F.F SERVICE
            </a>
            <p className='text-center text-sm md:text-base text-white '>บริการสร้างบ่อ - บริการล้างบ่อกรอง - บริการฝากเลี้ยง - บริการรักษาปลา</p>
          </div>

          <Image src="/image/banner/02.png" alt="banner" removeWrapper radius='none' className='w-full h-full object-cover' />
        </div>

        <div data-aos="fade-up" className='my-2 aspect-[3/1] relative max-w-3xl mx-auto mt-6 xl:mt-10 '>
          <div className='bg-black/30 flex flex-col gap-y-2 justify-center items-center w-full h-full absolute top-0 z-20'>
            <a href={line} target='_blank'
              className='hover:brightness-125 text-white bg-gradient-to-b from-[#A48028] to-[#73591A] 
              md:text-lg px-6 md:px-12 py-1 rounded-xl shadow-lg shadow-black/70 font-medium '>
              รีวิวจากลูกค้า
            </a>
            <p className='text-center text-sm md:text-base text-white '>พร้อมบริการจัดส่งทั่วประเทศ รับประกันการจัดส่ง</p>
          </div>

          <Image src="/image/banner/03.png" alt="banner" removeWrapper radius='none' className='w-full h-full object-cover object-top' />
        </div>
      </section>


      <Footer line={line} />


    </div>
  )
}
