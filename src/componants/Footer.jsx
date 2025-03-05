import React from 'react'
import linkedin from '../assets/linkedin.png'
import github from '../assets/github-11-128.png'

const Footer = () => {
  return (
    
        <div className='grid grid-cols- md:grid-cols-4 gap-4 w-[100%] sm:h-[150px] h-auto p-12  md:justify-between mx-auto items-center text-center'>
            <span className='primary-color'>Shiv Sagar Yadav</span>
            <a href='https://github.com/SHIV2000181' className='text-gray-600 flex justify-center items-center'><img src={github} className='h-[100px] '/></a>
            <a href='https://www.linkedin.com/feed/' className='text-gray-600 flex justify-center items-center'><img src={linkedin} className='h-[100px]'/></a>
            <p className='text-white'>ssy312002@gmail.com</p>

        </div>
   
  )
}

export default Footer