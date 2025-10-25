import { useNavigate } from "react-router";
import { FaArrowRight } from "react-icons/fa";
import { motion } from "framer-motion";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import englogo from "/english.png";
import spalogo from "/spanish.png";
import frlogo from "/french.png";
import gerlogo from "/german.png";
import italogo from "/italian.png";
import chilogo from "/china.png";
import ruslogo from "/russian.png";
import japlogo from "/japan.png";
import porlogo from "/portugal.png";

const LanguageCategories = () => {
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({ duration: 1200, once: true, easing: "ease-out-cubic" });
  }, []);

  const languages = [
    { name: "English", slug: "english", logo: englogo },
    { name: "Spanish", slug: "spanish", logo: spalogo },
    { name: "French", slug: "french", logo: frlogo },
    { name: "German", slug: "german", logo: gerlogo },
    { name: "Italian", slug: "italian", logo: italogo },
    { name: "Russian", slug: "russian", logo: ruslogo },
    { name: "Chinese", slug: "chinese", logo: chilogo },
    { name: "Japanese", slug: "japanese", logo: japlogo },
    { name: "Portuguese", slug: "portuguese", logo: porlogo },
  ];

  return (
    <section
      data-aos="fade-up"
      className="my-16 bg-gradient-to-br from-slate-100 via-white to-slate-200 
                 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 
                 p-10 rounded-3xl shadow-2xl max-w-6xl mx-auto"
    >
      <h2
        data-aos="zoom-in"
        className="text-4xl font-extrabold text-center mb-10 bg-gradient-to-r 
                   from-teal-300 to-cyan-400 bg-clip-text text-transparent"
      >
        Language Categories
      </h2>

      <div
        data-aos="fade-up"
        data-aos-delay="200"
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 "
      >
        {languages.map((lang, index) => (
          <motion.div
            key={lang.slug}
            data-aos="zoom-in-up"
            data-aos-delay={index * 100}
            whileHover={{
              rotateX: 6,
              rotateY: -6,
              scale: 1.05,
              transition: { type: "spring", stiffness: 200, damping: 15 },
            }}
            onClick={() => navigate(`/tutors`)}
            className="group relative flex items-center justify-between p-6 
                       bg-white/80 dark:bg-slate-800/70 rounded-2xl cursor-pointer 
                       overflow-hidden shadow-lg 
                             shadow-cyan-400/30 transition-all duration-500 
                       border border-transparent hover:border-blue-400"
          >
            {/* ✨ Glowing Gradient Border Layer */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-400 via-teal-400 to-cyan-400 opacity-0 group-hover:opacity-100 blur-xl transition-all duration-700 glow "></div>

            {/* Card Content */}
            <div className="relative flex items-center gap-4 z-10">
              <div className="w-12 h-12 rounded-xl overflow-hidden shadow-md bg-white flex items-center justify-center">
                <img
                  src={lang.logo}
                  alt={lang.name}
                  className="w-10 h-10 object-contain group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <h3 className="text-lg font-semibold text-slate-800 dark:text-gray-100 group-hover:text-blue-600 transition-colors duration-300">
                {lang.name} Tutors
              </h3>
            </div>

            {/* Arrow Icon */}
            <FaArrowRight
              className="text-slate-500 group-hover:text-blue-500 transition-transform duration-500 group-hover:translate-x-2 z-10"
              size={18}
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default LanguageCategories;
