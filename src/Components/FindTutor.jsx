import { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router";
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";
import Loading from "./Loading";

const FindTutor = () => {
  const { category } = useParams();
  const [tutors, setTutors] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true, easing: "ease-out-cubic" });
  }, []);

  useEffect(() => {
    const fetchTutors = async () => {
      try {
        setLoading(true);
        const url = category
          ? `https://language-server-three.vercel.app/tutorials?language=${category}`
          : `https://language-server-three.vercel.app/tutorials`;
        const res = await axios.get(url);
        setTutors(Array.isArray(res.data) ? res.data : []);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchTutors();
  }, [category]);

  const handleSearch = async () => {
    try {
      setLoading(true);
      const res = await axios.get(
        `https://language-server-three.vercel.app/tutorials?language=${search}`
      );
      setTutors(res.data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      data-aos="fade-up"
      className="p-10 bg-gradient-to-br from-slate-100 via-white to-slate-200 
                 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 
                 rounded-3xl shadow-2xl w-11/12 mx-auto my-10"
    >
      <h2
        data-aos="zoom-in"
        className="text-4xl font-extrabold text-center mb-8 bg-gradient-to-r 
                   from-blue-600 to-teal-500 bg-clip-text text-transparent"
      >
        Find Your Perfect Tutor
      </h2>

      {/* Search Bar */}
      <div
        data-aos="fade-up"
        data-aos-delay="200"
        className="flex flex-col sm:flex-row justify-center items-center mb-10 gap-3"
      >
        <input
          type="text"
          placeholder="Search by language..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border border-gray-300 p-3 w-full sm:w-1/3 rounded-2xl shadow-md 
                     text-gray-800 placeholder-gray-500 bg-white 
                     focus:outline-none focus:ring-2 focus:ring-teal-400 
                     transition-all duration-300 dark:bg-slate-800 dark:text-gray-100 
                     dark:placeholder-gray-400"
        />
        <button
          onClick={handleSearch}
          className="text-white bg-gradient-to-r from-teal-500 to-cyan-400 
                     hover:from-teal-400 hover:to-cyan-300 transition-all duration-300 
                     hover:scale-105 shadow-lg shadow-cyan-400/30 font-semibold 
                     px-6 py-3 rounded-2xl"
        >
          Search
        </button>
      </div>

      {/* Tutors Grid */}
      {loading ? (
        <Loading />
      ) : tutors.length === 0 ? (
        <p className="text-center text-red-500 font-semibold">
          No tutors found.
        </p>
      ) : (
        <div
          data-aos="fade-up"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {tutors.map((tutor, index) => (
            <motion.div
              key={tutor._id}
              data-aos="zoom-in-up"
              data-aos-delay={index * 100}
              whileHover={{
                scale: 1.03,
                rotateX: 4,
                rotateY: -4,
                transition: { type: "spring", stiffness: 200, damping: 15 },
              }}
              className="group relative bg-white/80 dark:bg-slate-800/70 rounded-2xl 
                         overflow-hidden shadow-lg hover:shadow-2xl border border-transparent 
                         hover:border-cyan-400 transition-all duration-500 cursor-pointer"
            >
              {/* Glow Border */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r 
                              from-cyan-950 via-cyan-700 to-cyan-950 opacity-0 
                              group-hover:opacity-100 blur-xl transition-all duration-700"></div>

              {/* Tutor Image */}
              <img
                src={tutor.image}
                alt={tutor.language}
                className="w-full h-44 object-cover rounded-t-2xl relative z-10"
              />

              {/* Tutor Info */}
              <div className="relative z-10 p-5">
                <h3 className="text-xl font-bold text-slate-800 dark:text-gray-100">
                  {tutor.userName}
                </h3>
                <p className="font-semibold text-teal-700 dark:text-teal-400">
                  Language: {tutor.language}
                </p>
                <p className="text-gray-600 dark:text-gray-300">
                  Price: ${tutor.price}
                </p>
                <p className="text-gray-600 dark:text-gray-300">
                  Review: {tutor.review}
                </p>

                <Link
                  to={`/tutor/${tutor._id}`}
                  className="block mt-4 text-center text-white bg-gradient-to-r 
                             from-teal-500 to-cyan-400 hover:from-teal-400 hover:to-cyan-300 
                             transition-all duration-300 hover:scale-105 shadow-lg 
                             shadow-cyan-400/30 font-semibold py-2 rounded-xl"
                >
                  View Details
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      )}
    </section>
  );
};

export default FindTutor;
