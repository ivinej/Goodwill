import React from 'react';
import Card1 from '../Components/Card1';
import Card2 from '../Components/Card2';
import Card3 from '../Components/Card3';

const About = () => {
  return (
    <div className='flex justify-center items-center bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%'>
      <div className="flex space-x-12 space-y-0 justify-center flex-rows h-1/2 w-1/2 m-auto">
        <Card1 />
        <Card2 />
        <Card3 />
      </div>
    </div>
  );
}

export default About;
