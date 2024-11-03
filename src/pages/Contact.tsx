import React from 'react';
import { useForm } from 'react-hook-form';
import { EnvelopeIcon, PhoneIcon, MapPinIcon } from '@heroicons/react/24/outline';

// ... types and contactInfo remain the same ...

export default function Contact() {
  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    // ... onSubmit logic remains the same ...
  };

  return (
    <div className="bg-gradient-to-b from-gray-50 to-white">
      <div className="relative isolate">
        <div className="mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-2">
          <div className="relative px-6 pb-20 pt-24 sm:pt-32 lg:static lg:px-8 lg:py-48">
            <div className="mx-auto max-w-xl lg:mx-0 lg:max-w-lg">
              <div className="absolute inset-y-0 left-0 -z-10 w-full overflow-hidden bg-gray-100 ring-1 ring-gray-900/10 lg:w-1/2">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-gray-50" />
              </div>
              <h2 className="text-3xl font-bold tracking-tight text-gray-900">Get in touch</h2>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Have questions about our services? Need an estimate for your project? 
                We're here to help. Contact us today and let's discuss your electrical needs.
              </p>
              <dl className="mt-10 space-y-4 text-base leading-7 text-gray-600">
                {contactInfo.map((item) => (
                  <div key={item.name} className="flex gap-x-4">
                    <dt className="flex-none">
                      <span className="sr-only">{item.name}</span>
                      <item.icon className="h-7 w-6 text-blue-600" aria-hidden="true" />
                    </dt>
                    <dd>{item.description}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
          <form onSubmit={handleSubmit(onSubmit)} className="px-6 pb-24 pt-20 sm:pb-32 lg:px-8 lg:py-48">
            <div className="mx-auto max-w-xl lg:mr-0 lg:max-w-lg">
              <div className="grid grid-cols-1 gap-y-6">
                {/* ... form fields remain the same ... */}
              </div>
              <div className="mt-8 flex justify-end">
                <button
                  type="submit"
                  className="rounded-md bg-blue-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                >
                  Send Message
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}