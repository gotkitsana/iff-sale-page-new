'use client'
import { Button, Divider, Image } from '@nextui-org/react'

export default function Home() {
  return (
    <div className='flex flex-col'>
      <section className=' h-full w-full bg-[url(/image/bg/section-1.jpg)] bg-center bg-cover'>
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

    </div>
  )
}
