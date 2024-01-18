import React, { useState } from 'react';
import Link from 'next/link';
import Typewriter from 'typewriter-effect';
    const Hero = () => {
        return(
            <div className='relative mb-9'>
                <div className='absolute top-1/4 left-44'>
                    <h1 className='text-8xl font-extrabold'>Hi <br />I am  
                    <span className='bg-gradient-to-br from-pink-500 to-blue-700 text-transparent bg-clip-text'> Aryan</span>
                    </h1><br />
                    {/* <h2 className='text-3xl font-bold '>I am a <span className='bg-gradient-to-br from-blue-700  to-pink-500 text-transparent bg-clip-text'>Fullstack Devloper</span></h2> */}
                    <h2 className='flex text-3xl font-extrabold bg-gradient-to-br from-pink-500 to-blue-700 text-transparent bg-clip-text'><span className='text-white'>I am a</span> &nbsp;
                    <span>
                    <Typewriter
                        options={{
                            strings: [
                                'Full Stack Developer',
                                'Java Programmer',
                                'Blockchain Developer'    
                            ],
                            autoStart: true,
                            loop: true,
                            skipAddStyles: true,
                        }}
                        
                        />
                    </span>
                    </h2>
                </div>
            <div className='absolute top-1/4 left-2/3 w-80 h-80 bg-purple-700  rounded-full blur-3xl mix-blend-softlight'></div>
            <div className='absolute top-1/4 left-3/4 w-80 h-80 bg-yellow-500  rounded-full blur-3xl mix-blend-softlight'></div>
            <div className='absolute top-1/4 left-70 w-80 h-80 overflow-hidden '>
                <img src='/assets/profileimg.png' alt=""  className='object-cover w-full h-full rounded-full z-10'/>
            </div>
            
            <div className='pt-540 grid gap-8 items-start justify-center'>
                <div className="relative group">
                    <div className="absolute 
                    -inset-0.5 
                    bg-gradient-to-r 
                    from-pink-600 
                    to-purple-600 
                    rounded-lg 
                    blur 
                    opacity-75 
                    group-hover:opacity-100 
                    transition 
                    duration-1000 
                    group-hover:duration-200 
                    animate-tilt"></div>
                    
                    <button className=' relative px-7 py-4 bg-black rounded-lg leading-none flex items-center divide-x divide-gray-600'>
                        <span className='pr-6 text-gray-100'>Download my resume</span>
                        <a download href="/Aryan_Shirsat_Resume.pdf">
                            <span className='pl-6 text-indigo-400 group-hover:text-gray-100 transition duration-200'>Resume &rarr;</span>
                        </a>
                    </button>
                    </div>
            </div>
            </div>
            
            
            
        )
    }

    export default Hero;