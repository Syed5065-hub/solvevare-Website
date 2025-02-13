// src/pages/About.tsx
import React from "react";
import { motion } from "framer-motion";
import { Users, ShieldCheck, Star, Lightbulb, Code, Target } from "lucide-react";

const teamMembers = [
  {
    name: "John Doe",
    position: "CEO & Founder",
    image: "https://source.unsplash.com/200x200/?portrait",
  },
  {
    name: "Sarah Thompson",
    position: "CTO",
    image: "https://source.unsplash.com/200x200/?businesswoman",
  },
  {
    name: "Michael Lee",
    position: "Lead Developer",
    image: "https://source.unsplash.com/200x200/?developer",
  },
];

const About = () => {
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
          About <span className="text-sky-600">Solve Vare</span>
        </h1>
        <p className="text-lg text-gray-600 mt-4 max-w-3xl mx-auto">
          We are a team of passionate professionals dedicated to providing cutting-edge software solutions
          that drive business success.
        </p>
      </motion.div>

      {/* Mission & Vision Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 px-6"
      >
        <div className="bg-sky-50 p-8 rounded-lg shadow-lg">
          <h3 className="text-3xl font-bold text-gray-900 mb-4">Our Mission</h3>
          <p className="text-gray-600">
            To empower businesses with innovative technology solutions that enhance efficiency, scalability, and profitability.
          </p>
        </div>
        <div className="bg-blue-50 p-8 rounded-lg shadow-lg">
          <h3 className="text-3xl font-bold text-gray-900 mb-4">Our Vision</h3>
          <p className="text-gray-600">
            To be a global leader in software development, delivering transformative digital experiences to businesses worldwide.
          </p>
        </div>
      </motion.div>

      {/* Our Team Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="mt-16 text-center"
      >
        <h2 className="text-3xl font-bold text-gray-900">Meet Our Team</h2>
        <div className="flex justify-center gap-8 mt-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="bg-white p-6 rounded-lg shadow-lg"
            >
              <img src={member.image} alt={member.name} className="rounded-full w-24 mx-auto" />
              <h3 className="text-xl font-bold mt-4">{member.name}</h3>
              <p className="text-gray-500">{member.position}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Core Values Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="mt-16 max-w-6xl mx-auto px-6"
      >
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">Our Core Values</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { icon: <Star size={40} />, title: "Excellence", description: "We strive for excellence in everything we do." },
            { icon: <ShieldCheck size={40} />, title: "Integrity", description: "We operate with honesty and strong moral principles." },
            { icon: <Lightbulb size={40} />, title: "Innovation", description: "We embrace creativity and new ideas to stay ahead." },
          ].map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-sky-50 p-6 rounded-lg text-center"
            >
              <div className="text-sky-600 mb-4">{value.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{value.title}</h3>
              <p className="text-gray-600">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Why Choose Us Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="mt-16 max-w-6xl mx-auto px-6 text-center"
      >
        <h2 className="text-3xl font-bold text-gray-900">Why Choose Us?</h2>
        <div className="grid md:grid-cols-3 gap-8 mt-8">
          {[
            { icon: <Users size={40} />, title: "Expert Team", description: "Highly skilled professionals delivering top-tier solutions." },
            { icon: <Code size={40} />, title: "Cutting-Edge Technology", description: "We use the latest tools to create powerful software." },
            { icon: <Target size={40} />, title: "Client-Centric Approach", description: "We focus on delivering results that matter to you." },
          ].map((reason, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="bg-blue-50 p-6 rounded-lg shadow-lg"
            >
              <div className="text-sky-600 mb-4">{reason.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{reason.title}</h3>
              <p className="text-gray-600">{reason.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* CTA Section */}
      <motion.div className="mt-16 text-center">
        <h2 className="text-3xl font-bold text-gray-900">Let’s Work Together!</h2>
        <a href="/contact" className="mt-6 inline-block bg-sky-600 text-white px-8 py-3 rounded-md hover:bg-sky-700 transition-colors">
          Get in Touch
        </a>
      </motion.div>
    </div>
  );
};

export default About;
