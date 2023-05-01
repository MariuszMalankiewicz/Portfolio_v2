import React from 'react'
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai'


export const About = () => {
  return (
    <div className='w-5/6 flex justify-center items-center'>
      <div className='flex flex-col justify-start items-center lg:flex-row lg:flex-wrap'>
        <div className='mb-5 mt-10 lg:basis-1/2'>
          <img src="/images/me.jpg" className='w-44 sm:w-56 lg:w-64 xl:w-72 border lg:mr-20 xl:mr-32 rounded-md rotate-3' alt='photo about me'/>
        </div>
        <div className='mb-10 lg:mt-10 lg:basis-1/2'>
          <p className='text-primaryColor text-text-base xl:text-lg text-center'>Cześć!</p>
          <p className='text-primaryColor text-text-base xl:text-lg text-center mb-3'>Nazywam się</p>
          <h1 className='text-primaryColor text-3xl xl:text-4xl text-center font-bold mb-2 px-3 font-writeFamily'><span className=' text-secoundColor'>M</span>ariusz <span className=' text-secoundColor'>M</span>alankiewicz</h1>
          <p className='text-primaryColor text-text-base xl:text-xl text-center mb-1 px-2'>Poszukuje pierwszego komercyjnego </p>
          <p className=' text-secoundColor text-center font-bold text-text-base text-lg mb-5 font-monospace'>doświadczenia</p>
          <div className='flex justify-center'>
            <AiFillGithub className='text-primaryColor text-5xl' />
            <AiFillLinkedin className='text-primaryColor text-5xl' />
          </div>
        </div>
      </div>   
    </div>
  )
}
