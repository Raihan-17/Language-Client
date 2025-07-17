import React from 'react';
import { Link } from 'react-router';

const ErrorPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg- text-center p-6">
    

      <h1 className="text-5xl font-extrabold text-slate-900 mb-4">
        Oops! Page Not Found
      </h1>
      <p className="text-3xl text-red-700 font-semibold mb-6">Error 404</p>

      <Link
        to="/"
        className="px-6 py-3 bg-black text-white rounded-xl shadow hover:bg-gray-700 transition"
      >
       Back to Home
      </Link>
    </div>
  );
};

export default ErrorPage;
