import React from 'react';
import WebDesing from '../../assets/icons/web-programming.png';
import Wordpress from '../../assets/icons/wordpress-draw-logo.png';
import reactLogo from '../../assets/icons/atom-symbol.png';
import arrow from '../../assets/icons/right-arrow.png'

const Products = () => {
    return (
        <div className='mt-36'>
            <div className="grid lg:grid-flow-row lg:grid-cols-5">
                <div className="col-span-1">
                    <h4 className='text-primary text-xl'>Services</h4>
                    <h3 className='text-3xl font-bold pb-3'>I provide
                        different web Services</h3>
                        <img className='h-8' src={arrow} alt="" />
                </div>
                <div className="col-span-4">
                    <div className="flex flex-col lg:flex-row gap-5">
                        <div class="basis-1/3 card bg-base-100 shadow-xl">
                            <span className='pt-3 mx-auto'>
                                <img src={WebDesing} alt="" />
                            </span>
                            <div class="card-body items-center text-center">
                                <h2 class="card-title">Responsive Website Design</h2>
                                <p>Convert your psd or figma to Responsive website layout</p>
                            </div>
                        </div>
                        <div class="basis-1/3 card bg-base-100 shadow-xl">
                            <span className='pt-3 mx-auto'>
                                <img src={reactLogo} alt="" />
                            </span>
                            <div class="card-body items-center text-center">
                                <h2 class="card-title"> MERN Stack Development</h2>
                                <p>Create fullstack Website for your small business</p>
                            </div>
                        </div>
                        <div class="basis-1/3 card bg-base-100 shadow-xl">
                            <span className='pt-3 mx-auto'>
                                <img src={Wordpress} alt="" />
                            </span>
                            <div class="card-body items-center text-center">
                                <h2 class="card-title">Wordpress Customization</h2>
                                <p>Launch a Quick Website for your business</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Products;