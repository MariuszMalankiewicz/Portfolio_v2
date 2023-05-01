import React from 'react'

export const Contact = () => {
  return (
    <div className='w-5/6 flex flex-col justify-start items-center'>
      <div>
        <h1 className='text-primaryColor mt-16 font-bold text-3xl'><span className='text-secoundColor'>K</span>ontakt</h1>
      </div>
      <div>
        <img src='/images/rzeszow.jfif' alt='photo about me' className='w-44 sm:w-52 md:w-72 my-5 md:my-6 rounded-md rotate-3'  />
      </div>
      <div>
        <p className='text-primaryColor text-xl font-display'>Miejscowość: Rzeszów</p>
        <p className='text-primaryColor text-xl font-display'>E-mail: m2ario123@wp.pl</p>
      </div>
    </div>
  )
}
