
import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 bg-gradient-to-b from-white to-kudevs-gray-50">
      <h1 className="text-6xl font-bold text-kudevs-gray-800 mb-4">404</h1>
      <h2 className="text-2xl font-semibold text-kudevs-gray-800 mb-4">Page Not Found</h2>
      <p className="text-kudevs-gray-800 mb-8 text-center max-w-md">
        The page you are looking for doesn't exist or has been moved.
      </p>
      <Link 
        to="/" 
        className="btn-primary"
      >
        Return Home
      </Link>
    </div>
  );
};

export default NotFound;
