import React from "react";
import contacts from "../../data/contact.json";
import ContactCard from "./ContactCard";
import ContactForm from "./ContactForm";

const Contacts = () => {
  return (
    <>
    <section className="relative flex items-center justify-center h-auto bg-contact-pattern bg-fixed bg-cover px-4 py-10">
      {/* Background Overlay for Opacity */}
      <div className="absolute inset-0 bg-black opacity-20"></div>

      {/* Content stays above the overlay */}
      <div className="relative md:container md:mx-auto">
        <h2 className="m-auto mb-10 text-center text-6xl font-bold text-white">
          Contact Us
        </h2>
        <div className="flex flex-wrap justify-center">
          {contacts.map((oneContact) => (
            <ContactCard key={oneContact.id} contact={oneContact} />
          ))}
        </div>
        
      </div>
    </section>{/*<ContactForm />*/}
    
    </>
  );
};

export default Contacts;
