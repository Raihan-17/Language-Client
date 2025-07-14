import React from 'react';
import { Link } from 'react-router';
// import { Helmet } from 'react-helmet-async';

const ErrorPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-green-50 to-green-200 text-center p-6">
      {/* <Helmet>
        <title>Error - Page Not Found</title>
      </Helmet> */}

      <img
        src="https://cdn-icons-png.flaticon.com/512/2909/2909766.png" // garden icon
        alt="Lost in the garden"
        className="w-32 h-32 mb-6"
      />

      <h1 className="text-5xl font-extrabold text-green-900 mb-4">
        Oops! Page Not Found
      </h1>
      <p className="text-2xl text-red-600 font-semibold mb-6">Error 404</p>

      <p className="text-lg text-gray-700 mb-6 max-w-md">
        It looks like you've wandered off the garden path. But don’t worry, you can always get back to greener grounds.
      </p>

      <Link
        to="/"
        className="px-6 py-3 bg-green-600 text-white rounded-lg shadow hover:bg-green-700 transition"
      >
        🌿 Back to Home
      </Link>
    </div>
  );
};

export default ErrorPage;
