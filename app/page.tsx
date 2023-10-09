'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import MyPic from '../public/my-pic.jpg'
import User3 from '../public/user_3_line.png'
import Science from '../public/science_line (1).png'
import Code from '../public/code_line (2).png'
import LectureMate from '../public/biglogo.png'
import ExLink from '../public/external_link_line.png'
import Certificate from '../public/certificate_2_line (1).png'
import Udemy1 from '../public/theCompleteWebDevCert.jpg'
import Udemy2 from '../public/MongoDBCert.jpg'
import Phone from '../public/phone_line (1).png'
import Instagram from '../public/ins_line.png'
import Twitter from '../public/twitter_line.png'
import Linkedin from '../public/linkedin_line.png'
import Mail from '../public/mail_line.png'
import Facebook from '../public/facebook_line.png'

export default function Home() {
  const [open, setOpen] = useState(false)
  const router = useRouter()

  const handleHire = () => {
    router.push('#Hire-Me')
  }

  return (
    <main className="flex min-h-screen w-full flex-col items-center lg:px-24 pb-8 foreground relative transition-all">  
      <nav className="w-full z-20 foreground-1 fixed">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="#" className="flex items-center text-center hover:text-blue-700">
            <span className="self-center text-2xl font-semibold font-inputSans whitespace-nowrap dark:text-white">&lt;I/U&gt;<br/>
            </span>
        </a>
        <div className="flex lg:order-2">
            <button onClick={handleHire} type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-sm text-[14px] px-3 py-1 text-center mr-3 lg:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 font-inputSans">Hire me</button>
            <button data-collapse-toggle="navbar-sticky" onClick={() => setOpen(!open)} type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg lg:hidden hover:border-blue-700 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false">
              {
                open ?
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" viewBox="0 0 24 24" className="humbleicons hi-times"><g xmlns="http://www.w3.org/2000/svg" stroke="currentColor" stroke-linecap="round" stroke-width="2"><path d="M6 18L18 6M18 18L6 6"/></g></svg>
                :
                <>
                <span className="sr-only">Open main menu</span>
                <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
                </svg>
                </>
              }
          </button>
        </div>
        <div className={`${open ? "block" : "hidden"} items-center lg:justify-between w-full lg:flex lg:w-auto lg:order-1`} id="navbar-sticky">
          <ul className="flex flex-col p-4 lg:p-0 mt-4 font-lg justify-center items-center font-inputSansEL text-[14px] lg:flex-row lg:space-x-8 lg:mt-0 lg:border-0 foreground-1">
            <li>
              <a href="#About" className="block backdrop-blur-sm w-40 lg:w-[auto] mb-2 lg:mb-0 text-white text-center rounded hover:bg-white hover:text-blue-700 lg:hover:bg-transparent lg:hover:text-blue-700 lg:p-0 lg:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"><div className='border border-white rounded-sm px-5 py-3 md:py-1'>About</div></a>
            </li>
            <li>
              <a href="#Skills" className="block backdrop-blur-sm w-40 lg:w-[auto] mb-2 lg:mb-0 text-white text-center rounded hover:bg-white hover:text-blue-700 lg:hover:bg-transparent lg:hover:text-blue-700 lg:p-0 lg:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"><div className='border border-white rounded-sm px-5 py-3 md:py-1'>Skills</div></a>
            </li>
            <li>
              <a href="#Projects" className="block backdrop-blur-sm w-40 lg:w-[auto] mb-2 lg:mb-0 text-white text-center rounded hover:bg-white hover:text-blue-700 lg:hover:bg-transparent lg:hover:text-blue-700 lg:p-0 lg:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"><div className='border border-white rounded-sm px-5 py-3 md:py-1'>Projects</div></a>
            </li>
            <li>
              <a href="#Certificate" className="block backdrop-blur-sm w-40 lg:w-[auto] mb-2 lg:mb-0 text-white text-center rounded hover:bg-white hover:text-blue-700 lg:hover:bg-transparent lg:hover:text-blue-700 lg:p-0 lg:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"><div className='border border-white rounded-sm px-5 py-3 md:py-1'>Certificates</div></a>
            </li>
          </ul>
        </div>
        </div>
      </nav>

      <div id='Home' className='w-[200px] h-[200px] mt-24 relative'>
      <div className='border-2 border-dashed rounded-full w-[190px] h-[190px] flex items-center justify-center animate-spin' />
      <div className='border-2 border-dashed border-blue-600 rounded-full w-[170px] h-[170px] flex items-center justify-center animate-counterSpin absolute top-[5%] left-[5%]' />
      <Image
          className='w-[75%] h-[75%] rounded-full absolute top-[10%] left-[10%]'
          src={MyPic}
          alt='A man wearing a suit'
        />
      </div>

      <div className='blur-3xl w-[70%] h-[200px] md:w-[50%] md:h-[500px] lg:w-[30%] lg:h-[500px] opacity-30 absolute top-[14%] left-[15%] md:top-[12%] md:left-[20%] lg:top-[16%] lg:left-[30%] -z-10 rounded-full bg-[#2563eb]' />

      <div className='font-inputSans mt-5 mb-20 text-center text-3xl lg:text-6xl px-14'>
        <div className='leading-30'>
          <h1 className='heading-gradient'>
            Hey there, I'm Ifiok
          </h1>
          <span>
              A Full-Stack Web Developer
          </span>
        </div>
        <p className='text-xl mt-5 leading-10 font-ibmPlexSans'>A passionate developer with a knack for turning ideas into elegant, functional websites and applications ready for production.</p>
      </div>

      <div className='flex flex-wrap gap-8 px-14'>
        <div id='About' className='foreground-2 font-ibmPlexSans text-left py-12 px-8 lg:px-14 w-[100%] rounded-2xl bg-gradient-to-r from-[#304B89] to-[#255B78]'>
          <div className='py-3'><Image className='w-10 inline-block mr-2' src={User3} alt='a user profile image'/><h2 className='font-inputSans text-xl lg:text-3xl inline-block align-bottom'>About me</h2></div>
          <p>I'm Ifiokabasi Udo, a 21-year-old Full Stack Web Developer based in Delta State, Nigeria. I'm an alumni of Covenant University where I attained a first degree in Information and Communication Engineering.
             I'm a Co-Founder and Development Team Lead of <a className='text-blue-600' href='https://lecturemate.org'>LectureMate</a>, an innovative AI app that's advancing the education sector. I'm also passionate about web development and have a track record of
             creating impactful projects. My strengths include strong communication, a calm demeanor, and a drive for perfection. I'm dedicated to continuous growth and making a positive impact 
             in the tech world.
          </p>
        </div>
        <div id='Skills' className='foreground-3 font-ibmPlexSans text-left py-12 px-8 lg:px-14 w-[100%] lg:w-[40%] rounded-2xl bg-gradient-to-r from-[#2C2C2C] to-[#242424]'>
        <div className='py-3'><Image className='w-10 inline-block mr-2' src={Science} alt='a user profile image'/><h2 className='font-inputSans text-xl lg:text-3xl inline-block align-bottom'>My Stack</h2></div>
          <ul className='text-lg'>
            <li className='py-3'>HTML <span className='float-right'>90%</span><span className='bar'><span className='html'></span></span></li>
            <li className='py-3'>CSS <span className='float-right'>85%</span><span className='bar'><span className='css'></span></span></li>
            <li className='py-3'>Bootstrap <span className='float-right'>85%</span><span className='bar'><span className='bootstrap'></span></span></li>
            <li className='py-3'>TailwindCSS <span className='float-right'>85%</span><span className='bar'><span className='tailwind'></span></span></li>
            <li className='py-3'>ChakraUI <span className='float-right'>85%</span><span className='bar'><span className='chakraui'></span></span></li>
            <li className='py-3'>Javascript <span className='float-right'>95%</span><span className='bar'><span className='javascript'></span></span></li>
            <li className='py-3'>JQuery <span className='float-right'>85%</span><span className='bar'><span className='jquery'></span></span></li>
            <li className='py-3'>React <span className='float-right'>75%</span><span className='bar'><span className='react'></span></span></li>
            <li className='py-3'>Nextjs <span className='float-right'>97%</span><span className='bar'><span className='nextjs'></span></span></li>
            <li className='py-3'>Supabase <span className='float-right'>85%</span><span className='bar'><span className='supabase'></span></span></li>
            <li className='py-3'>Nodejs <span className='float-right'>90%</span><span className='bar'><span className='nodejs'></span></span></li>
            <li className='py-3'>Figma <span className='float-right'>85%</span><span className='bar'><span className='figma'></span></span></li>
            <li className='py-3'>UI/UX <span className='float-right'>78%</span><span className='bar'><span className='uiux'></span></span></li>
          </ul>
        </div>
        <div id='Projects' className='foreground-4 font-ibmPlexSans flex-grow text-left py-12 px-8 lg:px-14 w-[100%] lg:w-[40%] rounded-2xl'>
        <div className='py-3'><Image className='w-10 inline-block mr-2' src={Code} alt='a user profile image'/><h2 className='font-inputSans text-xl lg:text-3xl inline-block align-bottom'>Projects</h2></div>
          <div>
            <div><Image className='w-10 inline-block' src={LectureMate} alt='lecturemate logo' /><a href='https://lecturemate.org' className='text-xl leading-none align-bottom px-2 hover:underline'>Lecturemate<Image className='w-[24px] inline-block align-bottom ml-1' src={ExLink} alt='lecturemate.org link' /></a></div>
            <video className='rounded-md w-[500px] mt-5 mb-5' autoPlay loop controls muted>
              <source src="/Lecture_Mate.mp4" type="video/mp4" />
            </video>
            <p>Lecture Mate uses AI to enhance student learning, fostering personalized and engaging experiences for improved academic performance.</p>
          </div>
        </div>
        <div id='Certificate' className='foreground-2 font-ibmPlexSans text-left py-12 px-8 lg:px-14 w-[100%] rounded-2xl bg-gradient-to-r from-[#304B89] to-[#255B78]'>
          <div className='py-3'><Image className='w-10 inline-block mr-2' src={Certificate} alt='a user profile image'/><h2 className='font-inputSans text-xl lg:text-3xl inline-block align-bottom'>Certificates</h2></div>
          <div className='flex flex-wrap gap-4'>
            <div className='md:w-[30%]'><Image className='rounded-md inline-block' src={Udemy1} alt='The Complete Web Dev Certificate'/></div>
            <div className='md:w-[30%]'><Image className='rounded-md inline-block' src={Udemy2} alt='MongoDB Course certificate'/></div>
          </div>
        </div>
      </div>

      <div id='Hire-Me' className='text-center mt-32 px-14'>
      <h2 className='font-inputSans text-3xl py-5'>Contact Me</h2>
      <hr className='w-[100%] h-[1px] border-slate-600'/>
      <div className="items-center justify-between w-full lg:flex lg:w-auto lg:order-1 mt-10">
          <ul className="flex flex-col p-4 lg:p-0 mt-4 font-md font-inputSansEL text-[14px] lg:flex-row lg:space-x-8 lg:mt-0 lg:border-0 nav-foreground ">
            <li>
              <div className="block text-gray-900 rounded-full lg:hover:bg-transparent lg:hover:text-blue-700 lg:p-0 lg:dark:hover:text-blue-500 dark:text-white"><div
              className='
              relative
              before:content-[attr(data-tip)]
              before:absolute
              before:cursor-none
              before:pointer-events-none
              before:px-3 before:py-2
              before:left-1/2 before:-top-3
              before:w-max before:max-w-xs
              before:-translate-x-1/2 before:-translate-y-full
            before:text-white
              before:rounded-md before:opacity-0
              before:transition-all
              before:border
            before:border-white
              before:backdrop-blur-sm

              hover:before:opacity-100
              '
              data-tip="08089376425"
              ><div className='border flex items-center justify-center border-white hover:border-blue-700 rounded-full px-1 py-1'><Image className='w-[24px] h-[24px]' src={Phone} alt='outine of phone icon'/></div></div></div>
            </li>
            <li>
            <a href="" className="block text-gray-900 rounded-full hover:border-blue-700 lg:hover:bg-transparent lg:hover:text-blue-700 pt-3 lg:p-0 lg:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"><div className='border flex items-center justify-center border-white hover:border-blue-700 rounded-full px-1 py-1'><Image className='w-[24px] h-[24px]' src={Facebook} alt='outine of facebook icon'/></div></a>
            </li>
            <li>
            <a href="" className="block text-gray-900 rounded-full hover:border-blue-700 lg:hover:bg-transparent lg:hover:text-blue-700 pt-3 lg:p-0 lg:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"><div className='border flex items-center justify-center border-white hover:border-blue-700 rounded-full px-1 py-1'><Image className='w-[24px] h-[24px]' src={Instagram} alt='outine of instagram icon'/></div></a>
            </li>
            <li>
            <a href="" className="block text-gray-900 rounded-full hover:border-blue-700 lg:hover:bg-transparent lg:hover:text-blue-700 pt-3 lg:p-0 lg:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"><div className='border flex items-center justify-center border-white hover:border-blue-700 rounded-full px-1 py-1'><Image className='w-[24px] h-[24px]' src={Twitter} alt='outine of twitter icon'/></div></a>
            </li>
            <li>
            <a href="" className="block text-gray-900 rounded-full hover:border-blue-700 lg:hover:bg-transparent lg:hover:text-blue-700 pt-3 lg:p-0 lg:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"><div className='border flex items-center justify-center border-white hover:border-blue-700 rounded-full px-1 py-1'><Image className='w-[24px] h-[24px]' src={Linkedin} alt='outine of linkedin icon'/></div></a>
            </li>
            <li>
            <div className="block text-gray-900 rounded-full hover:border-blue-700 lg:hover:bg-transparent lg:hover:text-blue-700 pt-3 lg:p-0 lg:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"><div
            className='
              relative
              before:content-[attr(data-tip)]
              before:cursor-none
              before:pointer-events-none
              before:absolute
              before:px-3 before:py-2
              before:left-1/2 before:-top-3
              before:w-max before:max-w-xs
              before:-translate-x-1/2 before:-translate-y-full
            before:text-white
              before:rounded-md before:opacity-0
              before:transition-all
              before:border
            before:border-white
              before:backdrop-blur-sm

              hover:before:opacity-100
            '
            data-tip="ifiokabasiudoe@gmail.com"
            ><div className='border flex items-center justify-center border-white hover:border-blue-700 rounded-full px-1 py-1'><Image className='w-[24px] h-[24px]' src={Mail} alt='outine of mail icon'/></div></div></div>
            </li>
          </ul>
        </div>

        <hr className='w-[100%] h-[1px] border-slate-600 mt-10'/>
      </div>

      <footer className='font-ibmPlexSans mt-8'>
        <p >Made by Ifiok <span className='text-rose-600'> not AI</span></p>
      </footer>
      <script src="../path/to/flowbite/dist/flowbite.min.js"></script>
    </main>
  )
}
