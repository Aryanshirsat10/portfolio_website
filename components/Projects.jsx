// import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { projects } from '../constants';
import { useInView } from 'react-intersection-observer';
// import { fadeIn, textVariant } from '../utils/motion';
// const ProjectCard = ({ index, name,description, tags, image, source_code_Link}) => {
//     return(
    
//       <motion.div variants={fadeIn("up","spring",index * 0.5, 0.75)}>
//         <Tilt 
//         options={{
//           max: 45,
//           scale: 1,
//           speed: 450,
//         }}
//         className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full"
//         >
//           <div className="relative w-full h-[230px]">
//             <img 
//             src={image}
//             alt={name}
//             className="w-full h-full object-cover rounded-2xl"/>
//             <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
//               <div
//               onClick={()=> window.open(source_code_Link)}
//               className="black-gradient w-10 h-10
//               rounded-full flex justify-center items-center cursor-pointer"
//               >
                
//                 <img
//                 src='/assets/github.png'
//                 alt='github'
//                 className="w-1/2 h-1/2 object-contain"/>
//               </div>
//             </div>
//           </div>
//           <div className="mt-5">
//               <h3 className="text-white font-bold text-[24px]">{name}</h3>
//               <p className="mt-2 text-secondary text-[14px]">{description}</p>
//           </div>
//           <div className="mt-4 flex flex-wrap gap-2">
//             {tags.map((tag)=>(
//               <p key={tag.name} className={`text-[14px] ${tag.color}`}>
//                 #{tag.name}
//               </p>
//             ))}
//           </div>
//         </Tilt>
//       </motion.div>
//     )
//   }
// const Projects = () => {
//   return (
//     <div className="p-5 justify-items-center">
//         <motion.div variants={textVariant()}>
//         <p className='text-lg'>My Work</p>
//             <h2 className='text-4xl font-extrabold bg-gradient-to-br from-pink-500 to-blue-700 text-transparent bg-clip-text'>Projects.</h2>
//         </motion.div>

//         <div className="mt-20 flex flex-wrap gap-1 place-content-center">
//         {projects.map((project,index) => (
//             <ProjectCard 
//             key={`project-${index}`}
//             index={index}
//             {...project}
//             />
//         ))}
//         </div>
//     </div>

//   )
// }
const ProjectCard =({ index, name,description, tags, image, source_code_Link})=>{
    const variants = {
        moveUp: {
            initial: { y: 150, opacity: 0 },
            animate: { y: 0, opacity: 1 },
        },
        moveDown: {
            initial: { y: -150, opacity: 0 },
            animate: { y: 0, opacity: 1 },
        },
    };
    const [ref, inView] = useInView({
        triggerOnce: false, // Change this to false if you want the animation to trigger again whenever it comes in view
      });
    // Determine whether the card index is odd or even
    const isOdd = index % 2 !== 0;

    // Choose the animation based on the index of the card
    const animation = isOdd ? variants.moveUp : variants.moveDown;
    return(
        <motion.div
            ref={ref}
            initial={animation.initial}
            animate={inView ? animation.animate : animation.initial}
            transition={{ duration: 5 }}
            className="border border-red-500 rounded p-4 w-[23%]">
            <div className="relative w-full h-[290px]">
            <img 
            src={image}
            alt={name}
            className="w-full h-full object-cover rounded-2xl"/>
            </div>
          <div className="mt-5">
              <h3 className="text-slate-200 font-bold text-[24px]">{name}</h3>
              <p className="mt-2 text-grey text-[14px]">{description}</p>
          </div>
        </motion.div>
    )
}
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
              {/* <div class="p-10 w-80vh h-100vh grid grid-rows-1 grid-flow-col h-4/5">
                  <div class="col-span-2 border border-red-500 rounded p-4">
                    <h2>BillsNThrills</h2>
                  </div>
                  <div class="col-span-2 border border-red-500 rounded p-4">3D Portfolio</div>
                  <div class="col-span-2 border border-red-500 rounded p-4">Media</div>
                  <div class="col-span-2 border border-red-500 rounded p-4">Medcare</div>
              </div> */}
              <div className="mt-10 flex flex-wrap justify-center">
                 {projects.map((project,index) => (
                    <ProjectCard 
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