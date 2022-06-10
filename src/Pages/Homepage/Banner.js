import React from 'react';
import { Link } from 'react-router-dom';
import sani from '../../assets/Image/sani.png'

const Banner = () => {
    return (
        <div className='grid grid-flow-col w-11/12 mx-auto items-center grid-cols-2'>
            <div className="col-span-1">
                <h1 className='text-2xl text-primary'>Hi, I am</h1>
                <h2 className='text-4xl text-secondary'>Md Asgar Sani</h2>
                <h2 className='text-2xl text-secondary'>Frontend Web Developer</h2>
                <p> I am Asgor Sani a junior frontend web developer. I am a tech enthusiast and curious about how the whole world is blessed by modern technology. </p>
                <button className='btn btn-primary border-none text-white'><a href="https://drive.google.com/uc?export=download&id=1UUHbJtTPzlWzK2xq8aVkW3QWWtSkSY31" rel="noopener noreferrer">Download Resume</a></button>
                <button className='ml-5 btn btn-ghost rounded-none text-orange-500 border-none'> Contact me</button>
            </div>
            <div className="col-span-1">
                <img src={sani} alt="" />
            </div>
        </div>
    );
};

export default Banner;