'use client'
import React,{useState} from 'react'
import Image from 'next/image'
//import Modal from '../components/home_modal/modal'
import NavBar from '../components/UI/navbar/navbar'
import Link from 'next/link'
import GitHub from '@/app/lib/images/project_icons/social_media/github-icon.png'
import LinkedIn from '@/app/lib/images/project_icons/social_media/linkedin-icon.png'
import Modal from '../components/works_modal/modal'
import * as motion from 'motion/react-client'


type Props = {}

const Works = (props: Props) => {
  const [activeEtq,setActiveETQ]=useState<boolean>(false);
  const [activeGam3rs,setActiveGam3rs]=useState<boolean>(false);
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
               <Link  href='/works/etq' >
               <motion.button onHoverStart={()=>setActiveETQ(!activeEtq)} onHoverEnd={()=>setActiveETQ(!activeEtq)} >
                   <h2 className='text-gray-400 flex text-2xl max-sm:p-2 justify-center  max-sm:w-5/6 max-sm:self-center' >ETQ Amsterdam Clone</h2>
               </motion.button>
               </Link>
               <Link href='/works/gam3rs' >
               <motion.button onHoverStart={()=>setActiveGam3rs(!activeGam3rs)} onHoverEnd={()=>setActiveGam3rs(!activeGam3rs)} >
                   <h2 className='text-gray-400 flex text-2xl max-sm:p-2 justify-center  max-sm:w-5/6 max-sm:self-center' >Gam3rs Web App</h2>
               </motion.button>
               </Link>
            </div>

            <div className=' max-sm:self-center max-sm:justify-self-center md:w-1/2 ' >
              <Modal gam3rs={activeGam3rs} etq={activeEtq} />

            </div>

        </div>

      </div>
  )
}

export default Works