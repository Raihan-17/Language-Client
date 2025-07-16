import { Link } from 'react-router';


const Banner = () => {
  return (
    <div 
      className="relative rounded-2xl bg-cover bg-center h-[500px] flex items-center justify-center my-10 "
      style={{ 
        backgroundImage: 'url(https://media.istockphoto.com/id/1491253370/vector/hand-raised-of-multicultural-people-from-different-nations-and-continents-holding-speech.jpg?s=1024x1024&w=is&k=20&c=7kHKbG7-f6f8xGoBLlivcwj_z_BeITsDgc1gO6zOtg8=)',
      }}
    >
        
      <div className="absolute rounded-2xl shadow-2xl  inset-0 bg-black opacity-70"></div>
      
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-teal-300 mb-4">
          Speak a New Language with Confidence
        </h1>
        <p className="text-xl md:text-2xl text-teal-100 mb-8">
          Join thousands of learners mastering languages with personalized 1-on-1 tutoring.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/learn-free"
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg transition duration-300"
          >
            Start Learning Free
          </Link>
          <Link
            to="/how-it-works"
            className="bg-black text-white hover:bg-white hover:text-gray-900 font-semibold px-6 py-4 rounded-lg transition duration-300"
          >
            How It Works
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;