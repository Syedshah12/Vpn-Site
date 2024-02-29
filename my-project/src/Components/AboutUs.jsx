import React, { useEffect, useRef, useState } from 'react';
import AuthImage from '../assets/About us Section/Authentication image.svg'
import RocketImage from '../assets/About us Section/Rocket Image.svg'

import { motion } from 'framer-motion';

const AboutUs = () => {


    
  return (
   //first main div
   <div name='AboutUs' className="main">

<div className="wrapper">

{/* heading */}
<div className='pb-6 md:pb-0  pt-20 text-center 2xl:p-20'>
    <h1 className= ' text-2xl leading-10 font-bold md:leading-[60px] sm:text-3xl  md:text-4xl 3xl:text-5xl '>Your Ticket to Unrestricted Access and Top-Speed Security</h1>
</div>


{/* main flex wrapper */}
<div className="flex-wrapper ">



    {/* flex-container */}
<div className="flex flex-col gap-y-6 md:gap-y-0    md:flex-row  gap-x-2 2xl:gap-x-16 justify-center items-center px-4 2xl:p-6">
    {/* for para */}
<motion.div
  initial={{ x: '-200' }}
  whileInView={{ x: 0 }}
  transition={{ duration: 1.2 }}
  viewport={{ once: true }}




className='w-full leading-tight  md:w-[60%] 2xl:[20%] 2xl:max-w-[1020px] max-h-[320px]  2xl:p-8'>
    <p className='md:leading-9 2xl:leading-[42px] text-sm sm:text-lg 2xl:text-2xl md:text-xl  px-2 md:px-0'>Unlocking a seamless online experience requires a perfect blend of unrestricted access and top-tier security, and that's precisely what we offer. Whether accessing streaming platforms, social media networks, or critical information resources, our VPN ensures accessibility from any corner of the globe. Beyond the realm of access lies the cornerstone of security. Free VPN Master employs cutting-edge encryption protocols, ensuring that each online interaction occurs within a fortified digital fortress</p>
</motion.div>

{/* for image */}
<motion.div
    initial={{ x: '200' }}
    whileInView={{ x: 0 }}
    transition={{ duration: 1.2 }}
    viewport={{ once: true }}

className='w-full   md:w-[35%] px-2 md:px-0 lg:max-h-[400px] lg:max-w-[400px]    xl:max-w-[500px] xl:max-h-[500px] '>
    <img className='w-full h-full object-cover' src={AuthImage} alt="" />
</motion.div>
</div>
{/* end */}



  {/* flex-container */}
  <div className="flex flex-col gap-y-6 md:gap-y-0    md:flex-row  gap-x-2 2xl:gap-x-16 justify-center items-center px-4 2xl:p-6">








{/* for image */}
<motion.div
  initial={{ x: '-200' }}
  whileInView={{ x: 0 }}
  transition={{ duration: 1.2 }}
  viewport={{ once: true }}


className='w-full  hidden md:block  md:w-[35%] px-2 md:px-0 lg:max-h-[400px] lg:max-w-[400px]    xl:max-w-[500px] xl:max-h-[500px] '>
    <img className='w-full h-full object-cover' src={RocketImage} alt="" />
</motion.div>






    {/* for para */}
<motion.div
    initial={{ x: '200' }}
    whileInView={{ x: 0 }}
    transition={{ duration: 1.2 }}
    viewport={{ once: true }}



className='w-full leading-tight  md:w-[60%] 2xl:[20%] 2xl:max-w-[1020px] max-h-[320px]  2xl:p-8'>
    <p className='md:leading-9 2xl:leading-[42px] text-sm sm:text-lg 2xl:text-2xl md:text-xl  px-2 md:px-0'> Our commitment to top-speed security means that users can browse, stream, and communicate with confidence, knowing that their data remains shielded from prying eyes. Experience the seamless fusion of unrestricted access and robust security. Unlock unlimited access and top-speed security with Free VPN Master – your gateway to a secure and borderless online experience.</p>
</motion.div>





<motion.div
  initial={{ x: '-200' }}
  whileInView={{ x: 0 }}
  transition={{ duration: 1.2 }}
  viewport={{ once: true }}


className='w-full block md:hidden   md:w-[35%] px-2 md:px-0 lg:max-h-[400px] lg:max-w-[400px]    xl:max-w-[500px] xl:max-h-[500px] '>
    <img className='w-full h-full object-cover' src={RocketImage} alt="" />
</motion.div>








</div>
{/* end */}












</div>

























</div>















   </div>
  )
}

export default AboutUs