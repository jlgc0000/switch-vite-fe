import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logo from "../assets/images/iconLogo.png";
import {
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarLink,
} from "flowbite-react";

const FlowBiteNavBar = () => {
  const path = useLocation().pathname;
  const [isOpen, setIsOpen] = useState(false);
  const [navbarHeight, setNavbarHeight] = useState(0);
  const [activeLink, setActiveLink] = useState(path);

  useEffect(() => {
    const navbar = document.getElementById("navbar");
    if (navbar) {
      setNavbarHeight(navbar.offsetHeight);
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "plans", "promos", "aboutus", "equipment", "team", "help"];
      let currentSection = "";

      sections.forEach((section) => {
        const sectionElement = document.getElementById(section);
        if (sectionElement) {
          const rect = sectionElement.getBoundingClientRect();
          if (rect.top <= navbarHeight && rect.bottom >= navbarHeight) {
            currentSection = section;
          }
        }
      });

      setActiveLink(`/${currentSection}`);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [navbarHeight]);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      window.scrollTo({
        top: section.offsetTop - navbarHeight,
        behavior: "smooth",
      });
      setActiveLink(`/${id}`);
      setIsOpen(false);
    }
  };

  return (
    <Navbar id="navbar" fluid className="bg-indigo-700 sticky top-0 w-full z-50 shadow-lg">
      <div className="container mx-auto flex items-center justify-between px-4 py-3">
        
        {/* ✅ Fixed: NavbarBrand does not contain <Link> anymore */}
        <NavbarBrand onClick={() => scrollToSection("home")} className="cursor-pointer">
          <img src={logo} className="mr-3 h-12 sm:h-16" alt="Logo" />
        </NavbarBrand>

        {/* Mobile Toggle */}
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-white focus:outline-none">
          {isOpen ? <X size={32} /> : <Menu size={32} />}
        </button>

        {/* Navigation Links */}
        <NavbarCollapse
          className={`absolute md:relative left-0 top-full md:top-0 w-full md:w-auto bg-indigo-700 md:bg-transparent flex flex-col md:flex-row transition-all duration-300 ease-in-out ${isOpen ? "block" : "hidden"}`}
        >
          {[
            { name: "Home", id: "home" },
            { name: "Plans", id: "plans" },
            { name: "About Us", id: "aboutus" },
            { name: "Equipment", id: "equipment" },
            { name: "Team", id: "team" },
            { name: "Contact Us", id: "help" },
          ].map((item, index) => (
            /* ✅ Fixed: NavbarLink uses `as="div"` so it doesn't render an <a> */
            <NavbarLink key={index} as="div" className="p-3 text-white text-lg cursor-pointer text-center w-full md:w-auto !bg-transparent transition-all duration-300">
              <span onClick={() => scrollToSection(item.id)} className={`text-white hover:text-glow ${activeLink === `/${item.id}` ? "text-glow" : ""}`}>
                {item.name}
              </span>
            </NavbarLink>
          ))}
        </NavbarCollapse>
      </div>
    </Navbar>
  );
};

export default FlowBiteNavBar;
