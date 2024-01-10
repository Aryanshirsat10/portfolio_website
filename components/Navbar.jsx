import React, { useState } from 'react';
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
    className={`sm:px-16 px-6 w-full flex items-center py-5 fixed top-0 z-20 bg-slate-950 border-2 border-b-orange-900 border-r-navcol border-l-navcol border-t-navcol`}>
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <button onClick={scrollToTop} className='font-bold text-2xl'>
            {/* <img src="/logo/logo-name.png" alt="Logo" className="w-36 cursor-pointer" /> */}
            Aryan
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
            to="Work"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="text-white hover:text-red text-lg font-Poppins transition-all duration-300 ease-in-out"
          >
            Work
          </ScrollLink>
          <ScrollLink
            to="Education"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="text-white hover:text-red text-lg font-Poppins transition-all duration-300 ease-in-out"
          >
            Education
          </ScrollLink>
          <ScrollLink
            to="Contact"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="text-white hover:text-red text-lg font-Poppins transition-all duration-300 ease-in-out"
          >
            Contact
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
