import React from 'react';
import expIcon from '../../assets/icons/exp.png';
import support from '../../assets/icons/project 2.png';
import projects from '../../assets/icons/Group.png'

const Services = () => {
    return (
        <div className='relative'>
            <div className='flex flex-col lg:flex-row  items-center lg:justify-around gap-5 w-10/12 mx-auto shadow-lg rounded-l-full rounded-r-full py-5 m-[-50px] bg-base-100 z-10'>
                <div className="flex items-center">
                    <div className="mr-3">
                        <div className='bg-primary p-3 rounded-full'>
                        <img src={expIcon} alt="" />
                        </div>
                    </div>
                    <div className="">
                        <h3 className='text-2xl font-bold'>8 Years job</h3>
                        <h4 className='text-primary text-xl'>Experience</h4>
                    </div>
                </div>
                <div className="flex items-center">
                    <div className="mr-3">
                        <div className='bg-primary p-3 rounded-full'>
                        <img src={support} alt="" />
                        </div>
                    </div>
                    <div className="">
                        <h3 className='text-2xl font-bold'>8 Years job</h3>
                        <h4 className='text-primary text-xl'>Experience</h4>
                    </div>
                </div>
                <div className="flex items-center">
                    <div className="mr-3">
                        <div className='bg-primary p-3 rounded-full'>
                        <img src={projects} alt="" />
                        </div>
                    </div>
                    <div className="">
                        <h3 className='text-2xl font-bold'>8 Years job</h3>
                        <h4 className='text-primary text-xl'>Experience</h4>
                    </div>
                </div>
                
            </div>
        </div>
    );
};

export default Services;