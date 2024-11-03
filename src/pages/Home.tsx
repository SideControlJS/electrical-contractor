import React from 'react';
import { Link } from 'react-router-dom';
import { BoltIcon, ClockIcon, ShieldCheckIcon } from '@heroicons/react/24/outline';
import ImageGallery from '../components/ImageGallery';

const features = [
  {
    name: '24/7 Emergency Service',
    description: 'Round-the-clock support for all your electrical emergencies.',
    icon: ClockIcon,
  },
  {
    name: 'Licensed & Insured',
    description: 'Fully certified professionals you can trust.',
    icon: ShieldCheckIcon,
  },
  {
    name: 'Energy Efficient Solutions',
    description: 'Modern electrical solutions that save you money.',
    icon: BoltIcon,
  },
];

export default function Home() {
  return (
    <div className="bg-white">
      <div className="relative">
        <div className="absolute inset-0">
          <img
            className="w-full h-full object-cover"
            src="https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&w=2000&q=80"
            alt="Professional electricians at work"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50 mix-blend-multiply" />
        </div>
        <div className="relative">
          <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
            <div className="mx-auto max-w-2xl text-center text-white">
              <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
                Professional Electrical Services You Can Trust
              </h1>
              <p className="mt-6 text-lg leading-8">
                From residential repairs to commercial installations, we deliver excellence in every project.
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <Link
                  to="/book"
                  className="rounded-md bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                >
                  Book Now
                </Link>
                <Link to="/services" className="text-sm font-semibold leading-6 text-white">
                  View Services <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-16">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-blue-600">Why Choose Us</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Everything you need from your electrician
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.name} className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                  <feature.icon className="h-5 w-5 flex-none text-blue-600" aria-hidden="true" />
                  {feature.name}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">{feature.description}</p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>

      <div className="bg-gray-50 py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Our Recent Projects
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Take a look at some of our recent electrical installations and projects
            </p>
          </div>
          <ImageGallery />
        </div>
      </div>
    </div>
  );
}