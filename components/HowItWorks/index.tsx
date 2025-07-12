"use client";
import { motion } from "framer-motion";

const steps = [
  {
    title: "1. Discover Your Mentor",
    description: "Browse our network of experienced mentors and find the perfect match for your goals.",
    icon: "🔍",
  },
  {
    title: "2. Book a Session",
    description: "Schedule a one-on-one session at your convenience and get personalized guidance.",
    icon: "📅",
  },
  {
    title: "3. Accelerate Your Growth",
    description: "Apply actionable advice, track your progress, and achieve your academic or career milestones.",
    icon: "🚀",
  },
];

export default function HowItWorks() {
  return (
    <section className="bg-white py-16">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-10 text-center">
          How InsightIQ Works
        </h2>
        <div className="flex flex-col md:flex-row justify-center items-stretch gap-8">
          {steps.map((step, idx) => (
            <motion.div
              key={step.title}
              className="flex-1 bg-blue-50 rounded-2xl shadow p-8 flex flex-col items-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * idx, duration: 0.6 }}
            >
              <div className="text-4xl mb-4">{step.icon}</div>
              <h3 className="text-xl font-bold text-red-600 mb-2">{step.title}</h3>
              <p className="text-gray-700 text-center">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}