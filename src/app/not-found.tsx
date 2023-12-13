import { Footer } from '@/components'
import Link from 'next/link'
 
export default function NotFound() {
  return (
    <>
      <div className='relative flex flex-col justify-center items-center h-[80vh] bg-[#00011f] text-white text-4xl font-bold'>
        <h2 className='pt-36 mb-10 max-sm:text-xl'>Not Found</h2>
        <p className='mb-20 max-sm:text-xl'>404| Page not Found</p>
        <Link href="/" className='text-blue-950 max-sm:text-xl'>Return Home</Link>
      </div>
      <Footer contactButton={true}/>
    </>
  )
}