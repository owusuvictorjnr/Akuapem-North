import Image from "next/image";
import Link from "next/link";
import React from "react";

const TopNavbar = () => {
  return (
    <div className="flex items-center justify-between p-4 sticky top-0 bg-gradient-to-r from-red-400 via-white to-blue-500  gap-10 h-10">
      <div className="hidden md:flex">
        <Link href="/">
          <Image src="/logo/npp-4.png" alt="logo" width={50} height={50} />
        </Link>
      </div>

      <div className="items-center hidden  md:flex justify-">
        <div className="flex justify- text-sm items-center gap-10">
          <div className="bg-white p-2 rounded-xl hover:bg-red-300 hover:font-semibold duration-700 transition">
            <Link
              href="/"
              className="text-muted-foreground capitalize hover:text-foreground"
            >
              home
            </Link>
          </div>

          <div className="bg-white p-2 rounded-xl hover:bg-red-300 hover:font-semibold duration-700 transition">
            <Link
              href="/about"
              className="text-muted-foreground capitalize hover:text-foreground"
            >
              about
            </Link>
          </div>

          <div className="bg-white p-2 rounded-xl hover:bg-red-300 hover:font-semibold duration-700 transition">
            <Link
              href="/news/events"
              className="text-muted-foreground capitalize hover:text-foreground"
            >
              news & events
            </Link>
          </div>

          <div className="bg-white p-2 rounded-xl hover:bg-red-300 hover:font-semibold duration-700 transition">
            <Link
              href="/projects"
              className="text-muted-foreground capitalize hover:text-foreground"
            >
              projects
            </Link>
          </div>

          <div className="bg-white p-2 rounded-xl hover:bg-red-300 hover:font-semibold duration-700 transition">
            <Link
              href="/community-resources"
              className="text-muted-foreground capitalize hover:text-foreground"
            >
              community resources
            </Link>
          </div>

          <div className="bg-white p-2 rounded-xl hover:bg-red-300 hover:font-semibold duration-700 transition">
            <Link
              href="/constituent-service"
              className="text-muted-foreground capitalize hover:text-foreground"
            >
              constituent services
            </Link>
          </div>

          <div className="bg-white p-2 rounded-xl hover:bg-red-300 hover:font-semibold duration-700 transition">
            <Link
              href="/contact-us"
              className="text-muted-foreground capitalize hover:text-foreground"
            >
              contact us
            </Link>
          </div>
        </div>
      </div>

      {/* Search bar */}
      <div className="hidden md:flex items-center gap-2 text-xs rounded-full ring-[1.5px] ring-red-300">
        <Image
          src={"/search.png"}
          alt="search bar"
          width={20}
          height={20}
          className="ml-2"
        />
        <input
          type="text"
          placeholder="Search"
          className="bg-transparent outline-none w-[200px] p-2"
        />
      </div>

      {/* Users & Notification Icon */}
      <div className="flex items-center gap-6 justify-end">
        {/* Message */}
        <div className="bg-white rounded-full w-7 h-7 flex items-center justify-center cursor-pointer">
          <Image src={"/message.png"} alt="users" width={20} height={20} />
        </div>

        {/* Announcement  */}
        <div className="bg-white rounded-full w-7 h-7 flex items-center justify-center cursor-pointer relative">
          <Image
            src={"/announcement.png"}
            alt="announcement"
            width={20}
            height={20}
          />

          <div className="absolute -top-3 -right-3 w-5 mt-2 h-5 flex items-center justify-center bg-red-400 text-white rounded-full text-xs">
            1
          </div>

          {/* <div className="flex flex-col">
            <span className="text-sm leading-3 font-medium">Vitech</span>
            <span className="text-[10px] text-gray-500 text-right">Admin</span>
          </div> */}
        </div>
        <div className="">
          <Image
            src="/avatar.png"
            alt="avatar"
            width={36}
            height={36}
            className="rounded-full"
          />
        </div>
      </div>
    </div>
  );
};

export default TopNavbar;
