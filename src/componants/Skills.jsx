import React from 'react'
import html from '../assets/html.png'
import css from '../assets/css.png'
import javascript from '../assets/javascript.png'
import tailwind from '../assets/tailwind.png'
import react from '../assets/react.png'

const Skills = () => {
  return (
    <div className='bg-black text-gray-400 md:h-[150px] w-[100%] mx-auto grid grid-cols-3 place-items-center md:flex md:justify-between md:items-center'>

        <h2 className='text-gray-700 text-2xl md:text-4xl font-bold m-4'>
            My <br /> Tech <br /> Stack 
        </h2>

        <div className='flex flex-col items-center m-4 sm:my-0 w-[80px] md:w-[100px]'>
            <img src={html} alt='' width={100} height={100} />
            <p className='mt-2'>HTML</p>
        </div>
        <div className='flex flex-col items-center m-4 sm:my-0 w-[80px] md:w-[100px]'>
            <img src={css} alt='' width={100} height={100} />
            <p className='mt-2'>CSS</p>
        </div>
        <div className='flex flex-col items-center m-4 sm:my-0 w-[80px] md:w-[100px]'>
            <img src={javascript} alt='' width={100} height={100} />
            <p className='mt-2'>JavaScript</p>
        </div>
        <div className='flex flex-col items-center m-4 sm:my-0 w-[80px] md:w-[100px]'>
            <img src={tailwind} alt='' width={100} height={100} />
            <p className='mt-2'>Tailwind</p>
        </div>
        <div className='flex flex-col items-center m-4 sm:my-0 w-[80px] md:w-[100px]'>
            <img src={react} alt='' width={100} height={100} />
            <p className='mt-2'>Reactjs</p>
        </div>
    </div>
  )
}

export default Skills