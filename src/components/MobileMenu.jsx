import React from 'react'
import { NavLink } from 'react-router-dom'

const MobileMenu = () => {
    const linkClass = ({isActive}) => isActive 
    ? 'bg-black text-white hover:bg-gray-900 hover:text-white rounded-md px-3 py-2' 
    : 'text-white hover:bg-gray-900 hover:text-white rounded-md px-3 py-2'

  return (
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="flex flex-col bg-slate-50 p-8 justify-end items-start gap-2">
            <NavLink to="/" className={linkClass}>
                Home
            </NavLink >
            <NavLink to="/jobs" className={linkClass} >
                Area Coverage
            </NavLink>
            <NavLink to="/plans" className={linkClass}>
                Plans
            </NavLink>
            <NavLink to="/contact-us" className={linkClass}>
                Contact Us
            </NavLink>
            <NavLink to="/promos" className={linkClass}>
                Promos and Deals
            </NavLink>
        </div>
    </div>
  )
}

export default MobileMenu
