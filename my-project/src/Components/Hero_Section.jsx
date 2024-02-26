import React from 'react'
import Navbar from './Navbar'
import googlePlay from '../assets/hero-section/getItOnGoogle.svg'
import iphone1 from '../assets/hero-section/iphone1.png'
import iphone2 from '../assets/hero-section/iphone2.svg'
import { motion } from 'framer-motion';


const Hero_Section = () => {
  return (
    // starting div
    <div className='main-div  bg-black '>
<Navbar/>
<div className='w-full flex flex-col md:flex-row relative  md:h-screen gap-x-12  px-0 sm:px-12'>


{/* //left div */}
<motion.div
      initial={{ x: '-50vw', opacity: 0 }} // Start off-screen to the left
      animate={{ x: 0, opacity: 1 }}        // End at its natural position
      transition={{ duration: 1.2, ease: "easeOut" }} // Customize the transition


className="flex flex-col 3xl:justify-evenly px-6 sm:px-0   w-full md:w-1/2 mt-12 md:mt-0 h-full md:items-start  md:justify-evenly gap-y-4 3xl:gap-y-16 ">
{/* for text */}
<div className='flex flex-col gap-y-1 sm:gap-y-0  3xl:gap-y-6  3xl:mt-56'>
<h1 className='md:text-4xl text-2xl 3xl:text-5xl leading-tight sm:leading-normal   font-semibold text-white
'>Stay Protected Online with  Free <br className='hidden 3xl:block' /> VPN Master: <br className='hidden sm:block md:hidden' /> Fast and Reliable</h1>
<p className='text-lg 3xl:text-3xl  md:text-start text-start  leading-tight text-white'>Keep your online presence <br className='block sm:hidden' /> secure <br className='hidden sm:block' /> with  Free  VPN Master. </p>
</div>

{/* button */}
<div className="flex cursor-pointer w-[150px] mt-4 sm:mt-0 sm:w-[240px] 3xl:w-[300px] ">
<img className='w-full  h-full object-cover' src={googlePlay} alt="" />
</div>

</motion.div>




{/* right div */}
<motion.div
initial={{ y: 300, opacity: 0 }} // Start below the view
animate={{ y: 0, opacity: 1 }}   // End at its natural position
transition={{ duration: 1.2, ease: "easeOut" }} // Customize the transition


className='md:w-1/2  mt-12  md:mt-0 w-full h-auto flex md:h-full  ' >
    {/* images */}
<div className="flex 3xl:self-end min:w-1/2 3xl:max-h-[911px] ">
    <img className='  md:object-contain' src={iphone1} alt="" />
</div>
<div className="flex  3xl:self-end 3xl:max-h-[820px] min:w-1/2">
    <img className='  sm:h-[90%] 3xl:h-full 3xl:mt-0 mt-14 md:object-contain ' src={iphone2} alt="" />
</div>




</motion.div>





</div>


    </div>
  )
}

export default Hero_Section