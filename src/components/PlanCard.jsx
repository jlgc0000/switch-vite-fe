import React from "react";
import { Link } from "react-router-dom";
import { Card } from "flowbite-react";
import { CheckCircle } from "lucide-react";

const PlanCard = ({ plan }) => {
  const features = plan.description.split(",").map(item => item.trim());

  return (
    <div className="relative w-80 sm:w-80 h-auto sm:h-[500px]">
      {/* Ribbon for Popular Plan */}
      {plan.popular && (
        <div className="absolute top-0 left-0 bg-gradient-to-r from-red-500 to-orange-500 text-white text-xs font-bold px-4 py-1 rounded-br-lg shadow-lg uppercase tracking-wide">
          Popular
        </div>
      )}
      
      <Card className="flex flex-col justify-between h-full shadow-xl rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700">
        <div className="p-6 flex-1">
          <h5 className="mb-4 text-xl font-bold text-indigo-600 dark:text-indigo-400 uppercase text-center">
            {plan.title}
          </h5>

          <div className="flex items-center justify-center text-gray-900 dark:text-white">
            <span className="text-3xl font-semibold">₱</span>
            <span className="text-5xl font-extrabold tracking-tight">
              {plan.monthly}
            </span>
            <span className="ml-1 text-xl font-normal text-gray-500 dark:text-gray-400">
              /month
            </span>
          </div>

          {/* Feature List with Fixed CheckCircle Size */}
          <ul className="mt-6 space-y-4">
            {features.map((feature, index) => (
              <li key={index} className="flex items-center gap-3 text-gray-600 dark:text-gray-300 text-base">
                <CheckCircle className="w-5 h-5 shrink-0 text-cyan-600 dark:text-cyan-500" />
                <span className="font-medium" dangerouslySetInnerHTML={{ __html: feature }}></span>
              </li>
            ))}
          </ul>
        </div>

        <div className="p-4 text-center">
        
        <div className="mb-5 border border-gray-100"></div>
          <Link
            to={`/job/${plan.id}`}
            className="h-[48px] w-full inline-block rounded-lg bg-indigo-500 px-6 py-3 text-center text-sm font-semibold text-white hover:bg-indigo-600 transition-all duration-300"
          >
            Apply Now
          </Link>
        </div>
      </Card>
    </div>
  );
};

export default PlanCard;
