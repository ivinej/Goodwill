// // import React from 'react'
// // import heropic from '../Images/heropic.jpg'

// // const Slide = () => {
// //   return (
    
// // <div id="default-carousel" class="relative w-full" data-carousel="slide">
   
// //     <div class="relative h-56 overflow-hidden rounded-lg md:h-96">
        
// //         <div class="hidden duration-700 ease-in-out" data-carousel-item>
// //             <img src={heropic} class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."/>
// //         </div>
       
// //         <div class="hidden duration-700 ease-in-out" data-carousel-item>
// //             <img src={heropic}  class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."/>
// //         </div>
      
// //         <div class="hidden duration-700 ease-in-out" data-carousel-item>
// //             <img src={heropic}  class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."/>
// //         </div>
       
// //         <div class="hidden duration-700 ease-in-out" data-carousel-item>
// //             <img src={heropic}  class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."/>
// //         </div>
      
// //         <div class="hidden duration-700 ease-in-out" data-carousel-item>
// //             <img src={heropic}  class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."/>
// //         </div>
// //     </div>
  
// //     <div class="absolute z-30 flex space-x-3 -translate-x-1/2 bottom-5 left-1/2">
// //         <button type="button" class="w-3 h-3 rounded-full" aria-current="true" aria-label="Slide 1" data-carousel-slide-to="0"></button>
// //         <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 2" data-carousel-slide-to="1"></button>
// //         <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 3" data-carousel-slide-to="2"></button>
// //         <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 4" data-carousel-slide-to="3"></button>
// //         <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 5" data-carousel-slide-to="4"></button>
// //     </div>
    
// //     <button type="button" class="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
// //         <span class="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
// //             <svg aria-hidden="true" class="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path></svg>
// //             <span class="sr-only">Previous</span>
// //         </span>
// //     </button>
// //     <button type="button" class="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
// //         <span class="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
// //             <svg aria-hidden="true" class="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
// //             <span class="sr-only">Next</span>
// //         </span>
// //     </button>
// // </div>

// //   )
// // }

// // export default Slide


// import React, { useState, useEffect } from 'react';
// import heropic from '../Images/heropic.jpg';

// const Slide = () => {
//   const [activeSlide, setActiveSlide] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setActiveSlide((prevSlide) => (prevSlide + 1) % 5);
//     }, 3000);

//     return () => {
//       clearInterval(interval);
//     };
//   }, []);

//   return (
//     <div id="default-carousel" className="relative w-full" data-carousel="slide">
//       <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
//         {[0, 1, 2, 3, 4].map((index) => (
//           <div
//             key={index}
//             className={`duration-700 ease-in-out ${
//               activeSlide === index ? 'block' : 'hidden'
//             }`}
//             data-carousel-item
//           >
//             <img
//               src={heropic}
//               className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
//               alt="..."
//             />
//           </div>
//         ))}
//       </div>

//       <div className="absolute z-30 flex space-x-3 -translate-x-1/2 bottom-5 left-1/2">
//         {[0, 1, 2, 3, 4].map((index) => (
//           <button
//             key={index}
//             type="button"
//             className={`w-3 h-3 rounded-full ${
//               activeSlide === index ? 'bg-white' : ''
//             }`}
//             aria-current={activeSlide === index ? 'true' : 'false'}
//             aria-label={`Slide ${index + 1}`}
//             data-carousel-slide-to={index}
//             onClick={() => setActiveSlide(index)}
//           ></button>
//         ))}
//       </div>

//       <button
//         type="button"
//         className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
//         data-carousel-prev
//         onClick={() =>
//           setActiveSlide((prevSlide) => (prevSlide === 0 ? 4 : prevSlide - 1))
//         }
//       >
//         <span className="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
//           <svg
//             aria-hidden="true"
//             className="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800"
//             fill="none"
//             stroke="currentColor"
//             viewBox="0 0 24 24"
//             xmlns="http://www.w3.org/2000/svg"
//           >
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
//           </svg>
//           <span className="sr-only">Previous</span>
//         </span>
//       </button>
//       <button
//         type="button"
//         className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
//         data-carousel-next
//         onClick={() => setActiveSlide((prevSlide) => (prevSlide + 1) % 5)}
//       >
//         <span className="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
//           <svg
//             aria-hidden="true"
//             className="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800"
//             fill="none"
//             stroke="currentColor"
//             viewBox="0 0 24 24"
//             xmlns="http://www.w3.org/2000/svg"
//           >
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
//           </svg>
//           <span className="sr-only">Next</span>
//         </span>
//       </button>
//     </div>
//   );
// };

// export default Slide;
