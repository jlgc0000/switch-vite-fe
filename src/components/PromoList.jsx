
import React from 'react';
import plan from '../data/plans.json';
import { Link } from "react-router-dom";
import PlanCard from '../components/PlanCard';
import PlanPricingCard from '../components/plan-page/PlanPricingCard';
import ViewAllJobs from '../components/ViewAllJobs';
import { motion } from "framer-motion";

const PromoList = ({ isHome = false }) => {
    const planListing = isHome ? plan.slice(0, 3) : plan;

    return (
      <>
      <section className='flex items-center justify-center h-auto bg-fixed bg-white bg-cover px-4 py-10 opacity-90'>

        <div className="md:container md:mx-auto">
          <h2 className="m-auto mb-10 text-center text-6xl font-bold text-indigo-500">
          {isHome ? 'Latest Promo' : 'Available Promos'}
          </h2>
          <div className=" flex flex-wrap justify-center  grid-cols-1 gap-6 md:grid-cols-3">
          {planListing.map( (plan,index) => (
             <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 30 }} // Start invisible & lower
              animate={{ opacity: 1, y: 0 }} // Fade in & move up
              transition={{ duration: 0.6, delay: index * 0.3 }} // Staggered effect
            >
             <PlanCard key={plan.id} plan={plan} className="h-full"/>
            </motion.div>
                 
               // <PlanPricingCard />
              ))}
          </div>
      {isHome && <ViewAllJobs />}
        </div>
        
      </section>
      </>
    )
}


export default PromoList;
