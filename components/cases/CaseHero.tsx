import { case_studies } from '@/constants'
import Image from 'next/image'
import React from 'react'

const CaseHero = () => {
  return (
    <div className='text-center bg-gray-300 p-28 md:px-10 max-sm:px-3'>
        <h1 className='text-black text-6xl font-extrabold max-sm:text-4xl'>Case Studies</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 py-20 px-0">
            {
                case_studies?.map((cases, index) => (
                    <div key={index} className="card w-full z-0 shadow-xl image-full group cursor-pointer hover:scale-105 ease-in duration-300 delay-150">
                        <figure className='h-[400px]'>
                            <Image src={cases.image} width={500} height={500} className='w-full object-contain' alt='case' />
                        </figure>
                        <div className="card-body">
                            <div className="card-title m-auto text-4xl text-white group-hover:text-black">
                                {cases.title}
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default CaseHero