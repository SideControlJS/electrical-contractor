import React from 'react';
import { Link } from 'react-router-dom';

// ... projects array remains the same ...

export default function Projects() {
  return (
    <div className="bg-gradient-to-b from-gray-50 to-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Our Projects</h2>
          <p className="mt-4 text-lg text-gray-600">
            Explore our portfolio of successful electrical projects across residential, commercial, and industrial sectors.
          </p>
        </div>
        
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-12 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {projects.map((project, index) => (
            <article key={index} className="flex flex-col items-start rounded-xl bg-white shadow-sm hover:shadow-lg transition-all duration-300">
              <div className="relative w-full">
                <img
                  src={project.image}
                  alt={project.title}
                  className="aspect-[16/9] w-full object-cover sm:aspect-[2/1] lg:aspect-[3/2] rounded-t-xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-gray-900/0 rounded-t-xl" />
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <div className="flex items-center gap-x-4 text-xs">
                  <time className="text-gray-500">{project.completionDate}</time>
                  <span className="relative z-10 rounded-full bg-blue-100 px-3 py-1.5 font-medium text-blue-600">
                    {project.category}
                  </span>
                </div>
                <div className="group relative">
                  <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900">
                    {project.title}
                  </h3>
                  <p className="mt-5 text-sm leading-6 text-gray-600">{project.description}</p>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Link
            to="/contact"
            className="rounded-md bg-blue-600 px-6 py-3 text-base font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
          >
            Discuss Your Project
          </Link>
        </div>
      </div>
    </div>
  );
}