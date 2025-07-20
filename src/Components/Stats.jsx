import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Stats = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  const [counts, setCounts] = useState({
    tutors: 0,
    reviews: 0,
    languages: 0,
    nationalities: 0,
    rating: 0,
  });

  useEffect(() => {
    if (inView) {
      const duration = 5; 
      const increments = {
        tutors: 32000 / (60 * duration),
        reviews: 300000 / (60 * duration),
        languages: 120 / (60 * duration),
        nationalities: 180 / (60 * duration),
        rating: 4.8 / (60 * duration),
      };

      const interval = setInterval(() => {
        setCounts(prev => ({
          tutors: Math.min(prev.tutors + increments.tutors, 32000),
          reviews: Math.min(prev.reviews + increments.reviews, 300000),
          languages: Math.min(prev.languages + increments.languages, 120),
          nationalities: Math.min(prev.nationalities + increments.nationalities, 180),
          rating: Math.min(prev.rating + increments.rating, 4.8),
        }));
      }, 1000 / 60); 

      return () => clearInterval(interval);
    }
  }, [inView]);

  return (
    <section ref={ref} className="pb-10 pt-7  bg-white rounded-lg shadow-2xl">

<h1 className="text-4xl md:text-4xl font-bold text-center mb-3 text-black dark:text-">
      Our Impact in Numbers
    </h1>
    <p className='text-center font-medium text-lg text-gray-600 mb-8'>Multiplying Fluency, Dividing Borders</p>

    <div className="max-w-7xl mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-5 gap-6 text-center"
        >
          {/* Tutor Count */}
          <StatCard 
            value={Math.floor(counts.tutors).toLocaleString() + "+"} 
            label="Experienced tutors"
            icon=""
          />

          {/* Review Count */}
          <StatCard 
            value={Math.floor(counts.reviews).toLocaleString() + "+"} 
            label="5-star tutor reviews"
            icon=""
          />

          {/* Languages Count */}
          <StatCard 
            value={Math.floor(counts.languages) + "+"} 
            label="Subjects taught"
            icon=""
          />

          {/* Nationalities Count */}
          <StatCard 
            value={Math.floor(counts.nationalities) + "+"} 
            label="Tutor nationalities"
            icon=""
          />

          {/* App Rating */}
          <StatCard 
            value={counts.rating.toFixed(1) + " ★★★★"} 
            label="on the App Store"
            icon=""
            isRating
          />
        </motion.div>
      </div>
    </section>
  );
};

const StatCard = ({ value, label, icon, isRating = false }) => {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all"
    >
      <div className="text-4xl mb-2">{icon}</div>
      <h3 className="text-3xl font-bold text-blue-600 dark:text-teal-400 mb-2">
        {value}
      </h3>
      <p className="text-gray-600 dark:text-gray-300">
        {label}
      </p>
      {isRating && (
        <div className="mt-2 text-yellow-400">
          ★★★★☆
        </div>
      )}
    </motion.div>
  );
};

export default Stats;