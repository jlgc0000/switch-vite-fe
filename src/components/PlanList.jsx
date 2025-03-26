import React, { useState } from "react";
import { motion } from "framer-motion";
import planData from "../data/plans.json";
import PlanCard from "./PlanCard";

const plans = planData.Plans || []; // Ensure it's an array

const PlanList = () => {
  const initialLimit = 4;
  const [visibleCount, setVisibleCount] = useState(initialLimit);

  console.log("Plans data:", plans); // Debugging step

  const handleShowMore = () => {
    setVisibleCount(plans.length);
  };

  return (
    <section className="bg-white h-full px-4 py-10 mb-24">
      <div className="md:container md:mx-auto">
        <h2 className="m-auto mb-10 text-center text-6xl font-bold text-indigo-500">
          Latest Plans
        </h2>

        {/* Grid Wrapper */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-center">
          {Array.isArray(plans) &&
            plans.slice(0, visibleCount).map((plan, index) => (
              <motion.div
                key={plan.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex justify-center"
              >
                <PlanCard plan={plan} className="h-full" />
              </motion.div>
            ))}
        </div>

        {/* Show More Button */}
        {visibleCount < plans.length && (
          <div className="flex justify-center mt-6">
            <button
              onClick={handleShowMore}
              className="px-6 py-3 text-white bg-indigo-500 rounded-lg hover:bg-indigo-700 transition"
            >
              Show More
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default PlanList;
