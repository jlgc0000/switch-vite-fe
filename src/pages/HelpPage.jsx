import React from "react";
import FaqListing from "../components/faq-page/FaqListing";
import Contacts from "../components/faq-page/Contacts";

const HelpPage = ({isHome = false}) => {
  
  return (
    <>
      <section className='bg-blue-50 px-4 py-6'> 
        <Contacts />
    </section>
    {!isHome && <FaqListing />}
    </>
  );
};

export default HelpPage;
