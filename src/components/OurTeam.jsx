import React, { useState, useEffect } from "react";
import team from "../data/team.json"; 

const teamImage = team.installations; 

const InstallationGallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const imagesPerView = 3;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % teamImage.length);
    }, 3000); 

    return () => clearInterval(interval);
  }, []);

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <section className="bg-gray-100 py-20 px-6 text-center w-full overflow-hidden">
    <div className="max-w-5xl mx-auto text-center">
      <h2 className="text-4xl font-extrabold text-indigo-500 mb-8">OUR TEAM</h2>
      <p className="text-lg text-gray-700 mb-12">
        {team.ourteam[0].description}
      </p>
      </div>
      <div className="relative w-full overflow-hidden">
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{
            transform: `translateX(-${(currentIndex % teamImage.length) * (100 / imagesPerView)}%)`,
            width: `${(teamImage.length / imagesPerView) * 100}%`,
          }}
        >
          {teamImage.concat(teamImage.slice(0, imagesPerView)).map((image, index) => (
            <img
              key={index}
              src={image.image}
              alt={`Installation ${index + 1}`}
              className="w-1/3 h-96 object-cover mx-1 rounded-lg"
            />
          ))}
        </div>
        {/* Dots Navigation */}
        <div className="flex justify-center mt-6 space-x-2">
          {teamImage.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                currentIndex % teamImage.length === index ? "bg-indigo-500 w-4 h-4" : "bg-gray-400"
              }`}
            ></button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InstallationGallery;