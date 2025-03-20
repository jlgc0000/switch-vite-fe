import React from 'react'
import plan from '../data/plans.json';
import { Link } from "react-router-dom";
import PlanCard from './PlanCard';
import PlanPricingCard from './plan-page/PlanPricingCard';
import ViewAllJobs from './ViewAllJobs';


const PlanList = ({ isHome = false }) => {
    const planListing = isHome ? plan.slice(0, 5) : plan;

    return (
      <>
      <section className="bg-white px-4 py-10 item">
        <div className="md:container md:mx-auto">
          <h2 className="m-auto mb-10 text-center text-6xl font-bold text-indigo-500">
          {isHome ? 'Latest Plans' : 'All Plans'}
          </h2>
          <div className=" flex flex-wrap justify-center  grid-cols-1 gap-6 md:grid-cols-5">
          {planListing.map( (plan) => (
                // <PlanCard key={plan.id} plan={plan}/>
                <PlanPricingCard />
              ))}
          </div>
      {isHome && <ViewAllJobs />}
        </div>
        
      </section>
      </>
    )
}

export default PlanList
