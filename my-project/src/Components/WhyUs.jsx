import React from 'react'
import Blazingspeed from '../assets/Why chose us/Blazing fast speed.svg'
import Privacy from '../assets/Why chose us/Complete privacy protection.svg'
import Relaibility from '../assets/Why chose us/Unparalleled Reliability.svg'
import AccessContent from '../assets/Why chose us/Access content anywhere.svg'
import {motion} from "framer-motion"



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
    




const WhyUs = () => {
  return (
    // main div
    <div>
<div name="WhyUs" className="wrapper ">

{/* //heading */}
{/* heading */}
<div className='pb-6 md:pb-0  mb-8 p-12 text-center 2xl:p-20'>
    <h1 className= ' text-2xl leading-10 font-bold md:leading-[60px] sm:text-3xl  md:text-4xl 3xl:text-5xl '>Why Choose Free VPN Master?</h1>
</div>


<div className='grid justify-center'>
{/* grid section one */}
<div className="grid  gap-y-4 gap-x-12 px-12 justify-center items-center grid-cols-1 md:grid-cols-2">
{/* card1 */}
<motion.div
 custom={0} 
 variants={fadeInAnimationvariants}
 initial='initial'
 whileInView='animate'
 viewport={{
  once:true
 }}


className="card rounded-3xl flex justify-center  max-w-[796px] bg-light-pink">
    <div className="flex  flex-col md:flex-row ">
{/* //image */}
<div className='w-full flex justify-center'>
    <img src={Blazingspeed} alt="" />
</div>

<div className=" flex max-w-[348px] py-12   gap-y-2 flex-col px-2  justify-evenly">
<h1 className='text-xl font-bold'>Blazing Fast Speeds</h1>
<p className='text-xl '>Experience seamless browsing and streaming with our high-speed VPN servers.</p>
</div>
    </div>
</motion.div>




{/* card2 */}
<motion.div
 custom={1} 
 variants={fadeInAnimationvariants}
 initial='initial'
 whileInView='animate'
 viewport={{
  once:true
 }}




className="card rounded-3xl flex justify-center  max-w-[796px] bg-light-pink">
    <div className=" flex  flex-col md:flex-row ">
{/* //image */}
<div className=''>
    <img src={Privacy} alt="" />
</div>
<div className=" flex max-w-[348px] py-12 px-2  gap-y-2  flex-col  justify-evenly">
<h1 className='text-xl font-bold'>Complete Privacy Protection</h1>
<p className='text-xl '>Safeguard your online privacy and data with our military-grade encryption protocols.</p>
</div>
    </div>
</motion.div>







</div>



{/* grid section 2 */}
<div className="grid mt-10 gap-y-4 gap-x-12 px-12 justify-center items-center grid-cols-1 md:grid-cols-2">
{/* card1 */}
<motion.div

custom={2} 
variants={fadeInAnimationvariants}
initial='initial'
whileInView='animate'
viewport={{
 once:true
}}



className="card rounded-3xl flex justify-center  max-w-[796px] bg-light-pink">
    <div className="flex  flex-col md:flex-row ">
{/* //image */}
<div>
    <img src={Relaibility} alt="" />
</div>

<div className=" flex max-w-[348px] py-12   gap-y-2 flex-col px-2  justify-evenly">
<h1 className='text-xl font-bold'>Unparalleled Reliability</h1>
<p className='text-xl '>Trust in our secure network infrastructure to keep you connected at all times, no matter where you are.</p>
</div>
    </div>
</motion.div>


{/* card2 */}
<motion.div
 custom={3} 
 variants={fadeInAnimationvariants}
 initial='initial'
 whileInView='animate'
 viewport={{
  once:true
 }}




className="card rounded-3xl flex justify-center  max-w-[796px] bg-light-pink">
    <div className="flex  flex-col md:flex-row ">
{/* //image */}
<div>
    <img src={AccessContent} alt="" />
</div>
<div className=" flex max-w-[348px] py-12 px-2  gap-y-2  flex-col  justify-evenly">
<h1 className='text-xl font-bold'>Access  Content Anywhere</h1>
<p className='text-xl '>Unlock geo-restricted websites and services with ease, whether you're at home or traveling abroad.</p>
</div>
    </div>
</motion.div>







</div>


</div>



</div>


    </div>
  )
}

export default WhyUs