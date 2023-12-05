"use client";
import { CarouselComponentProps } from '@/types';
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import Image from 'next/image';
import { carousel_information } from '@/constants';

const CarouselComponent = ({slides, options}: CarouselComponentProps) => {
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [Autoplay()])
  return (
    <div className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
        {
          slides.map((quotes, index) => (
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

export default CarouselComponent