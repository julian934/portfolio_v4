'use client'
import React from 'react'
import Image from 'next/image'
import Gam3rs_Home_Desk from '@/app/lib/images/projects/gam3rs_web_app/Gam3rs_Desk_Home.png'

//type Props = {}

const Modal = () => {
  return (
    <div className='relative max-sm:top-8 md:min-h-[60vw] max-sm:px-4' >
      
        <div className='absolute z-20 bg-yellow-500 w-1/3 max-sm:-top-8 max-sm:-left-4 max-sm:w-full max-sm:h-1/2 max-sm:max-w-1/2 md:min-h-[400px] md:min-w-[400px] ' >

        </div>
        <div className=' relative max-sm:max-w-[250px]  md:top-78 md:left-24 md:min-w-[350px] z-30 ' >
            <Image className='rounded-md md:w-5/6 ' src={Gam3rs_Home_Desk} alt='Gam3rs Home Desk' />
        </div>
        <div className='absolute z-20 bg-yellow-500 w-1/3 max-sm:left-40 max-sm:top-24 max-sm:w-full max-sm:h-1/2 max-sm:max-w-1/2 md:min-h-[400px] md:min-w-[400px] md:top-[44.5vh] md:left-92 ' >

        </div>
      </div>
  )
}

export default Modal