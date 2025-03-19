import React from "react";
import logo from "../assets/images/logo.png";
import {
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarLink,
  NavbarToggle,
} from "flowbite-react";
import { Link, useLocation } from "react-router-dom";

const FLowBiteNav = () => {
  const path = useLocation().pathname;
  const linkClass = ({isActive}) => isActive 
  ? 'self-center whitespace-nowrap p-4 text-xl font-semibold text-white dark:text-indigo-700' 
  : 'self-center whitespace-nowrap p-4 text-xl font-semibold text-white dark:text-indigo-700'

  return (
    <Navbar fluid className="bg-indigo-700">
      <NavbarBrand>
        <img src={logo} className="mr-3 h-6 sm:h-9" alt="Flowbite React Logo" />
        <span className="self-center whitespace-nowrap text-xl font-semibold text-white dark:text-indigo-700">
          Switch Fiber
        </span>
      </NavbarBrand>
      <NavbarToggle />
      <NavbarCollapse>
        <NavbarLink active={path == "/"} as={"div"} className="self-center whitespace-nowrap p-4 text-xl font-semibold text-white dark:text-indigo-700">
          <Link to="/"> Home </Link>
        </NavbarLink>
        <NavbarLink active={path == "/plans"} as={"div"} className="self-center whitespace-nowrap p-4 text-xl font-semibold text-white dark:text-indigo-700">
          <Link to="/plans"> Plans </Link>
        </NavbarLink>
        <NavbarLink active={path == "/promos"} as={"div"} className="self-center whitespace-nowrap p-4 text-xl font-semibold text-white dark:text-indigo-700">
          <Link to="/promos"> Promos </Link>
        </NavbarLink>
        <NavbarLink active={path == "/coverage"} as={"div"} className="self-center whitespace-nowrap p-4 text-xl font-semibold text-white dark:text-indigo-700">
          <Link to="/coverage"> Coverage </Link>
        </NavbarLink>
        <NavbarLink active={path == "/help"} as={"div"} className="self-center whitespace-nowrap p-4 text-xl font-semibold text-white dark:text-indigo-700">
          <Link to="/help"> Contact Us </Link>
        </NavbarLink>
      </NavbarCollapse>
    </Navbar>
  );
};

export default FLowBiteNav;
