import React from 'react';
import Navbar from '../Components/Navbar';
import Hero from '../Components/Hero';
import Footer from '../Components/Footer';
import Slide from '../Components/Slide';

const Landing = () => {
  return (
     <div>
      <Navbar/>  
      <Hero/> 
      {/* <Slide/> */}
     <Footer/>
     </div>
    
  )
}

export default Landing