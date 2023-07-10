import React from 'react';
import Navbar from '../Components/Navbar';
import Hero from '../Components/Hero';
import About from '../Components/About';
import Footer from '../Components/Footer';
import Slide from '../Components/Slide';
import Aboutus from '../Components/Aboutus';

const Landing = () => {
  return (
     <div>
      <Navbar/>  
      <Hero/> 
      {/* <Slide/> */}
      <About/>
      <Aboutus/>
     <Footer/>
     </div>
    
  )
}

export default Landing