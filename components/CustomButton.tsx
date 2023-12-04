import { CustomButtonProps } from '@/types'
import Link from 'next/link'
import React from 'react'

const CustomButton = ({linkURL, customButtonStyles, isDisabled, btnType, title} : CustomButtonProps ) => {
  return (
    <Link
        href={linkURL || "/"}
        className='flex justify-center items-center'>
            <button 
                className={`btn border-none ${customButtonStyles}`}
                disabled={isDisabled}
                type={ btnType || "button"}
            >
                <span className='flex-1'>{title}</span>
            </button>
    </Link>
  )
}

export default CustomButton