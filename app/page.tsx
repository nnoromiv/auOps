import { CustomButton } from '@/components'
import { carousel_information } from '@/constants'
import Image from 'next/image'
import React from 'react'

export default function Home() {
  return (
  <main className="w-full p-20 overflow-hidden relative z-[-1] md:p-10 max-sm:px-5 bg-gradient-to-r from-gray-800 via-transparent to-transparent" style={{ backgroundImage: "url('/Hero.jpg')", backgroundRepeat: "no-repeat", opacity: 0.9 }}>
      <div className="absolute inset-0 bg-gradient-to-r from-gray-800 via-transparent to-transparent"></div>
      <div className="lg:w-[980px] max-sm:w-full flex flex-col relative">
        <div className="flex justify-between items-center">
          <div>
            <CustomButton title=' ' btnType='button' customButtonStyles='btn-circle mb-4 border-[3px] bg-transparent p-12 hover:bg-transparent hover:border-white '/>
            <span className='text-white font-semibold'>Watch the video</span>
          </div>
          <div className='lg:flex md:flex max-sm:hidden'>
            <CustomButton title='Contact Us' btnType='button' customButtonStyles='rounded-xl m-5 bg-primary-color-default text-white border-none '/>
          </div>
        </div>
        <hr className='bg-white p-0 mt-10'></hr>
        <h2 className='mt-16 text-5xl font-extrabold text-white max-sm:text-3xl'>
          Accelerate your digital transformation with DevOps in AWS, Google Cloud, Azure, Kubernetes, on-premise, serverless and more!
        </h2>
          {
            carousel_information.slice(0,1).map((quotes, index) => (
              <div className="text-3xl mt-10" key={index}>
                <h1 className='text-white'>{quotes.quote}</h1>
                <div className='mt-16 flex items-center gap-5'>
                <Image src={quotes.image} alt='quote logo' width={60} height={60} className='rounded-full' />
                <span className='text-white text-xs'>{quotes.company}</span>
                </div>
            </div>

            ))
          }
      <div className='lg:hidden md:hidden max-sm:flex mt-10'>
          <CustomButton title='Contact Us' btnType='button' customButtonStyles='rounded-xl bg-primary-color-default text-white border-none '/>
      </div>
      </div>
    </main>
  )
}
