import React, { useEffect } from 'react';
import r from './screens/images/aboutside.avif';
import a from './screens/images/aboutback.avif'
import s from './screens/images/shoulder.avif'
const Aboutus = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100', 'translate-y-0');
            entry.target.classList.remove('opacity-0', 'translate-y-8');
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('.animate-on-scroll').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div 
        className="relative min-h-screen bg-cover bg-center flex items-center"
        style={{ 
          backgroundImage: `url(${a})`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-7xl font-bold text-white mb-6">
              PUSH YOUR
              <span className="text-orange-500 block mt-2">LIMITS</span>
            </h1>
            <p className="text-xl text-white/90 mb-8 max-w-2xl">
              Experience the ultimate fitness journey in our state-of-the-art facility. 
              Where champions are made and limits are broken.
            </p>
            <button className="bg-orange-500 text-white px-8 py-4 text-lg rounded-lg 
              hover:bg-orange-600 transition-colors duration-300 shadow-lg">
              Start Your Journey
            </button>
          </div>
        </div>
      </div>

      {/* About Section */}
      <div className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700">
              <h2 className="text-5xl font-bold text-orange-500 mb-8">
                About Our Gym
              </h2>
              <p className="text-gray-700 text-lg leading-relaxed mb-8">
                Welcome to a place where fitness meets passion. Our gym is more than just a workout 
                space – it's a community of dedicated individuals striving for greatness.
              </p>
              <div className="grid grid-cols-2 gap-6">
                {[
                  { number: "5000+", text: "Happy Members" },
                  { number: "50+", text: "Expert Trainers" },
                  { number: "100+", text: "Weekly Classes" },
                  { number: "24/7", text: "Gym Access" }
                ].map((stat, index) => (
                  <div key={index} className="text-center p-6 bg-orange-50 rounded-lg">
                    <div className="text-3xl font-bold text-orange-500 mb-2">{stat.number}</div>
                    <div className="text-gray-600">{stat.text}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 delay-200">
              <img 
                src={r} 
                alt="Gym Equipment" 
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-orange-500 text-white p-6 rounded-lg shadow-xl">
                <p className="text-2xl font-bold">10+ Years</p>
                <p>of Excellence</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div 
        className="relative py-20 bg-cover bg-fixed bg-center"
        style={{ 
          backgroundImage: `url(${s})`,
        }}
      >
        <div className="absolute inset-0 bg-black/80" />
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-4xl font-bold text-center text-white mb-16">
            Why Choose <span className="text-orange-500">Our Gym</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: "💪",
                title: "Premium Equipment",
                description: "Latest fitness technology and premium equipment for optimal results"
              },
              {
                icon: "👥",
                title: "Expert Trainers",
                description: "Certified professionals to guide you through your fitness journey"
              },
              {
                icon: "🎯",
                title: "Custom Programs",
                description: "Personalized workout plans tailored to your specific goals"
              },
              {
                icon: "🌟",
                title: "Luxury Amenities",
                description: "Modern facilities with premium amenities for your comfort"
              },
              {
                icon: "🤝",
                title: "Community Events",
                description: "Regular fitness challenges and community building events"
              },
              {
                icon: "📱",
                title: "Digital Support",
                description: "Track your progress with our cutting-edge fitness app"
              }
            ].map((feature, index) => (
              <div 
                key={index}
                className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="bg-white/10 backdrop-blur-lg p-8 rounded-xl border border-white/20 
                  hover:bg-white/20 transition-colors duration-300">
                  <span className="text-4xl mb-4 block">{feature.icon}</span>
                  <h3 className="text-xl font-bold text-orange-500 mb-3">{feature.title}</h3>
                  <p className="text-white/80">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Ready to Start Your <span className="text-orange-500">Fitness Journey?</span>
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Join our community today and transform your life with the best fitness experience 
              in town. First week trial absolutely free!
            </p>

          </div>
        </div>
      </div>

      {/* Testimonial Section */}
      <div 
        className="relative py-20 bg-cover bg-center"
        style={{ 
          backgroundImage: 'url("src/screens/images/richard-r-7FHRmokQn_w-unsplash.jpg")',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-orange-500/90 to-orange-600/90" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h2 className="text-4xl font-bold mb-12">What Our Members Say</h2>
            <div className="text-2xl italic mb-8">
              "This gym has completely transformed my life. The trainers are exceptional and the 
              community is incredibly supportive. Best decision I've ever made!"
            </div>
            <div className="flex items-center justify-center">
              <img 
                src="/api/placeholder/100/100" 
                alt="Member" 
                className="w-16 h-16 rounded-full mr-4"
              />
              <div className="text-left">
                <div className="font-bold">Sarah Johnson</div>
                <div className="text-white/80">Member since 2022</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Aboutus;