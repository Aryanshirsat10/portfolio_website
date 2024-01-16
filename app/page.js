"use client"
import Introanimation from '@/components/introanimation';
import { useEffect, useState } from 'react'
import '../app/globals.css';
import { motion} from "framer-motion"
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero'
import Skills from '../components/Skills';
import Projects from '@/components/Projects';
import { Element } from 'react-scroll';
import Contact from '@/components/Contact';
export default function Home() {

  const [showHomepage, setShowHomepage] = useState(false);
  useEffect(() => {
    const animationDuration = 7500; // Animation duration in milliseconds

    const timer = setTimeout(() => {
      // After the animation duration, set showHomepage to true
      setShowHomepage(true);
    }, animationDuration);

    // Clean up the timer when the component is unmounted
    return () => clearTimeout(timer);
  }, []);
    return(

      <>
      {/* {showHomepage ? (
      <div className='fade-in opacity-1 transition-opacity duration-1000 ease-in-out animate-fadeIn'>
        <Navbar />
        <Hero/>
      </div> */}
      {/* ) : ( */}
        {/* <Introanimation /> */}
      {/* )} */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.8,
          delay: 0.5,
          ease: [0, 0.71, 0.2, 1.01]
        }}
        
      >
        <Navbar />
        <Hero/>
        <Element name='skills'>
          <Skills/>
        </Element>
        <Element name='projects'>
          <Projects/>
        </Element>
        <Element name='contact'>
          <Contact/>
        </Element>
      </motion.div>
        {/* )} */}
      </>
      
    )

}
