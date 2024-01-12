"use client"
import Introanimation from '@/components/introanimation';
import { useEffect, useState } from 'react'
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero'

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
      <div>
        <Navbar />
        <Hero/>
      </div>
        
        {/* )} */}
      </>
      
    )

}
