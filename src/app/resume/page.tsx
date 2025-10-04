'use client'
import React from 'react'
import NavBar from '../components/UI/navbar/navbar'
import Modal from '../components/resume_modal/modal'
import Image from 'next/image'
import Link from 'next/link'
import GitHub from '@/app/lib/images/project_icons/social_media/github-icon.png'
import LinkedIn from '@/app/lib/images/project_icons/social_media/linkedin-icon.png'
import JavaScript from '@/app/lib/images/project_icons/coding_languages/icons8-javascript-50.png'
import HTML5 from '@/app/lib/images/project_icons/coding_languages/icons8-html-50.png'
import CSS3 from '@/app/lib/images/project_icons/coding_languages/icons8-css-50.png'
import TypeScript from '@/app/lib/images/project_icons/coding_languages/icons8-typescript-50.png'
import Solidity from '@/app/lib/images/project_icons/coding_languages/solidity-logo.png'
import Python from '@/app/lib/images/project_icons/coding_languages/icons8-python-48.png'
import Node from '@/app/lib/images/project_icons/coding_languages/icons8-nodejs-48.png'
import Nextjs from '@/app/lib/images/project_icons/coding_languages/nextjs3.webp'
import ReactJS from '@/app/lib/images/project_icons/coding_languages/icons8-react-js-48.png'
import Web3Pic from '@/app/lib/images/project_icons/coding_languages/icons8-web3-32.png'
import Docker from '@/app/lib/images/project_icons/coding_languages/icons8-docker-50.png'
import Git from '@/app/lib/images/project_icons/coding_languages/icons8-git-50.png'
import SQL from '@/app/lib/images/project_icons/coding_languages/icons8-sql-50.png'
import MUX from '@/app/lib/images/project_icons/coding_languages/Mux_Logo.png'
import Stripe from '@/app/lib/images/project_icons/coding_languages/icons8-stripe-50.png'
import Vercel from '@/app/lib/images/project_icons/coding_languages/Vercel-Logo.jpg'
import MongoDB from '@/app/lib/images/project_icons/coding_languages/icons8-mongodb-48.png'
type Props = {}

