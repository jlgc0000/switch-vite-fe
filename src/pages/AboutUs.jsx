import React, { useEffect, useState, useRef } from "react";
import about from "../data/about.json"; // Import JSON data

const AboutUs = () => {
  return (
    <section className=" min-h-96 bg-gray-100 p-6">
      <div className="mb-32 mt-10  mx-auto max-w-5xl text-center">
        {/* About Us Header */}
        <h2 className="mb-4 text-4xl font-extrabold text-indigo-500">
          {about.about.title}
        </h2>
        <p
          className="mb-12 text-lg leading-relaxed text-gray-700"
          dangerouslySetInnerHTML={{ __html: about.about.description }}
        ></p>

        {/* Mission & Vision */}
        <div className="grid gap-10 text-left md:grid-cols-2">
          {[about.mission, about.vision].map((item, index) => (
            <div
              key={index}
              className="transform rounded-xl bg-white p-8 shadow-md transition-all duration-500 hover:scale-105 hover:shadow-lg"
            >
              <h3 className="mb-3 text-2xl font-semibold text-indigo-600">
                {item.title}
              </h3>
              <p className="text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>

        {/* Services */}
        <div className="mt-16 flex justify-center">
          <div className="max-w-5xl text-center">
            <h3 className="mb-6 text-3xl font-bold text-indigo-500">
              Our Services
            </h3>

            {/* Centered Grid for 2 boxes */}
            <div className="grid grid-cols-1 justify-items-center gap-8 sm:grid-cols-2 md:grid-cols-2">
              {about.services.slice(0, 2).map((service, index) => (
                <div
                  key={index}
                  className="w-80 transform rounded-lg bg-white p-6 text-center shadow-md transition-all duration-500 hover:scale-105 hover:shadow-lg"
                >
                  <h4 className="mb-2 text-xl font-semibold text-indigo-600">
                    {service.title}
                  </h4>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
