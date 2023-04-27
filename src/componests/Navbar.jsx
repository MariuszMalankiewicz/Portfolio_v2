import React, {userState} from 'react'
import { Link } from 'react-router-dom';
import { VscTools } from 'react-icons/vsc';
import { HiLightBulb } from 'react-icons/hi';
import { FiMail } from 'react-icons/fi';
import { BsPersonCircle } from 'react-icons/bs';



export const Navbar = () => {
  return (

    <nav className='w-1/6 bg-secoundColor'>
      <ul className=' w-full h-full flex flex-col justify-around items-center'>
        <li className='text-xl md:text-2xl xl:text-3xl text-primaryColor'><Link to="/"><BsPersonCircle/></Link></li>
        {/* <li className='text-xl md:text-2xl xl:text-3xl text-primaryColor'><Link to="/Portfolio_v2/"><BsPersonCircle/></Link></li> */}
        <li className='text-xl md:text-2xl xl:text-3xl text-primaryColor'><Link to="/technology"><VscTools /></Link></li>
        <li className='text-xl md:text-2xl xl:text-3xl text-primaryColor'><Link to="/projects"><HiLightBulb/></Link></li>
        <li className='text-xl md:text-2xl xl:text-3xl text-primaryColor'><Link to="/contact"><FiMail/></Link></li>
      </ul>
    </nav>
  );
};
