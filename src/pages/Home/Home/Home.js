import React from 'react';
import About from '../About/About';
import Banner from '../Banner/Bannder';
import Packages from '../Packages/Packages';
import Travels from '../Travels/Travels';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <Packages></Packages>
            <Travels></Travels>
        </div>
    );
};

export default Home;