"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaHome, FaWpforms, FaFileAlt, FaMoneyBill, FaCheckCircle, FaSearch, FaComments } from "react-icons/fa";

const menuItems = [
  { name: "Home", path: "/", icon: <FaHome size={20} /> },
  { name: "Apply", path: "/apply", icon: <FaWpforms size={20} /> },
  { name: "Circular", path: "/circular", icon: <FaFileAlt size={20} /> },
  { name: "Payment", path: "/payment", icon: <FaMoneyBill size={20} /> },
  { name: "Status", path: "/status", icon: <FaCheckCircle size={20} /> },
  { name: "Find ID", path: "/find-id", icon: <FaSearch size={20} /> },
  { name: "Chat", path: "/chat", icon: <FaComments size={20} /> },
];

const Navbar = () => {
  const pathname = usePathname();


  return (
    <nav className="bg-white shadow-md py-4">
      {/* <ul className="flex justify-center gap-6"> */}
      <ul className="flex justify-center gap-2 md:gap-12">
        {menuItems.map((item) => (
          <li key={item.name} className="text-center">
            <Link
              href={item.path}
               className={`flex flex-col items-center text-sm font-medium ${
               pathname === item.path ? "text-blue-600" : "text-gray-700"
              } hover:text-blue-500`}
            >
              <span>{item.icon}</span>
              <span className="mt-1">{item.name}</span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
