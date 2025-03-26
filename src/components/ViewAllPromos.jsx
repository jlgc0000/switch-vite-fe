import React from 'react'
import { Link } from 'react-router-dom'

const ViewAllPromos = () => {
  return (
    <>
    <section className="m-auto my-10 max-w-lg px-6">
      <Link
        to="/promos"
        className="block rounded-xl bg-indigo-500 px-6 py-4 text-center text-white hover:bg-gray-700">View All Promos</Link>
    </section>
    </>
  )
}

export default ViewAllPromos;
