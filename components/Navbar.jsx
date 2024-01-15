import React, { useState } from 'react';
import { Link } from 'next/link';
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => setShowMenu(!showMenu);

  const scrollToTop = () => {
    scroll.scrollToTop();
    setShowMenu(false);
  };
  const [active, setActive] = useState('');

  return (
    <nav
    className='sm:px-16 px-6 w-full flex items-center py-5  bg-black shadow-2xl shadow-slate-900'>
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <button onClick={scrollToTop} className='font-bold text-2xl'>
            {/* <img src="/logo/logo-name.png" alt="Logo" className="w-36 cursor-pointer" /> */}
            <span className='text-4xl bg-gradient-to-br from-purple-700 via-pink-500 to-yellow-500 text-transparent bg-clip-text font-extrabold'>Aryan</span>
            
          </button>
        </div>
        {/* Desktop Menu */}
        <div className="hidden md:flex gap-7">
          <ScrollLink
            to="skills"
            spy={true}
            smooth={true}
            offset={-70} // Adjust offset if needed based on your layout
            duration={500}
            className="text hover:text-navred text-lg font-semibold transition-all duration-300 ease-in-out"
          >
            Skills
          </ScrollLink>
          <ScrollLink
            to="projects"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="text-white hover:text-navred text-lg font-semibold transition-all duration-300 ease-in-out"
          >
            Projects
          </ScrollLink>
          <ScrollLink
            to="contact"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="text-white hover:text-navred text-lg font-semibold transition-all duration-300 ease-in-out"
          >
            Contact
          </ScrollLink>
          <ScrollLink
            to="Contact"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="text-white hover:text-navred text-lg font-semibold transition-all duration-300 ease-in-out"
          >
            Resume
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
