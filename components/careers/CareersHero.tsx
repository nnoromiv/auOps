import { BookOpenIcon, Cog6ToothIcon, ComputerDesktopIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'
import React from 'react'
import { career_information } from '../export'

const CareersHero = () => {
  return (
    <>
        <div className="w-full overflow-hidden relative max-sm:pt-10" style={{ backgroundImage: "url('/Hero.jpg')", backgroundRepeat: "no-repeat"}}>
        <div className="absolute inset-0 bg-bg-wrapper-100 bg-opacity-70"></div>
        <div className='relative my-32 mx-20 max-sm:my-10 max-sm:mx-3 text-center text-white'>
            <h1 className='text-xl font-bold p-5 max-sm:p-0 max-sm:py-5'>Let's work together</h1>
            <p className='p-3 w-[50vw] m-auto max-sm:w-full'>
                We’re currently looking for new talents – If you’re a passionate worker and if you think you have what it takes, take a look at the details to take a chance at our positions.
            </p>
            <div className='flex flex-col gap-10 mt-20 max-sm:mt-10'>
                {
                    career_information.map((career, index) => (
                        <div key={index} className='group border border-t-0 pl-5 pt-7 border-l-0 border-r-0 border-gray-400 hover:bg-primary-color-default w-full h-[100px] rounded-t-xl flex flex-col duration-300 delay-150 cursor-pointer'>
                            <div className='flex gap-5 justify-left pb-0 items-center'>
                                {career.icon}
                                <h1 className='text-3xl font-bold max-sm:text-sm'>{career.title}</h1>
                            </div>
                        </div>
                    ))
                }
            </div>
            <div className="mt-32"></div>
            <Link href="/" className='text-3xl font-semibold' >Linkedin &rarr;</Link>
        </div>
        <div className="bg-[#0A0A0A] m-0 w-full h-[300px] text-center flex justify-center items-center max-sm:px-3" >
            <h1 className='text-white relative text-4xl font-bold max-sm:text-2xl'>If you prefer, send an email to rh@auops.com.br</h1>
        </div>
        </div>
        
    </>
  )
}

export default CareersHero