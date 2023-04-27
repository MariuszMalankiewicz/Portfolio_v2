import React from 'react'
import { SiMysql, SiLaravel, SiComposer, SiPostman, SiXampp, SiVisualstudiocode, SiReact, SiTailwindcss, SiVite, SiGithub, SiWindowsxp } from 'react-icons/si';
import { TbSql, TbJson } from 'react-icons/tb';
import { FaBootstrap, FaGit } from 'react-icons/fa';
import { MdHtml, MdCss, MdJavascript } from 'react-icons/md';
import { DiSass, DiPhp, DiNpm, DiNodejs } from 'react-icons/di';



export const Technology = () => {
  return (
    <div className='w-5/6 flex flex-col justify-start items-center md:flex-row md:flex-wrap md:items-start'>
      <div className='text-center md:basis-full'>
        <h1 className='text-primaryColor basis-full mt-10 font-bold text-3xl sans mb-4'><span className='text-secoundColor'>Tech</span>nologie</h1>
      </div>
      <div className='flex flex-wrap justify-center px-2 sm:px-16 md:flex-col md:basis-1/4 md:px-2 md:items-center'>
        <h2 className='text-primaryColor font-semibold basis-full text-center text-sm sm:text-base m-2'>Front-end</h2>
        <MdHtml className='text-primaryColor text-3xl sm:text-4xl m-2'/>
        <MdCss className='text-primaryColor text-3xl sm:text-4xl m-2'/>
        <MdJavascript className='text-primaryColor text-3xl sm:text-4xl m-2'/>
        <DiSass className='text-primaryColor text-3xl sm:text-4xl m-2'/>
        <FaBootstrap className='text-primaryColor text-3xl sm:text-4xl m-2'/>
        <SiTailwindcss className='text-primaryColor text-3xl sm:text-4xl m-2'/>
        <SiReact className='text-primaryColor text-3xl sm:text-4xl m-2'/>
      </div>
      <div className='flex flex-wrap justify-center px-2 sm:px-16 md:flex-col md:basis-1/4 md:px-2 md:items-center'>
        <h2 className='text-primaryColor font-semibold basis-full text-center text-sm sm:text-base m-2'>Back-end</h2>
        <TbSql className='text-primaryColor text-3xl sm:text-4xl m-2'/>
        <DiPhp className='text-primaryColor text-3xl sm:text-4xl m-2'/>
         <SiLaravel className='text-primaryColor text-3xl sm:text-4xl m-2'/>
      </div>
      <div className='flex flex-wrap justify-center px-2 sm:px-16 md:flex-col md:basis-1/4 md:px-2 md:items-center'>
        <h2 className='text-primaryColor font-semibold basis-full text-center text-sm sm:text-base m-2'>Narzedzia</h2>
        <SiMysql className='text-primaryColor text-3xl sm:text-4xl m-2'/>
        <TbJson className='text-primaryColor text-3xl sm:text-4xl m-2'/>
        <SiComposer className='text-primaryColor text-3xl sm:text-4xl m-2'/>
        <SiPostman className='text-primaryColor text-3xl sm:text-4xl m-2'/>
        <SiXampp className='text-primaryColor text-3xl sm:text-4xl m-2'/>
        <SiVisualstudiocode className='text-primaryColor text-3xl sm:text-4xl m-2'/>
        <SiGithub className='text-primaryColor text-3xl sm:text-4xl m-2'/>
        <FaGit className='text-primaryColor text-3xl sm:text-4xl m-2'/>
        <DiNpm className='text-primaryColor text-3xl sm:text-4xl m-2'/>
        <DiNodejs className='text-primaryColor text-3xl sm:text-4xl m-2'/>
        <SiVite className='text-primaryColor text-3xl sm:text-4xl m-2'/>
      </div>
      <div className='flex flex-wrap justify-center px-2 sm:px-16 md:flex-col md:basis-1/4 md:px-2 md:items-center'>
        <h2 className='text-primaryColor font-semibold basis-full text-center text-sm sm:text-base m-2'>System</h2>
        <SiWindowsxp className='text-primaryColor text-3xl sm:text-4xl m-2'/>
      </div>
    </div>
  )
}
