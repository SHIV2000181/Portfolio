import React from 'react'
import { TypeAnimation } from 'react-type-animation'
import heroiamge from '../assets/shiv.png'

const Hero = () => {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-3 gap-8 w-[100%] mx-auto py-8 bg-black '>
        <div className='col-span-1 my-auto mx-auto'>
            <div className='w-[300px] h-auto lg:w-[400px]'>
                <img src={heroiamge} alt='hero image' className='pl-4'/>
            </div>
        </div>

        <div className='col-span-2 px-5 my-auto'>
                <h1 className='text-white text-4xl sm:text-5xl lg:text-8xl font-extrabold'>
                    <span className='primary-color'>
                        I'm a 
                    </span> <br/>
                    <TypeAnimation sequence={[
                        "Frontend Dev",
                        1000,
                        "Web Designer",
                        1000,
                        "Consultant",
                        1000,
                    ]}
                    wrapper='span'
                    speed={50}
                    repeat={Infinity}
                    />
                </h1>

                <p className='text-white sm:text-lg lg:text-xl mt-5'>
                "Hi, I'm Shiv Sagar Yadav, a passionate Frontend Developer specializing in building modern, responsive, and interactive web applications. I craft sleek user interfaces with HTML, CSS, JavaScript, React.js, and Tailwind CSS to deliver seamless experiences. My expertise lies in creating dynamic web solutions with smooth navigation and API integration. I love transforming ideas into visually stunning and high-performance websites. Let's build something amazing together!"
                </p>
                
                <div className='my-8'>
                    <a href='/' className='px-6 py-3 w-full rounded-xl mr-4 bg-gradient-to-br from-orange-500 to-pink-500 text-white'>
                    Download CV
                    </a>
                    <a href='#contact' className='px-6 py-3 w-full rounded-xl mr-4 border border-gray-400 hover:bg-gradient-to-br from-orange-500 to-pink-500 text-white hover:border-none'>
                    Contact
                    </a>
                </div>

            </div>

    </div>
  )
}

export default Hero