import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaChevronDown, FaCamera, FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);
  const closeDropdown = () => setIsDropdownOpen(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

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

        {/* Work Profile Dropdown */}
        <div className="relative cursor-pointer" onMouseLeave={closeDropdown}>
          <span
            className="flex items-center gap-1 hover:text-yellow-700"
            onClick={toggleDropdown}
          >
            Work Profile <FaChevronDown className="text-xs" />
          </span>

          {isDropdownOpen && (
            <div className="absolute left-0 top-full mt-2 w-48 bg-white shadow-lg rounded-md transition-all duration-300 z-20">
              <Link
                to="/wedding"
                className="block px-4 py-2 hover:bg-yellow-100"
                onClick={closeDropdown}
              >
                Wedding Photography
              </Link>
              <Link
                to="/fashion"
                className="block px-4 py-2 hover:bg-yellow-100"
                onClick={closeDropdown}
              >
                Fashion Photography
              </Link>
              <Link
                to="/product"
                className="block px-4 py-2 hover:bg-yellow-100"
                onClick={closeDropdown}
              >
                Product Shoot
              </Link>
              <Link
                to="/nature"
                className="block px-4 py-2 hover:bg-yellow-100"
                onClick={closeDropdown}
              >
                Nature Shoot
              </Link>
              <Link
                to="/others"
                className="block px-4 py-2 hover:bg-yellow-100"
                onClick={closeDropdown}
              >
                Other Services
              </Link>
            </div>
          )}
        </div>

        <Link to="/contactus" className="hover:text-yellow-700 cursor-pointer">
          Contact Us
        </Link>
      </div>

      {/* Button (Desktop only) */}
      <Link
        to="/contactus"
        className="hidden md:flex bg-yellow-700 hover:bg-yellow-800 text-white px-4 py-2 rounded-md items-center gap-2 transition"
      >
        <FaCamera /> Get a Quote
      </Link>

      {/* Hamburger Icon (Mobile) */}
      <button className="md:hidden text-2xl text-gray-700" onClick={toggleMenu}>
        {isMenuOpen ? <FaTimes /> : <FaBars />}
      </button>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-md flex flex-col items-start p-4 gap-3 md:hidden z-30">
          <Link
            to="/"
            className="block hover:text-yellow-700"
            onClick={closeMenu}
          >
            Home
          </Link>
          <Link
            to="/aboutus"
            className="block hover:text-yellow-700"
            onClick={closeMenu}
          >
            About Us
          </Link>

          {/* Mobile Dropdown */}
          <div className="w-full">
            <button
              className="flex items-center justify-between w-full hover:text-yellow-700"
              onClick={toggleDropdown}
            >
              Work Profile <FaChevronDown className="text-xs" />
            </button>
            {isDropdownOpen && (
              <div className="ml-4 mt-2 flex flex-col gap-2">
                <Link
                  to="/wedding"
                  className="hover:text-yellow-700"
                  onClick={closeMenu}
                >
                  Wedding Photography
                </Link>
                <Link
                  to="/fashion"
                  className="hover:text-yellow-700"
                  onClick={closeMenu}
                >
                  Fashion Photography
                </Link>
                <Link
                  to="/product"
                  className="hover:text-yellow-700"
                  onClick={closeMenu}
                >
                  Product Shoot
                </Link>
                <Link
                  to="/nature"
                  className="hover:text-yellow-700"
                  onClick={closeMenu}
                >
                  Nature Shoot
                </Link>
                <Link
                  to="/others"
                  className="hover:text-yellow-700"
                  onClick={closeMenu}
                >
                  Other Services
                </Link>
              </div>
            )}
          </div>

          <Link
            to="/contactus"
            className="block hover:text-yellow-700"
            onClick={closeMenu}
          >
            Contact Us
          </Link>

          <Link
            to="/contactus"
            className="bg-yellow-700 hover:bg-yellow-800 text-white px-4 py-2 rounded-md flex items-center gap-2 w-full justify-center mt-2"
            onClick={closeMenu}
          >
            <FaCamera /> Get a Quote
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
