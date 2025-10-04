'use client'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Logo from '@/app/lib/images/project_icons/professional_images/Julian_Borner_Logo.png'
import mail from '@/app/lib/images/project_icons/UI/icons8-mail-50.png'
import works from '@/app/lib/images/project_icons/UI/icons8-portfolio-50.png'
import resume from '@/app/lib/images/project_icons/UI/icons8-resume-50.png'
import settings from '@/app/lib/images/project_icons/UI/icons8-settings-50.png'

//type Props = {}

const NavBar = () => {
  return (
    <div className='flex justify-around' >
        
        <div className='max-sm:absolute z-50 md:relative   max-sm:-left-8 max-sm:-top-8 ' >
            <Link className='' href='/home' >
           <Image className='w-48 h-30 md:relative md:w-full md:min-w-[250px] md:min-h-[150px] ' src={Logo} quality={100} alt='Julian Borner Portfolio' /> 
           </Link>
        </div>
        <div className=' max-sm:invisible flex justify-around w-60 self-center  text-gray-400' >
            <div  >
                <a className='flex justify-around  space-x-2 ' href="mailto:jborner111@gmail.com" >
                   <Image className='w-6 h-6' src={mail} alt='Mail Icon' />
                    <h1 className=' flex self-center text-md' >Email Address</h1>
                </a>

            </div>
             <Link className='flex' href='/settings' >
              
              <Image className='w-6 h-6' src={settings} alt='Settings' />
             </Link>

        </div>
        <div className='flex justify-around relative self-center max-sm:-left-4  text-gray-400  w-64 ' >
            <div className='flex' >
                <Link className='flex space-x-2 ' href='/works' >
                <Image className='w-6 h-6' src={works} alt='Works' />
                  <h1 className='flex self-center' >Works</h1>
                </Link>
            </div>
             <div className='flex' >
                <Link className='flex space-x-2' href='/resume' >
                  <Image className='w-6 h-6' src={resume} alt='Resume' />
                  <h1 className='flex self-center' >Resume</h1>
                </Link>
            </div>

        </div>
        </div>
  )
}

export default NavBar