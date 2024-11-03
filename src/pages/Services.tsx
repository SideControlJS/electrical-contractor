import React from 'react';
import { Link } from 'react-router-dom';
import {
  HomeIcon,
  BuildingOfficeIcon,
  WrenchScrewdriverIcon,
  BoltIcon,
  LightBulbIcon,
  CpuChipIcon,
} from '@heroicons/react/24/outline';

const services = [
  {
    name: 'Residential Services',
    description: 'Complete home electrical solutions including wiring, repairs, installations, and upgrades.',
    icon: HomeIcon,
    image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2069&q=80',
    features: [
      'Electrical panel upgrades',
      'Outlet and switch installation',
      'Lighting installation',
      'Home safety inspections',
      'Surge protection',
    ],
  },
  {
    name: 'Commercial Services',
    description: 'Professional electrical services for businesses, offices, and commercial properties.',
    icon: BuildingOfficeIcon,
    image: 'https://images.unsplash.com/photo-1565608087341-404b25492fee?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
    features: [
      'Commercial wiring',
      'Lighting systems',
      'Emergency power systems',
      'Code compliance',
      'Energy efficiency solutions',
    ],
  },
  {
    name: 'Emergency Services',
    description: '24/7 emergency electrical services for both residential and commercial clients.',
    icon: WrenchScrewdriverIcon,
    image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
    features: [
      'Power outages',
      'Electrical failures',
      'Circuit breaker issues',
      'Emergency repairs',
      'Safety hazards',
    ],
  },
  {
    name: 'Energy Solutions',
    description: 'Energy-efficient solutions to reduce your power consumption and costs.',
    icon: BoltIcon,
    image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
    features: [
      'Energy audits',
      'LED lighting upgrades',
      'Smart home integration',
      'Solar panel installation',
      'Energy monitoring',
    ],
  },
  {
    name: 'Lighting Design',
    description: 'Custom lighting solutions for homes and businesses.',
    icon: LightBulbIcon,
    image: 'https://images.unsplash.com/photo-1565814329452-e1efa11c5b89?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
    features: [
      'Interior lighting design',
      'Exterior lighting',
      'Landscape lighting',
      'Security lighting',
      'Smart lighting systems',
    ],
  },
  {
    name: 'Smart Systems',
    description: 'Modern smart home and building automation solutions.',
    icon: CpuChipIcon,
    image: 'https://images.unsplash.com/photo-1558002038-1055907df827?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
    features: [
      'Smart home installation',
      'Automated controls',
      'Security systems',
      'Climate control',
      'Remote monitoring',
    ],
  },
];

export default function Services() {
  return (
    <div className="bg-gradient-to-b from-gray-50 to-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Our Services</h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Professional electrical services for residential and commercial needs. Our licensed electricians
            are ready to help with any electrical project, big or small.
          </p>
        </div>
        
        <div className="mx-auto mt-16 grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.name}
              className="flex flex-col overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm hover:shadow-lg transition-all duration-300 hover:border-blue-500"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.name}
                  className="w-full h-full object-cover transform transition-transform duration-300 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60" />
                <service.icon className="absolute bottom-4 right-4 h-8 w-8 text-white" aria-hidden="true" />
              </div>
              <div className="flex-1 p-6 bg-white">
                <dt className="text-xl font-semibold leading-7 text-gray-900">
                  {service.name}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col">
                  <p className="flex-auto text-base leading-7 text-gray-600">{service.description}</p>
                  <ul className="mt-4 space-y-2 text-sm text-gray-600">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center">
                        <span className="mr-2 text-blue-600">•</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </dd>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Link
            to="/book"
            className="rounded-md bg-blue-600 px-6 py-3 text-base font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
          >
            Book a Service
          </Link>
        </div>
      </div>
    </div>
  );
}