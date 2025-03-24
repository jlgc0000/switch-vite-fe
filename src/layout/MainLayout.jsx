import React, { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Footer from "../components/Footer";
import FlowBiteNav from "../components/FlowBiteNav";

const MainLayout = () => {
  const { pathname } = useLocation(); // Detects route change

  useEffect(() => {
    window.scrollTo(0, 0); // Instantly jumps to the top without animation
  }, [pathname]);

  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1">
        <FlowBiteNav />
        <Outlet />
      </main>
      <footer className="bg-gray-200 p-0 text-center">
        <Footer />
      </footer>
    </div>
  );
};

export default MainLayout;
