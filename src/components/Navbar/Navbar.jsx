import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaChevronDown, FaCamera, FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <nav className="flex justify-between items-center px-6 py-4 shadow-md bg-white relative">
      {/* Logo */}
      <Link to="/" className="text-2xl font-bold">
        WR
      </Link>

      {/* Desktop Menu */}
      <div className="hidden md:flex gap-6 items-center">
        <Link to="/" className="hover:text-yellow-700 cursor-pointer">
          Home
        </Link>
        <Link to="/aboutus" className="hover:text-yellow-700 cursor-pointer">
          About Us
        </Link>

        {/* Work Profile with dropdown */}
        <div className="relative group cursor-pointer">
          <span className="hover:text-yellow-700 flex items-center gap-1">
            Work Profile <FaChevronDown className="text-xs" />
          </span>

          {/* Dropdown */}
          <div className="absolute left-0 top-full mt-2 w-48 bg-white shadow-lg rounded-md opacity-0 group-hover:opacity-100 transition-all duration-300 z-20">
            <Link
              to="/wedding"
              className="block px-4 py-2 hover:bg-yellow-100 cursor-pointer"
            >
              Wedding Photography
            </Link>
            <Link
              to="/fashion"
              className="block px-4 py-2 hover:bg-yellow-100 cursor-pointer"
            >
              Fashion Photography
            </Link>
            <Link
              to="/product"
              className="block px-4 py-2 hover:bg-yellow-100 cursor-pointer"
            >
              Product Shoot
            </Link>
            <Link
              to="/nature"
              className="block px-4 py-2 hover:bg-yellow-100 cursor-pointer"
            >
              Nature Shoot
            </Link>
            <Link
              to="/others"
              className="block px-4 py-2 hover:bg-yellow-100 cursor-pointer"
            >
              Other Services
            </Link>
          </div>
        </div>

        <Link to="/contactus" className="hover:text-yellow-700 cursor-pointer">
          Contact Us
        </Link>
      </div>

      {/* Button (Desktop only) */}
      <Link
        to="/contactus"
        className="hidden md:flex bg-yellow-700 hover:bg-yellow-800 text-white px-4 py-2 cursor-pointer rounded-md items-center gap-2 transition"
      >
        <FaCamera /> Get a Quote
      </Link>
    </nav>
  );
};

export default Navbar;
