import React from 'react'
import { Navbar } from './componests/Navbar'
import { About } from './componests/About'
import { Technology } from './componests/Technology'
import { Projects } from './componests/Projects'
import { Contact } from './componests/Contact'
import { Link, Route, Routes } from "react-router-dom";



 
export default function App() {
  return (
    <div className='min-h-screen bg-backgroundColor flex'>
      <Navbar />
      <Routes>
        <Route path='/' element={<About/>} />
        <Route path="/technology" element={<Technology/>} />
        <Route path="/projects" element={<Projects/>} />
        <Route path="/contact" element={<Contact/>} />
      </Routes>
    </div>

  );
}