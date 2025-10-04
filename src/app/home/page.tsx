'use client'
import React from 'react'
import Image from 'next/image'
import Modal from '../components/home_modal/modal'
import NavBar from '../components/UI/navbar/navbar'
import Link from 'next/link'
import GitHub from '@/app/lib/images/project_icons/social_media/github-icon.png'
import LinkedIn from '@/app/lib/images/project_icons/social_media/linkedin-icon.png'

//type Props = {}

const Home = () => {
  return (
    <div className='bg-white min-h-screen' >
        
        <div className='w-full max-sm:py-6 ' >
          <NavBar/>

        </div>
        <div className='flex  relative  flex-col-reverse  md:flex-row md:justify-around md:justify-center md:max-w-screen md:space-x-8 md:p-4 ' >
          <div className='flex justify-around md:flex-col md:justify-self-around max-sm:p-2 ' >
            <Link href='https://github.com/julian934' >
            <Image className='w-10 h-10' src={GitHub} alt='GitHub' />
            </Link>
             <Link href='https://www.linkedin.com/in/julian-borner-709b91b7/?profileId=ACoAABjp17kBZWBPjm1poVjlER_t9U19uALJwbQ' >
            <Image className='w-10 h-10' src={LinkedIn} alt='LinkedIn' />
            </Link>
          </div>

            <div  className='flex flex-col self-center max-sm:justify-end space-y-4 max-sm:relative max-sm:py-16 md:w-1/4 ' >
              <h2 className='text-gray-400 flex max-sm:text-sm max-sm:p-2 justify-center  max-sm:w-5/6 max-sm:self-center' > Design that resonates &amp; Websites that captivate </h2>
              <h1 className='text-4xl text-black flex justify-center' >Julian Borner</h1>
                <h3 className='text-black flex justify-center' >Web Developer, Designer &amp; Programmer</h3>
                <p className='text-gray-400 flex justify-center text-center ' >Software Developer from Houston, Texas
                  with extensive experience building complex applications with modern technologies
                </p>
            </div>

            <div className=' max-sm:self-center max-sm:justify-self-center md:w-1/2 ' >
              <Modal/>

            </div>

        </div>


        </div>
  )
}

export default Home