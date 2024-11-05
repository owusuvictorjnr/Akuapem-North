import React, { useState } from "react";
import Link from "next/link";
import { AiOutlineMenu } from "react-icons/ai";
import SideNavbar from "./Sidebar";

export default function TopNavbar() {
  const [sideNavOpen, setSideNavOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleSideNav = () => {
    setSideNavOpen(!sideNavOpen);
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <>
      <nav className="bg-blue-800 text-white p-4 flex justify-between items-center">
        <div className="text-xl font-bold">
          <Link href="/">Akuapem North Constituency</Link>
        </div>

        <div className="hidden md:flex space-x-8">
          <Link href="/" className="hover:underline">
            Home
          </Link>

          {/* About Us with Dropdown */}
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
                  className="block px-4 py-2 hover:bg-blue-100"
                >
                  Mission & Vision
                </Link>
                <Link
                  href="/about/members"
                  className="block px-4 py-2 hover:bg-blue-100"
                >
                  Members
                </Link>
              </div>
            )}
          </div>

          <Link href="/news-and/events" className="hover:underline">
            News & Events
          </Link>
          <Link href="/volunteer" className="hover:underline">
            Volunteer
          </Link>
          <Link href="/projects" className="hover:underline">
            Projects
          </Link>
          <Link href="/contact" className="hover:underline">
            Contact Us
          </Link>
        </div>

        {/* Mobile Menu Icon */}
        <button
          className="md:hidden text-3xl focus:outline-none"
          onClick={toggleSideNav}
        >
          <AiOutlineMenu />
        </button>
      </nav>

      {/* Side Navbar */}
      <SideNavbar isOpen={sideNavOpen} onClose={toggleSideNav} />
    </>
  );
}
