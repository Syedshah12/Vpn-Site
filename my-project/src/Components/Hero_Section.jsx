import React from 'react'
import Navbar from './Navbar'
import googlePlay from '../assets/hero-section/getItOnGoogle.svg'
import iphone1 from '../assets/hero-section/iphone1.png'
import iphone2 from '../assets/hero-section/iphone2.svg'
import Phones from '../assets/hero-section/phones.svg'
import {useMotionValue,useTransform,motion} from 'framer-motion'



const Hero_Section = () => {
  const x=useMotionValue(0)
  const y=useMotionValue(0)
  const rotateX=useTransform(y,[-100,100],[30,-30])
  const rotateY=useTransform(x,[-100,100],[-30,30])
  




  return (
    // starting div
    <div className='main-div  bg-black '>
<Navbar/>
<div className='w-full flex flex-col md:flex-row relative   gap-x-12  px-0 sm:px-12'>


{/* //left div */}
<motion.div
      initial={{ x: '-50vw', opacity: 0 }} // Start off-screen to the left
      animate={{ x: 0, opacity: 1 }}        // End at its natural position
      transition={{ duration: 1.2, ease: "easeOut" }} // Customize the transition


className=" w-full mt-12 md:mt-0 md:w-1/2 flex flex-col ">

<div className='flex items-center md:items-start flex-col h-full gap-y-12 justify-evenly '>
{/* for text */}
<div className='space-y-2 px-6 md:px-0'>
<h1 className='md:text-4xl text-center md:text-start text-2xl 3xl:text-5xl leading-tight sm:leading-normal   font-semibold text-white
'>Stay Protected Online with  Free <br className='hidden 3xl:block' /> VPN Master: <br className='hidden sm:block md:hidden' /> Fast and Reliable</h1>
<p className='text-lg 3xl:text-3xl  md:text-start text-center  leading-tight text-white'>Keep your online presence <br className='block sm:hidden' /> secure <br className='hidden sm:block' /> with  Free  VPN Master. </p>
</div>

{/* button */}
<a target='_blank'  href={'https://play.google.com/store/apps/details?id=com.google.android.apps.maps&pli=1'} className="flex shadow-2xl shadow-gray-400 rounded-full cursor-pointer w-[150px] mt-4 sm:mt-0 sm:w-[240px] 3xl:w-[300px] 


">
<img className='w-full shadow-xl rounded-full shadow-gray-800s  h-full object-cover' src={googlePlay} alt="" />
</a>

</div>

</motion.div>




{/* right div */}
<motion.div
style={{x,y,rotateX,rotateY,z:100,perspective:2000}}
drag
dragElastic={0.18}
dragConstraints={{top:0,left:0,right:0,bottom:0}}
whileTap={{cursor:'grabbing'}}
initial={{ y: 300, opacity: 0 }} // Start below the view
animate={{ y: 0, opacity: 1 }}   // End at its natural position
transition={{ duration: 1.2, ease: "easeOut" }} // Customize the transition


className='md:w-1/2   mt-12  md:mt-0 w-full h-auto flex items-end md:h-full  ' >
    {/* images */}
{/* <div style={{x,y,rotateX,rotateY,z:100000}} className="flex  3xl:self-end min:w-1/2 3xl:max-h-[911px] ">
    <img draggable='false' className='    md:object-contain' src={iphone1} alt="" />
</div>
<div className="flex  3xl:self-end 3xl:max-h-[820px] min:w-1/2">
    <img draggable='false' className='  sm:h-[90%] 3xl:h-full 3xl:mt-0 mt-14 md:object-contain ' src={iphone2} alt="" />
</div> */}

<div style={{x,y,rotateX,rotateY,z:100000}}  className='w-full h-[420px] md:h-[520px]  2xl:h-[720px] 2xl:mt-14'>
<img draggable='false' className='w-full h-full object-contain' src={Phones} alt="" />
</div>


</motion.div>





</div>


    </div>
  )
}

export default Hero_Section