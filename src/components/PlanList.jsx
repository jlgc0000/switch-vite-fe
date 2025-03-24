import React from "react";
import { motion } from "framer-motion"; // Import Framer Motion
import plan from "../data/plans.json";
import { Link } from "react-router-dom";
import PlanCard from "./PlanCard";
import ViewAllJobs from "./ViewAllJobs";

const PlanList = ({ isHome = false }) => {
  const planListing = isHome ? plan.slice(0, 4) : plan;

  return (
    <section className="bg-white h-full px-4 py-10 mb-24">
      <div className="md:container md:mx-auto">
        <h2 className="m-auto mb-10 text-center text-6xl font-bold text-indigo-500">
          {isHome ? "Latest Plans" : "All Plans"}
        </h2>

        {/* Grid Wrapper */}
        <div className=" flex flex-nowrap justify-center  grid-cols-1 gap-6 md:grid-cols-4">
          {planListing.map( (plan,index) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 30 }} // Start invisible & lower
              animate={{ opacity: 1, y: 0 }} // Fade in & move up
              transition={{ duration: 1, delay: index * 0.3 }} // Staggered effect
            >
            <PlanCard key={plan.id} plan={plan} className="h-full"/>
            </motion.div>
              
               // <PlanPricingCard />
              ))}
          </div>

        {isHome }{/*&& <ViewAllJobs />*/}
      </div>
    </section>
  );
};

export default PlanList;
