import React, { useEffect, useRef } from "react";

const Equipment = () => {
  const equipments = [
    { id: 1, name: "Fiber Optic Cable", category: "Cabling", image: "./src/assets/images/contact.jpg" },
    { id: 2, name: "ONT (Optical Network Terminal)", category: "Networking", image: "./src/assets/images/contact.jpg" },
    { id: 3, name: "Router", category: "Networking", image: "./src/assets/images/fibr.jpg" },
    { id: 4, name: "Fiber Splicer", category: "Tools", image: "./src/assets/images/server.jpg" },
    { id: 5, name: "Patch Panel", category: "Cabling", image: "./src/assets/images/tech.jpg" },
    { id: 6, name: "Media Converter", category: "Networking", image: "./src/assets/images/nz3.jpg" },
    { id: 7, name: "Network Switch", category: "Networking", image: "./src/assets/images/hub.jpg" },
  ];

  const equipmentRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("opacity-100", "scale-100");
          }
        });
      },
      { threshold: 0.1 }
    );

    equipmentRefs.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => {
      equipmentRefs.current.forEach((el) => {
        if (el) observer.unobserve(el);
      });
    };
  }, []);

  return (
    <div className="min-h-96 mb-32  bg-white mt-10 p-6">
      <h1 className="text-4xl font-extrabold text-indigo-500 mb-8 text-center">Fiber Connection Equipments</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {equipments.map((equipment, index) => (
          <div
            key={equipment.id}
            ref={(el) => (equipmentRefs.current[index] = el)}
            className="bg-white p-4 rounded-lg shadow-md opacity-0 scale-95 transition-all duration-500 ease-in-out hover:scale-105"
          >
            <img
              src={equipment.image}
              alt={equipment.name}
              className="w-full h-40 object-cover rounded-md mb-4"
            />
            <h2 className="text-xl font-semibold">{equipment.name}</h2>
            <p className="text-gray-600">{equipment.category}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Equipment;
