"use client";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative bg-blue-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-16 flex flex-col-reverse md:flex-row items-center gap-10">
        {/* Left: Text */}
        <motion.div
          className="flex-1"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 leading-tight mb-6">
            Your Success, <span className="text-red-600">Guided</span> by Experience
          </h1>
          <p className="text-lg text-gray-700 mb-8 max-w-xl">
            Join a thriving network of learners and mentors dedicated to helping you achieve your academic and career ambitions. At InsightIQ, we connect you with real achievers for honest advice, proven strategies, and the motivation to reach your next milestone—whether it's NEET, IIT-JEE, or your dream job.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="bg-red-500 hover:bg-red-600 text-white font-bold px-8 py-3 rounded-full shadow-lg transition mb-6"
          >
            Find Your Mentor
          </motion.button>
          {/* Trust signals or stats */}
          <div className="flex flex-wrap gap-6 mt-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-white rounded-xl shadow px-6 py-4"
            >
              <div className="text-xl font-bold text-red-600">Community Driven</div>
              <div className="text-gray-700 text-sm">Thousands of learners & mentors</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-white rounded-xl shadow px-6 py-4"
            >
              <div className="text-xl font-bold text-red-600">Personalized Roadmaps</div>
              <div className="text-gray-700 text-sm">Tailored guidance for your goals</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="bg-white rounded-xl shadow px-6 py-4"
            >
              <div className="text-xl font-bold text-red-600">Real Results</div>
              <div className="text-gray-700 text-sm">Proven success stories</div>
            </motion.div>
          </div>
        </motion.div>
        {/* Right: Image */}
        <motion.div
          className="flex-1 flex justify-center md:justify-end"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {/* Replace with your own image */}
          <div className="relative w-72 h-80 md:w-80 md:h-96 rounded-3xl overflow-hidden shadow-xl bg-gradient-to-br from-red-100 to-blue-100 flex items-center justify-center">
            <img
              src="/assets/hero-person.png"
              alt="Mentor"
              className="object-cover w-full h-full"
            />
            {/* If you don't have an image, you can use a placeholder or illustration */}
          </div>
        </motion.div>
      </div>
      {/* Decorative background shape */}
      <motion.div
        className="absolute -top-32 -right-32 w-96 h-96 bg-red-100 rounded-full opacity-40 z-0"
        initial={{ scale: 0.7, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.4 }}
        transition={{ duration: 1.2, delay: 0.3 }}
      />
    </section>
  );
}
