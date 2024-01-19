import React from 'react'
import "../app/globals.css"
import { fronttechnologies,backtechnologies,languages } from '@/constants'
const Skillicon = ({name, icon}) =>{
  return(
  <div class="skills__item flex flex-col justify-center items-center">
    <div class='mb-2 flex justify-center'>
      {icon}
    </div>
    <div class="flex justify-center">
      {name}
    </div>
</div>

  )
}
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
    <div className='p-5 mt-2 gap-14 flex flex-wrap overflow-x-auto no-scrollbar'>
      <div className="group relative h-[450px] w-[430px] rounded-2xl shadow-custom-2xl shadow-[#b74aaa] 
      flex p-10 duration-1000 preserve-3d 
      animate-rot text-white bg-skillbg 
      hover:shadow-custom-shadow-hover group-hover:opacity-70">
        <div class="w-[95%] h-[95%] duration-500 transition-all group-hover:opacity-70 group-hover:scale-120">
          <div className='flex flex-wrap items-center justify-center mb-5'>
            <h3 className='text-2xl font-bold bg-gradient-to-br from-pink-500 to-blue-700 text-transparent bg-clip-text'>FrontEnd</h3>
          </div>
          <div className='flex flex-wrap gap-4'>
          {fronttechnologies.map((skill,index) =>(
            <Skillicon
            key={`skill-${index}`}
            index={index}
            {...skill}
            />
          ))}

          </div>
          
        </div>
      </div>
      <div className="group relative h-[450px] w-[430px] rounded-2xl shadow-custom-2xl shadow-[#b74aaa] 
      flex p-10 duration-1000 preserve-3d 
      animate-rot text-white bg-skillbg 
      hover:shadow-custom-shadow-hover group-hover:opacity-70">
        <div class="w-[95%] h-[95%] duration-500 transition-all group-hover:opacity-70 group-hover:scale-120">
        <div className='flex flex-wrap items-center justify-center mb-5'>
            <h3 className='text-2xl font-bold bg-gradient-to-br from-pink-500 to-blue-700 text-transparent bg-clip-text'>BackEnd</h3>
        </div>
          <div className='flex flex-wrap gap-4'>
          {backtechnologies.map((skill,index) =>(
            <Skillicon
            key={`skill-${index}`}
            index={index}
            {...skill}
            />
          ))}
          </div>
        </div>
      </div>
      <div className="group relative h-[450px] w-[430px] rounded-2xl shadow-custom-2xl shadow-[#b74aaa] 
      flex p-10 duration-1000 preserve-3d 
      animate-rot text-white bg-skillbg 
      hover:shadow-custom-shadow-hover group-hover:opacity-70">
        <div class="w-[95%] h-[95%] duration-500 transition-all group-hover:opacity-70 group-hover:scale-120">
        <div className='flex flex-wrap items-center justify-center mb-5'>
            <h3 className='text-2xl font-bold bg-gradient-to-br from-pink-500 to-blue-700 text-transparent bg-clip-text'>Programming Languages</h3>
        </div>
          <div className='flex flex-wrap gap-4'>
          {languages.map((skill,index) =>(
            <Skillicon
            key={`skill-${index}`}
            index={index}
            {...skill}
            />
          ))}
          </div>
        </div>
      </div>
      

    </div>
    </div>
  )
}

export default Skills