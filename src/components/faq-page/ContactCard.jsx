import { Card } from "flowbite-react";
import React from "react";
import { FaHeadset } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";

const ContactCard = ({ contact }) => {
  return (
    <div className="p-8">
      <Card
        className="w-96"
        renderImage={() => (
          <h1 className="flex items-center p-4 text-7xl">
            {contact.type == "phone" ? <FaHeadset /> : <MdOutlineEmail />}
          </h1>
        )}
        horizontal
      >
        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {contact.title}
        </h5>
        <p className="font-normal text-gray-700 dark:text-gray-400">
          {contact.content}
        </p>
      </Card>
    </div>
  );
};

export default ContactCard;
