import React from 'react';
import { CheckCircle, Heart, Send } from "lucide-react";
import coverage from '../assets/images/coverage.png';

const CoveragePage = () => {
  return (
    <div className="flex justify-center items-center bg-indigo-100">
      <div className="flex justify-center flex-col md:flex-row bg-white p-10 gap-6 items-center   max-w-6xl m-5 rounded-2xl">
        {/* Left Side - Image */}
        <div className="max-w-lg">
          <img src={coverage} alt="Switch Fiber Coverage" className="w-full rounded-lg shadow-lg" />
        </div>

        {/* Right Side - Features & CTA */}
        <div className="flex-1">
          <p className="text-gray-800">
            Switch Fiber is now available in these Barangays! Get installed today and don’t miss out on our upcoming promos!
          </p>

          <h3 className="mt-4 text-red-600 font-bold">Why Switch?</h3>
          <ul className="mt-2 space-y-2">
            {[
              "High-Speed Internet Connection",
              "Unlimited Fiber Internet (No Data Cap)",
              "Affordable Plans",
              "No Hidden Charges",
            ].map((feature, index) => (
              <li key={index} className="flex items-center gap-2 text-gray-700">
                <CheckCircle className="w-5 h-5 text-green-500" />
                {feature}
              </li>
            ))}
          </ul>

          <h3 className="mt-4 text-red-600 font-bold flex items-center gap-1">
            Connecting to your home soon! <Heart className="w-5 h-5 text-red-600" />
          </h3>

          <p className="mt-2 text-gray-700">Fill out our Online Application Form right here:</p>

          <button className="mt-4 w-full md:w-auto bg-red-600 text-white flex items-center gap-2 px-6 py-2 rounded-lg hover:bg-red-700 transition">
            <Send className="w-5 h-5" /> Apply Now!
          </button>
        </div>
      </div>
    </div>
  );
};

export default CoveragePage;
