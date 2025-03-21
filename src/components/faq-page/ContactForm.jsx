import React, { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Your message has been sent!");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="flex justify-center items-center  bg-white">
      <div className="bg-white p-10 rounded-lg  max-w-2xl w-full text-gray-900 text-center">
        <h3 className="text-3xl font-bold mb-2 text-indigo-600">GET IN TOUCH</h3>
        <p className="text-gray-500 mb-6">Leave us a message</p>
        <hr className="w-20 mx-auto border-indigo-300 mb-6" />
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="relative">
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full border-b-2 border-gray-300 py-2 px-3 text-lg focus:outline-none focus:border-indigo-600"
            />
          </div>
          <div className="relative">
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full border-b-2 border-gray-300 py-2 px-3 text-lg focus:outline-none focus:border-indigo-600"
            />
          </div>
          <div className="relative">
            <textarea
              name="message"
              placeholder="Message..."
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full border-b-2 border-gray-300 py-2 px-3 text-lg focus:outline-none focus:border-indigo-600 h-24 resize-none"
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-indigo-500 text-white px-6 py-3 rounded-md text-lg font-semibold hover:bg-indigo-600 transition duration-300"
          >
            SEND MESSAGE
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
