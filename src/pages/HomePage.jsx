import React from "react";
import { motion } from "framer-motion"; // Import Framer Motion
import Hero from "../components/Hero";
import PlanList from "../components/PlanList";
import FaqListing from "../components/faq-page/FaqListing";
import Banner from "../components/Banner";
import Contacts from "../components/faq-page/Contacts";
import AboutUs from "./AboutUs";
import PromoList from "../components/PromoList";
import Equipment from "../components/Equipment";
import OurTeam from "../components/OurTeam";

const HomePage = () => {
  // Section Wrapper with Animation
  const Section = ({ id, children }) => {
    const navbar = document.getElementById("navbar");
    const navbarHeight = navbar ? navbar.offsetHeight : 0;

    return (
      <motion.div
        id={id}
        style={{ paddingTop: id === "home" ? "0px" : navbarHeight + "px" }}
        initial={{ opacity: 0, y: 90 }} // Start invisible & lower
        whileInView={{ opacity: 1, y: 0 }} // Fade in & move up
        transition={{ duration: 1.5, ease: "easeOut" }} // Smooth effect
        viewport={{ once: true }} // Animate once per scroll
      >
        {children}
      </motion.div>
    );
  };

  return (
    <>
      <Section id="home">
        <Hero
          title="Get that quality internet speed!"
          subTitle="Enjoy the freedom of endless possibilities with Switch Fiber. Download and upload any songs you like, play your favorite online games, attach large files or folders, upload your trendy photos and videos. It is simple and easy with lightning-fast fiber speed."
        />
      </Section>

      <Section id="plans">
        <PlanList isHome={true} />
      </Section>
      <Section>
        <Banner />
      </Section>
      <Section id="promos">
        <PromoList isHome={true} />
      </Section>
      <Section id="aboutus">
        <AboutUs />
      </Section>
      <Section id="equipment">
        <Equipment />
      </Section>
       <Section id="team">
        <OurTeam />
      </Section>
      <Section id="help">
        <Contacts />
      </Section>

      <Section>
        <FaqListing />
      </Section>
    </>
  );
};

export default HomePage;
