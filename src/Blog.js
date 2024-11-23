import React, { useState } from 'react';
import { Dumbbell, Users, Clock, Trophy, Star } from 'lucide-react';
import ke from '../src/screens/images/6160967845962432380.jpg';
import head from '../src/screens/images/6160967845962432331.jpg';
import e from '../src/screens/images/6160967845962432334.jpg';
import w from '../src/screens/images/6160967845962432336.jpg';
import q from '../src/screens/images/6160967845962432340.jpg';
import gym from '../src/screens/images/WhatsApp Image 2024-11-10 at 14.35.23_78261755.jpg';

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const images = [
    { id: 1, category: "RV Fitness", src: ke },
    { id: 2, category: "RV Fitness", src: head },
    { id: 3, category: "RV Fitness", src: q },
    { id: 4, category: "RV Fitness", src: w },
    { id: 5, category: "RV Fitness", src: e },
    { id: 6, category: "RV Fitness", src: gym }
  ];

  const features = [
    {
      icon: <Dumbbell className="w-6 h-6" />,
      title: "State-of-the-Art Equipment",
      description: "Access to the latest fitness equipment and machines for all your workout needs"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Expert Trainers",
      description: "Professional certified trainers to guide you through your fitness journey"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Flexible Hours",
      description: "Open 7 days a week with extended hours to fit your schedule"
    }
  ];

  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Member since 2023",
      content: "RV Fitness has transformed my life. The trainers are exceptional and the community is so supportive.",
      rating: 5
    },
    {
      id: 2,
      name: "Mike Peterson",
      role: "Member since 2022",
      content: "Best gym I've ever been to. The equipment is always well-maintained and the atmosphere is motivating.",
      rating: 5
    }
  ];

  const filteredImages = selectedCategory === 'all' 
    ? images 
    : images.filter(img => img.category === selectedCategory);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative h-96">
        <img 
          src={e}
          alt="Hero"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-orange-500 bg-opacity-30 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Welcome to RV Fitness</h1>
            <p className="text-xl md:text-2xl">Transform Your Body, Transform Your Life</p>
          </div>
        </div>
      </div>

      {/* About Section */}
      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">About RV Fitness</h2>
            <p className="text-gray-600 mb-8">
              RV Fitness is more than just a gym - it's a community dedicated to helping you achieve your fitness goals. 
              With state-of-the-art equipment, expert trainers, and a supportive atmosphere, we provide everything you 
              need to succeed in your fitness journey.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                  <div className="text-orange-500 mb-4">{feature.icon}</div>
                  <h3 className="font-bold mb-2">{feature.title}</h3>
                  <p className="text-gray-600 text-sm">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Gallery Section */}
      <div className="container mx-auto px-4 py-16">
        {/* <h2 className="text-3xl font-bold text-center mb-8">Our Facility</h2> */}
        <div className="flex justify-center space-x-4 mb-8">
          <button 
            onClick={() => setSelectedCategory('all')}
            className={`px-6 py-2 rounded-full transition-colors ${
              selectedCategory === 'all' 
                ? 'bg-orange-500 text-white' 
                : 'bg-orange-100 text-orange-500 hover:bg-orange-200'
            }`}
          >
            RV Fitness Gym
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredImages.map((image) => (
            <div 
              key={image.id} 
              className="group relative hover:shadow-xl transition-shadow rounded-lg overflow-hidden"
            >
              <img 
                src={image.src}
                alt=""
                className="w-full h-80 object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute top-4 right-4">
                <span className="px-3 py-1 bg-orange-500 text-white text-sm rounded-full">
                  {image.category}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">What Our Members Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4">{testimonial.content}</p>
                <div>
                  <p className="font-bold">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-orange-500 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Your Fitness Journey?</h2>
          <p className="mb-8">Join RV Fitness today and transform your life with our expert guidance and support.</p>
          <button className="bg-white text-orange-500 px-8 py-3 rounded-full font-bold hover:bg-gray-100 transition-colors">
            Join Now
          </button>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-bold mb-4">RV Fitness</h3>
              <p className="text-gray-400">Transform your body, transform your life.</p>
            </div>
            <div>
              <h3 className="font-bold mb-4">Hours</h3>
              <p className="text-gray-400">Monday - Friday: 5:00 AM - 10:00 PM</p>
              <p className="text-gray-400">Saturday - Sunday: 6:00 AM - 8:00 PM</p>
            </div>
            <div>
              <h3 className="font-bold mb-4">Contact</h3>
              <p className="text-gray-400">123 Fitness Street</p>
              <p className="text-gray-400">Phone: (555) 123-4567</p>
              <p className="text-gray-400">Email: info@rvfitness.com</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Blog;