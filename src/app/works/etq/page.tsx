'use client'
import React from 'react'
import Image from 'next/image'
import Modal from '@/app/components/project_modal/etq_modal/modal'
import NavBar from '../../components/UI/navbar/navbar'
import Link from 'next/link'
import GitHub from '@/app/lib/images/project_icons/social_media/github-icon.png'
import LinkedIn from '@/app/lib/images/project_icons/social_media/linkedin-icon.png'
import ETQ_Home_Desk from '@/app/lib/images/projects/etq_amsterdam/Main-Page-Desk.png'
import ETQ_Home_Mobile from '@/app/lib/images/projects/etq_amsterdam/Home_Mobile.png'
import Product_Page_Desk from '@/app/lib/images/projects/etq_amsterdam/product_page_desk.png'
import Product_Page_Mobile from '@/app/lib/images/projects/etq_amsterdam/product_page_mobile.png'
import Products_Desk from '@/app/lib/images/projects/etq_amsterdam/Products_Desk.png'
import Products_Mobile from '@/app/lib/images/projects/etq_amsterdam/Products_Mobile.png'
import * as motion from 'motion/react-client'

type Props = {}

const ETQ_Amsterdam = (props: Props) => {
  return (
    <div className='bg-white min-h-screen' >
     
      <div className='w-full max-sm:py-6 ' >
          <NavBar/>

        </div>
         <div className='flex  relative  flex-col-reverse  md:flex-row md:justify-around md:justify-center md:max-w-screen md:space-x-8 md:p-4 ' >
          <div className='flex justify-around md:flex-col md:justify-self-around max-sm:p-2 ' >
            <Link href='/' >
            <Image className='w-10 h-10' src={GitHub} alt='GitHub' />
            </Link>
             <Link href='/' >
            <Image className='w-10 h-10' src={LinkedIn} alt='LinkedIn' />
            </Link>
          </div>

            <div  className='flex flex-col self-center max-sm:justify-end space-y-4 max-sm:relative max-sm:py-16 md:w-1/4 ' >
            <div>
                 <h1 className='text-gray-400 flex text-2xl ' >ETQ Amsterdam Clone</h1>
                 <h3 className='text-black' >I designed and Developed a clone of the pre-existing ETQ-Amsterdam online store. 
                  This project was a full-stack web development project created using Next.js and React, 
                  and animated using Motion.Dev web plugins, along with Tailwind CSS. 
                  The user authentication process was implemented using Next-Auth and the backend database used for maintaining user information is the MongoDB database. 
                  User transactions are handled using a Stripe.js integration.</h3>
                  <Link className='text-gray-400 flex text-lg' href='https://etq-clone3-4qqo.vercel.app/home' >Project Link</Link>
            </div>
              
            </div>

            <div className=' max-sm:self-center max-sm:justify-self-center md:w-1/2  ' >
              <Modal />

            </div>

        </div>
        <div className=' flex flex-col w-4/5 justify-self-center max-sm:space-y-10 ' >
           <div className='' >
            <h1 className='text-2xl text-gray-400' >Home</h1>
             <div className='flex max-sm:flex-col flex-row justify-around max-sm:space-y-10' >
                <Image className='md:absolute md:left-12 md:w-1/2 md:h-1/2 border-2   border-gray-200'  src={ETQ_Home_Desk} quality={100} height={1000} width={1000} alt='Home Page Desktop' />
                <Image className='md:relative md:left-88 md:w-1/3 md:h-1/4 md:max-w-[250px] md:max-h-[750px] border-2   border-gray-200' src={ETQ_Home_Mobile} quality={100} height={750} width={300} alt='Home Page Mobile' />
             </div>
            

            

           </div>
           <div className='' >
            <h1 className='text-2xl text-gray-400' >Products</h1>
             <div className='flex max-sm:flex-col flex-row justify-around max-sm:space-y-10' >
                <Image className='   md:absolute md:left-12 md:w-1/2 md:h-1/2 border-2   border-gray-200'  src={Products_Desk} quality={100} height={1000} width={1000} alt='Home Page Desktop' />
                <Image className=' md:relative md:left-88 md:w-1/3 md:h-1/4 md:max-w-[250px] md:max-h-[750px] border-2   border-gray-200' src={Products_Mobile} quality={100} height={750} width={300} alt='Home Page Mobile' />
             </div>
            

            

           </div>
           <div className='' >
            <h1 className='text-2xl text-gray-400' >Product Page</h1>
             <div className='flex max-sm:flex-col flex-row justify-around max-sm:space-y-10' >
                <Image className=' md:absolute md:left-12 md:w-1/2 md:h-1/2 border-2   border-gray-200'  src={Product_Page_Desk} quality={100} height={1000} width={1000} alt='Home Page Desktop' />
                <Image className=' md:relative md:left-88 md:w-1/3 md:h-1/4 md:max-w-[250px] md:max-h-[750px] border-2   border-gray-200' src={Product_Page_Mobile} quality={100} height={750} width={300} alt='Home Page Mobile' />
             </div>
            

            

           </div>
            


        </div>

      </div>
  )
}

export default ETQ_Amsterdam