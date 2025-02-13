// src/pages/Portfolio.tsx
import React, { useState } from "react";
import { motion } from "framer-motion";

const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    category: "Web Development",
    image: "https://source.unsplash.com/500x300/?technology,ecommerce",
    description: "A high-performance online store with real-time analytics.",
  },
  {
    id: 2,
    title: "AI Chatbot",
    category: "Artificial Intelligence",
    image: "https://source.unsplash.com/500x300/?technology,ai",
    description: "An advanced chatbot that automates customer interactions.",
  },
  {
    id: 3,
    title: "Fintech Dashboard",
    category: "Finance",
    image: "https://source.unsplash.com/500x300/?technology,finance",
    description: "A real-time dashboard for financial data and insights.",
  },
  {
    id: 4,
    title: "Mobile Banking App",
    category: "Mobile Development",
    image: "https://source.unsplash.com/500x300/?technology,mobile",
    description: "A secure banking app with intuitive UI and AI fraud detection.",
  },
  {
    id: 5,
    title: "Cloud-Based SaaS Solution",
    category: "Cloud Computing",
    image: "https://source.unsplash.com/500x300/?technology,cloud",
    description: "Scalable cloud-based SaaS solutions for businesses.",
  },
  {
    id: 6,
    title: "Cybersecurity Platform",
    category: "Security",
    image: "https://source.unsplash.com/500x300/?technology,security",
    description: "Robust security solutions to protect digital assets.",
  },
];

const technologies = [
  { name: "React.js", image: "https://source.unsplash.com/100x100/?react" },
  { name: "Node.js", image: "https://source.unsplash.com/100x100/?node" },
  { name: "MongoDB", image: "https://source.unsplash.com/100x100/?database" },
  { name: "Python AI", image: "https://source.unsplash.com/100x100/?ai" },
  { name: "AWS Cloud", image: "https://source.unsplash.com/100x100/?cloud" },
  { name: "Flutter", image: "https://source.unsplash.com/100x100/?mobileapp" },
];

const testimonials = [
  {
    name: "John Doe",
    position: "CEO, Tech Startup",
    feedback:
      "Solve Vare delivered an exceptional web application for our business. Their expertise and professionalism were outstanding.",
    image: "https://source.unsplash.com/100x100/?portrait",
  },
  {
    name: "Sarah Thompson",
    position: "CTO, Fintech Company",
    feedback:
      "We partnered with Solve Vare for a fintech dashboard, and the results exceeded our expectations. Highly recommended!",
    image: "https://source.unsplash.com/100x100/?businesswoman",
  },
];

const Portfolio = () => {
  const [filter, setFilter] = useState("All");

  const filteredProjects =
    filter === "All" ? projects : projects.filter((p) => p.category === filter);

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
          Our <span className="text-sky-600">Portfolio</span>
        </h1>
        <p className="text-lg text-gray-600 mt-4">
          Explore some of our best work across industries and technologies.
        </p>
      </motion.div>

      {/* Filter Buttons */}
      <div className="flex justify-center gap-4 mb-8">
        {["All", "Web Development", "Artificial Intelligence", "Finance", "Mobile Development", "Cloud Computing", "Security"].map((category) => (
          <button
            key={category}
            className={`px-5 py-2 rounded-md border-2 transition-all ${
              filter === category ? "bg-sky-600 text-white" : "border-sky-600 text-sky-600 hover:bg-sky-50"
            }`}
            onClick={() => setFilter(category)}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Portfolio Grid */}
      <motion.div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto px-4">
        {filteredProjects.map((project) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow relative"
          >
            <img src={project.image} alt={project.title} className="w-full h-52 object-cover" />
            <div className="p-6">
              <h3 className="text-2xl font-bold text-gray-900">{project.title}</h3>
              <p className="text-gray-600 mt-2">{project.description}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Technologies We Use */}
      <motion.div className="mt-16 text-center">
        <h2 className="text-3xl font-bold text-gray-900">Technologies We Use</h2>
        <div className="flex justify-center gap-6 mt-8">
          {technologies.map((tech, index) => (
            <motion.div key={index} whileHover={{ scale: 1.1 }} className="flex flex-col items-center">
              <img src={tech.image} alt={tech.name} className="rounded-full shadow-lg" />
              <p className="mt-2 font-medium">{tech.name}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Client Testimonials */}
      <motion.div className="mt-16 text-center">
        <h2 className="text-3xl font-bold text-gray-900">What Our Clients Say</h2>
        <div className="flex justify-center gap-8 mt-8">
          {testimonials.map((testimonial, index) => (
            <motion.div key={index} whileHover={{ scale: 1.05 }} className="bg-white p-6 rounded-lg shadow-lg w-96">
              <img src={testimonial.image} alt={testimonial.name} className="rounded-full w-16 mx-auto" />
              <p className="text-gray-600 mt-4">"{testimonial.feedback}"</p>
              <p className="mt-4 font-bold">{testimonial.name}</p>
              <p className="text-gray-500 text-sm">{testimonial.position}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* CTA Section */}
      <motion.div className="mt-16 text-center">
        <h2 className="text-3xl font-bold text-gray-900">Want to Build Something Amazing?</h2>
        <a href="/contact" className="mt-6 inline-block bg-sky-600 text-white px-8 py-3 rounded-md hover:bg-sky-700 transition-colors">
          Get in Touch
        </a>
      </motion.div>
    </div>
  );
};

export default Portfolio;
