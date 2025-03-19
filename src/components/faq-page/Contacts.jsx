import React from "react";
import contacts from "../../data/contact.json";
import ContactCard from "./ContactCard";

const Contacts = () => {
  const contact = contacts;

  return (
    <section className="h-auto bg-help-pattern bg-cover px-4 py-10 opacity-90">
      <div className="md:container md:mx-auto">
        <h2 className="mb-6 text-center text-3xl font-bold text-white">
          Contact Us
        </h2>
        <div className="flex flex-wrap justify-center">
          {contact.map((oneContact) => (
            <ContactCard key={contact.id} contact={oneContact} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contacts;
