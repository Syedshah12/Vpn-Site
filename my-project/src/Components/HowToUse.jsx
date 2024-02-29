import React from 'react'
import ArrowLeft from '../assets/How to use (1)/arrow-left.svg'
import ArrowRight from '../assets/How to use (1)/arrow-right.svg'
import Downloadimage from '../assets/How to use (1)/Download image.svg'
import Signupimage from '../assets/How to use (1)/Sign up image.svg'
import Connectmockup from '../assets/How to use (2)/Connect mockup (right).svg'
import ServerMockup from '../assets/How to use (2)/Server mockup (left).svg'
import {motion} from 'framer-motion'
import DownloadButton from '../assets/How to use (3)/Download Button.svg'
import MokeupRight from '../assets/How to use (3)/Mock up (right).svg'

const HowToUse = () => {
  return (

    // main wrapper
    <div className='main'>

<div className="wrapper space-y-8 md:space-y-0 px-4 2xl:px-8">
    {/* heading */}
<div className='pb-6 md:pb-0  pt-20 text-center 2xl:p-20'>
    <h1 className= ' text-2xl leading-10 font-bold md:leading-[60px] sm:text-3xl  md:text-4xl 3xl:text-5xl '>Simple Steps to Secure Browsing: How to Use Our VPN App</h1>
</div>


{/* first wrapper of para img and arrow */}
<div className='flex justify-center flex-col sm:flex-row p-6'>

    {/* para text */}
<div className='flex flex-col justify-center ' >
<p className='md:leading-9 max-w-[890px] 2xl:leading-[42px] text-sm sm:text-lg 2xl:text-2xl md:text-xl  px-2 md:px-0'>1.Download and Install: Simply download the app from your app store, follow the installation instructions, and open it.</p>
</div>

{/* arrow */}
<div className='md:flex items-end hidden '>
    <img src={ArrowRight} alt="" />
</div>



<motion.div

initial={{ x: '200' }}
whileInView={{ x: 0 }}
transition={{ duration: 1.2 }}
viewport={{ once: true }}

className=''>
    <img src={Downloadimage} alt="" />
</motion.div>









</div>



{/* second wrapper of para img and arrow */}
<div className='flex justify-center flex-col sm:flex-row p-6'>

<motion.div
  initial={{ x: '-200' }}
  whileInView={{ x: 0 }}
  transition={{ duration: 1.2 }}
  viewport={{ once: true }}
className=' mt-0 hidden md:block   mx-auto md:mx-0 md:-mt-32 '>
    <img src={ServerMockup} alt="" />
</motion.div>


{/* arrow */}
<div className='md:flex  items-center hidden '>
    <img src={ArrowLeft} alt="" />
</div>


    {/* para text */}
<div className='flex items-center ' >
<p className='md:leading-9 max-w-[890px] 2xl:leading-[42px] text-sm sm:text-lg 2xl:text-2xl md:text-xl  px-2 md:px-0'>2.Choose Your Server: Select your preferred server location from our global network for optimized browsing.</p>
</div>



{/* mobile view */}

<motion.div
  initial={{ x: '-200' }}
  whileInView={{ x: 0 }}
  transition={{ duration: 1.2 }}
  viewport={{ once: true }}



className='  block md:hidden mt-12   mx-auto md:mx-0 md:-mt-32 '>
    <img src={ServerMockup} alt="" />
</motion.div>









</div>



{/* third wrapper of para img and arrow */}
<div className='flex justify-center flex-col sm:flex-row p-6'>

    {/* para text */}
<div className='flex flex-col justify-start ' >
<p className='md:leading-9 max-w-[890px] 2xl:leading-[42px] text-sm sm:text-lg 2xl:text-2xl md:text-xl  px-2 md:px-0'>3.Connect: Tap the "Connect" button to establish a secure VPN connection instantly.</p>
</div>

{/* arrow */}
<div className='md:flex items-center hidden '>
    <img src={ArrowRight} alt="" />
</div>



<motion.div
initial={{ x: '200' }}
whileInView={{ x: 0 }}
transition={{ duration: 1.2 }}
viewport={{ once: true }}


className='md:-mt-40 mt-12 ' >
    <img className='mx-auto md:mx-0' src={Connectmockup} alt="" />
</motion.div>









</div>






{/* fourth wrapper of para img and arrow */}
<div className='flex justify-center flex-col sm:flex-row p-6'>




<motion.div 
className='md:-mt-40 hidden md:block'

initial={{ x: '-200' }}
whileInView={{ x: 0 }}
transition={{ duration: 1.2 }}
viewport={{ once: true }}


>
    <img src={MokeupRight} alt="" />
</motion.div>






{/* arrow */}
<motion.div




className='md:flex items-end hidden '>
    <img src={ArrowLeft} alt="" />
</motion.div>



    {/* para text */}
<div className='flex flex-col justify-start  ' >
<p className='md:leading-9 max-w-[890px] 2xl:leading-[42px] text-sm sm:text-lg 2xl:text-2xl md:text-xl  px-2 md:px-0'>4.Once connected, you're all set! Enjoy unrestricted and secure browsing with just a few taps.</p>
{/* button */}
<a className='w-48 2xl:w-auto self-center mt-3 rounded-sm  cursor-pointer '><img className='rounded-sm hover:rounded-lg duration-300' src={DownloadButton} alt="" /></a>
</div>



<motion.div 
className='md:-mt-40 block md:hidden mt-12'

initial={{ x: '-200' }}
whileInView={{ x: 0 }}
transition={{ duration: 1.2 }}
viewport={{ once: true }}


>
    <img src={MokeupRight} alt="" />
</motion.div>








</div>

















</div>






    </div>
  )
}

export default HowToUse