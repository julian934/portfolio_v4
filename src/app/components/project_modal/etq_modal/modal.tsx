'use client'
import React from 'react'
import Image from 'next/image'
import ETQ_Desk from '@/app/lib/images/projects/etq_amsterdam/Main-Page-Desk.png'
//type Props = {}

const Modal = () => {
  return (
    <div className='relative max-sm:top-8 md:min-h-[60vw] max-sm:px-4' >
      
        <div className='absolute z-20 bg-yellow-500 w-1/3 max-sm:-top-8 max-sm:-left-4 max-sm:w-full max-sm:h-1/2 max-sm:max-w-1/2 md:min-h-[400px] md:min-w-[400px] ' >

        </div>
        <div className=' relative  max-sm:max-w-[250px] md:top-56 md:left-16 md:min-w-[400px] z-30 ' >
            <Image className='rounded-md md:w-5/6 md: ' quality={100} height={1000} width={1000} src={ETQ_Desk} alt='ETQ Desktop' />
        </div>
        <div className='absolute z-20 bg-yellow-500 w-1/3 max-sm:left-40 max-sm:top-48 max-sm:w-full max-sm:h-1/2 max-sm:max-w-1/2 md:min-h-[400px] md:min-w-[400px] md:top-[44.5vh] md:left-92 ' >

        </div>
      </div>
  )
}

export default Modal