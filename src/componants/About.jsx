import React from 'react'
import aboutImg from '../assets/about.jpg'

const About = () => {
  return (
    <div className='text-white w-[100%] mx-auto my-12' id="about">
        <div className='md:grid md:grid-cols-2 sm:py-16'>

            <div className='mt-4 md:mt-0 text-left flex flex-col h-full justify-start py-6 md:py-0'>
                <div className='my-auto mx-6'>
                    <h2 className='text-4xl font-bold mb-4 primary-color'>About Me</h2>
                    <p className='text-base lg:text-lg'>"Hi, I'm Shiv Sagar Yadav, a Frontend Developer with a passion for crafting modern, responsive, and user-friendly web applications. I have completed my B.Tech in Information Technology from Chhatrapati Shahu Ji Maharaj University, Kanpur. With expertise in HTML, CSS, JavaScript, React.js, and Tailwind CSS, I specialize in creating seamless and interactive user experiences. My projects include a Weather App, an E-Commerce Website, and a PW Clone, showcasing my ability to build dynamic and scalable web solutions. I am always eager to learn and innovate in the ever-evolving world of web development!" </p>
                </div>
            </div>

            <img className='mx-auto rounded-3xl py-8 md:py-0' src={aboutImg} width={300} height={300} />
        </div>
    </div>
  )
}

export default About