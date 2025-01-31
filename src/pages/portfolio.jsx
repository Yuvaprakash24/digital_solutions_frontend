import React from 'react';
import { motion } from 'framer-motion';

const projects = [
  {
    title: "Education Platform",
    description: "Comprehensive solution for schools and institutions.",
    image: "/placeholder.svg?height=300&width=400",
    category: "Education",
  },
  {
    title: "Healthcare Management System",
    description: "Digital platform tailored for hospitals and clinics.",
    image: "/placeholder.svg?height=300&width=400",
    category: "Healthcare",
  },
  {
    title: "Hotel Booking App",
    description: "Engaging platform for hotels and resorts.",
    image: "/placeholder.svg?height=300&width=400",
    category: "Hospitality",
  },
  {
    title: "Beauty Salon Scheduler",
    description: "Advanced solution for salons and spas.",
    image: "/placeholder.svg?height=300&width=400",
    category: "Beauty & Grooming",
  },
  {
    title: "E-commerce Marketplace",
    description: "Intuitive and feature-rich online store.",
    image: "/placeholder.svg?height=300&width=400",
    category: "E-commerce",
  },
  {
    title: "Fitness Tracking App",
    description: "Motivational, user-friendly platform for gyms and fitness centers.",
    image: "https://cdn.macstories.net/monday-15-may-2023-11-22-24-1684164319570.png",
    category: "Fitness",
  },
];

const PortfolioPage = () => {
  return (
    <div className="container mx-auto px-6 py-12">
      <motion.h1
        className="text-4xl font-bold text-center mb-8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Our Portfolio
      </motion.h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="bg-white rounded-lg shadow-lg overflow-hidden"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <img
              src={project.image || "/placeholder.svg"}
              alt={project.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h2 className="text-xl font-semibold mb-2">{project.title}</h2>
              <p className="text-gray-600 mb-4">{project.description}</p>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
                {project.category}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default PortfolioPage;