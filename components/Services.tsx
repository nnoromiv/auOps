import { UserIcon } from '@heroicons/react/24/outline'
import React from 'react'
import { CustomButton, Navbar } from '.'
import { service_information, service_offering } from './export'

const Services = () => {
  return (
    <div id='services'>
        <div className="relative text-center" style={{ backgroundImage: "url('/Fas.jpg')"}}>
            <div className="absolute opacity-70 inset-0 bg-bg-wrapper-100"></div>
            <div className="relative">
                <h1 className='text-5xl pt-20 font-extrabold text-white mb-10'>Our services</h1>
                <p className="mt-10 w-[50vw] md:w-[90vw] max-sm:w-[80vw] m-auto text-white text-lg">
                    We have a portfolio of distinguished services in order to meet your particular needs.
                </p>
                <div className="w-[80vw] m-auto my-20 gap-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                    {
                        service_information?.map((service, index) => (
                            <div key={index} className='flex flex-col justify-center items-center'>
                                {service.icon}
                                <h1 className='my-5 text-white font-extrabold text-2xl'>{service.title}</h1>
                                <p className='text-white'>{service.text}</p>
                                <div className="m-5"></div>
                                <CustomButton title={service.buttonTitle} btnType='button' customButtonStyles='rounded-full my-10  bg-primary-color-default text-white border-none px-24 max-sm:px-10'/>
                            </div>
                        ))
                    }
                </div>
            </div>
        N</div>

        <div className="px-32 py-20 md:px-12 max-sm:px-5 max-sm:py-10">
            <h1 className='text-gray-700 font-bold text-5xl mb-24 lg:w-[40vw] md:w-[80vw] max-sm:text-3xl max-sm:w-full max-sm:mb-10'>We offer the best in technology and support</h1>
            <p className='font-normal w-[79vw] max-sm:w-full'>
                EZOps does not only offer outsourcing but a team of specialized professionals who are capable of applying all the experience of over 5 years of business to your needs. We have DevOps Developers, specialized in most platforms; SysOps DevOps who are responsible for the operation, and DevOps architects – all of them with a huge infrastructure archive at their disposal, speeding up the delivery and increasing the quality of the projects.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-20 gap-y-20 max-sm:gap-y-10">
                {
                    service_offering?.map((service, index) => (
                        <div key={index} className='flex gap-5'>
                            <div className='border-[3px] rounded-full py-2 px-4 h-fit'>
                                <h1 className='text-xl text-gray-800'>{index + 1}</h1>
                            </div>
                            <div className='pt-3'>
                                <h1 className='text-2xl font-semibold text-black pb-5'>{service.title}</h1>
                                <p className='text-lg'>{service.text}</p>
                            </div>
                        </div>
                    ))
                }                
            </div>
        </div>
    </div>

  )
}

export default Services