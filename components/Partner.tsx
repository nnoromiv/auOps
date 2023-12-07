import Image from 'next/image'
import Link from 'next/link'
import { CustomButton } from '.'
import { partner_information } from './export'

const PartnerHero = () => {
    return (
        <div className='relative flex flex-col justify-center items-center mt-28 py-28 px-40 max-sm:px-4' style={{ backgroundImage: "url('/Hero_2.jpg')"}}>
            <div className="absolute inset-0 bg-[#0a0a0a] opacity-60"></div>
            <h1 className='relative text-4xl font-bold text-white'>AUOps has more than customers, we have partners.</h1>
            <p className='relative text-white w-[600px] mt-10 text-lg max-sm:w-full'>We are proud to have earned the trust of customers from numerous segments and in countless locations around the world.</p> 
            <div className='grid grid-cols-2 max-sm:grid-cols-1 gap-40  mt-20 max-sm:gap-10 text-white relative'>
                {
                    partner_information?.map((info, index) => (
                        <div key={index} className='flex flex-col items-center justify-center'>
                            {info.icon}
                            <h1 className='text-8xl mt-5 font-extrabold max-sm:text-6xl'>{info.number}<sup>{info.superScript}</sup></h1>
                            <p className='mt-5'>{info.text}</p>
                        </div>
                    ) )
                }
            </div>  
            <CustomButton title='Case studies' linkURL="/" customButtonStyles='mt-28 relative text-white text-lg px-10 border-none rounded-full bg-primary-color-default'/>  
        </div>
    )
}

const Partner = () => {
  return (
    <div className='text-center'>
        <h1 className='text-5xl font-extrabold text-gray-700'>Why you can trust us</h1>
        <div className="flex justify-around items-center mt-12 max-sm:flex-col max-sm:gap-2">
            <Image src="/aws_partner.png" alt="partner_1" width={300} height={300} />
            <Image src="/upwork_partner.png" alt="partner_1" width={300} height={300} className='mb-10'/>
        </div>
        <Link href="/" className='text-xl hover:text-blue-600'>Continue to profile &rarr;</Link>
        <PartnerHero />
    </div>
  )
}

export default Partner