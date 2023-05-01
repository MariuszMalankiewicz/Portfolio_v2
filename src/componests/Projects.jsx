import React from 'react';

import { Navigation, Pagination, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';  

import { SiMysql, SiLaravel, SiComposer, SiPostman, SiXampp, SiVisualstudiocode, SiReact, SiTailwindcss, SiVite, SiGithub } from 'react-icons/si';
import { TbSql, TbJson } from 'react-icons/tb';
import { FaBootstrap, FaGit } from 'react-icons/fa';
import { MdHtml, MdCss, MdJavascript } from 'react-icons/md';
import { DiSass, DiPhp, DiNpm, DiNodejs } from 'react-icons/di';



export const Projects = () => {
  return (
    <div className='w-5/6 flex flex-col justify-start items-center md:flex-row md:flex-wrap'>
      <div className='md:basis-full md:text-center'>
        <h1 className='text-primaryColor mt-10 md:mt-0 font-bold text-3xl'><span className='text-secoundColor'>Pro</span>jekty</h1>
      </div>
      <Swiper className='w-9/12 mt-10 md:mt-0'
      modules={[Navigation, Pagination, A11y]}
      spaceBetween={10}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      >
      <SwiperSlide className='md:flex md:justify-center md:items-start'>
      <div className='md:basis-1/2'>
        <div>
          <h2 className='text-primaryColor font-semibold text-center mb-2 md:mb-4 text-l'>Struktura drzewiasta</h2>
        </div>
        <div className='flex w-full justify-center'>
          <img className='rounded-lg border-4 border-primaryColor h-96' src='/images/tree-structure-mobile.png'/>
        </div>
      </div>
      <div className='flex flex-wrap justify-center items-center md:basis-1/2'>
        <div className='basis-full'>
          <h2 className='text-primaryColor font-semibold text-center mt-4 md:mt-0 md:mb-4 '>Wykorzystano technologie</h2>
        </div>
        <div className='flex flex-wrap justify-center items-center'>
          <MdHtml className='text-primaryColor text-4xl m-2'/>
          <MdCss className='text-primaryColor text-4xl m-2'/>
          <MdJavascript className='text-primaryColor text-4xl m-2'/>
          <FaBootstrap className='text-primaryColor text-4xl m-2'/>
          <TbSql className='text-primaryColor text-4xl m-2'/>
          <SiMysql className='text-primaryColor text-4xl m-2'/>
          <DiPhp className='text-primaryColor text-4xl m-2'/>
          <SiLaravel className='text-primaryColor text-4xl m-2'/>
          <TbJson className='text-primaryColor text-4xl m-2'/>
          <SiComposer className='text-primaryColor text-4xl m-2'/>
          <SiPostman className='text-primaryColor text-4xl m-2'/>
          <SiXampp className='text-primaryColor text-4xl m-2'/>
          <SiVisualstudiocode className='text-primaryColor text-4xl m-2'/>
          <SiGithub className='text-primaryColor text-4xl m-2'/>
          <FaGit className='text-primaryColor text-4xl m-2'/>
          <DiNpm className='text-primaryColor text-4xl m-2'/>
          <DiNodejs className='text-primaryColor text-4xl m-2'/>
          <SiVite className='text-primaryColor text-4xl m-2'/>
        </div>
        <div className='basis-full flex justify-around my-5'>
          <a href='#' className='line-through text-secoundColor font-semibold text-base border-b-4 font-writeFamily rounded-md px-3 py-2'>Zobacz</a>
          <a href='https://github.com/MariuszMalankiewicz/Tree-Structure' target='blank' className='text-primaryColor font-semibold text-base border-b-4 font-writeFamily rounded-md px-3 py-2'>Github</a>
        </div>
      </div>
      </SwiperSlide>

      <SwiperSlide className='md:flex md:justify-center md:items-start'>
        <div className='md:basis-1/2'>
          <div>
            <h2 className='text-primaryColor font-semibold text-center mb-2 md:mb-4 text-l'>Lista zadań</h2>
          </div>
          <div className='flex w-full justify-center'>
            <img className='rounded-lg border-4 border-primaryColor h-96' src='/images/todolist.png'/>
          </div>
        </div>
        <div className='flex flex-wrap justify-center items-center md:basis-1/2'>
          <div className='basis-full'>
            <h2 className='text-primaryColor font-semibold text-center mt-4 md:mt-0 md:mb-4 '>Wykorzystano technologie</h2> 
          </div>
          <div className='flex flex-wrap justify-center items-center'>
            <MdHtml className='text-primaryColor text-4xl  m-2'/>
            <MdCss className='text-primaryColor text-4xl m-2'/>
            <MdJavascript className='text-primaryColor text-4xl m-2'/>=
            <SiVisualstudiocode className='text-primaryColor text-4xl m-2'/>
            <SiGithub className='text-primaryColor text-4xl m-2'/>
            <FaGit className='text-primaryColor text-4xl m-2'/>
          </div>
          <div className='basis-full flex justify-around my-5'>
            <a href='https://mariuszmalankiewicz.github.io/To-Do-List/' target='blank' className='text-primaryColor font-semibold text-base border-b-4 font-writeFamily rounded-md px-3 py-2'>Zobacz</a>
            <a href='https://github.com/MariuszMalankiewicz/To-Do-List' target='blank' className='text-primaryColor font-semibold text-base border-b-4 font-writeFamily rounded-md px-3 py-2'>Github</a>
        </div>
        </div>
      </SwiperSlide>

      <SwiperSlide className='md:flex md:justify-center md:items-start'>
        <div className='md:basis-1/2'>
          <div>
            <h2 className='text-primaryColor font-semibold text-center mb-2 md:mb-4 text-l'>Gra w pamietanie</h2>
          </div>
          <div className='flex w-full justify-center'>
            <img className='rounded-lg border-4 border-primaryColor h-96' src='/images/memory-game.png'/>
          </div>
        </div>
        <div className='flex flex-wrap justify-center items-center md:basis-1/2'>
          <div className='basis-full'>
            <h2 className='text-primaryColor font-semibold text-center mt-4 md:mt-0 md:mb-4 '>Wykorzystano technologie</h2> 
          </div>
          <div className='flex flex-wrap justify-center items-center'>
            <MdHtml className='text-primaryColor text-4xl  m-2'/>
            <MdCss className='text-primaryColor text-4xl m-2'/>
            <MdJavascript className='text-primaryColor text-4xl m-2'/>=
            <SiVisualstudiocode className='text-primaryColor text-4xl m-2'/>
            <SiGithub className='text-primaryColor text-4xl m-2'/>
            <FaGit className='text-primaryColor text-4xl m-2'/>
          </div>
          <div className='basis-full flex justify-around my-5'>
            <a href='https://mariuszmalankiewicz.github.io/Memory-Game/' target='blank' className='text-primaryColor font-semibold text-base border-b-4 font-writeFamily rounded-md px-3 py-2'>Zobacz</a>
            <a href='https://github.com/MariuszMalankiewicz/Memory-Game' target='blank' className='text-primaryColor font-semibold text-base border-b-4 font-writeFamily rounded-md px-3 py-2'>Github</a>
        </div>
        </div>
      </SwiperSlide>

      <SwiperSlide className='md:flex md:justify-center md:items-start'>
        <div className='md:basis-1/2'>
          <div>
            <h2 className='text-primaryColor font-semibold text-center mb-2 md:mb-4 text-l'>Gra papier, kamień i nożyczki </h2>
          </div>
          <div className='flex w-full justify-center'>
            <img className='rounded-lg border-4 border-primaryColor h-96' src='/images/rock-scissors-paper.png'/>
          </div>
        </div>
        <div className='flex flex-wrap justify-center items-center md:basis-1/2'>
          <div className='basis-full'>
            <h2 className='text-primaryColor font-semibold text-center mt-4 md:mt-0 md:mb-4 '>Wykorzystano technologie</h2> 
          </div>
          <div className='flex flex-wrap justify-center items-center'>
            <MdHtml className='text-primaryColor text-4xl  m-2'/>
            <MdCss className='text-primaryColor text-4xl m-2'/>
            <MdJavascript className='text-primaryColor text-4xl m-2'/>=
            <SiVisualstudiocode className='text-primaryColor text-4xl m-2'/>
            <SiGithub className='text-primaryColor text-4xl m-2'/>
            <FaGit className='text-primaryColor text-4xl m-2'/>
          </div>
          <div className='basis-full flex justify-around my-5'>
            <a href='https://mariuszmalankiewicz.github.io/Rock-scissors-paper/' target='blank' className='text-primaryColor font-semibold text-base border-b-4 font-writeFamily rounded-md px-3 py-2'>Zobacz</a>
            <a href='https://github.com/MariuszMalankiewicz/Rock-scissors-paper' target='blank' className='text-primaryColor font-semibold text-base border-b-4 font-writeFamily rounded-md px-3 py-2'>Github</a>
        </div>
        </div>
      </SwiperSlide>


    </Swiper>
    </div>
  )
}

