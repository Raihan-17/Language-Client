import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

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
        setCounts((prev) => ({
          tutors: Math.min(prev.tutors + increments.tutors, 32000),
          reviews: Math.min(prev.reviews + increments.reviews, 300000),
          languages: Math.min(prev.languages + increments.languages, 120),
          nationalities: Math.min(
            prev.nationalities + increments.nationalities,
            180
          ),
          rating: Math.min(prev.rating + increments.rating, 4.8),
        }));
      }, 1000 / 60);

      return () => clearInterval(interval);
    }
  }, [inView]);

  return (
    
    <section
      ref={ref}
      className="pb-16 pt-12 bg-gradient-to-br from-white to-slate-100 dark:from-slate-900 dark:to-slate-800 rounded-3xl shadow-inner"
    >
      <h1 className="text-4xl font-bold text-center mb-3 text-slate-900 dark:text-white">
        Our Impact in Numbers
      </h1>
      <p className="text-center font-medium text-lg text-gray-600 dark:text-gray-300 mb-10">
        Multiplying Fluency, Dividing Borders
      </p>

      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-2 md:grid-cols-5 gap-6 text-center"
        >
          <StatCard
            value={Math.floor(counts.tutors).toLocaleString() + "+"}
            label="Experienced Tutors"
            color="from-teal-400 to-cyan-500"
          />
          <StatCard
            value={Math.floor(counts.reviews).toLocaleString() + "+"}
            label="5-Star Tutor Reviews"
            color="from-pink-400 to-red-500"
          />
          <StatCard
            value={Math.floor(counts.languages) + "+"}
            label="Subjects Taught"
            color="from-violet-400 to-indigo-500"
          />
          <StatCard
            value={Math.floor(counts.nationalities) + "+"}
            label="Tutor Nationalities"
            color="from-green-400 to-emerald-500"
          />
          <StatCard
            value={counts.rating.toFixed(1) + " ★"}
            label="App Store Rating"
            color="from-amber-400 to-yellow-500"
            isRating
          />
        </motion.div>
      </div>
    </section>
  );
};

const StatCard = ({ value, label, color, isRating = false }) => {
  return (
    <motion.div
      whileHover={{ y: -6, scale: 1.03 }}
      transition={{ type: "spring", stiffness: 200, damping: 15 }}
      className={`relative p-6 rounded-2xl bg-white/80 dark:bg-slate-800/80 shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group`}
    >
      {/* Glowing animated background */}
      <div
        className={`absolute inset-0 opacity-0 group-hover:opacity-100 blur-2xl transition-all duration-700 bg-gradient-to-r ${color}`}
      ></div>

      {/* Inner Glow Layer */}
      <div className="relative z-10">
        <h3
          className={`text-3xl font-extrabold bg-gradient-to-r ${color} bg-clip-text text-transparent mb-2`}
        >
          {value}
        </h3>
        <p className="text-gray-700 dark:text-gray-300 font-medium">
          {label}
        </p>
        {isRating && (
          <div className="mt-1 text-yellow-400 text-lg font-bold">★★★★★</div>
        )}
      </div>
    </motion.div>
  );
};

export default Stats;
