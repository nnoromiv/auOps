import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { information } from '.'

const Information = () => {
  return (
    <div className='flex justify-center items-center'>
        <div className="w-[80vw] -mt-36">
            <div className="w-full lg:flex max-md:flex-col">
                <div className='w-full relative text-left p-20 max-md:p-10 text-white' style={{ backgroundImage: "url('/Fas.jpg')"}}>
                    <div className="absolute opacity-70 inset-0 bg-bg-wrapper-100"></div>
                        <h1 className='text-5xl font-bold mb-10 relative'>Fast and safe. <br /> Perfect!</h1>
                        <p className='relative'>We develop solutions and get your system on air in an automated, quick, and safe way, with the best of quality.</p>
                </div>
                    <Image src='/Fas.jpg' alt='fast-and-secure' width={500} height={100} className='relative object-cover'/>
            </div>
            <div className="w-full lg:flex max-md:flex-col">
                <Image src='/Dev.jpg' alt='fast-and-secure' width={500} height={100} className='lg:ml-0 md:ml-auto'/>
                <div className='w-full relative text-left py-10 px-20 max-md:px-10 text-white bg-white'>
                    <Image src="/aws.png" width={60} height={60} alt='aws' className='mb-4 relative' />
                        <h1 className='text-black text-5xl font-bold mb-10 relative'>DevOps Experts</h1>
                        <p className='text-black relative mb-3'>We are experts in cloud DevOps, and we think of solutions for your projects to stand out in the international market. Keeping it safe, fast, automated, and with maximum efficiency. We give 24/7 support, allowing the best experience for your customers.</p>
                        <Link href="/" className='text-xl text-blue-800 relative' >Request a proposal</Link>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 py-28 px-0">
               {
                information.map((info, index) => (
                    <div key={index} className="group card w-full bg-white hover:shadow-xl py-10 px-8 cursor-pointer hover:bg-primary-color-default rounded-md max-sm:p-3">
                    <div className="card-body">
                        <div className="card-title mb-2">
                            {info.icon}
                        </div>
                        <h1 className='text-2xl text-black font-bold group-hover:text-white mb-2'>{info.title}</h1>
                        <p className='text-gray-100 group-hover:text-white'>{info.text}</p>
                    </div>
                    </div>
                ))
               }
            </div>
        </div>
    </div>
  )
}

export default Information