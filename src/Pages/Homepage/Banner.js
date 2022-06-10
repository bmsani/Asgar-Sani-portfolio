import React from 'react';
import { Link } from 'react-router-dom';
import sani from '../../assets/Image/saniPro.png'
import resume from '../../assets/media/Md Asgar Sani_ Web developer.pdf'

const Banner = () => {
    return (
        <div className="bg-[#fdf8f7]">
            <div className='grid lg:grid-flow-col w-11/12 mx-auto items-center lg:grid-cols-2'>
                <div className="col-span-1">
                    <h1 className='text-2xl text-primary pb-5'>Hi, I am</h1>
                    <h2 className='text-4xl text-secondary pb-2'>Md Asgar Sani</h2>
                    <h2 className='text-2xl text-secondary pb-2'>Frontend Web Developer</h2>
                    <p className='pb-5'> I am Asgor Sani a junior frontend web developer. I am a tech enthusiast and curious about how the whole world is blessed by modern technology. </p>
                    <button className='btn btn-primary border-none text-white'><a href={resume} download>Download Resume</a></button>
                    {/* <a href={resume} download>hello</a> */}
                    <button className='ml-5 btn btn-ghost rounded-none text-orange-500 border-none'> Contact me</button>
                </div>
                <div className="col-span-1 content-center">
                    <img className='block mx-auto' src={sani} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Banner;