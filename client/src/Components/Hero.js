
import Student from '../Images/students.jpg';
import Kutti from '../Images/People.png'
import React, { useRef, useEffect } from 'react';
import '../Components/style.css';
import 'aos/dist/aos.css';
import AOS from 'aos';


const AnimatedText = () => {
  useEffect(() => {
    setTimeout(() => {
      const replacers = document.querySelectorAll('[data-replace]');
      for (let i = 0; i < replacers.length; i++) {
        const replaceClasses = JSON.parse(replacers[i].dataset.replace.replace(/'/g, '"'));
        Object.keys(replaceClasses).forEach(key => {
          replacers[i].classList.remove(key);
          replacers[i].classList.add(replaceClasses[key]);
        });
      }
    }, 1);
  }, []);

  return (
    <>
      <h1 className="font-black text-6xl text-black block duration-700 relative transform opacity-0 transition-all translate-y-12 ease-out" data-replace='{ "translate-y-12": "translate-y-0", "opacity-0": "opacity-100" }'>
      New to<span className='text-yellow-400'> G<span className='text-black'>oodWilL?</span></span> 
      </h1>
      <p className="text-white mt-4 text-lg block duration-700 delay-150 relative  transform transition-all opacity-0 translate-y-12 ease-out" data-replace='{ "translate-y-12": "translate-y-0", "opacity-0": "opacity-100" }'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate voluptas eius explicabo suscipit, nemo sapiente dignissimos, ipsum illum minus ab itaque accusamus reprehenderit. Quis fuga iusto saepe nobis sunt a. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio ut nulla quos nemo nesciunt enim officiis laudantium, neque labore. Officia illo obcaecati, impedit distinctio dicta laudantium mollitia quam nihil quisquam!
      </p>
    </>
  );
};

function Hero() {


  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
      mirror: false,
    });
  }, []);

  return (
    <div className="aos-container" id="new">
      <section
        className="relative bg-cover bg-blue-400 bg-center bg-no-repeat"
        // style={{ backgroundImage: `url(${Student})` }}
      >
        <div className='grid grid-cols-2 '>
        <div data-aos="fade-up"  className="relative mx-auto max-w-screen-xl  px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8">




        <div className="bg-transparent backdrop-filter backdrop-blur-lg bg-opacity-30 px-10 max-w-2xl rounded-3xl mx-auto py-20 flex flex-col items-start justify-center">
      <div className="duration-1000 relative transform opacity-0 transition-all translate-y-12 ease-out" data-replace='{ "translate-y-12": "translate-y-0", "opacity-0": "opacity-100" }'>
        <AnimatedText />
      </div>
      <div className="mt-10 sm:flex sm:justify-center lg:justify-start duration-700 delay-300 relative transform transition-all opacity-0 translate-y-12 ease-out" data-replace='{ "translate-y-12": "translate-y-0", "opacity-0": "opacity-100" }'>
        <div className="rounded-md shadow">
          <a href="#" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo transition duration-150 ease-in-out md:py-4 md:text-lg md:px-10">
            Get started
          </a>
        </div>
        <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
          <a href="#" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-indigo-600 bg-white hover:text-indigo-500 focus:outline-none focus:border-indigo-300 focus:shadow-outline-indigo transition duration-150 ease-in-out md:py-4 md:text-lg md:px-10">
            Live demo
          </a>
        </div>
      </div>
    </div>
  



        </div>
        <div>



        <img src={Kutti}  alt="Description of the image" className='w-30 py-20 mt-20  ml-6 ' />

       
          


        </div>
        </div>
       

      </section>
    </div>
  );
}

export default Hero;

