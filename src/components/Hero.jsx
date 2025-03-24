import React from 'react'
// import banner from '../assets/images/banner.png'

const Hero = ({ title, subTitle }) => {
  return (
    <section className="relative h-screen bg-fibr-pattern bg-cover bg-fixed bg-center flex items-center justify-center px-4 py-20 md:py-60">
      <div className="absolute inset-0 bg-white opacity-15"></div>
      <div className="relative mx-auto flex max-w-7xl items-center px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-6xl font-extrabold text-white sm:text-5xl md:text-6xl">
            {title}
          </h1>
          <p className="my-4 text-xl text-white">
            {subTitle}
          </p>
        </div>
      </div>
    </section>
  )
}

export default Hero