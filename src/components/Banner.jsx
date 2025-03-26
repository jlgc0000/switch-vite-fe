import React from 'react';
import jackfiber from '../assets/images/jackfiber.jpg';
import nz3 from '../assets/images/nz3.jpg';

const Banner = () => {
  return (
    <div className='relative flex items-center justify-center h-96 bg-tech-pattern bg-fixed bg-cover px-4'>
      <div className='absolute inset-0 bg-white opacity-20'></div>
      
      {/* Responsive Image Container */}
      <div className='relative flex flex-wrap md:flex-nowrap items-center justify-center gap-4'>
        <img 
          src={jackfiber} 
          className='p-4 max-w-full h-auto md:w-1/2' 
          alt="Jack Fiber" 
        />
        <img 
          src={nz3} 
          className='p-4 max-w-full h-auto md:w-1/2' 
          alt="NZ3" 
        />
      </div>
    </div>
  );
};

export default Banner;
