"use client"

import { motion } from "framer-motion"

const reasons = [
  {
    title: "Cutting-Edge Technology",
    description: "We utilize the latest technologies to deliver innovative solutions.",
    icon: "🚀",
  },
  {
    title: "Custom Solutions",
    description: "We create tailored solutions to meet your specific business needs.",
    icon: "🎯",
  },
  {
    title: "Expert Team",
    description: "Our team of skilled professionals brings years of industry experience.",
    icon: "👥",
  },
  {
    title: "Proven Track Record",
    description: "We have a history of successful projects across various industries.",
    icon: "🏆",
  },
  {
    title: "Ongoing Support",
    description: "We provide continuous support and maintenance for all our solutions.",
    icon: "🛠️",
  },
]

const WhyChooseUsPage = () => {
  return (
    <div className="container mx-auto px-6 py-12">
      <motion.h1
        className="text-4xl font-bold text-center mb-8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Why Choose Us
      </motion.h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {reasons.map((reason, index) => (
          <motion.div
            key={index}
            className="bg-white rounded-lg shadow-lg p-6"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div className="text-4xl mb-4">{reason.icon}</div>
            <h2 className="text-xl font-semibold mb-2">{reason.title}</h2>
            <p className="text-gray-600">{reason.description}</p>
          </motion.div>
        ))}
      </div>
      <motion.div
        className="mt-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        <h2 className="text-2xl font-semibold mb-4">Our Approach</h2>
        <p className="text-gray-600 mb-4">
          At our company, we believe in delivering innovative, future-ready solutions. That's why we deliberately avoid
          outdated platforms like WordPress and Shopify. Instead, we focus on creating custom, scalable, and
          high-performance digital solutions that are tailored to your unique business needs.
        </p>
        <p className="text-gray-600">
          By choosing us, you're not just getting a service provider - you're partnering with a team that's committed to
          your success in the digital landscape.
        </p>
      </motion.div>
    </div>
  )
}

export default WhyChooseUsPage

