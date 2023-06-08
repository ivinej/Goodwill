// import React from 'react'
// import Heroimg from '../Images/heropic.jpg'
// function Hero() {
//   return (
//     <div>
   

// <section
//   class="relative  bg-cover bg-center bg-no-repeat"
//   <img class="rounded-xl w-full" src={Heroimg} alt=''/>
// >

//   <div
//     class="absolute inset-0 bg-white/75 sm:bg-transparent sm:from-white/95 sm:to-white/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l"
//   ></div>

//   <div
//     class="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8"
//   >
//     <div class="max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
//       <h1 class="text-3xl font-extrabold sm:text-5xl">
//         Let us find your

//         <strong class="block font-extrabold text-rose-700">
//           Forever Home.
//         </strong>
//       </h1>

//       <p class="mt-4 max-w-lg sm:text-xl/relaxed">
//         Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt illo
//         tenetur fuga ducimus numquam ea!
//       </p>

//       <div class="mt-8 flex flex-wrap gap-4 text-center">
//         <a
//           href="#"
//           class="block w-full rounded bg-rose-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-rose-700 focus:outline-none focus:ring active:bg-rose-500 sm:w-auto"
//         >
//           Get Started
//         </a>

//         <a
//           href="#"
//           class="block w-full rounded bg-white px-12 py-3 text-sm font-medium text-rose-600 shadow hover:text-rose-700 focus:outline-none focus:ring active:text-rose-500 sm:w-auto"
//         >
//           Learn More
//         </a>
//       </div>
//     </div>
//   </div>
// </section>
//     </div>
//   )
// }

// export default Hero

import React from 'react';
import Heroimg from '../Images/heropic.jpg';

function Hero() {
  return (
    <div>
      <section
        className="relative bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${Heroimg})` }}
      >
        <div className="absolute inset-0 bg-white/75 sm:bg-transparent sm:from-white/95 sm:to-white/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l"></div>

        <div className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8">
          <div className="max-w-xl text-center flex flex-col ltr:sm:text-left rtl:sm:text-right">
           <div>

           
            <h1 className="text-3xl font-extrabold sm:text-5xl">
              Let us find your
              <strong className="block font-extrabold text-rose-700">
                Forever Home.
              </strong>
            </h1>

            <p className="mt-4 max-w-lg sm:text-xl/relaxed">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt
              illo tenetur fuga ducimus numquam ea!
            </p>
            </div>
            <div className="mt-8 flex flex-wrap gap-4 text-center">
              <a
                href="#"
                className="block w-full rounded bg-yellow-300 px-12 py-3 text-sm font-medium text-blue-800 shadow hover:bg-blue-900 focus:outline-none focus:ring active:bg-rose-500 sm:w-auto"
              >
                New to GoodWill?
              </a>

              <a
                href="#"
                className="block w-full rounded bg-white px-12 py-3 text-sm font-medium text-blue-800 shadow hover:text-blue-900 focus:outline-none focus:ring active:text-rose-500 sm:w-auto"
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

