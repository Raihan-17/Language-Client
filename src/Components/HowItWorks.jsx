import React from 'react';
import { Typewriter } from 'react-simple-typewriter';
import { Fade, Zoom } from 'react-awesome-reveal';
import Lottie from 'lottie-react';
import { Tooltip } from 'react-tooltip';
import searchAnimation from '../assets/search.json';
import bookAnimation from '../assets/book.json';
import learnAnimation from '../assets/learn.json';

const HowItWorks = () => {
    const steps = [
        {
            title: "Find Your Perfect Tutor",
            description: "Browse through hundreds of qualified language tutors specialized in various languages and teaching methods.",
            animation: searchAnimation,
            tooltip: "Filter by Tutor, Language, Price, or Availability"
        },
        {
            title: "Book a Session",
            description: "Select your preferred time slot and book a 1-on-1 session with just a few clicks.",
            animation: bookAnimation,
            tooltip: "24/7 booking available"
        },
        {
            title: "Start Learning",
            description: "Connect via our platform and begin your language learning journey with interactive lessons.",
            animation: learnAnimation,
            tooltip: "All sessions are recorded for review"
        }
    ];

    return (
        <section className="py-16 px-4 rounded-2xl my-5 bg-gray-50 dark:bg-gray-900">
            <div className="max-w-7xl mx-auto">
                <Fade direction="down" triggerOnce>
                    <h2 className="text-center text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
                        <Typewriter
                            words={['How SpeakEasy Works ??', 'Start Learning in 3 Easy Steps']}
                            loop={5}
                            cursor
                            cursorStyle="_"
                            typeSpeed={70}
                            deleteSpeed={50}
                            delaySpeed={1000}
                        />
                    </h2>
                    <p className="text-center text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-12">
                        Our platform makes language learning simple, effective, and enjoyable
                    </p>
                </Fade>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {steps.map((step, index) => (
                        <Zoom key={index} triggerOnce delay={index * 150}>
                            <div 
                                className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow"
                                data-tooltip-id={`tooltip-${index}`}
                            >
                                <div className="h-48 mb-6">
                                    <Lottie 
                                        animationData={step.animation} 
                                        loop={true} 
                                        className="h-full"
                                    />
                                </div>
                                <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
                                    <span className="mr-2 text-blue-600 dark:text-blue-400">
                                        0{index + 1}.
                                    </span>
                                    {step.title}
                                </h3>
                                <p className="text-gray-600 dark:text-gray-300 mb-4">
                                    {step.description}
                                </p>
                                <button className="text-blue-600 dark:text-blue-400 font-medium hover:underline">
                                    Learn more →
                                </button>
                                <Tooltip 
                                    id={`tooltip-${index}`} 
                                    place="top" 
                                    content={step.tooltip}
                                    className="z-50"
                                />
                            </div>
                        </Zoom>
                    ))}
                </div>

                <Fade direction="up" triggerOnce delay={600}>
                    <div className="text-center mt-16">
                        <button className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors shadow-lg">
                            Get Started Now
                        </button>
                    </div>
                </Fade>
            </div>
        </section>
    );
};

export default HowItWorks;