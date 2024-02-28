import React from 'react'
import GlobalServer from '../assets/Features/Global server network.svg'
import UserFriendly from '../assets/Features/User friendly interface.svg'
import CrossPlatform from '../assets/Features/Cross platform.svg'
import {motion} from 'framer-motion'



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
    


const Features = () => {
  return (
    <div className='main flex flex-col items-center'>

{/* heading */}
<div className='pb-6 md:pb-0 xl:mb-6 mb-2 pt-20 text-center 2xl:p-20'>
    <h1 className= ' text-2xl leading-10 font-bold md:leading-[60px] sm:text-3xl  md:text-4xl 3xl:text-5xl '>Our Features</h1>
</div>




{/* main wrapper */}
<div>
{/* flex-wrapper */}
<div className="flex flex-col md:flex-row px-6">
{/* card1 */}
<motion.div

custom={0} 
 variants={fadeInAnimationvariants}
 initial='initial'
 whileInView='animate'
 viewport={{
  once:true
 }}




className="flex px-6  w-full md:w-1/3 max-w-[488px] flex-col">

    {/* for img */}
<div className='bg-light-pink h-[335px] 2xl:h-auto  xl:max-h-[440px] rounded-3xl'>
    <img className='w-full   object-contain' src={GlobalServer} alt="" />
</div>

<div className="flex flex-col gap-y-2 mt-4 ">
<h1 className='text-xl font-semibold text-center'>Global Server Network</h1>
<p className='text-center '>Enjoy access to over 90 servers worldwide, ensuring optimal performance wherever you are.</p>
</div>
</motion.div>


{/* card 2 */}
<motion.div
custom={1} 
variants={fadeInAnimationvariants}
initial='initial'
whileInView='animate'
viewport={{
 once:true
}}






className="flex px-6 w-full md:w-1/3 max-w-[488px] flex-col">

    {/* for img */}
<div className='bg-light-pink h-[335px] 2xl:h-auto max-h-[440px] rounded-3xl'>
    <img className='w-full h-full object-contain'  src={UserFriendly} alt="" />
</div>

<div className="flex flex-col  gap-y-2 mt-4">
<h1 className='text-xl font-semibold text-center'>User-Friendly Interface</h1>
<p className='text-center '>Our intuitive VPN app makes it easy for anyone to connect to our secure network with just a few clicks.</p>
</div>




</motion.div>





{/* card 3 */}
<motion.div
custom={2} 
variants={fadeInAnimationvariants}
initial='initial'
whileInView='animate'
viewport={{
 once:true
}}





className="flex px-6 w-full md:w-1/3 max-w-[488px] flex-col">

    {/* for img */}
<div className='bg-light-pink h-[335px] 2xl:h-auto  max-h-[440px] rounded-3xl'>
    <img src={CrossPlatform} alt="" />
</div>

<div className="flex flex-col gap-y-2 mt-4  ">
<h1 className='text-xl font-semibold text-center'>Cross-Platform Compatibility</h1>
<p className='text-center '>Use Free VPN Master on your Android or iOS device for seamless protection on the go</p>
</div>

</motion.div>









</div>






</div>

    </div>
  )
}

export default Features