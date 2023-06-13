import React from 'react';
import Navbar from '../Components/Navbar';
import Hero from '../Components/Hero';
import About from '../Components/About';
import Footer from '../Components/Footer';

const Landing = () => {
  return (
     <div>
      <Navbar/>  
      <Hero/> 
      <About/>
     <Footer/>
     </div>
    
  )
}

export default Landing