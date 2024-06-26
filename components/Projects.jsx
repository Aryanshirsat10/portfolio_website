import { Tilt } from "react-tilt";
import React, { useState, useEffect } from 'react';
import { motion } from "framer-motion";
import { projects } from '../constants';
import { useInView } from 'react-intersection-observer';
import { fadeIn, textVariant } from '../utils/motion';
import { isMobile } from 'react-device-detect';
import { handleClientScriptLoad } from "next/script";
const ProjectCard = ({ index, name,description, tags, image,link, source_code_link,mobile}) => {
  const variants = {
    moveUp: {
        initial: { y: 150, opacity: 0 },
        animate: { y: 0, opacity: 1 },
    },
    moveDown: {
        initial: { y: -150, opacity: 0 },
        animate: { y: 0, opacity: 1 },
    },
    moveRight:{
      initial: {x: 150,y: 0, opacity: 0},
      animate: {x: 0, opacity: 1},
    },
    moveLeft:{
      initial: {x: -150,y:0, opacity: 0},
      animate: {x: 0, opacity: 1},
    },
};
const [ref, inView] = useInView({
    triggerOnce: true, // Change this to false if you want the animation to trigger again whenever it comes in view
  });

const isOdd = index % 2 !== 0;

const animation = isOdd ? variants.moveUp : variants.moveDown;
const animationmb = isOdd ? variants.moveLeft:variants.moveRight;
  const handleClick = () => {

    console.log('Opening source code link:', source_code_link);
    window.open(source_code_link, '_blank');
  };
  const handleCardClick = () =>{
    console.log('Opening project link:', link);
    window.open(link, '_blank');
  };
    return(
      <>
      {mobile ? (
        <motion.div 
        ref={ref}
        initial={animationmb.initial}
        animate={inView ? animationmb.animate : animationmb.initial}
        transition={{ duration: 3 }}
      >
        <Tilt 
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-black p-5 rounded-2xl sm:w-[360px] w-full"
        >
          <div className="relative w-full h-[230px]" onClick={handleCardClick}>
            <img 
            src={image}
            alt={name}
            className="w-full h-full object-cover rounded-2xl"
            />
            <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
              <div
              onClick={handleClick}
              className="bg-black w-10 h-10
              rounded-full flex justify-center items-center cursor-pointer"
              >
                
                <img
                src='/assets/github.png'
                alt='github'
                className="w-1/2 h-1/2 object-contain"/>
              </div>
            </div>
          </div>
          <div className="mt-5">
              <h3 className="text-textcol font-bold text-[24px]">{name}</h3>
              <p className="mt-2 text-[#ededed] text-[14px]">{description}</p>
          </div>
          <div className="mt-4 flex flex-wrap gap-2">
            {tags.map((tag)=>(
              <p key={tag.name} className={`text-[14px] ${tag.color}`}>
                #{tag.name}
              </p>
            ))}
          </div>
        </Tilt>
      </motion.div>
      ):(
        <motion.div 
        ref={ref}
        initial={animation.initial}
        animate={inView ? animation.animate : animation.initial}
        transition={{ duration: 5 }}
      >
        <Tilt 
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-black p-5 rounded-2xl sm:w-[360px] w-full"
        >
          <div className="relative w-full h-[230px]" onClick={handleCardClick}>
            <img 
            src={image}
            alt={name}
            className="w-full h-full object-cover rounded-2xl cursor-pointer"/>
            <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
              <div
              onClick={handleClick}
              className="black-gradient w-10 h-10
              rounded-full flex justify-center items-center cursor-pointer"
              >
                
                <img
                src='/assets/github.png'
                alt='github'
                className="w-1/2 h-1/2 object-contain"/>
              </div>
            </div>
          </div>
          <div className="mt-5">
              <h3 className="text-textcol font-bold text-[24px]">{name}</h3>
              <p className="mt-2 text-[#ededed] text-[14px]">{description}</p>
          </div>
          <div className="mt-4 flex flex-wrap gap-2">
            {tags.map((tag)=>(
              <p key={tag.name} className={`text-[14px] ${tag.color}`}>
                #{tag.name}
              </p>
            ))}
          </div>
        </Tilt>
      </motion.div>
      )}
      
      </>
      
    )
  }
const Projects = ({mobile}) => {
    return (
        <div className="p-5 justify-items-center">
        <motion.div variants={textVariant()}>
         {/* <p className='text-lg'>My Work</p> */}
             <h2 className='text-5xl font-extrabold bg-gradient-to-br from-pink-500 to-blue-700 text-transparent bg-clip-text'>Projects</h2>
         </motion.div>

         <div className="mt-20 flex flex-wrap gap-1 place-content-center">
         {projects.map((project,index) => (
            <ProjectCard 
            mobile={mobile}
            key={`project-${index}`}  
            index={index}
            {...project}
            />
        ))}
        </div>
    </div>
    )
  }
export default Projects