"use client"

import { useState } from "react"
import { motion } from "framer-motion"

const jobOpenings = [
  {
    title: "Web Developer",
    description: "We are looking for a skilled web developer to join our team and create innovative web applications.",
    requirements: [
      "Proficiency in HTML, CSS, and JavaScript",
      "Experience with React and Next.js",
      "Knowledge of RESTful APIs and GraphQL",
      "Familiarity with version control systems (e.g., Git)",
    ],
  },
  {
    title: "Android Developer",
    description: "We are seeking an experienced Android developer to build high-quality mobile applications.",
    requirements: [
      "Strong knowledge of Android SDK and Kotlin",
      "Experience with Android Studio and Gradle",
      "Familiarity with RESTful APIs and JSON",
      "Understanding of material design principles",
    ],
  },
  {
    title: "SEO Specialist",
    description:
      "We are looking for an SEO specialist to improve our clients' online visibility and search engine rankings.",
    requirements: [
      "Proven experience in implementing successful SEO strategies",
      "Knowledge of SEO tools (e.g., Google Analytics, SEMrush)",
      "Understanding of on-page and off-page SEO techniques",
      "Familiarity with content marketing and link building",
    ],
  },
  {
    title: "Video Editor",
    description:
      "We are seeking a creative video editor to produce engaging content for our clients' digital marketing campaigns.",
    requirements: [
      "Proficiency in video editing software (e.g., Adobe Premiere Pro, Final Cut Pro)",
      "Experience with motion graphics and animation",
      "Strong storytelling and visual composition skills",
      "Familiarity with social media video formats and trends",
    ],
  },
]

const CareersPage = () => {
  const [selectedJob, setSelectedJob] = useState(null)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    jobProfile: "",
    resume: null,
  })

  const handleChange = (e) => {
    const { name, value, files } = e.target
    setFormData((prevData) => ({
      ...prevData,
      [name]: files ? files[0] : value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // TODO: Implement form submission logic
    console.log("Application submitted:", formData)
    // Reset form after submission
    setFormData({
      name: "",
      email: "",
      phone: "",
      jobProfile: "",
      resume: null,
    })
    setSelectedJob(null)
  }

  return (
    <div className="container mx-auto px-6 py-12">
      <motion.h1
        className="text-4xl font-bold text-center mb-8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Careers
      </motion.h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {jobOpenings.map((job, index) => (
          <motion.div
            key={index}
            className="bg-white rounded-lg shadow-lg p-6"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <h2 className="text-2xl font-semibold mb-2">{job.title}</h2>
            <p className="text-gray-600 mb-4">{job.description}</p>
            <h3 className="text-lg font-semibold mb-2">Requirements:</h3>
            <ul className="list-disc list-inside mb-4">
              {job.requirements.map((req, i) => (
                <li key={i} className="text-gray-600">
                  {req}
                </li>
              ))}
            </ul>
            <button
              onClick={() => setSelectedJob(job)}
              className="bg-blue-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-300"
            >
              Apply Now
            </button>
          </motion.div>
        ))}
      </div>
      {selectedJob && (
        <motion.div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="bg-white rounded-lg p-8 max-w-md w-full"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
          >
            <h2 className="text-2xl font-semibold mb-4">Apply for {selectedJob.title}</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="name" className="block text-gray-700 font-bold mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none focus:border-blue-500"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none focus:border-blue-500"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="phone" className="block text-gray-700 font-bold mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none focus:border-blue-500"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="jobProfile" className="block text-gray-700 font-bold mb-2">
                  Job Profile
                </label>
                <input
                  type="text"
                  id="jobProfile"
                  name="jobProfile"
                  value={selectedJob.title}
                  readOnly
                  className="w-full px-3 py-2 text-gray-700 border rounded-lg bg-gray-100"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="resume" className="block text-gray-700 font-bold mb-2">
                  Upload CV
                </label>
                <input
                  type="file"
                  id="resume"
                  name="resume"
                  onChange={handleChange}
                  className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none focus:border-blue-500"
                  required
                />
              </div>
              <div className="flex justify-end">
                <button
                  type="button"
                  onClick={() => setSelectedJob(null)}
                  className="mr-2 bg-gray-300 text-gray-700 font-bold py-2 px-4 rounded-lg hover:bg-gray-400 transition duration-300"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-blue-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-300"
                >
                  Submit Application
                </button>
              </div>
            </form>
          </motion.div>
        </motion.div>
      )}
    </div>
  )
}

export default CareersPage

