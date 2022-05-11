import React from 'react';
import Banner from './shared/Banner';
import BannerThree from './shared/BannerThree';
import BannerTwo from './shared/BannerTwo';
import Contact from './shared/Contact';
import Info from './shared/Info';
import Service from './shared/Service';
import Testimonial from './shared/Testimonial';


const Home = () => {
    return (
        <div>
            <Banner/>
            <Info/>
            <Service/>
            <BannerTwo/>
            <BannerThree/>
            <Testimonial/>
            <Contact/>
        </div>
    );
};

export default Home;