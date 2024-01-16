import React from 'react'
import "../app/globals.css"
const Skills = () => {
  return (
    <div className='p-5 justify-center'>
      <h2 className='text-5xl font-extrabold bg-gradient-to-br from-pink-500 to-blue-700 text-transparent bg-clip-text'>Skills</h2>
      {/* <div class="group relative h-64 w-48 bg-[#0f0f0f] filter
      custom-preserve-3d animate-rot 
      rounded-2xl shadow-custom-2xl shadow-white
      transition duration-1000 flex justify-center items-center text-white hover:shadow-custom-shadow-hover">
      <div class="opacity-0 transition-opacity duration-500 group-hover:scale-120 group-hover:opacity-70">
        Hello There
      </div>
    </div> */}
    <div className='p-5 mt-2 gap-14 flex flex-row overflow-x-auto no-scrollbar'>
      <div className="group relative h-[450px] w-[400px] rounded-2xl shadow-custom-2xl shadow-[#b74aaa] 
      flex justify-center duration-1000 preserve-3d 
      animate-rot items-center text-white bg-skillbg 
      hover:shadow-custom-shadow-hover group-hover:opacity-70">
        <div class="opacity-0 duration-500 transition-all group-hover:opacity-70 group-hover:scale-120">FrontEnd</div>
      </div>
      <div className="group relative h-[450px] w-[400px] rounded-2xl shadow-custom-2xl shadow-[#b74aaa] 
      flex justify-center duration-1000 preserve-3d 
      animate-rot items-center text-white bg-skillbg 
      hover:shadow-custom-shadow-hover group-hover:opacity-70">
        <div class="opacity-0 duration-500 transition-all group-hover:opacity-70 group-hover:scale-120">BackEnd</div>
      </div>
      <div className="group relative h-[450px] w-[400px] rounded-2xl shadow-custom-2xl shadow-[#b74aaa] 
      flex justify-center duration-1000 preserve-3d 
      animate-rot items-center text-white bg-skillbg 
      hover:shadow-custom-shadow-hover group-hover:opacity-70">
        <div class="opacity-0 duration-500 transition-all group-hover:opacity-70 group-hover:scale-120">Database</div>
      </div>

    </div>
    </div>
  )
}

export default Skills