import React from 'react'
import jackfiber from '../assets/images/jackfiber.jpg'
import nz3 from '../assets/images/nz3.jpg'

const Banner = () => {
  return (
    <>
    <div className='relative flex items-center justify-center h-96 bg-tech-pattern bg-fixed bg-cover'>
        <div className='absolute inset-0 bg-white opacity-20'></div>
    <div className='relative flex'>
        <img src={jackfiber} className='p-6 h-auto' alt="Jack Fiber" />
        <img src={nz3} className='p-6 h-auto' alt="NZ3" />
      </div>
  </div>
    </>
  )
}

export default Banner
