import React from 'react'
import { Link } from 'react-router-dom'

const PlanCard = ({plan}) => {
    // const [showFullDescription, setShowFullDescription] = useState(false);
    let desc = plan.description;
    // if (!showFullDescription) {
    //     desc = desc.substring(0, 90) + '...';
    // }

    return (
        <div className="relative rounded-xl bg-white shadow-md">
        <div className="p-4">
            <div className="mb-6">
                {/* <div className="text-gray-600 my-2">{plan.type}</div> */}
                <h3 className="text-xl font-bold">{plan.title}</h3>
            </div>

            <div className="mb-5"dangerouslySetInnerHTML={{__html: desc}}></div>
            {/* <button onClick={ () => setShowFullDescription((prevState) => (prevState = !prevState))} className="text-indigo-500 mb-5 hover:text-indigo-600 ">{ showFullDescription ? "Less" : "More" }</button> */}

            <h3 className="mb-2 text-indigo-500">Php {plan.monthly} / Month</h3>
            <div className="mb-5 border border-gray-100"></div>
                <div className="mb-4 flex flex-col justify-between lg:flex-row">
                    {/* <div className="text-orange-700 mb-3">
                    <FaMapMarker className='inline text-lg mb-1 mr-1' />
                    {job.location}
                    </div> */}
                    <Link
                    to={`/job/${plan.id}`}
                    className="h-[36px] rounded-lg bg-indigo-500 px-4 py-2 text-center text-sm text-white hover:bg-indigo-600"
                    >
                    Apply Now
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default PlanCard
