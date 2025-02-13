// src/pages/Industries.tsx
import React from "react";
import { motion } from "framer-motion";
import { Briefcase, ShoppingCart, Banknote, GraduationCap, Stethoscope, ShieldCheck } from "lucide-react";

const industries = [
  {
    icon: <Briefcase size={40} />,
    title: "Business & Enterprise",
    description: "Enterprise-grade software solutions for workflow automation and management.",
  },
  {
    icon: <ShoppingCart size={40} />,
    title: "E-Commerce",
    description: "Scalable e-commerce platforms with secure payment gateways and real-time analytics.",
  },
  {
    icon: <Banknote size={40} />,
    title: "Finance & Fintech",
    description: "Secure and efficient financial applications with AI-powered insights and fraud detection.",
  },
  {
    icon: <GraduationCap size={40} />,
    title: "Education",
    description: "Innovative e-learning platforms, virtual classrooms, and student management systems.",
  },
  {
    icon: <Stethoscope size={40} />,
    title: "Healthcare",
    description: "Advanced telemedicine apps, patient record systems, and AI-based diagnostics.",
  },
  {
    icon: <ShieldCheck size={40} />,
    title: "Cybersecurity",
    description: "Robust cybersecurity solutions to safeguard digital assets from cyber threats.",
  },
];

const Industries = () => {
  return (
    <div className="pt-24 pb-16">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-12"
      >
        <h1 className="text-5xl font-bold text-gray-900">
          Industries We <span className="text-sky-600">Serve</span>
        </h1>
        <p className="text-lg text-gray-600 mt-4">
          We provide cutting-edge technology solutions across multiple industries.
        </p>
      </motion.div>

      {/* Industry Cards Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto px-4"
      >
        {industries.map((industry, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="bg-white rounded-lg shadow-lg p-8 flex flex-col items-center hover:shadow-xl transition-shadow"
          >
            <div className="text-sky-600 mb-4">{industry.icon}</div>
            <h3 className="text-2xl font-bold text-gray-900">{industry.title}</h3>
            <p className="text-gray-600 mt-2 text-center">{industry.description}</p>
          </motion.div>
        ))}
      </motion.div>

      {/* Why Choose Us Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="mt-16 max-w-6xl mx-auto px-4 text-center"
      >
        <h2 className="text-4xl font-bold text-gray-900">Why Choose Solve Vare?</h2>
        <p className="text-lg text-gray-600 mt-4">
          Our expertise spans across industries, offering custom software solutions that drive success.
        </p>

        <div className="grid md:grid-cols-3 gap-8 mt-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-sky-50 p-8 rounded-lg"
          >
            <h3 className="text-xl font-bold text-gray-900 mb-2">Industry Expertise</h3>
            <p className="text-gray-600">We understand the unique challenges of different sectors.</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-sky-50 p-8 rounded-lg"
          >
            <h3 className="text-xl font-bold text-gray-900 mb-2">Cutting-Edge Technology</h3>
            <p className="text-gray-600">We integrate the latest tools to create future-ready solutions.</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="bg-sky-50 p-8 rounded-lg"
          >
            <h3 className="text-xl font-bold text-gray-900 mb-2">Customer-Centric Approach</h3>
            <p className="text-gray-600">We focus on delivering value-driven solutions tailored to your needs.</p>
          </motion.div>
        </div>
      </motion.div>

      {/* Testimonials Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="mt-16 text-center"
      >
        <h2 className="text-3xl font-bold text-gray-900">What Our Clients Say</h2>
        <p className="text-lg text-gray-600 mt-4">Hear from businesses that trust Solve Vare.</p>

        <div className="max-w-4xl mx-auto mt-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-white p-6 rounded-lg shadow-lg text-left"
          >
            <p className="text-gray-700">
              "Solve Vare transformed our e-commerce business with a seamless, user-friendly platform.
              Their expertise is unmatched!"
            </p>
            <p className="mt-4 font-bold text-gray-900">– Sarah Thompson, CEO of TechCommerce</p>
          </motion.div>
        </div>
      </motion.div>

      {/* CTA Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="mt-16 text-center"
      >
        <h2 className="text-3xl font-bold text-gray-900">Let’s Build the Future Together</h2>
        <p className="text-lg text-gray-600 mt-2">Partner with us to create industry-leading solutions.</p>
        <a
          href="/contact"
          className="mt-6 inline-block bg-sky-600 text-white px-8 py-3 rounded-md hover:bg-sky-700 transition-colors"
        >
          Get in Touch
        </a>
      </motion.div>
    </div>
  );
};

export default Industries;
