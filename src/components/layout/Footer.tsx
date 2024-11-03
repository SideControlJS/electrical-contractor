import React from 'react';
import { Link } from 'react-router-dom';
import { BoltIcon } from '@heroicons/react/24/outline';

export default function Footer() {
  return (
    <footer className="bg-gray-900">
      <div className="mx-auto max-w-7xl px-6 py-12 md:flex md:items-center md:justify-between lg:px-8">
        <div className="flex justify-center space-x-6 md:order-2">
          <Link to="/contact" className="text-gray-400 hover:text-gray-300">
            Contact
          </Link>
          <Link to="/services" className="text-gray-400 hover:text-gray-300">
            Services
          </Link>
          <Link to="/book" className="text-gray-400 hover:text-gray-300">
            Book Service
          </Link>
        </div>
        <div className="mt-8 md:order-1 md:mt-0 flex items-center">
          <div className="flex items-center">
            <BoltIcon className="h-8 w-8 text-blue-500" aria-hidden="true" />
            <span className="ml-2 text-xl font-extrabold tracking-tight text-white font-mono">
              VOLT <span className="text-blue-500">&</span> SURGE
            </span>
          </div>
          <p className="ml-4 text-xs leading-5 text-gray-400">
            &copy; {new Date().getFullYear()} Volt & Surge Electric. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}