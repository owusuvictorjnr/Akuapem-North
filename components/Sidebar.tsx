import React from "react";
import Link from "next/link";
import { AiOutlineClose } from "react-icons/ai";

interface SideNavbarProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SideNavbar({ isOpen, onClose }: SideNavbarProps) {
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
          <li>
            <Link href="/about" onClick={onClose}>
              About
            </Link>
          </li>
          <li>
            <Link href="/news" onClick={onClose}>
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
              projects
            </Link>
          </li>
          <li>
            <Link href="/contact" onClick={onClose}>
              Contact us
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
