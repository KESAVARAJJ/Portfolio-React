import React from 'react';
import AboutImg from '../assets/aboutimage.png';

function About() {
  return (
    <section className='flex md:flex-row flex-col bg-primary px-5 pb-20' id='about'>
      <div className='py-8 md:w-1/2 mr-40'>
        <img src={AboutImg}  />
      </div>
      <div className='md:w-1/2 flex justify-center'>
        <div className='flex flex-col justify-center'>
          <h1 className='text-4xl text-purple-600 border-b-4 mb-5 w-[170px] font-bold'>About Me</h1>
          <p className='pb-4 text-white'>My Name is Kesavaraj J. I possess a solid foundation in Java, Python, HTML, CSS, JavaScript, React, Tailwind CSS, and SQL.</p>
          <p className='pb-4 text-white'>I have completed the internships in Java Developer and Web Developer where I was able to apply my skills in real-world scenarios, allowing me to enhance my coding abilities significantly.</p>
          <p className='pb-4 text-white'>One of my memorable experiences was attending an inter-college event of Beat the Clock, a debbugging event which driven me to more enthusiastic towards coding.</p>
        </div>
      </div>
    </section>
  );
}

export default About;
