import React from 'react'
import GlobeImg from '../assets/Flags/Globe image.svg'
import Flags from '../assets/Flags/flags.svg'
import {motion} from 'framer-motion'




const FlagsSection = () => {
  return (
    // main div
    <div className='main  bg-map-bg'>

{/* div wrapper */}
<div>
{/* heading */}
<div className='pb-6 md:pb-0 pt-4  md:pt-20 text-center 2xl:p-20'>
    <h1 className= ' text-2xl leading-10 font-bold md:leading-[60px] sm:text-3xl  md:text-4xl 3xl:text-5xl '>  90+ Servers for Reliable and Secure VPN Connections</h1>
</div>


<div className="flex flex-col md:flex-row  md:px-8 justify-center gap-x-12">

{/* for first image */}
<motion.div

initial={{ x: '-200' }}
whileInView={{ x: 0 }}
transition={{ duration: 1.2 }}
viewport={{ once: true }}


className='w-full  md:w-1/2 -ml-4 max-w-[690px] max-h-[984px]s p-4'>
    <img className='w-full h-full object-cover' src={GlobeImg} alt="" />
</motion.div>



{/* for second image */}
<div className='w-full  md:w-1/2   max-w-[690px] max-h-[984px] p-4'>
    <img className='w-full h-full object-contain' src={Flags} alt="" />
</div>



</div>



</div>


    </div>
  )
}

export default FlagsSection