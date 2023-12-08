import React from 'react'
import { CustomButton } from '..'

const ContactUs = () => {
  return (
    <div className="grid grid-flow-col bg-bg-wrapper-100 max-[768px]:grid-flow-row max-sm:grid-flow-row">
        <form className='w-[50vw] mt-28 px-20 md:pb-10 max-[768px]:w-full max-sm:w-full max-sm:px-4 max-sm:pb-10'>
            <label htmlFor="name" className="form-control mb-10">
                <div className="label">
                    <span className="label-text text-3xl text-white font-semibold">Name <em className='text-red-900'>*</em></span>
                </div>
                <input type="text" className="input input-ghost focus:bg-transparent" />
            </label>
            <label htmlFor="email" className="form-control mb-10">
                <div className="label">
                    <span className="label-text text-3xl text-white font-semibold">Email <em className='text-red-900'>*</em></span>
                </div>
                <input type="text" className="input input-ghost focus:bg-transparent" />
            </label>
            <label htmlFor="message" className="form-control mb-10">
                <div className="label">
                    <span className="label-text text-3xl text-white font-semibold">Message <em className='text-red-900'>*</em></span>
                </div>
                <textarea  className="textarea textarea-ghost h-[200px] focus:bg-transparent" ></textarea>
            </label>
            <CustomButton title='Submit' customButtonStyles='rounded-full w-full text-2xl text-white btn-ghost glass'/>
        </form>
        <div className="w-[50vw] h-[105vh] overflow-hidden relative max-[768px]:hidden max-sm:pt-10" style={{ backgroundImage: "url('/Hero.jpg')", backgroundRepeat: "no-repeat"}}>
            <div className="absolute inset-0 bg-bg-wrapper-100 bg-opacity-70"></div>
        </div>
    </div>
  )
}

export default ContactUs