import React from "react";
import Hero from "../components/Hero";
import PlanList from "../components/PlanList";
import FaqListing from "../components/faq-page/FaqListing";
import Banner from "../components/Banner";
import Contacts from "../components/faq-page/Contacts";
import CoveragePage from "./CoveragePage";
import PromoList from "../components/PromoList";

const HomePage = () => {
  const Section = ({ id, children }) => {
  const navbar = document.getElementById("navbar");
  const navbarHeight = navbar ? navbar.offsetHeight : 0;

  return (
    <div id={id} style={{ paddingTop: id === "home" ? "0px" : navbarHeight + "px" }}>
      {children}
    </div>
  );
};

  return (
    <>
      <Section id="home">
        <Hero
          title="Get that quality internet speed!"
          subTitle="Enjoy the freedom of endless possibilities with Switch Fiber. Download and upload any songs you like, play your favorite online games, attach large files or folders, upload your trendy photos and videos. It is simple and easy with lightning fast speed fiber."
        />
      </Section>
      <Section id="plans">
        <PlanList isHome={true} />
      </Section>
      <Section>
        <Banner/>
      </Section>
      <Section id="promos">
        <PromoList isHome={true}/>
      </Section>
      <Section id="coverage">
        <CoveragePage/>
      </Section>
      <Section id="help">
        <Contacts/>
      </Section>
      <Section>
        <FaqListing />
      </Section>
    </>
  );
};

export default HomePage;