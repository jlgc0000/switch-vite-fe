import React from "react";
import FaqListing from "../components/faq-page/FaqListing";
import Contacts from "../components/faq-page/Contacts";

const HelpPage = ({isHome = false}) => {
  
  return (
    <>
      
        <Contacts />
   
    {!isHome && <FaqListing />}
    </>
  );
};

export default HelpPage;
