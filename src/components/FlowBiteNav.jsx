import React, { useState, useEffect } from "react";
import logo from "../assets/images/logo.png";
import { Navbar, NavbarBrand, NavbarCollapse, NavbarLink } from "flowbite-react";
import { Link } from "react-router-dom";

const FLowBiteNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [navbarHeight, setNavbarHeight] = useState(0);

  useEffect(() => {
    const navbar = document.getElementById("navbar");
    if (navbar) {
      setNavbarHeight(navbar.offsetHeight);
    }
  }, []);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      window.scrollTo({
        top: section.offsetTop - navbarHeight,
        behavior: "smooth",
      });
      setIsOpen(false);
    }
  };

  return (
    <>
      {/* Sticky Navbar */}
      <Navbar
        id="navbar"
        fluid
        className="bg-indigo-700 sticky top-0 w-full z-50 shadow-lg"
      >
        <div className="container mx-auto flex items-center justify-between px-4 py-3">
          {/* Logo and Brand */}
          <NavbarBrand className="cursor-pointer">
            <Link
              to="/"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("home");
              }}
              className="flex items-center"
            >
              <img src={logo} className="mr-3 h-8 sm:h-10" alt="Flowbite React Logo" />
              <span className="text-xl font-semibold text-white">Switch Fiber</span>
            </Link>
          </NavbarBrand>

          {/* Mobile Toggle Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white focus:outline-none"
          >
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              )}
            </svg>
          </button>

          {/* Navigation Links */}
          <NavbarCollapse
            className={`absolute md:relative left-0 top-full md:top-0 w-full md:w-auto bg-indigo-700 md:bg-transparent flex flex-col md:flex-row transition-all duration-300 ease-in-out ${
              isOpen ? "block" : "hidden"
            }`}
          >
            {[
              { name: "Home", id: "home" },
              { name: "Plans", id: "plans" },
              { name: "Promos", id: "promos" },
              { name: "Coverage", id: "coverage" },
              { name: "Contact Us", id: "help" },
            ].map((item, index) => (
              <NavbarLink
                key={index}
                as="div"
                className="p-3 text-white text-lg cursor-pointer text-center w-full md:w-auto hover:bg-indigo-600 md:hover:bg-transparent"
                onClick={() => scrollToSection(item.id)}
              >
                {item.name}
              </NavbarLink>
            ))}
          </NavbarCollapse>
        </div>
      </Navbar>


    </>
  );
};

export default FLowBiteNav;
