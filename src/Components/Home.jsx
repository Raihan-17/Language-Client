import React from 'react';
import Banner from './Banner';
import LearnFree from './LearnFree';
import HowItWorks from './HowItWorks';


const Home = () => {
    return (
        <div className='w-11/12 mx-auto my-3'>
            <Banner></Banner>
            <LearnFree></LearnFree>
            <HowItWorks></HowItWorks>
            
        </div>
    );
};

export default Home;