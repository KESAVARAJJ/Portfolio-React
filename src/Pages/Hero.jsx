import React from 'react';
import { AiOutlineLinkedin, AiOutlineGithub } from 'react-icons/ai';
import IntroImg from '../assets/intro.jpeg';
function Hero() {
  return (
    <section className='flex md:flex-row flex-col px-5 py-36 bg-secondary justify-center'>
    <div className='w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left'>
        <h1 className='text-white text-4xl'>
            Hello Everyone!<br /> I'm Kesavaraj, a Full Stack developer.
        </h1>
        <h4 className='text-purple-600 text-2xl'>Let's Explore about me</h4>
        <div className='flex py-10'>
            <a href='https://www.linkedin.com/in/kesavarajj04' className='pr-5 hover:text-white'>
                <AiOutlineLinkedin size={40} />
            </a>
            <a href='https://github.com/KESAVARAJJ' className='pr-5 hover:text-white'>
                <AiOutlineGithub size={40} />
            </a>
        </div>
    </div>
    <img className='md:w-1/4 ' src={IntroImg} />
</section>
    
  )
}

export default Hero;