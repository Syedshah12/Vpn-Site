import React from 'react'
import {motion} from 'framer-motion'
import FastServer from '../assets/UI 1/Fast server Network.svg'
import OneClickCon from '../assets/UI 1/One click connection.svg'
import MilitaryGrade from '../assets/UI 1/Militay grade encryption.svg'
import Nologs from '../assets/UI 2/No logs policy.svg'
import CrossPlatform from '../assets/UI 2/Cross platform.svg'
import UnlimitedBandwith from '../assets/UI 2/un limited badwidth.svg'
import MicrosoftLogo from '../assets/UI 2/Microsoft Logo.svg'
import Chromelogo from '../assets/UI 2/Chrome logo.svg'
import Applelogo from '../assets/UI 2/Apple logo.svg'
import Androidlogo from '../assets/UI 2/Android logo.svg'
import ArrowLeft from '../assets/How to use (1)/arrow-left.svg'
import ArrowRight from '../assets/How to use (1)/arrow-right.svg'
import Downloadimage from '../assets/How to use (1)/Download image.svg'
import Signupimage from '../assets/How to use (1)/Sign up image.svg'





const fadeInAnimationvariants={
    initial:{
    opacity:0,
    y:100
    },
    animate: i => ({
        y: 0,
        opacity: 1,
        transition: { 
          delay: i * 0.2, // Increment delay for each item, i is the index
          duration: 0.5,
        },
      }),
    }
    






const UserInterface = () => {



    return (
        <div className='main bg-light-pink'>
            <div className="wrapper">

                {/* heading */}
                <div className='pb-6 md:pb-0  pt-20 text-center 2xl:p-20'>
                    <h1 className=' text-2xl leading-10 font-bold md:leading-[60px] sm:text-3xl  md:text-4xl 3xl:text-5xl '>Our Intuitive User Interface: Navigate the Future with Ease</h1>
                </div>


                <div className='w-full leading-tight  p-0 md:p-8 px-0 md:px-12'>
                    <p className= ' md:leading-9 2xl:leading-[42px]  text-sm sm:text-lg 2xl:text-2xl md:text-xl  px-6 md:px-0'>Unlocking a seamless online experience requires a perfect blend of unrestricted access and top-tier security, and that's precisely what we offer. Whether accessing streaming platforms, social media networks, or critical information resources, our VPN ensures accessibility from any corner of the globe. Beyond the realm of access lies the cornerstone of security. Free VPN Master employs cutting-edge encryption protocols, ensuring that each online interaction occurs within a fortified digital fortress</p>
                </div>


                {/* Grid for pics */}
                <div className="gridwrapper">
                    <div className="grid p-4 grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-3">



                        {/* card */}
                        <div className="card flex flex-col justify-center hover:scale-110 duration-300  cursor-pointer  items-center">
                            <div>
                                {/* img */}
                                <img src={MilitaryGrade} alt="" />
                            </div>
                            {/* text */}
                            <div className='text-center text-lg leading-9 font-semibold'>
                                <p>Military-grade encryption</p>
                            </div>
                        </div>




                       {/* Second card */}
                        {/* card */}
                        <div className="card flex flex-col justify-center hover:scale-110 duration-300  cursor-pointer  items-center">
                            <div>
                                {/* img */}
                                <img src={FastServer} alt="" />
                            </div>
                            {/* text */}
                            <div className='text-center text-lg leading-9 font-semibold'>
                                <p>Fast server network</p>
                            </div>
                        </div>




                       {/* third card */}
                        {/* card */}
                        <div className="card flex flex-col justify-center hover:scale-110 duration-300  cursor-pointer  items-center">
                            <div>
                                {/* img */}
                                <img src={OneClickCon} alt="" />
                            </div>
                            {/* text */}
                            <div className='text-center text-lg leading-9 font-semibold'>
                                <p>One-click Connection</p>
                            </div>
                        </div>








                    </div>


                   {/* Second Grid */}
                   <div className="grid bg-gradient-to-b from-light-pink via-light-pink to-white p-4 grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-3">



{/* card */}
<div className="card flex flex-col justify-center hover:scale-110 duration-300    cursor-pointer  items-center">
    <div>
        {/* img */}
        <img src={Nologs} alt="" />
    </div>
    {/* text */}
    <div className='text-center text-lg leading-9 font-semibold'>
        <p>No-Logs Policy</p>
    </div>
</div>




{/* Second card */}
{/* card */}
<div className="card flex flex-col justify-center hover:scale-110 duration-300  cursor-pointer  items-center">
    <div>
        {/* img */}
        <img src={CrossPlatform} alt="" />
    </div>
    {/* text */}
    <div className='text-center text-lg leading-9 font-semibold'>
        <p> Cross-platform compatibility</p>
    </div>
</div>




{/* third card */}
{/* card */}
<div className="card flex flex-col justify-center hover:scale-110 duration-300  cursor-pointer  items-center">
    <div>
        {/* img */}
        <img src={UnlimitedBandwith} alt="" />
    </div>
    {/* text */}
    <div className='text-center text-lg leading-9 font-semibold'>
        <p>Un-limited bandwidth </p>
    </div>
</div>
</div>


{/* for button */}
<div className='flex justify-center pt-8 cursor-pointer bg-white'>
<a className='bg-orange-primary w-[232px] hover:bg-orange-primary/90   py-2  text-center px-4 rounded-full text-base'>Download Now</a>
</div>



{/* logos Container */}
<div className="logowrapper bg-white">

   {/* heading */}
   <div className='pb-6 md:pb-0  pt-20 text-center 2xl:p-20'>
                    <h1 className=' text-2xl leading-10 font-bold md:leading-[60px] sm:text-3xl  md:text-4xl 3xl:text-5xl '>Support Us</h1>
                </div>

  <div className="grid lg:grid-cols-3 grid-cols-2 xl:grid-cols-4  p-8 2xl:p-12 gap-8">
   <motion.div
   custom={0} 
   variants={fadeInAnimationvariants}
   initial='initial'
   whileInView='animate'
   viewport={{
    once:true
   }}
   className='flex justify-center'>
    <img src={Chromelogo} alt="" />
   </motion.div >
   
   <motion.div
   custom={1} 
     variants={fadeInAnimationvariants}
     initial='initial'
     whileInView='animate'
     viewport={{
      once:true
     }}
   className='flex justify-center'>
    <img src={Applelogo} alt="" />
   </motion.div>

   <motion.div
   custom={2} 
   variants={fadeInAnimationvariants}
   initial='initial'
   whileInView='animate'
   viewport={{
    once:true
   }}
   
   className='flex justify-center'>
    <img src={Androidlogo} alt="" />
   </motion.div>


   <motion.div
   custom={3} 
   variants={fadeInAnimationvariants}
   initial='initial'
  
   whileInView='animate'
   viewport={{
    once:true
   }}
   
   className='flex justify-center'>
    <img src={MicrosoftLogo} alt="" />
   </motion.div>


  </div>





</div>



                </div>
            </div>
        </div>
    )
}

export default UserInterface