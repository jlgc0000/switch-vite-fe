import React from "react";
import { Link } from "react-router-dom";
import { Card } from "flowbite-react";
import { CheckCircle } from "lucide-react";

const PlanCard = ({ plan }) => {
  // Split the description using "<br /><br />" as separator
  const features = plan.description.split("<br /><br />").map(item => item.trim());

  return (
    <Card className="flex flex-col justify-between h-full w-screen max-w-sm sm:max-w-sm md:max-w-sm">
      <div>
        <h5 className="mb-4 text-xl font-medium text-gray-500 dark:text-gray-400">
          {plan.title}
        </h5>

        <div className="flex items-baseline text-gray-900 dark:text-white">
          <span className="text-3xl font-semibold">₱</span>
          <span className="text-5xl font-extrabold tracking-tight">
            {plan.monthly}
          </span>
          <span className="ml-1 text-xl font-normal text-gray-500 dark:text-gray-400">
            /month
          </span>
        </div>

        {/* Feature List with CheckCircle */}
        <ul className="mt-4 my-7 space-y-5 flex-grow ">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center gap-2 text-gray-500 dark:text-gray-400 ">
              <CheckCircle className="w-5 h-5 text-cyan-600 dark:text-cyan-500 " />
              <span className="text-base font-normal " dangerouslySetInnerHTML={{ __html: feature }}></span>
            </li>
          ))}
        </ul>
      </div>

      <div className="p-4">
        <div className="mb-5 border border-gray-100"></div>
        <div className="mb-4 flex flex-col justify-between lg:flex-row">
          <Link
            to={`/job/${plan.id}`}
            className="h-[36px] rounded-lg bg-indigo-500 px-4 py-2 text-center text-sm text-white hover:bg-indigo-600"
          >
            Apply Now
          </Link>
        </div>
      </div>
    </Card>
  );
};

export default PlanCard;
