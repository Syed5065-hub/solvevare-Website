import React from 'react';
import { motion } from 'framer-motion';
import { Code, Globe, Smartphone, Database, Cloud, Lock } from 'lucide-react';
import { Link } from 'react-router-dom';

const Services = () => {
  return (
    <div className="pt-24 pb-16">
      {/* Header Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16"
      >
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          Our <span className="text-sky-600">Services</span>
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          We offer comprehensive software solutions tailored to your business needs,
          leveraging cutting-edge technologies and industry best practices.
        </p>
      </motion.div>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow"
            >
              <div className="text-sky-600 mb-4">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
              <p className="text-gray-600 mb-6">{service.description}</p>
              <ul className="space-y-2 mb-6">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-gray-600">
                    <span className="w-1.5 h-1.5 bg-sky-600 rounded-full mr-2"></span>
                    {feature}
                  </li>
                ))}
              </ul>
              <Link
                to="/contact"
                className="inline-block text-sky-600 hover:text-sky-700 font-medium"
              >
                Learn More →
              </Link>
            </motion.div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20"
      >
        <div className="bg-gradient-to-r from-sky-600 to-blue-600 rounded-2xl p-12 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Transform Your Business?
          </h2>
          <p className="text-sky-100 mb-8 max-w-2xl mx-auto">
            Let's discuss how our services can help you achieve your business goals
            and drive innovation in your industry.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-white text-sky-600 px-8 py-3 rounded-md hover:bg-sky-50 transition-colors"
          >
            Schedule a Consultation
          </Link>
        </div>
      </motion.div>
    </div>
  );
};

const services = [
  {
    icon: <Code size={32} />,
    title: "Custom Software Development",
    description: "Tailored software solutions designed to meet your specific business requirements.",
    features: [
      "Full-stack development",
      "Enterprise applications",
      "Legacy system modernization",
      "API development & integration"
    ]
  },
  {
    icon: <Globe size={32} />,
    title: "Web Development",
    description: "Modern, responsive web applications that deliver exceptional user experiences.",
    features: [
      "Progressive Web Apps",
      "E-commerce solutions",
      "Content Management Systems",
      "Web portals"
    ]
  },
  {
    icon: <Smartphone size={32} />,
    title: "Mobile App Development",
    description: "Native and cross-platform mobile applications for iOS and Android.",
    features: [
      "iOS & Android apps",
      "Cross-platform development",
      "UI/UX design",
      "App maintenance & support"
    ]
  },
  {
    icon: <Database size={32} />,
    title: "Database Solutions",
    description: "Robust database design and management services for optimal data handling.",
    features: [
      "Database architecture",
      "Performance optimization",
      "Data migration",
      "Backup & recovery"
    ]
  },
  {
    icon: <Cloud size={32} />,
    title: "Cloud Services",
    description: "Cloud-native solutions and migration services for scalable infrastructure.",
    features: [
      "Cloud migration",
      "DevOps services",
      "Serverless architecture",
      "Cloud optimization"
    ]
  },
  {
    icon: <Lock size={32} />,
    title: "Cybersecurity",
    description: "Comprehensive security solutions to protect your digital assets.",
    features: [
      "Security audits",
      "Penetration testing",
      "Compliance solutions",
      "Security monitoring"
    ]
  }
];

export default Services;