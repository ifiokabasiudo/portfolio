'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

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
        <a href="#Home" className="flex items-center text-center hover:text-blue-700">
            <span className="self-center text-2xl font-semibold font-inputSans whitespace-nowrap dark:text-white">&lt;I/U&gt;<br/>
            </span>
        </a>
        <div className="flex lg:order-2">
            <button onClick={handleHire} type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-sm text-[14px] px-3 py-1 text-center mr-3 lg:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 font-inputSans">Hire me</button>
            <button data-collapse-toggle="navbar-sticky" onClick={() => setOpen(!open)} type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false">
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
      <img
          className='w-[75%] h-[75%] rounded-full absolute top-[10%] left-[10%]' 
          src='./my-pic.jpg'
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
        <p className='text-xl mt-5 leading-10 font-ibmPlexSans'>A passionate fullstack web developer with a knack for turning ideas into elegant, functional websites and applications.</p>
      </div>

      <div className='flex flex-wrap gap-8 px-14'>
        <div id='About' className='foreground-2 font-ibmPlexSans text-left py-12 px-8 lg:px-14 w-[100%] rounded-2xl bg-gradient-to-r from-[#304B89] to-[#255B78]'>
          <div className='py-3'><img className='w-10 inline-block mr-2' src='/user_3_line.png' alt='a user profile image'/><h2 className='font-inputSans text-xl lg:text-3xl inline-block align-bottom'>About me</h2></div>
          <p>I'm Ifiokabasi Udo, a 21-year-old Full Stack Web Developer based in Delta State, Nigeria. I'm part of the 2023 graduating class of Covenant University, known for its excellence.
             I'm a Co-Founder and Development Team Lead of <a className='text-blue-600' href='lecturemate.org'>LectureMate</a>, an innovative AI app that's advancing the education sector. I'm also passionate about web development and have a track record of
             creating impactful projects. My strengths include strong communication, a calm demeanor, and a drive for perfection. I'm dedicated to continuous growth and making a positive impact 
             in the tech world.
          </p>
        </div>
        <div id='Skills' className='foreground-3 font-ibmPlexSans text-left py-12 px-8 lg:px-14 w-[100%] lg:w-[40%] rounded-2xl bg-gradient-to-r from-[#2C2C2C] to-[#242424]'>
        <div className='py-3'><img className='w-10 inline-block mr-2' src='/science_line (1).png' alt='a user profile image'/><h2 className='font-inputSans text-xl lg:text-3xl inline-block align-bottom'>My Stack</h2></div>
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
        <div className='py-3'><img className='w-10 inline-block mr-2' src='/code_line (2).png' alt='a user profile image'/><h2 className='font-inputSans text-xl lg:text-3xl inline-block align-bottom'>Projects</h2></div>
          <div>
            <div><img className='w-10 inline-block' src='/biglogo.png' alt='lecturemate logo' /><a href='lecturemate.org' className='text-xl leading-none align-bottom px-2 hover:underline'>Lecturemate<img className='w-[24px] inline-block align-bottom ml-1' src='/external_link_line.png' alt='lecturemate.org link' /></a></div>
            <video className='rounded-md w-[500px] mt-5 mb-5' autoPlay loop controls muted>
              <source src="/Lecture_Mate.mp4" type="video/mp4" />
            </video>
            <p>Lecture Mate uses AI to enhance student learning, fostering personalized and engaging experiences for improved academic performance.</p>
          </div>
        </div>
        <div id='Certificate' className='foreground-2 font-ibmPlexSans text-left py-12 px-8 lg:px-14 w-[100%] rounded-2xl bg-gradient-to-r from-[#304B89] to-[#255B78]'>
          <div className='py-3'><img className='w-10 inline-block mr-2' src='/certificate_2_line (1).png' alt='a user profile image'/><h2 className='font-inputSans text-xl lg:text-3xl inline-block align-bottom'>Certificates</h2></div>
          <div className='flex flex-wrap gap-4'>
            <div className='md:w-[30%]'><img className='rounded-md inline-block' src='/theCompleteWebDevCert.jpg' alt='The Complete Web Dev Certificate'/></div>
            <div className='md:w-[30%]'><img className='rounded-md inline-block' src='/MongoDBCert.jpg' alt='MongoDB Course certificate'/></div>
          </div>
        </div>
      </div>

      <div id='Hire-Me' className='text-center mt-32 px-14'>
      <h2 className='font-inputSans text-3xl py-5'>Contact Me</h2>
      <hr className='w-[100%] h-[1px] border-slate-600'/>
      <div className="items-center justify-between w-full lg:flex lg:w-auto lg:order-1 mt-10">
          <ul className="flex flex-col p-4 lg:p-0 mt-4 font-md font-inputSansEL text-[14px] lg:flex-row lg:space-x-8 lg:mt-0 lg:border-0 nav-foreground ">
            <li>
              <a href="#" className="block text-gray-900 rounded-full hover:bg-gray-100 lg:hover:bg-transparent lg:hover:text-blue-700 lg:p-0 lg:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"><div className='border flex items-center justify-center border-color: white rounded-full px-1 py-1'><img className='w-[24px] h-[24px]' src='/phone_line (1).png' alt='outine of phone icon'/></div></a>
            </li>
            <li>
            <a href="#" className="block text-gray-900 rounded-full hover:bg-gray-100 lg:hover:bg-transparent lg:hover:text-blue-700 pt-3 lg:p-0 lg:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"><div className='border flex items-center justify-center border-color: white rounded-full px-1 py-1'><img className='w-[24px] h-[24px]' src='/facebook_line.png' alt='outine of facebook icon'/></div></a>
            </li>
            <li>
            <a href="#" className="block text-gray-900 rounded-full hover:bg-gray-100 lg:hover:bg-transparent lg:hover:text-blue-700 pt-3 lg:p-0 lg:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"><div className='border flex items-center justify-center border-color: white rounded-full px-1 py-1'><img className='w-[24px] h-[24px]' src='/ins_line.png' alt='outine of instagram icon'/></div></a>
            </li>
            <li>
            <a href="#" className="block text-gray-900 rounded-full hover:bg-gray-100 lg:hover:bg-transparent lg:hover:text-blue-700 pt-3 lg:p-0 lg:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"><div className='border flex items-center justify-center border-color: white rounded-full px-1 py-1'><img className='w-[24px] h-[24px]' src='/twitter_line.png' alt='outine of twitter icon'/></div></a>
            </li>
            <li>
            <a href="#" className="block text-gray-900 rounded-full hover:bg-gray-100 lg:hover:bg-transparent lg:hover:text-blue-700 pt-3 lg:p-0 lg:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"><div className='border flex items-center justify-center border-color: white rounded-full px-1 py-1'><img className='w-[24px] h-[24px]' src='/linkedin_line.png' alt='outine of linkedin icon'/></div></a>
            </li>
            <li>
            <a href="#" className="block text-gray-900 rounded-full hover:bg-gray-100 lg:hover:bg-transparent lg:hover:text-blue-700 pt-3 lg:p-0 lg:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"><div className='border flex items-center justify-center border-color: white rounded-full px-1 py-1'><img className='w-[24px] h-[24px]' src='/mail_line.png' alt='outine of mail icon'/></div></a>
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