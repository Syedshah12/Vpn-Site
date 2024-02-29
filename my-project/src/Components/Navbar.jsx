import React,{useEffect} from 'react'
import binaryLogo from '../assets/hero-section/binarybridgelogo.svg'
import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy } from 'react-scroll'

const Navbar = () => {


    useEffect(() => {
    
        // Registering the 'begin' event and logging it to the console when triggered.
        Events.scrollEvent.register('begin', (to, element) => {
          console.log('begin', to, element);
        });
    
        // Registering the 'end' event and logging it to the console when triggered.
        Events.scrollEvent.register('end', (to, element) => {
          console.log('end', to, element);
        });
    
        // Updating scrollSpy when the component mounts.
        scrollSpy.update();
    
        // Returning a cleanup function to remove the registered events when the component unmounts.
        return () => {
          Events.scrollEvent.remove('begin');
          Events.scrollEvent.remove('end');
        };
      }, []);
    
      // Defining functions to perform different types of scrolling.
      const scrollToTop = () => {
        scroll.scrollToTop();
      };
    
      const scrollToBottom = () => {
        scroll.scrollToBottom();
      };
    
      const scrollTo = () => {
        scroll.scrollTo(100); // Scrolling to 100px from the top of the page.
      };
    
      const scrollMore = () => {
        scroll.scrollMore(100); // Scrolling an additional 100px from the current scroll position.
      };
    
      // Function to handle the activation of a link.
      const handleSetActive = (to) => {
        console.log(to);
      };
    









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
    <Link
         activeClass="active" 
         to="Features" 
         spy={true} 
         smooth={true} 
         offset={50} 
         duration={500} 
         onSetActive={handleSetActive}
       
    
    className='hover:text-white/80'>Features</Link>
        <li className='hover:text-white/80'>Resources</li>
        <Link
          activeClass="active" 
          to="AboutUs" 
          spy={true} 
          smooth={true} 
          offset={50} 
          duration={500} 
          onSetActive={handleSetActive}
        
        
        className='hover:text-white/80'>About Us</Link>
    </div>
        
    </div>
    <div className='btn w-auto  sm:text-sm md:text-lg sm:w-[160px] md:w-[200px] hidden    sm:flex sm:mt-0  mx-auto sm:mx-0  text-center ml-auto cursor-pointer'>
        <a target='_blank'  href={'https://play.google.com/store/apps/details?id=com.google.android.apps.maps&pli=1'}  className='bg-orange-primary hover:bg-orange-primary/90   py-1.5 w-full px-4 rounded-full text-base'>Download Now</a>
    </div>
</div>

</div>

    </nav>
</div>

  )
}

export default Navbar