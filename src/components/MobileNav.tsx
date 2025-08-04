"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  FaHome,
  FaWpforms,
  FaFileAlt,
  FaMoneyBill,
  FaCheckCircle,
  FaSearch,
  FaComments,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import { useMobileMenuContext } from "@/context/MobileMenuContext";

const menuItems = [
  { name: "Home", path: "/", icon: <FaHome /> },
  { name: "Apply", path: "/apply", icon: <FaWpforms /> },
  { name: "Circular", path: "/circular", icon: <FaFileAlt /> },
  { name: "Payment", path: "/payment", icon: <FaMoneyBill /> },
  { name: "Status", path: "/status", icon: <FaCheckCircle /> },
  { name: "Find ID", path: "/find-id", icon: <FaSearch /> },
  { name: "Chat", path: "/chat", icon: <FaComments /> },
];

const MobileNav = () => {
//   const [isOpen, setIsOpen] = useState(false);
const {isOpen, setIsOpen} = useMobileMenuContext()

  return (
    <>
      {/* Top Navbar (phone view only) */}
      {/* <div className="md:hidden flex justify-between items-center p-4 shadow-md">
        <Image src="/logo.png" alt="Logo" width={40} height={40} />
        <FaBars className="text-2xl cursor-pointer" onClick={() => setIsOpen(true)} />
      </div> */}

      {/* Slide-in Mobile Nav Drawer */}
      <div
        className={`fixed top-0 left-0 h-full w-full bg-white z-50 transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Header with logo and close icon */}
        <div className="flex justify-between items-center p-4 border-b">
          <Image src="/logo.png" alt="Logo" width={40} height={40} />
          <FaTimes
            className="text-2xl cursor-pointer"
            onClick={() => setIsOpen(false)}
          />
        </div>

        {/* Menu Grid */}
        <div className="grid grid-cols-2 gap-4 p-4">
          {menuItems.map((item) => (
            <Link
              key={item.name}
              href={item.path}
              onClick={() => setIsOpen(false)}
              className="flex items-center gap-2 p-4 bg-gray-100 rounded-lg shadow hover:bg-gray-200 transition"
            >
              <span className="text-blue-600 text-xl">{item.icon}</span>
              <span className="font-medium">{item.name}</span>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default MobileNav;
