import React from "react";
// import banner from '../assets/images/banner.png'

const Hero = ({ title, subTitle }) => {
  return (
    <section className="relative flex h-screen items-center justify-center bg-fibr-pattern bg-cover bg-fixed bg-center px-4 py-20 md:py-60">
      <div className="absolute inset-0 bg-white opacity-15"></div>
      <div className="relative mx-auto flex max-w-7xl items-center px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-5xl font-extrabold text-white sm:text-4xl md:text-5xl">
            {title}
          </h1>
          <p className="my-4 text-lg text-white">{subTitle}</p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
