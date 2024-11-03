import React from 'react';

const images = [
  {
    url: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=800&q=80',
    alt: 'Electrician working on circuit board',
    caption: 'Professional electrical installations'
  },
  {
    url: 'https://images.unsplash.com/photo-1613665813446-82a78c468a1d?auto=format&fit=crop&w=800&q=80',
    alt: 'Industrial electrical panel',
    caption: 'Commercial electrical services'
  },
  {
    url: 'https://images.unsplash.com/photo-1558346547-4439467bd1d5?auto=format&fit=crop&w=800&q=80',
    alt: 'Modern home lighting installation',
    caption: 'Residential lighting solutions'
  },
  {
    url: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80',
    alt: 'Smart home automation',
    caption: 'Smart home technology'
  }
];

export default function ImageGallery() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
      {images.map((image, index) => (
        <div key={index} className="relative group overflow-hidden rounded-lg shadow-lg">
          <img
            src={image.url}
            alt={image.alt}
            className="w-full h-64 object-cover transform transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
            <p className="text-white text-sm font-medium">{image.caption}</p>
          </div>
        </div>
      ))}
    </div>
  );
}