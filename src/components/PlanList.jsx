import React from 'react'
import plan from '../data/plans.json'
import PlanCard from './PlanCard';
import PlanPricingCard from './plan-page/PlanPricingCard';


const PlanList = ({ isHome = false }) => {
    const planListing = isHome ? plan.slice(0, 5) : plan;

    return (
      <section className="bg-blue-50 px-4 py-10">
        <div className="md:container md:mx-auto">
          <h2 className="mb-6 text-center text-3xl font-bold text-indigo-500">
          {isHome ? 'Latest Plans' : 'All Plans'}
          </h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-5">
          {planListing.map( (plan) => (
                // <PlanCard key={plan.id} plan={plan}/>
                <PlanPricingCard />
              ))}
          </div>
        </div>
      </section>
    )
}

export default PlanList
