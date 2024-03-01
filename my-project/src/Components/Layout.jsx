import React from 'react'
import AboutUs from "./AboutUs";
import Features from "./Features";
import FlagsSection from "./FlagsSection";
import Footer from "./Footer";
import Hero_Section from './Hero_Section';
import HowToUse from "./HowToUse";
import UserInterface from "./UserInterface";
import WhyUs from "./WhyUs";


const Layout = () => {
  return (
    <div className=''>
<Hero_Section/>
<AboutUs/>
<UserInterface/>
<HowToUse/>
<FlagsSection/>
<WhyUs/>
<Features/>
<Footer/>



    </div>
  )
}

export default Layout