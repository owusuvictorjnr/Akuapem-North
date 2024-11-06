"use client";

import React, { useState } from "react";

const Volunteers = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    interest: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form data submitted:", formData);
    // Add form submission logic here
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6 bg-gray-100">
      <h1 className="text-lg md:text-4xl font-bold mb-6 text-blue-800">
        Volunteer with Us
      </h1>

      <p className="text-lg mb-4 text-[#565358] max-w-2xl text-center">
        Join our team to make a positive impact in Akuapem North Constituency.
        Volunteers are at the heart of everything we do, from organizing events
        to community outreach. Get involved and help us drive positive change.
      </p>

      {/* Volunteer Benefits */}
      <div className="mb-8 max-w-2xl">
        <h2 className="text-2xl font-semibold text-blue-700 mb-4">
          Why Volunteer?
        </h2>
        <ul className="list-disc list-inside text-[#565358] space-y-2">
          <li>Gain valuable experience and skills</li>
          <li>Meet and connect with like-minded people</li>
          <li>Make a difference in your community</li>
        </ul>
      </div>

      {/* Volunteer Opportunities */}
      <div className="mb-8 max-w-2xl">
        <h2 className="text-2xl font-semibold text-blue-700 mb-4">
          Volunteer Opportunities
        </h2>
        <ul className="list-disc list-inside text-[#565358] space-y-2">
          <li>Event Planning and Management</li>
          <li>Community Outreach and Support</li>
          <li>Fundraising and Campaigning</li>
          <li>Social Media and Content Creation</li>
        </ul>
      </div>

      {/* Volunteer Signup Form */}
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-lg shadow-lg w-full max-w-lg"
      >
        <div className="mb-4">
          <label
            htmlFor="name"
            className="block text-[#565358] font-medium mb-2"
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
            className="block text-[#565358] font-medium mb-2"
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
            htmlFor="interest"
            className="block text-[#565358] font-medium mb-2"
          >
            Area of Interest
          </label>
          <select
            id="interest"
            name="interest"
            value={formData.interest}
            onChange={handleChange}
            className="w-full p-3 text-[#565358] border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          >
            <option value="" disabled className="text-[#565358]">
              Select an area
            </option>
            <option value="event-planning">Event Planning</option>
            <option value="community-outreach">Community Outreach</option>
            <option value="fundraising">Fundraising</option>
            <option value="social-media">Social Media</option>
          </select>
        </div>
        <div className="mb-4">
          <label
            htmlFor="message"
            className="block text-[#565358] font-medium mb-2"
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={4}
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-800 text-white py-3 rounded-lg font-semibold hover:bg-blue-900 transition duration-300"
        >
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default Volunteers;
