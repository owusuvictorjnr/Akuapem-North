import React, { useState } from "react";
import Link from "next/link";
import { AiOutlineClose } from "react-icons/ai";

interface SideNavbarProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SideNavbar({ isOpen, onClose }: SideNavbarProps) {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <div
      className={`fixed top-0 left-0 w-64 h-full bg-blue-700 text-white transform ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      } transition-transform duration-300 z-50`}
    >
      <div className="p-4 flex justify-between items-center">
        <h2 className="text-xl font-bold">Menu</h2>
        <button onClick={onClose}>
          <AiOutlineClose className="text-3xl" />
        </button>
      </div>

      <div className="mt-8">
        <ul className="space-y-6 p-4">
          <li>
            <Link href="/" onClick={onClose}>
              Home
            </Link>
          </li>
          <div className="relative">
            <button
              onClick={toggleDropdown}
              className="hover:underline focus:outline-none"
            >
              About Us
            </button>
            {dropdownOpen && (
              <div className="absolute mt-2 bg-white text-blue-800 shadow-lg rounded-lg w-48">
                <Link
                  href="/about/mission-vision"
                  onClick={() => {
                    toggleDropdown();
                    onClose();
                  }}
                  className="block px-4 py-2 hover:bg-blue-100"
                >
                  Mission & Vision
                </Link>
                <Link
                  href="/about/members"
                  onClick={() => {
                    toggleDropdown();
                    onClose();
                  }}
                  className="block px-4 py-2 hover:bg-blue-100"
                >
                  Members
                </Link>
              </div>
            )}
          </div>
          <li>
            <Link href="/news-and/events" onClick={onClose}>
              News & Events
            </Link>
          </li>
          <li>
            <Link href="/volunteer" onClick={onClose}>
              Volunteer
            </Link>
          </li>
          <li>
            <Link href="/projects" onClick={onClose}>
              Projects
            </Link>
          </li>
          <li>
            <Link href="/contact" onClick={onClose}>
              Contact Us
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
