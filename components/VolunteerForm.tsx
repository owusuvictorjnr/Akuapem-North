"use client";

import { useState } from "react";
import { toast } from "react-toastify";

import React from "react";
import axios from "axios";

export default function VolunteerForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [interests, setInterests] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const res = await axios.post("/api/volunteer", {
        name,
        email,
        phone,
        interests,
      });

      if (res.status === 200) {
        toast.success("Volunteer added successfully");
      }
    } catch {
      toast.error("Failed to add volunteer");
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your name"
            required
          />
        </div>

        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
          />
        </div>

        <div>
          <label htmlFor="phone">Phone</label>
          <input
            type="text"
            id="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="Enter your phone number"
            required
          />
        </div>

        <div>
          <label htmlFor="interests">Interests</label>
          <input
            type="text"
            id="interests"
            value={interests}
            onChange={(e) => setInterests(e.target.value)}
            placeholder="Select your interests"
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
