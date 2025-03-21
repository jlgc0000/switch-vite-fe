import React from "react";
import { motion } from "framer-motion"; // Import Framer Motion
import plan from "../data/plans.json";
import { Link } from "react-router-dom";
import PlanPricingCard from "./plan-page/PlanPricingCard";
import ViewAllJobs from "./ViewAllJobs";

const PlanList = ({ isHome = false }) => {
  const planListing = isHome ? plan.slice(0, 5) : plan;

  return (
    <section className="bg-white px-4 py-10">
      <div className="md:container md:mx-auto">
        <h2 className="m-auto mb-10 text-center text-6xl font-bold text-indigo-500">
          {isHome ? "Latest Plans" : "All Plans"}
        </h2>

        {/* Grid Wrapper */}
        <div className="flex flex-wrap justify-center gap-6 md:grid-cols-5">
          {planListing.map((plan, index) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 30 }} // Start invisible & lower
              animate={{ opacity: 1, y: 0 }} // Fade in & move up
              transition={{ duration: 0.6, delay: index * 0.1 }} // Staggered effect
            >
              <PlanPricingCard />
            </motion.div>
          ))}
        </div>

        {isHome && <ViewAllJobs />}
      </div>
    </section>
  );
};

export default PlanList;
