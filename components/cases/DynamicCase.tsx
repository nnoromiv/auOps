import { DynamicCaseProp } from '@/types'
import { CloudArrowUpIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'
import React, { ReactNode } from 'react'


const DynamicCase = (
    {
        pageLink, 
        caseStudyText, 
        caseImage, 
        notableQuoteName, 
        quote, 
        benefit, 
        benefitList, 
        benefitInformation, 
        nutShell, 
        nutShellP, 
        serviceText, 
        serviceTitle, 
        useCases
    } : DynamicCaseProp) => {
  return (
    <main className='overflow-hidden'>
    <div className='relative bg-gray-300 text-black px-20 py-24 max-lg:px-14 max-sm:px-7'>
        <div className="text-white pt-5 text-sm breadcrumbs -mx-10 max-lg:mx-0 max-sm:text-xs">
            <ul>
                <li className='text-black'><a href="/">Home</a></li>
                <li className='text-red-700'><a href="/cases">Case Studies</a></li>
                <li>{pageLink.split("-").join(" ").toUpperCase()}</li>
            </ul>
        </div>
        <div className="flex justify-between mt-14 max-lg:gap-10 max-lg:flex-col ">
            <div className="flex flex-col w-[50vw] max-lg:w-full">
                <h1 className="text-6xl font-bold text-primary-color-default mb-5">AUOps</h1>
                <h1 className="text-6xl font-bold mb-5 max-sm:text-5xl">{pageLink.split("-").join(" ").toUpperCase()}</h1>
                <p className='text-xl w-[40vw] max-lg:w-full'>
                    {caseStudyText}
                </p>
            </div>
            <div className="w-[50vw] max-lg:w-full">
                <Image src={caseImage} width={400} height={400} alt='image' className='object-contain w-full'/>
            </div>
        </div>
    </div>

    <div className="flex gap-4 justify-center items-center bg-white p-20 text-black max-lg:flex-col max-lg:gap-10 max-lg:p-14 max-lg:items-start max-sm:px-7">
        {
            notableQuoteName === "" || quote === "" ?
            <></>
            :
            <aside className="w-[30vw] max-lg:w-[70vw] max-sm:w-full">
                <h3 className='font-bold text-xl'>{notableQuoteName}</h3>
                <div className='flex mt-4 -ml-2'>
                    <div className="divider divider-horizontal divider-primary h-[7vw] w-[2px] max-lg:h-[12vw] max-sm:h-[30vw]"></div>
                    <q className='text-2xl'>
                        {quote}
                    </q>
                </div>
            </aside>
            
        }
        <div className='w-[70vw] max-lg:w-full'>
            <h1 className="text-black text-5xl font-bold pb-4 -mt-3 max-lg:mt-0 max-lg:text-4xl max-sm:text-2xl">
                {benefit}
            </h1>
            <ul className='list-disc ml-10 max-sm:ml-3'>
                {
                    benefitList?.map((list, index) => (
                        <li key={index}>{list.item}</li>
                    ))
                }
            </ul>
        </div>
    </div>

    <div className="grid gap-10 grid-cols-4 max-lg:grid-cols-2 max-sm:grid-cols-1 bg-white p-20 max-lg:p-14 max-sm:p-7  justify-between">
        {
            benefitInformation?.map((info, index) => (
                <div className='grid gap-10 text-center' key={index}>
                    <h1 className="text-primary-color-default text-6xl font-extrabold"> {info.text} </h1>
                    <p className="text-xl">{info.title}</p>
                </div>
            ))
        }
    </div>

    {
        nutShell === "" || nutShellP === "" || serviceText === "" || serviceTitle === "" ?
        <div className="-mt-48"></div>
        :
        <div className="flex gap-4 justify-center items-center bg-white p-20 text-black max-lg:flex-col max-lg:gap-10 max-lg:p-14 max-lg:items-start max-sm:px-7">
        <div className='w-[65vw] max-lg:w-full'>
            <h1 className="text-black text-5xl font-bold pb-4 max-lg:mt-0 max-lg:text-4xl max-sm:text-2xl">
                {nutShell}
            </h1>
            <p>
                {nutShellP}
            </p>
        </div>
        <aside className="w-[35vw] max-lg:w-[70vw] max-sm:w-full">
            <h3 className='font-bold text-xl'>{serviceTitle}</h3>
            <div className='flex mt-4'>
                <div className="divider divider-horizontal divider-primary h-[11vw] w-[2px] max-lg:h-[12vw] max-sm:h-[50vw]"></div>
                <q className='text-2xl'>
                    {serviceText}
                </q>
            </div>
        </aside>
    </div>
    }
    
    <div className='text-center mt-20 p-20 max-lg:mt-10 max-lg:p-14 max-sm:p-7'>
        <h1 className="font-bold text-5xl text-black max-sm:text-4xl">
            Typical Use Cases
        </h1>
        <div className="grid grid-cols-2 max-sm:grid-cols-1 mt-10 gap-10">
            {
                useCases?.map((useCase, index) => (
                    <div key={index} className="flex flex-col justify-center items-center mt-5">
                        {useCase.icon}
                        <p className='text-xl max-sm:text-lg'>{useCase.text}</p>
                    </div>
                ))
            }
        </div>
    </div>
</main>
  )
}

export default DynamicCase