import React from 'react'
import {motion} from "framer-motion";
const Projects = () => {
  return (
        // <motion.div
        // initial={{ opacity: 0 }}
        // whileInView={{ opacity: 1 }}
        // viewport={{ once: true }}
        // >
        
        // </motion.div>
        <div className='w-90vh h-screen justify-start'>
            <h1 className='pt-5 pl-5 
            text-3xl 
            font-extrabold 
            bg-gradient-to-br from-pink-500 
            to-yellow-400 
            text-transparent 
            bg-clip-text'
            >
                Projects
            </h1>
            <div class="p-10 w-80vh h-100vh grid grid-rows-1 grid-flow-col">
                <div class="bg-red-500 col-span-2 rounded-lg">Project1</div>
                <div class="bg-purple-500 col-span-2 rounded-lg">Project2</div>
                <div class="bg-yellow-500 col-span-2 rounded-lg">Project3</div>
                <div class="bg-blue-500 col-span-2 rounded-lg">Project4</div>
            </div>
        </div>
  )
}

export default Projects