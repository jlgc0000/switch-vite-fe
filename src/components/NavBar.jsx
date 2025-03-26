import React from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/images/logo.png";
import {
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarLink,
  NavbarToggle,
} from "flowbite-react";

const NavBar = () => {
  const path = useLocation().pathname;

  return (
    <Navbar className=" border-b border-indigo-500 bg-indigo-700">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <div className="flex flex-1 items-center justify-start md:items-stretch md:justify-start">
            <NavbarBrand className="mr-4 flex shrink-0 items-center">
              <img className="h-10 w-auto" src={logo} alt="React Jobs" />
              <span className="ml-2 hidden text-2xl font-bold text-white md:block">
                Flowbite React
              </span>
            </NavbarBrand>
            <NavbarToggle />
            <NavbarCollapse className="hidden w-full flex-row justify-end text-xl font-extralight md:flex">
              <NavbarLink active={path == "/" } as={"div"} className="bg-red-500 hover:bg-red-600">
                <Link to="/">
                  {" "}
                  Home{" "}
                </Link>
              </NavbarLink>
              <NavbarLink active={path == "/plans"} as={"div"}>
                <Link to="/plans">
                  {" "}
                  Plans{" "}
                </Link>
              </NavbarLink>
             {/*<NavbarLink active={path == "/promos"} as={"div"}>
                <Link to="/promos">
                  {" "}
                  Promos{" "}
                </Link>
              </NavbarLink>*/}
              <NavbarLink active={path == "/aboutus"} as={"div"}>
                <Link to="/aboutus">
                  {" "}
                  About Us{" "}
                </Link>
              </NavbarLink>
              <NavbarLink active={path == "/help"} as={"div"}>
                <Link to="/help">
                  {" "}
                  Contact Us{" "}
                </Link>
              </NavbarLink>
            </NavbarCollapse>
          </div>
        </div>
      </div>
    </Navbar>
  );
};

export default NavBar;
