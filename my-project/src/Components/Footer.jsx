import React from 'react'
import BinaryLogo from '../assets/Footer/Logo 2.svg'
import Googleplay from '../assets/Footer/Google play button.svg'
import Insatgram from '../assets/Footer/INsta logo.svg'
import Gmail from '../assets/Footer/mail logo.svg'
import Twitter from '../assets/Footer/twitter logo.svg'
import Facebook from '../assets/Footer/Facebook logo.svg'

const Footer = () => {
  return (
 
//  Main div
 <div className='bg-light-pink mt-16'>
<div className="wrapper p-2">

<div className="flex flex-col md:flex-row">

{/* flex conatiner one */}
<div className="flex gap-y-8 flex-col w-full md:w-1/2  p-12">
<div className="logo w-[70px] h-[70px] 2xl:w-auto 2xl:h-auto max-w-[105px] max-h-[105px]">
    <img src={BinaryLogo} alt="" />
</div>
<div className="para text-lg">
    <p>Use Free VPN Master on your Android or iOS device for seamless protection on the go</p>
</div>


</div>



<div className="flex w-full md:w-1/2 justify-center md:gap-x-0 gap-x-6 p-12">
<div className="flex w-1/2 flex-col  text-black">
<div >
    <h1 className='text-2xl font-semibold'>Site Map</h1>
</div>
<div className='list-none space-y-6  mt-12'>
<li>Resources</li>
<li>Features</li>
<li>About</li>


</div>

</div>

<div className="flex w-1/2 flex-col text-black">
<div >
    <h1 className='text-2xl font-semibold'>Legal</h1>
</div>
<div className='list-none space-y-6  mt-12'>
<li>Terms Of Services</li>
<li>Privacy Policy</li>
<li>Cookies Policy</li>


</div>

</div>



</div>






</div>

<div className='w-full'>
    <hr  className='border border-black border-b-2  w-[80%] mx-auto' />
</div>


{/* icons section */}
<div className='flex justify-evenly items-center p-12 space-x-8'>
<div className='text-lg flex items-center leading-tight'>
    <p>@ 2024 Free vpn Inc. All rights reserved.</p>
</div>
<div className='icons hidden md:flex  space-x-8 '>
<div className='max-w-[269px] 2xl:w-auto w-48'><img className='w-full h-full object-contain' src={Googleplay} alt="" /></div>
<div className=' w-9 2xl:w-auto  max-w-[68px]'><img className='w-full h-full object-contain' src={Facebook} alt="" /></div>
<div className=' w-9 2xl:w-auto  max-w-[68px]'><img className='w-full h-full object-contain' src={Twitter} alt="" /></div>
<div className=' w-9 2xl:w-auto  max-w-[68px]'><img className='w-full h-full object-contain' src={Gmail} alt="" /></div>
<div className=' w-9 2xl:w-auto  max-w-[68px]'><img className='w-full h-full object-contain' src={Insatgram} alt="" /></div>
</div>


</div>



</div>


    </div>
  )
}

export default Footer