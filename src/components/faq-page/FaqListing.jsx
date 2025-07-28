import React from "react";
import faqList from "../../data/faq.json";
import FaqList from "./FaqList";

const FaqListing = () => {
  const faqs = faqList;
  return (
    <section className="px-4 py-10">
      <div className="md:container md:mx-auto">
        <h2 className="mt-6 mb-14 text-center text-3xl font-bold text-indigo-500">
          Frequently Asked Questions
        </h2>
        <div >
          {faqs.map((faq) => (
            <FaqList key={faq.id} faq={faq} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FaqListing;
