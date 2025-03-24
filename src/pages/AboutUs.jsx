import React, { useEffect, useState, useRef } from "react";
import about from "../data/about.json"; // Import JSON data

const AboutUs = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`bg-gray-100 text-gray-900 py-20 px-6 md:px-12 lg:px-20 transition-all duration-700 ease-out opacity-0 translate-y-6 ${
        isVisible ? "opacity-100 translate-y-0" : ""
      }`}
    >
      <div className="max-w-5xl mx-auto text-center">
        {/* About Us Header */}
        <h2 className="text-4xl font-extrabold text-indigo-500 mb-4">{about.about.title}</h2>
        <p className="text-lg text-gray-700 leading-relaxed mb-12">
          {about.about.description}
        </p>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-10 text-left">
          {[about.mission, about.vision].map((item, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-xl shadow-md transform transition-all duration-500 hover:scale-105 hover:shadow-lg"
            >
              <h3 className="text-2xl font-semibold text-indigo-600 mb-3">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>

        {/* Services */}
        <div className="mt-16">
          <h3 className="text-3xl font-bold text-indigo-500 mb-6">Our Services</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {about.services.map((service, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md text-center transform transition-all duration-500 hover:scale-105 hover:shadow-lg"
              >
                <h4 className="text-xl font-semibold text-indigo-600 mb-2">{service.title}</h4>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;