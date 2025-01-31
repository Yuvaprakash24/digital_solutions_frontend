"use client"

import { motion } from "framer-motion"

const services = [
  {
    title: "Web Development",
    description: "Design responsive, scalable, and innovative websites.",
    icon: "🌐",
  },
  {
    title: "App Development",
    description: "Build high-performance mobile apps for Android and iOS platforms.",
    icon: "📱",
  },
  {
    title: "UI/UX Design",
    description: "Create seamless, visually appealing user experiences and interfaces.",
    icon: "🎨",
  },
  {
    title: "Search Engine Optimization (SEO)",
    description: "Optimize websites to rank highly on search engines.",
    icon: "🔍",
  },
  {
    title: "Digital Marketing",
    description: "Develop and execute impactful online marketing strategies.",
    icon: "📈",
  },
]

const ServicesPage = () => {
  return (
    <div className="container mx-auto px-6 py-12">
      <motion.h1
        className="text-4xl font-bold text-center mb-8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Our Services
      </motion.h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <motion.div
            key={index}
            className="bg-white rounded-lg shadow-lg p-6"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div className="text-4xl mb-4">{service.icon}</div>
            <h2 className="text-xl font-semibold mb-2">{service.title}</h2>
            <p className="text-gray-600">{service.description}</p>
          </motion.div>
        ))}
      </div>
      <motion.div
        className="mt-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        <h2 className="text-2xl font-semibold mb-4">Why Choose Our Services?</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>Cutting-edge technology implementation</li>
          <li>Tailored solutions for your specific needs</li>
          <li>Experienced team of professionals</li>
          <li>Proven track record of successful projects</li>
          <li>Ongoing support and maintenance</li>
        </ul>
      </motion.div>
    </div>
  )
}

export default ServicesPage

