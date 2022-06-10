import React from 'react';
import Banner from './Banner';
import Contact from './Contact';
import Header from './Header';
import WhyChooseMe from './WhyChooseMe';

const Homepage = () => {
    return (
        <div className='w-11/12 mx-auto'>
            <Header></Header>
            <Banner></Banner>
            <WhyChooseMe></WhyChooseMe>
            <Contact></Contact>
        </div>
    );
};

export default Homepage;