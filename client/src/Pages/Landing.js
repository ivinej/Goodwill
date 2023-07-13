import React from 'react';
import Navbar from '../Components/Landing/Navbar';
import Hero from '../Components/Landing/Hero';
import About from '../Components/Landing/About';
import Footer from '../Components/Landing/Footer';
import Slide from '../Components/Slide';
import Aboutus from '../Components/Landing/Aboutus';

const Landing = () => {
  return (
     <div>
      <Navbar/>  
      
      <Aboutus/>
      
      {/* <Slide/> */}
      
      <Hero/> 
      <About/>
     <Footer/>
     </div>
    
  )
}

export default Landing