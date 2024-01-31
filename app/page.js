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
import { useTheme } from 'next-themes';
import { isMobile } from 'react-device-detect';
export default function Home() {
  const {systemTheme,theme, setTheme} = useTheme();
  const currentTheme = theme === 'system' ? systemTheme : theme;
  const [showHomepage, setShowHomepage] = useState(false);
  useEffect(() => {
    const animationDuration = 6000; // Animation duration in milliseconds
    const timer = setTimeout(() => {
      // After the animation duration, set showHomepage to true
      setShowHomepage(true);
    }, animationDuration);

    // Clean up the timer when the component is unmounted
    return () => clearTimeout(timer);
  }, []);
  const [mobile, setMobile] = useState(null)
  useEffect(() => {
      setMobile(isMobile);
    }, [isMobile]);
    return(

      <>
      {showHomepage ? (
      <motion.div 
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.8,
        delay: 0.5,
        ease: [0, 0.71, 0.2, 1.01]
      }}
      className={currentTheme === "light" ? 'bg-white' : ''}
    >
      <Navbar />
      <Hero mobile={mobile}/>
      <Element name='skills'>
        <Skills/>
      </Element>
      <Element name='projects'>
        <Projects mobile={mobile}/>
      </Element>
      <Element name='contact'>
        <Contact mobile={mobile}/>
      </Element>
    </motion.div>
       ) : ( 
         <Introanimation /> 
       )} 
      
        {/* )} */}
      </>
      
    )

}
