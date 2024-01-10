import React, { useState } from 'react';
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => setShowMenu(!showMenu);

  const scrollToTop = () => {
    scroll.scrollToTop();
    setShowMenu(false);
  };

  return (
    <nav className="bg-black py-4 md:py-2">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <button onClick={scrollToTop}>
            {/* <img src="/logo/logo-name.png" alt="Logo" className="w-36 cursor-pointer" /> */}
          </button>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-7">
          <ScrollLink
            to="about"
            spy={true}
            smooth={true}
            offset={-70} // Adjust offset if needed based on your layout
            duration={500}
            className="text-white hover:text-red text-lg font-Poppins transition-all duration-300 ease-in-out"
          >
            About
          </ScrollLink>
          <ScrollLink
            to="projects"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="text-white hover:text-red text-lg font-Poppins transition-all duration-300 ease-in-out"
          >
            Projects
          </ScrollLink>
          <ScrollLink
            to="projects"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="text-white hover:text-red text-lg font-Poppins transition-all duration-300 ease-in-out"
          >
            Projects
          </ScrollLink>
          <ScrollLink
            to="projects"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="text-white hover:text-red text-lg font-Poppins transition-all duration-300 ease-in-out"
          >
            Projects
          </ScrollLink>
          {/* Add similar ScrollLink components for other sections */}
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button onClick={toggleMenu}>
            {showMenu ? (
              <img src="/icons/cross.svg" alt="Close Menu" />
            ) : (
              <img src="/icons/hamburger.svg" alt="Open Menu" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {showMenu && (
        <div className="md:hidden mt-3">
          <div className="container mx-auto p-2">
            <ScrollLink
              to="about"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="text-white block py-2 font-Poppins cursor-pointer"
              onClick={() => setShowMenu(false)}
            >
              About
            </ScrollLink>
            <ScrollLink
              to="projects"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="text-white block py-2 font-Poppins cursor-pointer"
              onClick={() => setShowMenu(false)}
            >
              Projects
            </ScrollLink>
            {/* Add similar ScrollLink components for other sections */}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
