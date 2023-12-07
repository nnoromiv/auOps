import React from 'react'
import { images } from '@/constants'
import { ImageCarousel } from '.'
import Image from 'next/image'

const Clients = () => {
  return (
    <div className="text-center mt-20">
        <h1 className='text-5xl font-extrabold text-gray-700 mb-20'>Our clients around the world</h1>
        <ImageCarousel imageSlides={images} options={{loop: true, autoplay: true}} />
        <div className="mb-20 lg:mb-16 md:mb-10 max-sm:mb-4"></div>
        <div className="w-full flex justify-center items-center ml-auto">
            <Image src="/world.png" width={1400} height={100} alt='world' className='object-contain'/>
        </div>
    </div>
  )
}

export default Clients