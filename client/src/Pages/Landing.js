import React from 'react';
import Navbar from '../Components/Navbar';
import Hero from '../Components/Hero';
import About from '../Components/About';
import Footer from '../Components/Footer';
import Slide from '../Components/Slide';

const Landing = () => {
  return (
     <div>
      <Navbar/>  
      <Hero/> 
      {/* <Slide/> */}
      <About/>
     <Footer/>
     </div>
    
  )
}

export default Landing