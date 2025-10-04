'use client'
import React from 'react'
import Image from 'next/image'
import Modal from '@/app/components/project_modal/gam3rs_modal/modal'
import NavBar from '../../components/UI/navbar/navbar'
import Link from 'next/link'
import GitHub from '@/app/lib/images/project_icons/social_media/github-icon.png'
import LinkedIn from '@/app/lib/images/project_icons/social_media/linkedin-icon.png'
import Gam3rs_Home_Desk from '@/app/lib/images/projects/gam3rs_web_app/Gam3rs_Desk_Home.png'
import Gam3rs_Home_Mobile from '@/app/lib/images/projects/gam3rs_web_app/gam3rs_mobile_home.jpg'
import Gam3rs_Forums_Desk from '@/app/lib/images/projects/gam3rs_web_app/Gam3rs_Desk_Forums.png'
import Gam3rs_Forums_Mobile from '@/app/lib/images/projects/gam3rs_web_app/gam3rs_mobile_forums.png'
import Gam3rs_Games_Desk from '@/app/lib/images/projects/gam3rs_web_app/Gam3rs_Desk_Games.png'
import Gam3rs_Games_Mobile from '@/app/lib/images/projects/gam3rs_web_app/gam3rs_mobile_games.jpg'
import Gam3rs_About_Desk from '@/app/lib/images/projects/gam3rs_web_app/gam3rs_desk_about.png'
import Gam3rs_About_Mobile from '@/app/lib/images/projects/gam3rs_web_app/gamers_mobile_about.jpg'
import Gam3rs_Videos_Desk from '@/app/lib/images/projects/gam3rs_web_app/gam3rs_desk_videos.png'
import Gam3rs_videos_mobile from '@/app/lib/images/projects/gam3rs_web_app/gam3rs_mobile_videos.jpg'
type Props = {}

const The_Gam3r_Network = (props: Props) => {
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
            <div>
                 <h1 className='text-gray-400 flex text-2xl ' >The Gam3r Network</h1>
                 <h3 className='text-black' >Design and Developed the Gam3r Network website. 
                  The Gam3r Network website is a full-stack web development project created on the Next.js and React frameworks,
                   featuring user account creation via the Next-Auth Api, video uploads utilizing the MUX video Api, 
                   forum creation and an upcoming built-in Webshop utilizing the Stripe Api. 
                   Formulated a project plan, complete with a timeline and budget, 
                   to ensure the project's completion within the designated time frame.</h3>
                  <Link className='text-gray-400 flex text-lg' href='https://www.gam3rnetwork.com/home' >Project Link</Link>
            </div>
              
            </div>

            <div className=' max-sm:self-center max-sm:justify-self-center md:w-1/2  ' >
              <Modal />

            </div>

        </div>
        <div className=' flex flex-col w-4/5 justify-self-center max-sm:space-y-10 md:space-y-10' >
           <div className='' >
            <h1 className='text-2xl text-gray-400' >Home</h1>
             <div className='flex max-sm:flex-col flex-row justify-around max-sm:space-y-10' >
                <Image className=' md:absolute md:left-12 md:w-1/2 md:h-1/3 border-2   border-gray-200'  src={Gam3rs_Home_Desk} quality={100} height={1000} width={1000} alt='Home Page Desktop' />
                <Image className=' md:relative md:left-88 md:w-1/3 md:h-1/4 md:max-w-[250px] md:max-h-[750px] border-2   border-gray-200' src={Gam3rs_Home_Mobile} quality={100} height={750} width={300} alt='Home Page Mobile' />
             </div>
            

            

           </div>
           <div className='' >
            <h1 className='text-2xl text-gray-400' >About</h1>
             <div className='flex max-sm:flex-col flex-row justify-around max-sm:space-y-4' >
                <Image className='md:absolute md:left-12 md:w-1/2 md:h-1/3 border-2   border-gray-200 '  src={Gam3rs_About_Desk} quality={100} height={1000} width={1000} alt='About Page Desktop' />
                <Image className='  md:relative md:left-88 md:w-1/3 md:h-1/4 md:max-w-[250px] md:max-h-[750px] border-2   border-gray-200' src={Gam3rs_About_Mobile} quality={100} height={750} width={300} alt='About Page Mobile' />
             </div>
            

            

           </div>
           <div className='' >
            <h1 className='text-2xl text-gray-400' >Games</h1>
             <div className='flex max-sm:flex-col flex-row justify-around max-sm:space-y-4' >
                <Image className='md:absolute md:left-12 md:w-1/2 md:h-1/3 border-2   border-gray-200 '  src={Gam3rs_Games_Desk} quality={100} height={1000} width={1000} alt='Gam3rs Page Desktop' />
                <Image className=' md:relative md:left-88 md:w-1/3 md:h-1/4 md:max-w-[250px] md:max-h-[750px] border-2   border-gray-200'  src={Gam3rs_Games_Mobile} quality={100} height={500} width={500} alt='Gam3rs Page Mobile' />
             </div>
            

            

           </div>
             <div className='' >
            <h1 className='text-2xl text-gray-400' >Videos</h1>
             <div className='flex max-sm:flex-col flex-row justify-around max-sm:space-y-4' >
                <Image className='md:absolute md:left-12 md:w-1/2 md:h-1/3 border-2   border-gray-200 '  src={Gam3rs_Videos_Desk} quality={100} height={1000} width={1000} alt='Videos Page Desktop' />
                <Image className=' md:relative md:left-88 md:w-1/3 md:h-1/4 md:max-w-[250px] md:max-h-[750px] border-2   border-gray-200'  src={Gam3rs_videos_mobile} quality={100} height={500} width={500} alt='Videos Page Mobile' />
             </div>
            

            

           </div>


        </div>
      </div>
  )
}

export default The_Gam3r_Network