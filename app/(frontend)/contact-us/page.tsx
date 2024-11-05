"use client";

import React, { useState } from "react";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form data submitted:", formData);
    // Implement form submission logic here, such as sending data to a server or API
  };

  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen p-6 bg-gray-100">
        <h1 className="text-4xl font-bold mb-6 text-blue-800">Contact Us</h1>
        <form
          onSubmit={handleSubmit}
          className="bg-white p-8 rounded-lg shadow-lg w-full max-w-lg"
        >
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-gray-700 font-medium mb-2"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-gray-700 font-medium mb-2"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="message"
              className="block text-gray-700 font-medium mb-2"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={5}
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-800 text-white py-3 rounded-lg font-semibold hover:bg-blue-900 transition duration-300"
          >
            Send Message
          </button>
        </form>
      </div>
      <div className="mt-36 bg-[#F0F1F0] w-full min-h-[50vh] mb-8">
        <div className="lg:flex lg:justify-between p-6">
          {/* Contact details */}
          <div className="space-y-5">
            <h1 className="font-bold uppercase text-[#F23E56]">
              Regional Office
            </h1>
            <div className="space-y-5">
              <h1 className="text-[#3050CF] capitalize text-sm md:text-lg font-semibold">
                Phone: [Regional Phone Number]
              </h1>
              <h1 className="text-[#3050CF] capitalize text-sm md:text-lg font-semibold">
                Hotline: [Regional Hotline]
              </h1>
              <h1 className="text-[#3050CF] capitalize text-sm lg:text-lg font-semibold">
                Email: [Regional Email]
              </h1>
            </div>

            <h1 className="font-bold uppercase text-[#F23E56] mt-6">
              Constituency Office
            </h1>
            <div className="space-y-5">
              <h1 className="text-[#3050CF] capitalize text-sm md:text-lg font-semibold">
                Phone: [Constituency Phone Number]
              </h1>
              <h1 className="text-[#3050CF] capitalize text-sm md:text-lg font-semibold">
                Hotline: [Constituency Hotline]
              </h1>
              <h1 className="text-[#3050CF] capitalize text-sm lg:text-lg font-semibold">
                Email: [Constituency Email]
              </h1>
            </div>
          </div>

          {/* Google Map */}
          <div className="w-full lg:w-1/2 h-80 mt-8 lg:mt-0">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31745.123011561205!2d-0.10896954462738241!3d5.975399529892303!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdf6419dbb8c1cf%3A0xc7b3fdf3f3e6cbb!2sAkropong%2C%20Ghana!5e0!3m2!1sen!2sus!4v1730820953893!5m2!1sen!2sus"
              width="100%"
              height="100%"
              allowFullScreen={true}
              loading="lazy"
              style={{ border: 0 }}
              className="rounded-lg shadow-lg"
            ></iframe>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUs;

// 0216412485643

// *226#
