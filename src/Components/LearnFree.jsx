import React from 'react';
import anime from "../assets/education.json";
import Lottie from 'lottie-react';

const LearnFree = () => {
    return (
        <div className='w-11/12 mx-auto my-3 flex  items-center'>
             <div></div>
            <div>
                 <Lottie animationData={anime} style={{ width: '400px' }} loop={true} /> 
            </div>
        </div>
    );
};

export default LearnFree;