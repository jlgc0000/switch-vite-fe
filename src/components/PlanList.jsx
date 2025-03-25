import React, { useState } from "react";
import { motion } from "framer-motion";
import plan from "../data/plans.json";
import PlanCard from "./PlanCard";

const PlanList = ({ isHome = false }) => {
  const initialLimit = 4;
  const [visibleCount, setVisibleCount] = useState(initialLimit);

  const handleShowMore = () => {
    setVisibleCount(plan.length); // Show all plans
  };

  return (
    <section className="bg-white h-full px-4 py-10 mb-24">
      <div className="md:container md:mx-auto">
        <h2 className="m-auto mb-10 text-center text-6xl font-bold text-indigo-500">
          {isHome ? "Latest Plans" : "All Plans"}
        </h2>

        {/* Grid Wrapper */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-center">
          {plan.slice(0, visibleCount).map((plan, index) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: .6, delay: index * 0.3 }}
              className="flex justify-center"
            >
              <PlanCard plan={plan} className="h-full" />
            </motion.div>
          ))}
        </div>

        {/* Show More Button (Centered) */}
        {visibleCount < plan.length && (
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
