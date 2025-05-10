import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
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
  const [navbarHeight, setNavbarHeight] = useState(0);

  useEffect(() => {
    const navbar = document.getElementById("navbar");
    if (navbar) {
      setNavbarHeight(navbar.offsetHeight);
    }
  }, []);

  const Section = ({ id, children }) => {
    return (
      <motion.div
        id={id}
        className="scroll-mt-[4rem]" // Adjusts scroll positioning without extra space
        initial={{ opacity: 0, y: 90 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        {children}
      </motion.div>
    );
  };

  return (
    <>
      <Section id="home">
        <Hero
          title="Enjoy the internet we love here with Jack Fiber!"
          subTitle="Explore the world without leaving your home. With Jack Fiber Internet Services, you will get
an affordable, fast and reliable internet connection to everything that matters. Join us to
discover the endless possibilities together."
        />
      </Section>

      <Section id="plans">
        <PlanList isHome={true} />
      </Section>
      <Section>
        <Banner />
      </Section>
      {/*<Section id="promos">
        <PromoList isHome={true} />
      </Section>*/}
      <Section id="aboutus">
        <AboutUs />
      </Section>
      {/* <Section id="equipment">
        <Equipment />
      </Section>*/}
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
