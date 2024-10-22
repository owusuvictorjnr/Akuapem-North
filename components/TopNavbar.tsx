import React, { useState } from 'react';
import Link from 'next/link';
import { AiOutlineMenu } from 'react-icons/ai';
import SideNavbar from './Sidebar';

export default function TopNavbar() {
  const [sideNavOpen, setSideNavOpen] = useState(false);

  const toggleSideNav = () => {
    setSideNavOpen(!sideNavOpen);
  };

  return (
    <>
      <nav className="bg-blue-800 text-white p-4 flex justify-between items-center">
        <div className="text-xl font-bold">
          <Link href="/">Akuapem North Constituency</Link>
        </div>

        <div className="hidden md:flex space-x-8">
          <Link href="/" className="hover:underline">Home</Link>
          <Link href="/news" className="hover:underline">News</Link>
          <Link href="/volunteer" className="hover:underline">Volunteer</Link>
          <Link href="/donation" className="hover:underline">Donation</Link>
          <Link href="/about" className="hover:underline">About</Link>
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
