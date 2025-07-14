import React from 'react';
import Lottie from 'lottie-react';
import anime from "../assets/education.json";

const LearnFree = () => {
    // Common greetings in different languages
    const languageGreetings = [
        { language: "Spanish", greeting: "¡Hola! ¿Cómo estás?", pronunciation: "(OH-lah KOH-mo es-TAHS)" },
        { language: "French", greeting: "Bonjour! Comment ça va?", pronunciation: "(bon-ZHOOR ko-mon sa VA)" },
        { language: "Japanese", greeting: "こんにちは！お元気ですか？", pronunciation: "(Konnichiwa! O-genki desu ka?)" },
        { language: "German", greeting: "Hallo! Wie geht's?", pronunciation: "(HAH-loh vee GAYTS)" },
        { language: "Italian", greeting: "Ciao! Come stai?", pronunciation: "(CHOW ko-may STAI)" },
        { language: "Arabic", greeting: "مرحبا! كيف حالك؟", pronunciation: "(Marhaba! Kayf halak?)" }
    ];

    return (
        <div className=' my-12 rounded-2xl py-8 px-4 bg-white  md:px-8'>
            <div className='flex flex-col lg:flex-row items-center justify-between gap-8'>
               
                <div className='lg:w-1/2 space-y-6'>
                    <h2 className='text-3xl md:text-4xl font-bold text-gray-900 dark:text-teal-950'>
                        Learn Basic Greetings in Different Languages
                    </h2>
                    
                    <p className='text-lg text-gray-600 dark:text-gray-500'>
                        Start your language journey by learning how to greet people around the world!
                    </p>
                    
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                        {languageGreetings.map((item, index) => (
                            <div 
                                key={index} 
                                className='p-4 rounded-lg bg-white dark:bg-gray-800 shadow-md hover:shadow-lg transition-shadow'
                            >
                                <h3 className='font-bold text-lg text-blue-600 dark:text-blue-400'>
                                    {item.language}
                                </h3>
                                <p className='text-gray-800 dark:text-gray-200'>
                                    {item.greeting}
                                </p>
                                <p className='text-sm text-gray-500 dark:text-gray-400 italic'>
                                    {item.pronunciation}
                                </p>
                            </div>
                        ))}
                    </div>
                    
                    <button className='mt-4 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors'>
                        Learn More Phrases
                    </button>
                </div>
                
                {/* Lottie Animation */}
                <div className='lg:w-1/2 flex justify-center'>
                    <div className='w-full max-w-md'>
                        <Lottie 
                            animationData={anime} 
                            loop={true}
                            className='w-full h-auto'
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LearnFree;