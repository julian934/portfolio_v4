'use client'
import React from 'react'
import Image from 'next/image'
import UH_Logo from '@/app/lib/images/project_icons/credentials/University_of_Houston_seal.svg.png'

//type Props = {}

const Modal = (props: any) => {
  return (
    <div className='relative max-sm:top-8 md:min-h-[60vw] max-sm:px-4' >
      
        <div className='absolute z-20 bg-yellow-500 w-1/3 max-sm:-top-8 max-sm:-left-4 max-sm:w-full max-sm:h-1/2 max-sm:max-w-1/2 md:min-h-[400px] md:min-w-[400px] ' >

        </div>
        <div className=' relative max-sm:max-w-[250px] md:top-24 md:left-24 md:min-w-[400px] z-30 ' >
            <Image className='rounded-md' src={UH_Logo} alt='Professional Image' />
        </div>
        <div className='absolute z-20 bg-yellow-500 w-1/3 max-sm:left-40 max-sm:top-48 max-sm:w-full max-sm:h-1/2 max-sm:max-w-1/2 md:min-h-[400px] md:min-w-[400px] md:top-[44.5vh] md:left-92 ' >

        </div>
      </div>
  )
}

export default Modal