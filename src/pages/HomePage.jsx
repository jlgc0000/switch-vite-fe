import React from "react";
import Hero from "../components/Hero";
import ViewAllJobs from "../components/ViewAllJobs";
import PlanList from "../components/PlanList";
import FaqListing from "../components/faq-page/FaqListing";
// import { Parallax, ParallaxLayer } from "@react-spring/parallax";

const HomePage = () => {
  return (
    <>
      <Hero
        title="Get that quality internet speed!"
        subTitle="Enjoy the freedom of endless possibilities with Switch Fiber. Download and upload any songs you like, play your favorite online games, attach large files or folders, upload your trendy photos and videos. It is simple and easy with lightning fast speed fiber."
      />
      <PlanList isHome={true} />
      <ViewAllJobs />
      <FaqListing />
    </>
  );
};

export default HomePage;
