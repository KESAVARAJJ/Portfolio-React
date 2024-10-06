import React, { useState } from 'react';
import {Bars3Icon } from '@heroicons/react/24/solid'
function Header() {
  const[toggleMenu,setToggleMenu]=useState(false);
  return (
    
      <header className="flex justify-between  px-5 py-3  bg-primary 500">
      < a className="font-bold text-white" href="#">KESAVARAJ J</a>
      <nav className="hidden md:block ">
      <ul  className="flex px-5 text-white ">
        <li className='px-5'><a href="/">Home  </a></li>
        <li className='px-5'><a href="#about">About  </a></li>
        <li className='px-5' ><a href="#project">Project  </a></li>
        <li className='px-5'><a href="#resume">Resume </a></li>
        <li className='px-5'><a href="#contact">Contact  </a></li>
      </ul>
      </nav>

      { toggleMenu && <nav className="block md:hidden fixed top-10 left-0 bg-white-800 w-full h-1/4 ">
      <ul onClick={()=>setToggleMenu(!toggleMenu)}  className="flex flex-col  text-white mobile-nav">
        <li className='w-full h-full text-center border-b-2'><a href="/">Home  </a></li>
        <li className='w-full h-full text-center border-b-2'><a href="#about">About  </a></li>
        <li className='w-full h-full text-center border-b-2'><a href="#project">Project  </a></li>
        <li className='w-full h-full text-center border-b-2'><a href="#resume">Resume  </a></li>
        <li className='w-full h-full text-center border-b-2'><a href="#contact">Contact  </a></li>
      </ul>
      </nav>
}
      <button onClick={()=>setToggleMenu(!toggleMenu)} className='block md:hidden'><Bars3Icon className='text-white h-5'/></button>
      </header>
    
  );
}

export default Header;
