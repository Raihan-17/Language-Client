import { Link } from "react-router";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Banner = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 120,
      easing: "ease-in-out",
    });
  }, []);

  return (
    <section className="relative overflow-hidden my-12 rounded-3xl bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white">
      <div className="flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto px-6 py-16 gap-10">

        {/* === Left: Text Content (60%) === */}
        <div
          data-aos="fade-right"
          className="w-full md:w-3/5 space-y-6 text-left"
        >
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight text-transparent bg-clip-text bg-gradient-to-r from-teal-300 to-cyan-400 drop-shadow-lg">
            Speak a New Language with Confidence
          </h1>
          <p className="text-lg md:text-xl text-slate-200 leading-relaxed">
            Join thousands of learners mastering languages with personalized 1-on-1 tutoring — interactive, fun, and effective. Your path to fluency starts here.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Link
              to="/learn-free"
              className="px-8 py-3 font-semibold text-lg rounded-xl text-white bg-gradient-to-r from-teal-500 to-cyan-400 hover:from-teal-400 hover:to-cyan-300 transition-all duration-300 hover:scale-105 shadow-lg shadow-cyan-400/30"
            >
              Start Learning Free
            </Link>
            <Link
              to="/how-it-works"
              className="px-8 py-3 font-semibold text-lg rounded-xl bg-white/90 text-slate-900 hover:bg-white transition-all duration-300 hover:scale-105 shadow-md"
            >
              How It Works
            </Link>
          </div>
        </div>

        {/* === Right: Image (40%) with AOS === */}
        <div
          data-aos="fade-left"
          data-aos-delay="200"
          className="w-full md:w-2/5 relative"
        >
          <div className="relative overflow-hidden rounded-2xl shadow-2xl">
            <img
              src="https://media.istockphoto.com/id/2168600948/photo/multilingual-language-translation-technology-concept-a-person-holding-holographic-globe-with.jpg?s=1024x1024&w=is&k=20&c=fkvDpdoMkYySoSn97uTjAwgBLUnFtGPEN22RIPqNSMA="
              alt="Language Learning"
              className="w-full h-[400px] object-cover scale-105 hover:scale-110 transition-transform duration-700 ease-in-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Banner;
