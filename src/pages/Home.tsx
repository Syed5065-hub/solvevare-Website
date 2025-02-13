import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center">
        <div className="absolute inset-0 bg-gradient-to-r from-sky-100 to-blue-50 z-0" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Transforming Ideas into
              <span className="text-sky-600"> Digital Reality</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              We are a leading software house dedicated to delivering innovative solutions
              that drive business growth and technological advancement.
            </p>
            <div className="flex justify-center gap-4">
              <Link
                to="/contact"
                className="bg-sky-600 text-white px-8 py-3 rounded-md hover:bg-sky-700 transition-colors inline-flex items-center"
              >
                Get Started
                <ArrowRight className="ml-2" size={20} />
              </Link>
              <Link
                to="/portfolio"
                className="border-2 border-sky-600 text-sky-600 px-8 py-3 rounded-md hover:bg-sky-50 transition-colors"
              >
                View Our Work
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Us</h2>
            <p className="text-xl text-gray-600">We combine innovation with expertise to deliver exceptional results</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-sky-50 p-8 rounded-lg"
              >
                <div className="text-sky-600 mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

const features = [
  {
    icon: '🚀',
    title: 'Innovation First',
    description: 'We stay ahead of technological trends to deliver cutting-edge solutions.',
  },
  {
    icon: '💡',
    title: 'Expert Team',
    description: 'Our skilled professionals bring years of industry experience to every project.',
  },
  {
    icon: '🎯',
    title: 'Result Driven',
    description: 'We focus on delivering measurable results that drive business growth.',
  },
];

export default Home;