import React from 'react'
import binaryLogo from '../assets/hero-section/binarybridgelogo.svg'

const Navbar = () => {
  return (
    <div className='sm:h-28 h-auto bg-black relative'>
    <nav className='flex items-center h-full  w-full px-2 py-4 sm:py-0 sm:px-12'>
<div className='flex-row flex justify-center sm:justify-start    items-center h-full w-full px-0 sm:px-8'>
    {/* logo div */}
    <div className='w-[33%] flex self-start sm:self-center  items-center'>
        <div className="logo  sm:mr-8 lg:mr-0  w-[70px] flex h-[70px] ">
    <img className='h-full w-full  object-cover ' src={binaryLogo} alt="" />
        </div>
    </div>

{/* items div */}
<div className='  flex flex-col sm:flex-row  w-full text-white'>
    <div className='flex flex-col sm:flex-row list-none w-full  justify-evenly sm:mr-12 items-end sm:items-center '> 
    <div className='flex    sm:flex-row gap-y-6 sm:gap-y-0 gap-x-4 mr-2 sm:mr-0 sm:gap-x-8 md:gap-x-24 cursor-pointer'>
    <li className='hover:text-white/80'>Features</li>
        <li className='hover:text-white/80'>Resources</li>
        <li className='hover:text-white/80'>About Us</li>
    </div>
        
    </div>
    <div className='btn w-auto  sm:w-[140px] md:w-[190px] hidden   sm:flex sm:mt-0  mx-auto sm:mx-0  text-center ml-auto cursor-pointer'>
        <div className='bg-orange-primary hover:bg-orange-primary/90   py-[1.5px] w-full px-4 rounded-full text-base'>Sign up</div>
    </div>
</div>

</div>

    </nav>
</div>

  )
}

export default Navbar