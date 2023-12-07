import React from 'react'
import { about_offering } from '../export'
import { CustomButton } from '..'

const Accelerate = () => {
  return (
    <div className="px-32 py-20 md:px-12 max-sm:px-5 max-sm:py-10">
            <h1 className='text-gray-700 font-bold text-5xl mb-24 lg:w-[50vw] md:w-[80vw] max-sm:text-3xl max-sm:w-full max-sm:mb-10'>Accelerate your digital transformation with cloud DevOps with the same technology as the great companies.</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 mt-20 gap-y-20 max-sm:gap-y-10">
                {
                    about_offering?.map((about, index) => (
                        <div key={index} className=''>
                            <div className='border bg-primary-color-light opacity-30 rounded-full p-4 h-fit w-fit'>
                                {about.icon}
                            </div>
                            <div className='pt-3'>
                                <h1 className='text-2xl font-semibold text-black pb-5'>{about.title}</h1>
                                <p className='text-lg'>{about.text}</p>
                            </div>
                        </div>
                    ))
                }                
            </div>
            <CustomButton title="Send us a message" btnType="button" customButtonStyles="bg-orange-100 text-white border-none rounded-full px-10 mt-20"/>
        </div>
  )
}

export default Accelerate