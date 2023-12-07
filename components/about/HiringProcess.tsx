import React from 'react'
import { hiring_process } from '@/constants'

const HiringProcess = () => {
  return (
    <div className='text-center bg-gray-300 p-28 md:px-10 max-sm:px-3'>
        <h1 className='text-black text-6xl font-extrabold max-sm:text-4xl'>Hiring Process</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 py-20 px-0">
               {
                hiring_process?.map((info, index) => (
                    <div key={index} className="group card w-fit h-fit text-left bg-inherit hover:shadow-xl p-5 cursor-pointer hover:bg-primary-color-default rounded-md max-sm:p-3">
                    <div className="card-body">
                        <div className="card-title text-bg-wrapper-100 text-3xl font-semibold">
                            {index + 1}
                        </div>
                        <h1 className='text-2xl text-black font-bold group-hover:text-white'>{info.title}</h1>
                        <p className='text-gray-100 group-hover:text-white'>{info.text}</p>
                    </div>
                    </div>
                ))
               }
            </div>
    </div>
  )
}

export default HiringProcess