const Resume = (props: Props) => {
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
             {/* Education */}
            <div  className='flex flex-col self-center max-sm:justify-end space-y-4 max-sm:relative max-sm:py-16 md:w-1/4 ' >
            <div className='flex flex-col self-center max-sm:justify-end space-y-4 max-sm:relative max-sm:py-16 md:w-full' >
              {/*<h2 className='text-gray-400 flex max-sm:text-sm max-sm:p-2 justify-center  max-sm:w-5/6 max-sm:self-center' > Design that resonates &amp; Websites that captivate </h2> */}
               
              <h1 className='text-4xl text-black flex justify-center' >Education</h1>
              <div className='' >
                  <h3 className='text-black flex justify-center' >University of Houston</h3>
                <p className='text-gray-400 flex justify-center text-center ' >Bachelor&apos;s degree in Digital Media from the Cullen College of Engineering
                </p>
                <a className='text-gray-600 flex justify-center text-center' href='/files/Julian_Borner_Resume_2025.pdf'  target='_blank' rel='noopener noreferrer' >Click Here to access Resume</a>
              </div>
              <div className='' >
                   <h3 className='text-black flex justify-center' >JS Institute</h3>
                <p className='text-gray-400 flex justify-center text-center ' >JSE 40-01 Entry-Level JavaScript Programmer certification from the JS Institute.
                </p>
                <a className='text-gray-600 flex justify-center text-center' href='/files/certificate_djxg.UbyR.DHc2.pdf'  target='_blank' rel='noopener noreferrer' >Click Here to access Certification</a>
              </div>
                
            </div>
              
                  {/* Certification */}
            <div  className='flex flex-col self-center max-sm:justify-end space-y-4 max-sm:relative max-sm:py-16 md:w-full ' >
              {/* <h2 className='text-gray-400 flex max-sm:text-sm max-sm:p-2 justify-center  max-sm:w-5/6 max-sm:self-center' > Design that resonates &amp; Websites that captivate </h2>*/}
              
              <h1 className='text-4xl text-black flex justify-center' >Skills</h1>
              <div className='' >
                 <h3 className='text-black flex justify-center' >Languages</h3>
               
                <div className='  text-gray-400 flex justify-self-around text-center space-x-2' >
                  <div  >
                    <p>JavaScript</p>
                    <Image className='' src={JavaScript} alt='JavaScript' />
                  </div>
                   <div>
                    <p>HTML5</p>
                    <Image className='' src={HTML5} alt='HTML5' />
                  </div>
                   <div>
                    <p>CSS3</p>
                    <Image className='' src={CSS3} alt='CSS3' />
                  </div>
                   <div>
                    <p>TypeScript</p>
                    <Image className='' src={TypeScript} alt='TypeScript' />
                  </div>
                   <div>
                    <p>Solidity</p>
                    <Image className='w-20 h-10' src={Solidity} alt='Solidity' />
                  </div>
                   <div>
                    <p>Python</p>
                    <Image className='' src={Python} alt='Python' />
                  </div>
                </div>
                
              </div>
               <div className='' >
                 <h3 className='text-black flex justify-center' >Frameworks &amp; Libraries</h3>
               
                <div className='text-gray-400 flex justify-center text-center ' >
                  <div>
                    <p>React</p>
                    <Image className='w-10 h-10' src={ReactJS} alt='React' />
                  </div>
                   <div>
                    <p>Next.js</p>
                    <Image className='w-24 h-10' src={Nextjs} alt='Next.js' />
                  </div>
                   <div>
                    <p>Node.js</p>
                    <Image className='w-12 h-10' src={Node} alt='Node.js' />
                  </div>
                  {/*  <div>
                    <p>Express</p>
                    <Image className='' src='' alt='Express' />
                  </div>*/}
                  
                   <div>
                    <p>Web3.js</p>
                    <Image className='w-12 h-10' src={Web3Pic} alt='Web3.js' />
                  </div>
                   
                </div>
                
              </div>
                <div className='' >
                 <h3 className='text-black flex justify-center' >Databases</h3>
               
                <div className='text-gray-400 flex justify-center text-center ' >
                  <div>
                    <p>MongoDB</p>
                    <Image className='' src={MongoDB} alt='MongoDB' />
                  </div>
                   <div>
                    <p>SQL</p>
                    <Image className='' src={SQL} alt='SQL' />
                  </div>
                  
                   
                </div>
                
              </div>
              <div className='' >
                 <h3 className='text-black flex justify-center' >Tools</h3>
               
                <div className='text-gray-400 flex justify-around text-center ' >
                  <div>
                    <p>Git</p>
                    <Image className='w-12 h-10' src={Git} alt='Git' />
                  </div>
                   <div>
                    <p>Docker</p>
                    <Image className='w-12 h-10' src={Docker} alt='Docker' />
                  </div>
                   <div>
                    <p>Stripe API</p>
                    <Image className='w-12 h-10' src={Stripe} alt='Stripe API' />
                  </div>
                   <div>
                    <p>MUX</p>
                    <Image className='w-20 h-10' src={MUX} alt='MUX' />
                  </div>
                    <div>
                    <p>Vercel</p>
                    <Image className='w-20 h-10' src={Vercel} alt='Vercel' />
                  </div>
                </div>
                
              </div>
              
            </div>
            {/* Project History */}
             <div  className='flex flex-col self-center max-sm:justify-end space-y-4 max-sm:relative max-sm:py-16 md:w-full ' >
              
              {/* <h2 className='text-gray-400 flex max-sm:text-sm max-sm:p-2 justify-center  max-sm:w-5/6 max-sm:self-center' > Design that resonates &amp; Websites that captivate </h2>*/}
              <h1 className='text-4xl text-black flex justify-center' >Project History</h1>
                
                <div className='space-y-4' >
                    <h2 className='text-black flex justify-center' >Gam3rs Web App(2024- Present)</h2>
                    
                    {/* <h3 className='' >Houston, TX -- Apr 2025 - Present</h3>*/}
                <p className='text-gray-400 flex justify-center text-center ' >
                  Developed a full-stack gaming web application using Next.js, MongoDB, and NextAuth.
                </p>
                 <p className='text-gray-400 flex justify-center text-center ' >
                  Integrated Stripe for secure payment processing and MUX for video uploads.
                </p>
                 <p className='text-gray-400 flex justify-center text-center ' >
                  Built user authentication, forums, and e-commerce functionality.
                </p>
                 
                </div>
                 <div className='space-y-4' >
                    <h2 className='text-black flex justify-center' >ETQ-Amsterdam Clone (2025)</h2>
                    
                    {/* <h3 className='' >Houston, TX -- Apr 2025 - Present</h3>*/}
                <p className='text-gray-400 flex justify-center text-center ' >
                  Built a pixel-perfect clone of the ETQ Amsterdam e-commerce site using Next.js and React.
                </p>
                 <p className='text-gray-400 flex justify-center text-center ' >
                  Implemented product pages, collections, and cart system with responsive UI.
                </p>
                 <p className='text-gray-400 flex justify-center text-center ' >
                  Integrated MongoDB for product data handling and structured component-based design.
                </p>
                 
                </div>
                 <div className='space-y-4' >
                    <h2 className='text-black flex justify-center' >Ethereum dApp (2025)</h2>
                    
                    {/* <h3 className='' >Houston, TX -- Apr 2025 - Present</h3>*/}
                <p className='text-gray-400 flex justify-center text-center ' >
                 Built decentralized application using Solidity, Web3.js, and Ganache for local blockchain
                   development.
                </p>
                 <p className='text-gray-400 flex justify-center text-center ' >
                  Connected React frontend to deployed smart contract.
                </p>
                 
                 
                </div>
            </div>
            {/* Work History */}
             <div  className='flex flex-col self-center max-sm:justify-end space-y-4 max-sm:relative max-sm:py-16 md:w-full ' >
              
              {/* <h2 className='text-gray-400 flex max-sm:text-sm max-sm:p-2 justify-center  max-sm:w-5/6 max-sm:self-center' > Design that resonates &amp; Websites that captivate </h2>*/}
              <h1 className='text-4xl text-black flex justify-center' >Work History</h1>
                
                <div className='space-y-4' >
                    <h2 className='text-black flex justify-center' >Web Engineer - The Gam3r Network</h2>
                    <h3 className='text-black flex justify-center' >Houston, TX -- Apr 2025 - Present</h3>
                <p className='text-gray-400 flex justify-center text-center ' >
                  Designed and developed the Gam3rs website using Next.js, React, MongoDB, NextAuth, and Stripe API.
                </p>
                 <p className='text-gray-400 flex justify-center text-center ' >
                  Implemented video uploading via MUX Video API and created a community forum with user accounts. 
                </p>
                 <p className='text-gray-400 flex justify-center text-center ' >
                  Built the foundation for an integrated webshop and payment system.
                </p>
                 <p className='text-gray-400 flex justify-center text-center ' >
                  Collaborated on project planning, budgeting, and execution to meet timelines and financial goals.
                </p>
                </div>
            </div>
            </div>
           


            <div className=' max-sm:self-center max-sm:justify-self-center md:w-1/2 ' >
              <Modal/>

            </div>

        </div>
      </div>
  )
}

export default Resume