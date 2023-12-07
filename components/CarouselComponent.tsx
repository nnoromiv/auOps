"use client";
import { CarouselComponentProps } from '@/types';
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import Image from 'next/image';

const ImageCarousel = ({imageSlides}: CarouselComponentProps) => {
  return (
    <div className="w-full grid gap-9 justify-center ml-auto">
        {
          imageSlides && (
            <>
              <div className='w-[80vw] h-[100px] flex lg:gap-56 md:gap-14  max-sm:gap-10 overflow-x-scroll'>
                {
                  imageSlides.slice(0,9).map((images, index) => (
                      <Image key={index} src={images.image} width={150} height={150} alt='logo' className='object-contain' />
                  ))
                }
              </div>
              <div className=' w-[80vw] h-[100px] flex lg:gap-56 md:gap-14  max-sm:gap-10 overflow-x-scroll'>
              {
                imageSlides.slice(9, 18).map((images, index) => (
                    <Image key={index} src={images.image} width={150} height={150} alt='logo' className='object-contain' />
                ))
              }
            </div>
            <div className=' w-[80vw] h-[100px] flex lg:gap-56 md:gap-14  max-sm:gap-10 overflow-x-scroll'>
              {
                imageSlides.slice(18, 27).map((images, index) => (
                    <Image key={index} src={images.image} width={150} height={150} alt='logo' className='object-contain' />
                ))
              }
            </div>
            <div className=' w-[80vw] h-[100px] flex lg:gap-56 md:gap-14  max-sm:gap-10 overflow-x-scroll'>
              {
                imageSlides.slice(27, 36).map((images, index) => (
                    <Image key={index} src={images.image} width={150} height={150} alt='logo' className='object-contain' />
                ))
              }
            </div>
            <div className=' w-[80vw] h-[100px] flex lg:gap-56 md:gap-14  max-sm:gap-10 overflow-x-scroll'>
              {
                imageSlides.slice(36, 45).map((images, index) => (
                    <Image key={index} src={images.image} width={150} height={150} alt='logo' className='object-contain' />
                ))
              }
            </div>
            <div className=' w-[80vw] h-[100px] flex lg:gap-56 md:gap-14  max-sm:gap-10 overflow-x-scroll'>
                {
                  imageSlides.slice(45,54).map((images, index) => (
                      <Image key={index} src={images.image} width={150} height={150} alt='logo' className='object-contain' />
                  ))
                }
              </div>
              <div className=' w-[80vw] h-[100px] flex lg:gap-56 md:gap-14  max-sm:gap-10 overflow-x-scroll'>
              {
                imageSlides.slice(54, 63).map((images, index) => (
                    <Image key={index} src={images.image} width={150} height={150} alt='logo' className='object-contain' />
                ))
              }
            </div>
            <div className=' w-[80vw] h-[100px] flex lg:gap-56 md:gap-14  max-sm:gap-10 overflow-x-scroll'>
              {
                imageSlides.slice(63, 72).map((images, index) => (
                    <Image key={index} src={images.image} width={150} height={150} alt='logo' className='object-contain' />
                ))
              }
            </div>
            <div className=' w-[80vw] h-[100px] flex lg:gap-56 md:gap-14  max-sm:gap-10 overflow-x-scroll'>
              {
                imageSlides.slice(72, 81).map((images, index) => (
                    <Image key={index} src={images.image} width={150} height={150} alt='logo' className='object-contain' />
                ))
              }
            </div>
            <div className=' w-[80vw] h-[100px] flex lg:gap-56 md:gap-14  max-sm:gap-10 overflow-x-scroll'>
              {
                imageSlides.slice(81, 90).map((images, index) => (
                    <Image key={index} src={images.image} width={150} height={150} alt='logo' className='object-contain' />
                ))
              }
            </div>
            <div className=' w-[80vw] h-[100px] flex lg:gap-56 md:gap-14  max-sm:gap-10 overflow-x-scroll'>
              {
                imageSlides.slice(90, 99).map((images, index) => (
                    <Image key={index} src={images.image} width={150} height={150} alt='logo' className='object-contain' />
                ))
              }
            </div>
            <div className=' w-[80vw] h-[100px] flex lg:gap-56 md:gap-14  max-sm:gap-10 overflow-x-scroll'>
              {
                imageSlides.slice(100, 109).map((images, index) => (
                    <Image key={index} src={images.image} width={150} height={150} alt='logo' className='object-contain' />
                ))
              }
            </div>
          </>
          )
        }
    </div>
  )
}

const CarouselComponent = ({textSlides, options}: CarouselComponentProps) => {
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [Autoplay()])
  return (
    <div className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
        {
          textSlides && 
          textSlides.map((quotes, index) => (
            <div className="embla__slide text-3xl mt-10" key={index}>
              <h1 className='text-white'>{quotes.quote}</h1>
              <div className='mt-16 flex items-center gap-5 mb-40 max-sm:mb-16'>
              <Image src={quotes.image} alt='quote logo' width={60} height={60} className='rounded-full' />
              <span className='text-white text-lg font-bold'>{quotes.company}</span>
              </div>
            </div>
          ))
        }
        </div>
      </div>
    </div>
  )
}

export { CarouselComponent, ImageCarousel }