'use client'
import React from 'react'
import Image from 'next/image'
import Gam3rs_Desk from '@/app/lib/images/projects/gam3rs_web_app/Gam3rs_Desk_Home.png'
import ETQ_Desk from '@/app/lib/images/projects/etq_amsterdam/Main-Page-Desk.png'
import Julian_Borner_Logo from '@/app/lib/images/project_icons/professional_images/Julian_Borner_Logo.png'
type Props = {
  gam3rs:boolean | null,
  etq:boolean | null
}

const Modal = (props: Props) => {
  return (
    <div className='relative max-sm:top-8 md:min-h-[60vw] max-sm:px-4' >

        <div className='absolute z-20 bg-yellow-500 w-1/3 max-sm:-top-8 max-sm:-left-4 max-sm:w-full max-sm:h-1/2 max-sm:max-w-1/2 md:min-h-[400px] md:min-w-[400px] ' >

        </div>
        <div className={props.gam3rs==true || props.etq==true?'relative max-sm:max-w-[250px] md:top-24 md:left-24 md:min-w-[400px] z-30  bg-white':'relative max-sm:max-w-[250px] md:top-28 md:-left-6 z-50 md:min-w-[400px]  '} >
            <Image className={props.gam3rs==true || props.etq==true? 'rounded-md':'relative w-full h-full  '} src={props.gam3rs==true && props.etq==false?Gam3rs_Desk: props.gam3rs==false && props.etq==true? ETQ_Desk : Julian_Borner_Logo} alt='Professional Image' />
        </div>
        <div className='absolute z-20 bg-yellow-500 w-1/3 max-sm:left-40 max-sm:top-48 max-sm:w-full max-sm:h-1/2 max-sm:max-w-1/2 md:min-h-[400px] md:min-w-[400px] md:top-[44.5vh] md:left-92 ' >

        </div>
        </div>
  )
}

export default Modal