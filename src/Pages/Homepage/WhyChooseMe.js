import React from 'react';

const WhyChooseMe = () => {
    return (
        <div className='mb-16 mt-24'>
            <h4 className='text-primary text-2xl text-center pb-5'>Why Choose Me</h4>
            <h5 className='text-secondary text-3xl text-center pb-8'>My Expertise Area</h5>
            <div className="grid lg:grid-flow-col lg:grid-cols-2 lg:gap-10">
                <div className='col-span-1'>
                    <div className='pb-3'>
                        <h2 className='font-bold text-[16px]'>Html</h2>
                        <progress class="progress progress-primary w-full" value="90" max="100"></progress>
                    </div>
                    <div className='pb-3'>
                        <h2 className='font-bold text-[16px]'>Bootstrap</h2>
                        <progress class="progress progress-primary w-full" value="90" max="100"></progress>
                    </div>
                    <div className='pb-3'>
                        <h2 className='font-bold text-[16px]'>React</h2>
                        <progress class="progress progress-primary w-full" value="80" max="100"></progress>
                    </div>
                </div>
                <div className='col-span-1'>
                    <div className='pb-3'>
                        <h2 className='font-bold text-[16px]'>Css</h2>
                        <progress class="progress progress-primary w-full" value="90" max="100"></progress>
                    </div>
                    <div className='pb-3'>
                        <h2 className='font-bold text-[16px]'>Tailwind</h2>
                        <progress class="progress progress-primary w-full" value="85" max="100"></progress>
                    </div>
                    <div className='pb-3'>
                        <h2 className='font-bold text-[16px]'F>Wordpress</h2>
                        <progress class="progress progress-primary w-full" value="70" max="100"></progress>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WhyChooseMe;