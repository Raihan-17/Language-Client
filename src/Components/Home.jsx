import React from 'react';
import Banner from './Banner';
import LearnFree from './LearnFree';
import HowItWorks from './HowItWorks';
import Stats from './Stats';


const Home = () => {
    return (
        <div className='w-11/12 mx-auto my-3'>
            <Banner></Banner>
            <Stats></Stats>
            <LearnFree></LearnFree>
            <HowItWorks></HowItWorks>
            
        </div>
    );
};

export default Home;