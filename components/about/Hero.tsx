import React from 'react'
import { about_hero_information } from '../export'
import { CustomButton } from '..'

const Hero = () => {
  return (
    <div className="w-full p-20 overflow-hidden relative md:p-10 max-sm:px-5" style={{ backgroundImage: "url('/Hero.jpg')", backgroundRepeat: "no-repeat"}}>
    <div className="absolute inset-0 bg-bg-wrapper-100 bg-opacity-70"></div>
    <div className='relative my-32 mx-20 max-sm:my-10 max-sm:mx-3 text-center text-white'>
        <h1 className='text-xl font-bold p-5 max-sm:p-0 max-sm:py-5'>Who are we?</h1>
        <h1 className='text-6xl font-extrabold p-3 max-sm:text-4xl'>We are experts in cloud DevOps.</h1>
        <p className='p-3 w-[50vw] m-auto max-sm:w-full'>We think of solutions for your product to stand out in the international market, in a safe, fast, automated way, and with maximum efficiency. We have 24/7 support, allowing the best experience for your customers.</p>
        <div className="w-[80vw] md:w-full m-auto my-20 gap-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {
                about_hero_information?.map((about, index) => (
                    <div key={index} className='flex flex-col justify-center items-center'>
                        {about.icon}
                        <h1 className='my-5 text-white font-extrabold text-2xl'>{about.title}</h1>
                        <p className='text-white'>{about.text}</p>
                        <div className="m-5"></div>
                    </div>
                ))
            }
        </div>

    </div>
    </div>
  )
}

export default Hero