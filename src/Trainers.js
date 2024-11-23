import React, { useState } from 'react';
import { Star, Phone, Instagram, Twitter, Clock, Award, Mail } from 'lucide-react';
import trainer1 from '../src/screens/images/6160967845962432380.jpg'
import trainer2 from '../src/screens/images/keshav.jpg'
import trainer3 from '../src/screens/images/6160967845962432382.jpg'
const TrainersPage = () => {
  // const [selectedCategory, setSelectedCategory] = useState('all');

  const trainers = [
    {
      id: 1,
      name: "Ravi Dahiya",
      image: trainer1,
      role: "Yoga Instructor",
      experience: "8 years",
      rating: 4.9,
      reviews: 128,
      specialties: ["Vinyasa", "Yin Yoga", "Meditation"],
      description: "Dedicated yoga instructor focused on mindful movement and spiritual growth.",
      instagram: "sarahjohnson_yoga",
      twitter: "sarahj_yoga",
      phone: "555-0123",
      email: "sarah@example.com"
    },
    {
      id: 2,
      name: "Keshav Sharma",
      image: trainer2,
      role: "Strength Coach",
      experience: "6 years",
      rating: 4.8,
      reviews: 95,
      specialties: ["Powerlifting", "CrossFit", "Nutrition"],
      description: "Expert in strength training and functional fitness programming.",
      instagram: "mike_strength",
      twitter: "mikelee_fit",
      phone: "555-0124",
      email: "mike@example.com"
    },
    {
      id: 3,
      name: "Ravi Dahiya",
      image: trainer3,
      role: "Certified Personal Trainer",
      experience: "5 years",
      rating: 4.7,
      reviews: 87,
      specialties: ["Core Training", "Weight Loss"],
      description: "Passionate about helping clients achieve their fitness goals through high-intensity training.",
      instagram: "emma_hiit",
      twitter: "emma_fitness",
      phone: "555-0125",
      email: "emma@example.com"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-orange-500 to-orange-600 py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-white text-center mb-4">
            Meet Our Expert Trainers
          </h1>
          <p className="text-white text-center text-lg opacity-90">
            Transform your fitness journey with our certified professionals
          </p>
        </div>
      </div>

      {/* Trainers Grid */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {trainers.map((trainer) => (
            <div key={trainer.id} className="bg-white rounded-xl shadow-lg overflow-hidden transform transition hover:-translate-y-1">
              {/* Trainer Image */}
              <div className="relative">
                <img
                  src={trainer.image}
                  alt={trainer.name}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full shadow-md">
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 text-orange-500" />
                    <span className="text-sm font-semibold">{trainer.rating}</span>
                  </div>
                </div>
              </div>

              {/* Trainer Info */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-1">
                  {trainer.name}
                </h3>
                <p className="text-orange-600 font-medium mb-4">{trainer.role}</p>

                {/* Stats */}
                <div className="flex items-center gap-4 mb-4">
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-gray-400" />
                    <span className="text-sm text-gray-600">{trainer.experience}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Award className="w-4 h-4 text-gray-400" />
                    <span className="text-sm text-gray-600">{trainer.reviews} reviews</span>
                  </div>
                </div>

                {/* Specialties */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {trainer.specialties.map((specialty, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-orange-100 text-orange-600 rounded-full text-sm"
                    >
                      {specialty}
                    </span>
                  ))}
                </div>

                <p className="text-gray-600 mb-6">{trainer.description}</p>

                {/* Contact Buttons */}
                <div className="flex flex-col gap-3">
                  <a
                    href={`mailto:${trainer.email}`}
                    className="flex items-center justify-center gap-2 bg-orange-500 text-white py-2 rounded-lg hover:bg-orange-600 transition"
                  >
                    <Mail className="w-4 h-4" />
                    Contact via Email
                  </a>
                  <div className="flex gap-3">
                    <a
                      href={`tel:${trainer.phone}`}
                      className="flex-1 flex items-center justify-center gap-2 border border-gray-200 py-2 rounded-lg hover:bg-gray-50 transition"
                    >
                      <Phone className="w-4 h-4 text-gray-600" />
                      <span className="text-gray-600">Call</span>
                    </a>
                    <a
                      href={`https://instagram.com/${trainer.instagram}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 border border-gray-200 py-2 rounded-lg hover:bg-gray-50 transition"
                    >
                      <Instagram className="w-4 h-4 text-gray-600" />
                      <span className="text-gray-600">Instagram</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrainersPage;