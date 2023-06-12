

import React from 'react';
import Student from '../Images/students.jpg';

function Hero() {
  return (
    <div>
      <section
        className="relative bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${Student})` }}
      >
        {/* <div className="absolute inset-0 bg-white/75 sm:bg-transparent sm:from-white/95 sm:to-white/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l"></div> */}

        <div className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8">
          <div className="max-w-xl hover:translate-y-4  hover:duration-600 bg-white backdrop-filter backdrop-blur-lg bg-opacity-30 py-6 px-7 rounded-3xl text-center flex flex-col ltr:sm:text-left rtl:sm:text-right">
           <div>

           
            <h1 className="text-2xl font-extrabold sm:text-5xl">
              Let's find your
              <strong className="block text-1xl text-blue-700">
                Sponsor today! 
              </strong>
            </h1>

            <p className="mt-4 max-w-lg sm:text-xl/relaxed">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt
              illo tenetur fuga ducimus numquam ea!
            </p>
            </div>
            <div className="mt-8 flex flex-wrap justify-center gap-4 text-center">
              <a
                href="#"
                className="block w-full rounded bg-yellow-500 px-12 py-3 text-sm font-medium text-blue-800 shadow hover:bg-blue-900 hover:text-white focus:outline-none focus:ring active:bg-rose-500 sm:w-auto"
              >
                New to GoodWill?
              </a>

              <a
                href="#"
                className="block w-full rounded bg-white hover:bg-blue-900 hover:text-white px-12 py-3 text-sm font-medium text-blue-800 shadow  focus:outline-none focus:ring active:text-rose-500 sm:w-auto"
              >
                Need any help?
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Hero;

