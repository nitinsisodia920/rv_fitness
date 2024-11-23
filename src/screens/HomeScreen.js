import React, { useState } from 'react';
import { motion } from 'framer-motion';
import t from './images/tread.jpg'
import w from './images/weight.jpg'
import s from './images/bikes.jpg'
import r from './images/row.jpg'
import yoga from './images/yoga.jpg'
import spin from './images/spin.jpg'
import cross from './images/cross.jpg'
import about from './images/about.jpg'
import trainer1 from './images/6160967845962432380.jpg'
import trainer2 from './images/6160967845962432382.jpg'
import ke from './images/keshav.jpg'
import './HomeScreen.css'

const ArrowRightIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon-arrow">
    <line x1="5" y1="12" x2="19" y2="12"></line>
    <polyline points="12 5 19 12 12 19"></polyline>
  </svg>
);

const CheckCircleIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon-check">
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
    <polyline points="22 4 12 14.01 9 11.01"></polyline>
  </svg>
);

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.2
    }
  }
};

const fadeInUp = {
  initial: {
    opacity: 0,
    y: 60
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

const HomeScreen = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
  };

  const stagger = {
    initial: {},
    animate: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const trainers = [
    {
      name: "Ravi Dahiya",
      title: "Certified Personal Trainer",
      image: trainer1
    },
    {
      name: "Keshav Sharma",
      title: "Strength and Conditioning Coach",
      image: ke
    },
    {
      name: "Ravi Dahiya",
      title: "Yoga and Pilates Instructor",
      image: trainer2
    },
    {
      name: "Rajat Jaat",
      title: "Cardio Trainer",
      image: about
    }
  ];

  return (
    <div className="page-wrapper">
      {/* Hero Section */}
      <div className="hero">
        <div className="hero-background" style={{ backgroundImage: `url(${about})` }}></div>
        <motion.div
          className="hero-content container"
          variants={fadeInUp}
          initial="initial"
          animate="animate"
        >
          <h1 className="hero-title">Welcome to Fit Gym</h1>
          <p className="hero-subtitle">
            Experience the ultimate fitness destination with state-of-the-art equipment and expert trainers.
          </p>
          <div className="button-wrapper">
            <motion.button className="btn btn-primary" variants={fadeInUp}>
              <a href="/subscription">Join Now</a>
              <ArrowRightIcon />
            </motion.button>
          </div>
        </motion.div>
      </div>

      {/* Gym Facilities Section */}
      <motion.section className="section" variants={stagger} initial="initial" animate="animate">
        <div className="container">
          <h2 className="section-title">Our Gym Facilities</h2>
          <div className="grid grid-3">
            <motion.div className="feature-card" variants={fadeInUp}>
              <div className="feature-header">
                <CheckCircleIcon />
                <h3>State-of-the-Art Equipment</h3>
              </div>
              <p>Our gym is equipped with the latest fitness technology and machines to help you reach your goals.</p>
            </motion.div>
            <motion.div className="feature-card" variants={fadeInUp}>
              <div className="feature-header">
                <CheckCircleIcon />
                <h3>Expert Trainers</h3>
              </div>
              <p>Our team of certified trainers are here to guide you and help you achieve your fitness objectives.</p>
            </motion.div>
            <motion.div className="feature-card" variants={fadeInUp}>
              <div className="feature-header">
                <CheckCircleIcon />
                <h3>Personalized Programs</h3>
              </div>
              <p>We offer customized workout plans to cater to your specific needs and fitness level.</p>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Gym Equipment Section */}
      <motion.section className="section bg-light" variants={stagger} initial="initial" animate="animate">
        <div className="container">
          <h2 className="section-title">Explore Our Gym Equipment</h2>
          <div className="grid grid-4">
            <motion.div variants={fadeInUp}>
              {/* <a href="/treadmill" className="equipment-card"> */}
                <img src={t} alt="Treadmills" />
                <h3>Treadmills</h3>
              {/* </a> */}
            </motion.div>
            <motion.div variants={fadeInUp}>
              {/* <a href="/weight-lifting" className="equipment-card"> */}
                <img src={w} alt="Weight Lifting" />
                <h3>Weight Lifting</h3>
              {/* </a> */}
            </motion.div>
            <motion.div variants={fadeInUp}>
              {/* <a href="/stationary-bikes" className="equipment-card"> */}
                <img src={s} alt="Stationary Bikes" />
                <h3>Stationary Bikes</h3>
              {/* </a> */}
            </motion.div>
            <motion.div variants={fadeInUp}>
              {/* <a href="/rowing-machines" className="equipment-card"> */}
                <img src={r} alt="Rowing Machines" />
                <h3>Rowing Machines</h3>
              {/* </a> */}
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Membership Plans Section */}
      {/* <motion.section className="section" variants={stagger} initial="initial" animate="animate">
        <div className="container">
          <h2 className="section-title">Membership Plans</h2>
          <div className="grid grid-3">
            <motion.div className="pricing-card" variants={fadeInUp}>
              <h3>Basic</h3>
              <p className="price">₹1500/mo</p>
              <ul className="features-list">
                <li>Access to Gym Equipment</li>
                <li>Basic Fitness Classes</li>
                <li>Limited Personal Training</li>
              </ul>
              <a href="/subscription" className="btn btn-primary">Join Now</a>
            </motion.div>
            <motion.div className="pricing-card featured" variants={fadeInUp}>
              <h3>Premium</h3>
              <p className="price">₹2000/mo</p>
              <ul className="features-list">
                <li>Unlimited Gym Equipment Access</li>
                <li>All Fitness Classes</li>
                <li>Personalized Training Plans</li>
              </ul>
              <a href="/subscription" className="btn btn-primary">Join Now</a>
            </motion.div>
            <motion.div className="pricing-card" variants={fadeInUp}>
              <h3>Family</h3>
              <p className="price">₹15000/mo</p>
              <ul className="features-list">
                <li>Access for 2 Adults and 2 Children</li>
                <li>All Gym Facilities and Classes</li>
                <li>Exclusive Family Events</li>
              </ul>
              <a href="/subscription" className="btn btn-primary">Join Now</a>
            </motion.div>
          </div>
        </div>
      </motion.section> */}

      {/* Trainers Section */}
      <motion.section 
      className="bg-gray-50 py-16"
      variants={stagger}
      initial="initial"
      animate="animate"
    >
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Meet Our Trainers</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {trainers.map((trainer, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <img
                src={trainer.image}
                alt={trainer.name}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{trainer.name}</h3>
                <p className="text-gray-600">{trainer.title}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>


      {/* Classes Section */}
      <motion.section className="section" variants={stagger} initial="initial" animate="animate">
        <div className="container">
          <h2 className="section-title">Our Classes</h2>
          <div className="grid grid-3">
            <motion.div className="class-card" variants={fadeInUp}>
              <img src={yoga} alt="Yoga" />
              <h3>Yoga</h3>
              <p>Improve flexibility and inner peace.</p>
            </motion.div>
            <motion.div className="class-card" variants={fadeInUp}>
              <img src={spin} alt="Spin" />
              <h3>Spin</h3>
              <p>High-intensity cardio workout on stationary bikes.</p>
            </motion.div>
            <motion.div className="class-card" variants={fadeInUp}>
              <img src={cross} alt="CrossFit" />
              <h3>CrossFit</h3>
              <p>Challenging functional fitness program.</p>
            </motion.div>
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default HomeScreen;