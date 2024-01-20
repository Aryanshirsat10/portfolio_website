import { useState, useRef,useEffect } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { slideIn } from "@/utils/motion";
import { isMobile } from "react-device-detect";

const Contact = () => {
  const formRef = useRef();
  const [mobile, setMobile] = useState(null)
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  });
  const[loading,setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm({ ...form, [name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs.send('service_teyzzz3',
    'template_oz9tqgp',
    {
      from_name: form.name,
      to_name: 'Aryan',
      from_email: form.email,
      to_email: 'youremailid@gmail.com',
      message: form.message,
    },
    'RykYQHv4g3qyOp54W'
    )
    .then(()=>{
      setLoading(false);
      alert('Thank you. I will get back to you as soon as possible.');

      setForm({
        name: '',
        email: '',
        message: '',
      })
    }, (error)=>{
      setLoading(false)

      console.log(error);

      alert('Something went wrong')
    })
  }
  useEffect(() => {
    setMobile(isMobile);
  }, [isMobile]);
  return (
    <>
    {mobile ? (
      <div className='p-5 xl:mt-12 xl:flex-row flex-wrap flex-col-reverse flex gap-10 overflow-hidden'>
      <motion.div 
      variants={slideIn('left','tween',0.2, 1)}
      className="flex-[0.75] bg-black-100 p-1 rounded-2xl">
        <h2 className="text-5xl font-extrabold bg-gradient-to-br from-pink-500 to-blue-700 text-transparent bg-clip-text">Contact</h2>
      <div className="mt-12 flex flex-col shadow-2xl shadow-slate-700 rounded-lg">
        <form 
          ref={formRef}
          onSubmit={handleSubmit}
          className="p-3 gap-8"
          >
            <label className='flex flex-col'>
              <span className='dark:text-white font-medium mb-2'>Your Name</span>
              <input
                type='text'
                name='name'
                value={form.name}
                onChange={handleChange}
                placeholder="What's your name?"
                className='bg-slate-900 py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
              />
            </label>
            <label className='flex flex-col'>
              <span className='dark:text-white font-medium mb-2 mt-4'>Your email</span>
              <input
                type='email'
                name='email'
                value={form.email}
                onChange={handleChange}
                placeholder="What's your email?"
                className='bg-slate-900 py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
              />
            </label>
            <label className='flex flex-col'>
              <span className='dark:text-white font-medium mb-2 mt-4'>Your Message</span>
              <textarea
                rows={7}
                name='message'
                value={form.message}
                onChange={handleChange}
                placeholder='What you want to say?'
                className='bg-slate-900 py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
              />
            </label>

            <button
            type="submit"
            className="bg-slate-900 py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl mt-4"
            >
              {loading ? 'Sending...' : 'Send'}
            </button>
          </form>
        </div>
      </motion.div>
      <motion.div
      className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      >
        <div className="relative xl:mt-32 flex pt-12 ">
            <div className='absolute w-60 h-60 bg-red-500  rounded-full blur-2xl mix-blend-softlight'></div>
            <div className='absolute left-[30%] w-60 h-60 bg-yellow-500  rounded-full blur-2xl mix-blend-softlight'></div>
        </div>
        
      </motion.div>
    </div>
    ):(
      <div className='p-5 xl:mt-12 xl:flex-row flex-wrap flex-col-reverse flex gap-10 overflow-hidden'>
      <motion.div 
      variants={slideIn('left','tween',0.2, 1)}
      className="flex-[0.75] bg-black-100 p-8 rounded-2xl ml-6">
        <h2 className="text-5xl font-extrabold bg-gradient-to-br from-pink-500 to-blue-700 text-transparent bg-clip-text">Contact</h2>
      <div className="mt-12 flex flex-col shadow-2xl shadow-slate-700 rounded-lg">
        <form 
          ref={formRef}
          onSubmit={handleSubmit}
          className="p-5 gap-8"
          >
            <label className='flex flex-col'>
              <span className='dark:text-white font-medium mb-2'>Your Name</span>
              <input
                type='text'
                name='name'
                value={form.name}
                onChange={handleChange}
                placeholder="What's your name?"
                className='bg-slate-900 py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
              />
            </label>
            <label className='flex flex-col'>
              <span className='dark:text-white font-medium mb-2 mt-4'>Your email</span>
              <input
                type='email'
                name='email'
                value={form.email}
                onChange={handleChange}
                placeholder="What's your email?"
                className='bg-slate-900 py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
              />
            </label>
            <label className='flex flex-col'>
              <span className='dark:text-white font-medium mb-2 mt-4'>Your Message</span>
              <textarea
                rows={7}
                name='message'
                value={form.message}
                onChange={handleChange}
                placeholder='What you want to say?'
                className='bg-slate-900 py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
              />
            </label>

            <button
            type="submit"
            className="bg-slate-900 py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl mt-4"
            >
              {loading ? 'Sending...' : 'Send'}
            </button>
          </form>
        </div>
      </motion.div>
      <motion.div
      className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      >
        <div className="relative xl:mt-32 flex p-12 ">
            <div className='absolute top-3/4 left-1/4  w-80 h-80 bg-red-500  rounded-full blur-3xl mix-blend-softlight'></div>
            <div className='absolute top-3/4 left-[360px]  w-80 h-80 bg-yellow-500  rounded-full blur-3xl mix-blend-softlight'></div>
        </div>
        
      </motion.div>
    </div>
    )}
    </>
    
  )
}

export default Contact