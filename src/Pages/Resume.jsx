import React from 'react';
import ResumeImg from '../assets/resumeimg.jpeg';

function Resume() {

  const config = {
    link:'/kesavaraj_rec.pdf'
  } 
  return (
    <section id='resume'className='flex md:flex-row flex-col bg-primary px-5 pb-20'>
       <div className='py-5 md:w-1/2  flex justify-center md:justify-end'  >
             <img  className='w-[400px]'src={ResumeImg} />
        </div>
        <div className='md:w-1/2 flex justify-center'>
            <div className='flex flex-col justify-center'>
                 <h1 className='text-4xl text-purple-600 border-b-4 mb-5 w-[140px] font-bold'>Resume</h1>
                 <p className='pb-4 text-white'>you can view my resume <a className='btn bg-secondary px-5 py-2 font-bold hover:border-2 border-primary rounded' href={config.link}>Download</a></p>
            </div>
         </div>
    </section>
  );
}

export default Resume;
