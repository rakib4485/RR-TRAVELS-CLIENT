import React from 'react';
import About from '../About/About';
import Adventure from '../Adventure/Adventure';
import Banner from '../Banner/Bannder';
import NewsLetter from '../NewsLetter/NewsLetter';
import Packages from '../Packages/Packages';
import Testimonial from '../Testimonial/Testimonial';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <Packages></Packages>
            <Adventure />
            <Testimonial></Testimonial>
            <NewsLetter></NewsLetter>
        </div>
    );
};

export default Home;