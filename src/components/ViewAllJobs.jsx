import React from 'react'
import { Link } from 'react-router-dom'

const ViewAllJobs = () => {
  return (
    <>
    <section className="m-auto my-10 max-w-lg px-6">
      <Link
        to="/plans"
        className="block rounded-xl bg-indigo-500 px-6 py-4 text-center text-white hover:bg-gray-700">View All Plans</Link>
    </section>
    </>
  )
}

export default ViewAllJobs
