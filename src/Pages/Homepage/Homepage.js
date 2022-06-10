import React from 'react';
import Banner from './Banner';
import Contact from './Contact';
import Products from './Products';
import Services from './Services';
import WhyChooseMe from './WhyChooseMe';

const Homepage = () => {
    return (
        <div className=''>
            <Banner></Banner>
            <div className='w-11/12 mx-auto'>
            <Services></Services>
            <Products></Products>
            <WhyChooseMe></WhyChooseMe>
            <Contact></Contact>
            </div>
        </div>
    );
};

export default Homepage;