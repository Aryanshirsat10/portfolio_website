import React, { useState } from 'react';
import { Link } from 'next/link';
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';
import { navLinks } from '@/constants';

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => setShowMenu(!showMenu);

  const scrollToTop = () => {
    scroll.scrollToTop();
    setShowMenu(false);
  };
  const [toggle, setToggle] = useState(false);
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
            offset={-30} // Adjust offset if needed based on your layout
            duration={500}
            className="text-white hover:text-navred text-lg font-semibold transition-all duration-300 ease-in-out cursor-pointer"
          >
            Skills
          </ScrollLink>
          <ScrollLink
            to="projects"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="text-white hover:text-navred text-lg font-semibold transition-all duration-300 ease-in-out cursor-pointer"
          >
            Projects
          </ScrollLink>
          <ScrollLink
            to="contact"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="text-white hover:text-navred text-lg font-semibold transition-all duration-300 ease-in-out cursor-pointer"
          >
            Contact
          </ScrollLink>
          <ScrollLink
            to="Contact"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="text-white hover:text-navred text-lg font-semibold transition-all duration-300 ease-in-out cursor-pointer"
          >
            Resume
          </ScrollLink>
        </div>

        {/* Mobile Menu Toggle */}
        <div className='sm:hidden flex flex-1 justify-end items-center'>
            <img 
            src={toggle ? "/assets/cross.svg" : "/assets/menu.svg"}
            alt="menu"
            className='w-[28px] h-[28px]
            object-contain cursor-pointer'
            onClick={() => setToggle(!toggle)}
            />
            <div className={`${!toggle ? 'hidden' : 'flex' } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}>
            <ul className='list-none flex  justify-end items-start flex-col gap-4'>
          {navLinks.map((Link) =>(
            <li
              key={Link.to}
              className={`${
                active === Link.title
                ? "text-white"
                :"text-secondary"
              }  font-medium cursor-pointer text-[16px]`}
              onClick={() => {
                setToggle(!toggle);
                setActive(Link.title);
              }}
            >
              <ScrollLink
                activeClass="active"
                to={Link.to} // This should match the 'name' prop of the Element
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                {Link.title}
              </ScrollLink>
            </li>
          ))}
        </ul>
            </div>
        </div>
        {/* <div className="md:hidden">
          <button onClick={toggleMenu}>
            {showMenu ? (
              <img src="/assets/cross.svg" alt="Close Menu" className='w-10 h-10 '/>
            ) : (
              <img src="/assets/menu.svg" alt="Open Menu" className='w-10 h-10'/>
            )}
          </button>
        </div>
      </div>

      {showMenu && (
        <div className="md:hidden mt-3">
          <div className="container mx-auto p-2">
            <ScrollLink
              to="skills"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="text-white block py-2 font-Poppins cursor-pointer"
              onClick={() => setShowMenu(false)}
            >
              Skills
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
      </div>*/}
        </div> 
    </nav>
  );
};

export default Navbar;
